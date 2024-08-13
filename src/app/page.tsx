import BusmeCard from "./components/BusmeCard";
import { MapIcon, ClockIcon, BellAlertIcon } from "@heroicons/react/20/solid"
import Image from "next/image";
import AppMobile from "@/assets/img/BusMe-001.png"
import Busme002 from "@/assets/img/BusMe-002.png"
import Busme009 from "@/assets/img/BusMe-009.png"
import Busme006 from "@/assets/img/BusMe-006.png"
import Busme010 from "@/assets/img/BusMe-010.png"
import Busme011 from "@/assets/img/BusMe-011.png"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BusMe - Inicio",
  description: "BusMe next app",
};

export default function Home() {
  return (
      <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8 font-poppins">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-2/4">
            <p className="font-semibold text-6xl gradient-text">
              Monitorea{' '}
              <span className="text-black">el viaje</span>
              <br />
              <span className="text-black">hacía</span>
              {' '}tu destino
            </p>

            <p className="mt-5 text-black">
              Una aplicación de monitoreo avanzada que transformará la manera en
              que se planifica y gestiona el transporte.
            </p>
          </div>
          <div className="flex justify-center w-full md:w-2/4">
            <Image
              src={AppMobile}
              alt="Contenido principal de la aplicación"
              className="rounded"
            />
          </div>
        </div>

        <p className="subtitle-text">
          Nuestras{' '}
          <span className="gradient-text"> funciones </span>
          {' '}para ti
        </p>

        <div className="flex items-center justify-center pt-16 pb-32">
          <div className="flex space-x-10">
            <BusmeCard
              title="Agenda de rutas"
              description="Planifica y optimiza rutas con precisión para garantizar la puntualidad y eficiencia de tus autobuses."
              Icon={MapIcon}
              imageSrc={Busme009.src}
            />
            <BusmeCard
              title="Seguimiento en tiempo real"
              description="Monitorea la ubicación y velocidad de tus vehículos en tiempo real, para decisiones rápidas y precisas."
              Icon={ClockIcon}
              imageSrc={Busme002.src}
            />
            <BusmeCard
              title="Notificaciones"
              description="Informa al instante sobre cambios de ruta o retrasos, mejorando la comunicación con conductores y pasajeros."
              Icon={BellAlertIcon}
              imageSrc={Busme010.src}
            />
          </div>
        </div>

        <p className="subtitle-text">
          <span className="gradient-text"> Mejora </span>
          {' '}continua del servicio
        </p>
        <p className="flex text-center text-black pt-4 mb-12 px-28">
          Con la información recopilada, los clientes pueden evaluar y mejorar constantemente
          su servicio de transporte, impulsando su éxito y crecimiento.
        </p>

        <div className="mx-auto space-y-24 py-5">

          {/* Primera sección: Imagen a la derecha */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-5/12">
              <h2 className="text-3xl font-normal mb-5">Feedback</h2>
              <p className="text-black">
              Obten opiniones y sugerencias de los usuarios en tiempo real para mejorar constantemente 
              el servicio. Analiza el rendimiento y detecta áreas de mejora, permitiendo ajustes estratégicos 
              que aumentan la eficiencia y satisfacción del cliente.
              </p>
            </div>
            <div className="md:w-7/12 md:order-last mt-4 md:mt-0 md:pl-44">
              <Image
                src={Busme011}
                alt="Pantalla para calificar tu viaje"
                width={550}
                height={300}
                className="rounded"
              />
            </div>
          </div>

          {/* Segunda sección: Imagen a la izquierda */}
          <div className="flex flex-col md:flex-row items-center ">
            <div className="md:w-7/12 md:order-first mt-4 md:mt-0">
              <Image
                src={Busme006}
                alt="Pantalla de los datos en tiempo real"
                width={550}
                height={300}
                className="rounded"
              />
            </div>
            <div className="md:w-5/12">
              <h2 className="text-3xl font-normal mb-5">Estadísticas</h2>
              <p className="text-black">
                La recopilación de datos en tiempo real permite a los operadores analizar el rendimiento del
                servicio y detectar áreas de mejora. Esto facilita ajustes estratégicos que optimizan las
                operaciones y aumentan la satisfacción del cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}