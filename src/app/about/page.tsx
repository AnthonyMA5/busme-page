import BusmeTeam from "../components/BusmeTeam";
import CatNerd from "@/assets/img/CatNerd.jpeg"
import CatNerd2 from "@/assets/img/CatNerd2.jpeg"
import CatNerd3 from "@/assets/img/CatNerd3.jpg"
import DogNerd from "@/assets/img/DogeNerd.jpeg"

const teamMembers = [
  {
    name: 'Anthony Martínez Arellano',
    role: 'Jefe de Proyecto',
    imageSrc: CatNerd.src,
  },
  {
    name: 'Angélica Araceli Silva Palmas',
    role: 'Jefe de Pruebas',
    imageSrc: CatNerd2.src,
  },
  {
    name: 'Cristopher Yahir Alvarado Mombela',
    role: 'Desarrollador Principal',
    imageSrc: CatNerd3.src,
  },
  {
    name: 'Braulio Israel Fernandez Marquez',
    role: 'Tester de Software',
    imageSrc: DogNerd.src,
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8 font-poppins">
      <h2 className="font-semibold text-5xl mb-8">Sobre{' '}<span className="gradient-text">BusMe</span></h2>
      <p className="mb-10">
        Proyecto especializado en el monitoreo de transporte mediante un sistema
        avanzado, diseñado para mejorar la experiencia de los usuarios y optimizar la
        gestión del servicio de transporte.</p>
      <p className="font-medium text-3xl text-complementary-900 mb-2">
        ¿Quiénes somos?
      </p>
      <p className="mb-8">
        Somos un equipo de estudiantes apasionados por la tecnología y el transporte, dedicados a resolver problemas
        de movilidad mediante soluciones innovadoras. BusMe nació de la necesidad de ofrecer una herramienta que permita
        a los usuarios de transporte privado y escolar tener acceso a información precisa y en tiempo real, mejorando su
        experiencia de viaje.
      </p>
      <p className="font-medium text-3xl text-complementary-900 mb-2">
        Nuestra misión
      </p>
      <p className="mb-8">
        Transformar la planificación y gestión del transporte mediante una aplicación avanzada de monitoreo que brinde
        información en tiempo real sobre la ubicación de los vehículos, horarios de llegada, rutas y capacidad de los autobuses.
        Nos enfocamos en proporcionar métricas e informes para que nuestros usuarios puedan mejorar continuamente sus servicios
        de transporte, impulsando su éxito y crecimiento.
      </p>
      <p className="font-medium text-3xl text-complementary-900 mb-2">
        Nuestra visión
      </p>
      <p className="mb-8">
        Ser líderes en la implementación de soluciones tecnológicas innovadoras que proporcionen una experiencia de transporte
        segura, eficiente y cómoda para todos nuestros usuarios.
      </p>
      <p className="font-medium text-3xl text-complementary-900 mb-2">
        Cómo empezó todo
      </p>
      <p className="mb-8">
        BusMe surgió como respuesta a la frustración común de muchos usuarios que enfrentan incertidumbre y desinformación al 
        utilizar el transporte público. Como estudiantes, entendemos estos desafíos y nos propusimos crear una solución que no 
        solo mejore la puntualidad y eficiencia, sino que también ofrezca una experiencia más cómoda y segura para todos.
      </p>
      <p className="font-medium text-3xl text-complementary-900 mb-2">
        Nuestro compromiso
      </p>
      <p className="mb-8">
        Como estudiantes, entendemos los desafíos que enfrentan tanto las instituciones educativas como las empresas en la gestión
        del transporte. Por ello, hemos desarrollado BusMe, una aplicación diseñada para atender esas necesidades específicas,
        contribuyendo a un entorno más organizado, seguro y eficiente para todos.
      </p>
      <div>
      <BusmeTeam members={teamMembers} />
      </div>
    </div>
  );
}