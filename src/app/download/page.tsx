import { Metadata } from "next";
import BusmeDownloadButton from "../components/BusmeDownloadButton";
import Image from "next/image";
import AndroidIcon from "@/assets/img/android_icon.png"
import AppleIcon from "@/assets/img/apple_icon.png"
import WebsiteIcon from "@/assets/img/website_icon.png"
import MockupAllDispositives from "@/assets/img/BusMe-008.png"

export const metadata: Metadata = {
    title: "BusMe - download",
    description: "BusMe next app",
};

export default function Download() {
    return (
        <>
            <div className="bg-gradient-to-t from-[#EBFFFD] to-[#FFFF]">
                <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8 font-poppins">
                    <p className="font-bold text-6xl text-center gradient-text">Descargar BusMe</p>
                    <p className="text-center text-2xl mt-14 text-muted-950">Descarga la aplicación para empezar a monitorear tus viajes
                        <br />
                        <span>¡Empieza a organizar tu tiempo!</span>
                    </p>
                    <div className="flex justify-center space-x-24 mt-16 mb-16">
                        <BusmeDownloadButton
                            imageSrc={AndroidIcon.src}
                            initialText="Android"
                            hoverText="Descarga"
                        />
                        <BusmeDownloadButton
                            imageSrc={AppleIcon.src}
                            initialText="iOS"
                            hoverText="Descarga"
                        />
                        <BusmeDownloadButton
                            imageSrc={WebsiteIcon.src}
                            initialText="Website"
                            hoverText="Abrir"
                        />
                    </div>
                    <div className="mb-8">
                        <Image
                            src={MockupAllDispositives}
                            alt="Todos los dispositivos"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}
