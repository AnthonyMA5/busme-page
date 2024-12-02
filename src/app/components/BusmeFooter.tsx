'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { stringify } from "querystring";
// Agrega esta declaración al inicio de tu archivo o en un archivo de tipos globales.
interface SyncManager {
  register(tag: string): Promise<void>;
  getTags(): Promise<string[]>;
}



function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default function BusmeFooter() {
  const pathname = usePathname();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [isLogued, setIsLogued] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("user")) {
        setIsLogued(true);
    }
}, []);

  useEffect(() => {
    // Registra el Service Worker al renderizar
    if ("serviceWorker" in navigator) {
      registerServiceWorker();
    }
  }, []);

  useEffect(() => {
    // Si el usuario está logueado, inicia la suscripción
    if (isLogued) {
      subscribeIfLogged();
    }
  }, [isLogued]);

  async function registerServiceWorker() {
    try {
      // Registra el Service Worker
      await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
      });
      console.log("Service Worker registrado exitosamente");
    } catch (error) {
      console.error("Error registrando el Service Worker:", error);
    }
  }

  async function subscribeIfLogged() {
    try {
      // Espera a que el Service Worker esté listo
      const registration = await navigator.serviceWorker.ready;

      // Verifica si ya existe una suscripción
      let sub = await registration.pushManager.getSubscription();
      if (!sub) {
        // Crea una nueva suscripción si no existe
        sub = await subscribeToPush(registration);
      }

      // Envía la suscripción al servidor
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/suscripciones/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subscription: sub.toJSON(),
          userId: user?._id || null,
        }),
      });
      console.log("Suscripción enviada al servidor");
    } catch (error) {
      console.error("Error al manejar la suscripción:", error);
    }
  }

  async function subscribeToPush(registration: ServiceWorkerRegistration) {
    try {
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
        ),
      });
      return sub;
    } catch (error) {
      console.error("Error al suscribirse a las notificaciones push:", error);
      throw error;
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isLogued) {
      alert("Ya estás registrado");
      return;
    }
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastname,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) return alert(data.error);
        const { user } = data;
        localStorage.setItem("user", JSON.stringify(user));
        setIsLogued(true);
        alert("Usuario creado correctamente");
      })
      .catch((err) => {
        console.error(err)
        if (!navigator.onLine) {
          // Guardar datos solo si el error es de conexión
         alert("No hay conexión a internet, se guardará la información temporalmente");
          guardarEnIndexedDB(name, lastname, email);
  
          if ('serviceWorker' in navigator && 'SyncManager' in window) {
            navigator.serviceWorker.ready.then(sw => {
                const syncManager = (sw as ServiceWorkerRegistration & { sync?: SyncManager }).sync;
        
                if (syncManager) { // Verifica si sync está disponible
                    return syncManager.register('sync-usuarios');
                } else {
                    console.log('El navegador no soporta SyncManager.');
                }
            }).catch(err => console.log('Error al preparar el Service Worker:', err));
        } else {
            console.log('SyncManager no está soportado en este navegador.');
        }
        
        
          return;
      }
      })
  }

  function guardarEnIndexedDB(name: string, lastname: string, email: string) {
    console.log("Guardando en IndexedDB");
    const dbRequest = window.indexedDB.open('database', 1);
  
    dbRequest.onsuccess = (event) => {
      const db = (event.target as IDBRequest).result as IDBDatabase;
      const transaction = db.transaction('usuarios', 'readwrite');
      const objStore = transaction.objectStore('usuarios');
  
      // Verificar si el email ya existe
      const request = objStore.get(email);
      request.onsuccess = (event) => {
        const existingUser = (event.target as IDBRequest).result;
        
        if (!existingUser) {
          // Si no existe, insertar
          const resultado = objStore.add({ name, lastname, email });
          resultado.onsuccess = () => {
            console.log("Inserción realizada en IndexedDB");
          };
          resultado.onerror = (event) => {
            console.error("Error al insertar en IndexedDB:", (event.target as IDBRequest).error);
          };
        } else {
          console.log("El correo ya está registrado en IndexedDB");
        }
      };
  
      request.onerror = (event) => {
        console.error("Error al buscar en IndexedDB:", (event.target as IDBRequest).error);
      };
    };
  
    dbRequest.onerror = (event) => {
      console.error('Error al abrir la base de datos:', (event.target as IDBRequest).error);
    };
  
    // Si la base de datos no existe, se crea una nueva
    dbRequest.onupgradeneeded = (event) => {
      const db = (event.target as IDBRequest).result as IDBDatabase
      if (!db.objectStoreNames.contains('usuarios')) {
        const objStore = db.createObjectStore('usuarios', { keyPath: 'email' }); // Usamos el email como clave primaria
        objStore.createIndex('email', 'email', { unique: true });
      }
    };
  }
  

  // No renderizar el footer en la página de descarga
  if (pathname === '/download') {
    return null;
  }

  return (
    <footer className=" py-16 font-poppins bg-primary-600">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold text-white">¡Monitorea tus viajes!</h2>
        <p className="text-white mt-4">Registrate para obtener más información acerca de BusMe.</p>
        {/* <p className="text-white mt-4">Síguenos en nuestras redes sociales para estar al tanto de todas las novedades.</p> */}
        {/* 
        <div className="flex justify-center space-x-6 mt-8">
          <Link href="https://www.facebook.com" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} className="h-8 w-8 text-white hover:text-muted-50 transition duration-300" />
          </Link>
          <Link href="https://www.twitter.com" aria-label="X">
            <FontAwesomeIcon icon={faXTwitter} className="h-8 w-8 text-white hover:text-muted-50 transition duration-300" />
          </Link>
          <Link href="https://www.instagram.com" aria-label="GitHub">
            <FontAwesomeIcon icon={faInstagram} className="h-8 w-8 text-white hover:text-muted-50 transition duration-300" />
          </Link>
        </div> */}

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-6 mt-8">
            <div>
              <div className="mt-2">
                <input
                  placeholder="Nombre(s)"
                  required={true}
                  id="name"
                  name="name"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-muted-900 shadow-sm ring-1 ring-inset ring-muted-300 placeholder:text-muted-800 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>

              <div className="mt-2">
                <input
                  placeholder="Apellido(s)"
                  required={true}
                  id="lastname"
                  name="lastname"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-muted-900 shadow-sm ring-1 ring-inset ring-muted-300 placeholder:text-muted-800 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <input
                  placeholder="Correo electrónico"
                  required={true}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-muted-900 shadow-sm ring-1 ring-inset ring-muted-300 placeholder:text-muted-800 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                className="w-full mt-2 justify-center rounded-md bg-secondary border-2 border-secondary px-5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-primary-600 hover:border-2 hover:border-secondary transition duration-500 ease-in-out py-1"
                type="submit"
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </form>

        <p className="mt-10 text-white">&copy; 2024 BusMe. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}