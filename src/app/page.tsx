"use client";
import BusmeCard from "./components/BusmeCard";
import { MapIcon, ClockIcon, BellAlertIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import AppMobile from "@/assets/img/BusMe-001.png";
import Busme002 from "@/assets/img/BusMe-002.png";
import Busme009 from "@/assets/img/BusMe-009.png";
import Busme006 from "@/assets/img/BusMe-006.png";
import Busme010 from "@/assets/img/BusMe-010.png";
import Busme011 from "@/assets/img/BusMe-011.png";
import { Metadata } from "next";
import { useEffect } from "react";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    try {
      // Registra el Service Worker
      await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
      });

      // Espera a que el Service Worker esté listo
      const registration = await navigator.serviceWorker.ready;

      // Intenta obtener una suscripción existente
      let sub = await registration.pushManager.getSubscription();

      if (!sub) {
        // Si no existe una suscripción, crea una nueva
        sub = await subscribeToPush(registration);
      }
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          suscripcion: sub.toJSON(),
          userId: sessionStorage.getItem("userId") || null,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const { userId } = data;
          sessionStorage.setItem("userId", userId);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error("Error registering Service Worker:", error);
    }
  }

  async function subscribeToPush(registration: ServiceWorkerRegistration) {
    try {
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
        ),
      });
      return sub;
    } catch (error) {
      console.error("Error subscribing to push notifications:", error);
      throw error;
    }
  }
  return (
    <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8 font-poppins px-4">
      <div className="flex flex-col md:flex-row items-center mb-16 space-y-8 md:space-y-0">
        <div className="md:w-2/4 text-center md:text-left">
          <p className="font-semibold text-4xl md:text-5xl lg:text-6xl gradient-text">
            Monitorea <span className="text-black">el viaje hacía</span> tu
            destino
          </p>

          <p className="mt-5 text-black text-sm md:text-base lg:text-lg">
            Una aplicación de monitoreo avanzada que transformará la manera en
            que se planifica y gestiona el transporte.
          </p>
        </div>
        <div className="flex justify-center w-full md:w-2/4">
          <Image
            src={AppMobile}
            alt="Contenido principal de la aplicación"
            className="rounded w-full max-w-md"
          />
        </div>
      </div>

      <p className="flex items-center justify-center font-medium text-2xl md:text-4xl gap-3 text-center flex-wrap">
        Nuestras <span className="gradient-text">funciones</span> para ti
      </p>

      <div className="flex flex-wrap justify-center text-center gap-8 pt-16 pb-32">
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

      <p className="flex items-center justify-center font-medium text-2xl md:text-4xl gap-3 text-center flex-wrap">
        <span className="gradient-text"> Mejora </span> continua del servicio
      </p>
      <p className="text-center text-black pt-5 mb-12 sm:px-16 lg:px-28">
        Con la información recopilada, los clientes pueden evaluar y mejorar
        constantemente su servicio de transporte, impulsando su éxito y
        crecimiento.
      </p>

      <div className="mx-auto space-y-24 py-5">
        {/* Primera sección: Imagen a la derecha */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-5/12 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-normal mb-5">Feedback</h2>
            <p className="text-black text-sm md:text-base lg:text-lg">
              Obten opiniones y sugerencias de los usuarios en tiempo real para
              mejorar constantemente el servicio. Analiza el rendimiento y
              detecta áreas de mejora, permitiendo ajustes estratégicos que
              aumentan la eficiencia y satisfacción del cliente.
            </p>
          </div>
          <div className="md:w-7/12 md:order-last mt-4 md:mt-0 md:pl-44">
            <Image
              src={Busme011}
              alt="Pantalla para calificar tu viaje"
              width={550}
              height={300}
              className="rounded max-w-full"
            />
          </div>
        </div>

        {/* Segunda sección: Imagen a la izquierda */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-7/12 order-last md:order-first mt-8 md:mt-0">
            <Image
              src={Busme006}
              alt="Pantalla de los datos en tiempo real"
              width={550}
              height={300}
              className="rounded max-w-full"
            />
          </div>
          <div className="md:w-5/12 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-normal mb-5">
              Estadísticas
            </h2>
            <p className="text-black text-sm md:text-base lg:text-lg">
              La recopilación de datos en tiempo real permite a los operadores
              analizar el rendimiento del servicio y detectar áreas de mejora.
              Esto facilita ajustes estratégicos que optimizan las operaciones y
              aumentan la satisfacción del cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
