'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BusmeFooter() {
  const pathname = usePathname();

  // No renderizar el footer en la página de descarga
  if (pathname === '/download') {
    return null;
  }

  return (
    <footer className=" py-16 font-poppins bg-primary-600">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold text-white">¡Monitorea tus viajes!</h2>
        <p className="text-white mt-4">Síguenos en nuestras redes sociales para estar al tanto de todas las novedades.</p>

        <div className="flex justify-center space-x-6 mt-8">
          <Link href="https://www.facebook.com" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} className="h-8 w-8 text-white hover:text-muted-50 transition duration-300" />
          </Link>
          <Link href="https://www.twitter.com" aria-label="X">
            <FontAwesomeIcon icon={faXTwitter} className="h-8 w-8 text-white hover:text-muted-50 transition duration-300" />
          </Link>
          <Link href="https://www.github.com" aria-label="GitHub">
            <FontAwesomeIcon icon={faInstagram} className="h-8 w-8 text-white hover:text-muted-50 transition duration-300" />
          </Link>
        </div>

        <p className="mt-10 text-white">&copy; 2024 BusMe. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}