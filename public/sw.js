self.addEventListener('fetch', event => {
  if (event.request.method === 'POST') {
      return; // No intentamos cachear solicitudes POST
  }

  // Solo gestionar solicitudes que sean de HTTP o HTTPS
  if (event.request.url.startsWith('http')) {
      // Si la solicitud es GET, manejamos la caché
      if (event.request.method === 'GET') {
          const resp = fetch(event.request).then(respuesta => {
              if (!respuesta) {
                  return caches.match(event.request).then(cachedResponse => {
                      if (cachedResponse) {
                          return cachedResponse;
                      }
                  });
              } else {
                  return caches.open('dinamico').then(cache => {
                      cache.put(event.request, respuesta.clone());
                      return respuesta;
                  });
              }
          }).catch(() => {
              return caches.match(event.request).then(cachedResponse => {
                  if (cachedResponse) {
                      return cachedResponse;
                  }
              });
          });

          event.respondWith(resp);
      } else {
          // Para solicitudes POST (o cualquier otro tipo que no sea GET), simplemente pasamos la solicitud
          event.respondWith(fetch(event.request));
      }
  }
});

self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: data.icon || '/icon512_rounded.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2',
      },
    }
    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})
 
self.addEventListener('notificationclick', function (event) {
  console.log('Notification click received.')
  event.notification.close()
  event.waitUntil(clients.openWindow(process.env.APP_URL))
})

self.addEventListener('fetch', event => {
    if (event.request.url.includes('https://busme-info-server-production.up.railway.app/api/users/create-user')) {
        event.respondWith(
            fetch(event.request).catch(() => {
                if ('SyncManager' in self) {
                    self.registration.sync.register('sync-usuarios');
                }
            })
        );
    }
});

self.addEventListener('sync', event => {
  if (event.tag === 'sync-usuarios') {
      event.waitUntil(enviarDatosGuardados());
  }
});
  
function enviarDatosGuardados() {
    let db = indexedDB.open('database');
  
    db.onsuccess = event => {
      let result = event.target.result;
      procesarRegistros(result);
    };
  
    db.onerror = event => {
      console.error('Error al abrir la base de datos:', event.target.error);
    };
}

function procesarRegistros(result) {
  let transaccion = result.transaction('usuarios', 'readonly');
  let objStore = transaccion.objectStore('usuarios');

  let cursorRequest = objStore.openCursor();

  cursorRequest.onsuccess = event => {
      let cursor = event.target.result;

      if (cursor) {
          let currentValue = cursor.value;

          // Enviar los datos a la API
          fetch('https://busme-info-server-production.up.railway.app/api/users/create-user', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(currentValue)
          })
          .then(response => response.json())
          .then(data => {
              console.log('Datos enviados con éxito:', data);
              // Abrir una nueva transacción para eliminar el registro
              let deleteTransaction = result.transaction('usuarios', 'readwrite');
              let deleteStore = deleteTransaction.objectStore('usuarios');
              let deleteRequest = deleteStore.delete(cursor.key);

              deleteRequest.onsuccess = () => {
                  console.log('Registro eliminado con éxito');
                  // Volver a abrir el cursor después de eliminar
                  procesarRegistros(result);  // Volver a llamar para continuar con los siguientes registros
              };

              deleteRequest.onerror = () => {
                  console.error('Error al eliminar el registro');
              };
          })
          .catch(error => {
              console.error('Error al enviar los datos guardados:', error);
          });
      } else {
          console.log('No hay más registros que enviar');
      }
  };

  cursorRequest.onerror = event => {
      console.error('Error al abrir el cursor:', event.target.error);
  };
}