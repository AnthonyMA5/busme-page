'use client'
import React, { useState } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';


interface BusmeDownloadButtonProps {
  imageSrc: string;
  initialText: string;
  hoverText: string;
  imageSize?: { width: string, height: string }; // Tamaño de la imagen (opcional)
  iconSrc?: string; // Prop para la imagen de ícono
  iconSize?: { width: string, height: string }; // Tamaño del icono (opcional)
  linkHref?: string; // URL opcional para el enlace
}

const BusmeDownloadButton: React.FC<BusmeDownloadButtonProps> = ({ imageSrc, initialText, hoverText, imageSize = { width: '64px', height: '64px' }, iconSrc, iconSize = { width: '56px', height: '56px' }, linkHref }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const buttonContent = (
    <>
      <div className="relative flex items-center justify-center h-24 w-36 mb-4">
        {/* Imagen original */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
            hovered ? 'transform scale-0' : 'transform scale-100'
          }`}
        >
          <img src={imageSrc} alt="icon" style={{ width: imageSize.width, height: imageSize.height }} />
        </div>

        {/* Ícono personalizado o ArrowDownTrayIcon */}
        {iconSrc ? (
          <img
            src={iconSrc}
            alt="hover-icon"
            className={`absolute transition-opacity duration-300 ease-in-out ${
              hovered ? 'opacity-100 delay-150' : 'opacity-0'
            }`}
            style={{ width: iconSize.width, height: iconSize.height }}
          />
        ) : (
          <ArrowDownTrayIcon
            className={`absolute transition-opacity duration-300 ease-in-out ${
              hovered ? 'opacity-100 delay-150' : 'opacity-0'
            }`}
            style={{ width: iconSize.width, height: iconSize.height }}
          />
        )}
      </div>
      <div className="relative h-6 flex items-center justify-center">
        <span
          className={`transition-all duration-300 ease-in-out ${
            hovered ? '-translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          {initialText}
        </span>
        <span
          className={`absolute transition-all duration-300 ease-in-out ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          {hoverText}
        </span>
      </div>
    </>
  );

  return linkHref ? (
    <a
      href={linkHref}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center p-4 bg-white text-black rounded-2xl transition-all duration-300 ease-in-out shadow-lg"
    >
      {buttonContent}
    </a>
  ) : (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center p-4 bg-white text-black rounded-2xl transition-all duration-300 ease-in-out shadow-lg"
    >
      {buttonContent}
    </button>
  );
};

export default BusmeDownloadButton;