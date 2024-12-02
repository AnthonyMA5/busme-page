import { Metadata } from "next";
import BusmeDownloadButton from "../components/BusmeDownloadButton";
import Image from "next/image";
import AndroidIcon from "@/assets/img/android_icon.png";
import AppleIcon from "@/assets/img/apple_icon.png";
import WebsiteIcon from "@/assets/img/website_icon.png";
import MockupAllDispositives from "@/assets/img/BusMe-008.png";
import DownloadIcon from "@/assets/img/download_icon.png";
import LinkIcon from "@/assets/img/link_icon.png";

export const metadata: Metadata = {
    title: "BusMe - Descargar",
    description: "BusMe next app",
};

export default function Download() {
    return (
        <>
            <div className="bg-gradient-to-t from-[#EBFFFD] to-[#FFFF]">
                <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8 font-poppins px-4">
                    <p className="font-semibold text-center text-4xl md:text-5xl lg:text-6xl gradient-text py-2">Descargar BusMe</p>
                    <p className="text-center text-xl md:text-2xl mt-14 text-muted-950">Descarga la aplicación para empezar a monitorear tus viajes
                        <br />
                        <span>¡Empieza a organizar tu tiempo!</span>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-24 mt-16 mb-16">
                        <BusmeDownloadButton
                            imageSrc={AndroidIcon.src}
                            initialText="Android"
                            hoverText="Descargar"
                            imageSize={{ width: '122px', height: '55px' }}
                            iconSrc={DownloadIcon.src}
                            iconSize={{ width: '60px', height: '60px' }}
                            linkHref="https://play.google.com/store/apps/details?id=com.innovatech.busme_android"
                        />
                        <BusmeDownloadButton
                            imageSrc={AppleIcon.src}
                            initialText="iOS"
                            hoverText="Descargar"
                            imageSize={{ width: '52px', height: '63px' }}
                            iconSrc={DownloadIcon.src}
                            iconSize={{ width: '60px', height: '60px' }}
                        />
                        <BusmeDownloadButton
                            imageSrc={WebsiteIcon.src}
                            initialText="Website"
                            hoverText="Ingresar"
                            imageSize={{ width: '72px', height: '72px' }}
                            iconSrc={LinkIcon.src}
                            iconSize={{ width: '60px', height: '60px' }}
                        />
                    </div>
                    <div className="mb-8 flex justify-center">
                        <Image
                            src={MockupAllDispositives}
                            alt="Todos los dispositivos"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}