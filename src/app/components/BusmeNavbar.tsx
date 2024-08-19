'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Image from 'next/image'
import BusmeLogo from '@/assets/img/LogotipoBusme.jpg'
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Aplicación de movilidad', href: '/mobility-application' },
    { name: 'Sectores', href: '/sectors' },
    { name: 'Sobre BusMe', href: '/about' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function BusmeNavbar() {
    const pathname = usePathname();

    return (
        <Disclosure as="nav" className="bg-white">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Menu móvil button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 left-2 text-black transition duration-300 ease-in-out hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-select-800">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Abrir menú</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex items-center justify-center w-full sm:w-auto sm:justify-start">
                        <Image
                            alt="Busme Logo"
                            src={BusmeLogo}
                            className="h-6 w-auto sm:h-10 sm:w-auto"
                        />
                    </div>
                    <div className="flex flex-1 items-center text-center justify-center sm:items-stretch sm:justify-center">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex items-center space-x-4">
                                {navigation.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            passHref
                                        >
                                            <p
                                                aria-current={isActive ? 'page' : undefined}
                                                className={classNames(
                                                    isActive ? 'bg-primary-600 text-white font-semibold' : 'text-black transition duration-300 ease-in-out hover:bg-primary-600 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium',
                                                )}
                                            >
                                                {item.name}
                                            </p>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Link href="/download" passHref>
                            <button
                                type="button"
                                className="relative rounded-md bg-primary-600 p-1 px-2 text-white hover:bg-primary-400 transition duration-300 ease-in-out sm:p-2 sm:px-4"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className='hidden sm:inline font-poppins font-medium'>Descargar App</span>
                                <ArrowDownTrayIcon className="block sm:hidden h-6 w-6" aria-hidden="true" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 pl-2">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <DisclosureButton
                                key={item.name}
                                as={Link}
                                href={item.href}
                                passHref
                            >
                                <p
                                    aria-current={isActive ? 'page' : undefined}
                                    className={classNames(
                                        isActive ? 'bg-primary-600 text-white' : 'text-black transition duration-300 ease-in-out hover:bg-primary-600 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    {item.name}
                                </p>
                            </DisclosureButton>
                        )
                    })}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}