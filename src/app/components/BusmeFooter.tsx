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

        <form>
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
                />
              </div>
            </div>
            <div>
              <button
                //onClick={handleRedirect}
                type="submit"
                className="w-full mt-2 justify-center rounded-md bg-secondary border-2 border-secondary px-5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-primary-600 hover:border-2 hover:border-secondary transition duration-500 ease-in-out py-1"
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