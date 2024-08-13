import Image from "next/image"
import Busme002 from "@/assets/img/BusMe-002.png"
import Busme003 from "@/assets/img/BusMe-003.png"
import Busme012 from "@/assets/img/BusMe-012.png"

export default function MobilityApplication() {
  return (
    <>
      <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8 font-poppins">
        <div className="mx-auto space-y-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-7/12 md:order-first mt-2 md:mt-0 md:pl-16">
              <Image
                src={Busme002}
                alt="Pantalla para calificar tu viaje"
                width={550}
                height={300}
                className="rounded"
              />
            </div>
            <div className="md:w-6/12">
              <h2 className="font-semibold text-5xl mb-10">Revisa el trayecto</h2>
              <div className="mb-8">
                <div className="font-medium text-2xl mb-2">Monitorea los transportes</div>
                <p>Visualiza los vehículos en ruta y organiza tu tiempo de manera más eficiente.</p>
              </div>
              <div className="mb-8">
                <div className="font-medium text-2xl mb-2">Consulta la información en tiempo real</div>
                <p>Evita perder tiempo esperando el próximo transporte: conoce con antelación la hora de llegada y la capacidad disponible.</p>
              </div>
              <div className="mb-8">
                <div className="font-medium text-2xl mb-2">Ubica los puntos de abordaje más cercanos</div>
                <p>Accede rápidamente a los puntos de abordaje más cercanos donde puedes tomar el transporte.</p>
              </div>
              <div className="mb-8">
                <div className="font-medium text-2xl mb-2">Recibe alertas en tiempo real</div>
                <p>Mantente informado sobre retrasos, cambios de horario y otras interrupciones del servicio con notificaciones anticipadas.</p>
              </div>
              <div className="mb-8">
                <div className="font-medium text-2xl mb-2">Consulta las rutas desde tu reloj inteligente</div>
                <p>Ahora puedes acceder a la información directamente desde tu muñeca, en un formato más compacto y dinámico.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-7/12 md:order-last mt-2 md:mt-0 md:pl-16">
              <Image
                src={Busme003}
                alt="Pantalla para calificar tu viaje"
                width={550}
                height={300}
                className="rounded"
              />
            </div>
            <div className="md:w-6/12">
              <h2 className="font-semibold text-5xl mb-10">Califica tu viaje</h2>
              <div className="mb-8">
                <div className="font-medium text-2xl mb-2">Valora tu viaje</div>
                <p>Al finalizar un viaje, podrás valorar tu experiencia. Si has tenido una buena o mala experiencia, dispondrás de un espacio para dejar un comentario o sugerencia.</p>
              </div>
              <div className="mb-8">
                <div className="font-medium text-2xl mb-2">Quejas y sugerencias</div>
                <p>Si tienes alguna queja o sugerencia sobre el servicio de transporte, puedes compartirla en nuestro apartado dedicado a quejas y sugerencias.</p>
              </div>
              <div className="mb-8">
                <div className="font-medium text-2xl mb-2">Mejora continua</div>
                <p>Tus comentarios, quejas y sugerencias ayudan a mejorar continuamente el servicio de transporte, proporcionando al equipo de calidad información valiosa para asegurar un entorno seguro y eficiente para todos los usuarios.</p>
              </div>
              <div className="mb-8">
                <p>* Puede estar disponible solo en algunas institutos o empresas</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-7/12 md:order-first mt-2 md:mt-0 md:pl-16">
              <Image
                src={Busme012}
                alt="Pantalla para calificar tu viaje"
                width={550}
                height={300}
                className="rounded"
              />
            </div>
            <div className="md:w-6/12">
              <h2 className="font-semibold text-5xl mb-10">Obtén información de la ruta</h2>
              <div className="mb-8">
                <div className="font-medium text-2xl mb-2">Disfruta de la información en tiempo real</div>
                <p>Obtén datos actualizados sobre la llegada del transporte desde el punto A hasta el punto B.</p>
              </div>
              <div className="mb-8">
                <div className="font-medium text-2xl mb-2">Visualiza los puntos de abordaje</div>
                <p>Utiliza nuestro sistema para localizar los puntos de abordaje que han sido añadidos por el equipo de administración.</p>
              </div>
              <div className="mb-8">
                <div className="font-medium text-2xl mb-2">Consulta los transportes</div>
                <p>Revisa todos los transportes y sus horarios. Hay que tener en cuenta que el equipo de administración puede actualizar esta información.</p>
              </div>
              <div className="mb-8">
                <div className="font-medium text-2xl mb-2">Nunca te pierdas un transporte</div>
                <p>Recibe notificaciones automáticas sobre la llegada del transporte a los puntos de abordaje, para que siempre estés informado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}