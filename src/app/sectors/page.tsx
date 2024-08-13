import Image from "next/image";
import SectorEmpresa from "@/assets/img/sector_empresas.jpg"
import SectorInstituto from "@/assets/img/sector_estudiantil.png"

export default function Sectors() {
  return (
    <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8 font-poppins">
      <h2 className="font-semibold text-5xl mb-10 bg-gradient-to-r from-[#02F8BC] via-[#0752DD] to-[#0752DD] inline-block text-transparent bg-clip-text">Sectores{' '}<span className="text-black">de aplicación</span></h2>
      <p className="text-black mb-10">
        Busme proporciona soluciones de Movilidad como Servicio para ayudar tanto a estudiantes como a trabajadores,
        nuestra aplicación de monitoreo de transporte abarca empresas medianas y grandes que dispongan de transporte
        de personal en la Zona Metropolitana de Guadalajara (ZMG), así como instituciones educativas de nivel medio y/o
        superior que cuenten con transporte estudiantil en la misma área.
      </p>

      <div className="mx-auto space-y-24 py-5">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 ml-16">
            <p className="font-semibold text-4xl mb-6">
              Sector empresarial
            </p>
            <p className="text-2xl font-medium mb-4">
              Optimiza el transporte corporativo
            </p>
            <p className="mb-4">
              BusMe ofrece soluciones avanzadas de monitoreo para empresas medianas y grandes en la Zona Metropolitana de Guadalajara, ayudándote a transformar la gestión del transporte de personal.
            </p>
            <ul className="list-disc mt-4 ml-5 space-y-2">
              <li><span className="font-bold">Aumenta la productividad:</span> Reduce los tiempos de espera y mejora la puntualidad, lo que se traduce en una mayor eficiencia operativa.</li>
              <li><span className="font-bold">Mejora la experiencia de los Empleados:</span> Ofrece un transporte más seguro y confiable, mejorando la satisfacción y el bienestar de los empleados.</li>
              <li><span className="font-bold">Optimiza recursos:</span> Minimiza los costos operativos al ajustar las rutas y gestionar la capacidad de los vehículos de manera más efectiva.</li>
              <li><span className="font-bold">Atractivo para el talento:</span> Proporciona beneficios de movilidad que ayudan a atraer y retener talento, ofreciendo soluciones de transporte modernas y efectivas.</li>
            </ul>
          </div>
          <div className="md:w-5/12 md:order-first mt-4">
            <Image
              src={SectorEmpresa}
              alt="Pantalla para calificar tu viaje"
              
              className="rounded"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 mr-16">
            <p className="font-semibold text-4xl mb-6">
              Sector educativo
            </p>
            <p className="text-2xl font-medium mb-4">
              Transporte eficientes y seguras para estudiantes
            </p>
            <p className="mb-4">
            BusMe está diseñado para satisfacer las necesidades de movilidad de las instituciones educativas de nivel medio y superior en la Zona Metropolitana de Guadalajara, ofreciendo soluciones que mejoran la experiencia diaria de estudiantes y personal.
            </p>
            <ul className="list-disc mt-4 ml-5 space-y-2">
              <li><span className="font-bold">Mejora la movilidad:</span> Ofrece trayectos rápidos y eficientes entre las diferentes facultades y puntos clave del instituto, optimizando la experiencia de los estudiantes y profesores.</li>
              <li><span className="font-bold">Transporte seguro y confiable:</span> Garantiza viajes seguros para estudiantes y proporciona opciones de movilidad accesibles para aquellos con discapacidades.</li>
              <li><span className="font-bold">Optimización de recursos:</span> Administra y actualiza el servicio de transporte de manera fácil y eficiente, asegurando que los recursos sean utilizados de la mejor manera posible.</li>
              <li><span className="font-bold">Reducción de congestión:</span> Minimiza los atascos dentro y alrededor del instituto, mejorando la circulación y reduciendo la necesidad de espera.</li>
            </ul>
          </div>
          <div className="md:w-5/12 md:order-last mt-4">
            <Image
              src={SectorInstituto}
              alt="Pantalla para calificar tu viaje"
              
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}