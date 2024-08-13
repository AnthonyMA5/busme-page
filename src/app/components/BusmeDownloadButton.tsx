'use client'
import React, { useState } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';


interface BusmeDownloadButtonProps {
  imageSrc: string;
  initialText: string;
  hoverText: string;
}

const BusmeDownloadButton: React.FC<BusmeDownloadButtonProps> = ({ imageSrc, initialText, hoverText }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center p-4 bg-white text-black rounded-2xl transition-all duration-300 ease-in-out shadow-lg"
    >
      <div className="relative flex items-center justify-center h-24 w-36 mb-4">
        {/* Imagen original */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
            hovered ? 'transform scale-0' : 'transform scale-100'
          }`}
        >
          <img src={imageSrc} alt="icon" className="h-16 w-16" />
        </div>

        {/* Icono ArrowDownTrayIcon */}
        <ArrowDownTrayIcon
          className={`absolute h-14 w-14 text-muted-950 transition-opacity duration-300 ease-in-out ${
            hovered ? 'opacity-100 delay-150' : 'opacity-0'
          }`}
        />
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
    </button>
  );
};

export default BusmeDownloadButton;