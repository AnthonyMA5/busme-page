'use client'
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function BusmeFooter() {
  const pathname = usePathname();

  // No renderizar el footer en la página de descarga
   if (pathname === '/download') {
     return null;
   }

  return (
    <footer className="border border-r-white border-l-white border-b-white border-t-muted-800 py-20 font-poppins">
      <div className="container mx-auto px-16">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-medium text-muted-950">¿Estás listo?</p>
            <Link href="/download" passHref>
              <button
                type="button"
                className="flex rounded-md mt-6 bg-primary-50 p-1 px-2 text-primary-700 hover:text-primary-300 transition duration-300 sm:p-2 sm:px-4"
              >
                <span className="flex" />
                <span className='font-poppins font-light '>Descargar</span>
                <ArrowLongRightIcon className="h-6 w-5 ml-2" />
              </button>
            </Link>
          </div>
          <div>
            <ul className="flex space-x-8 text-muted-950 text-xl">
              <li><Link href="/" className="hover:underline">Inicio</Link></li>
              <li><Link href="/about" className="hover:underline">Acerca de</Link></li>
              <li><Link href="#" className="hover:underline">Política de privacidad</Link></li>
              <li><Link href="#" className="hover:underline">Términos y Condiciones</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 text-center text-muted-950">
          <p>&copy; 2024 BusMe. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}