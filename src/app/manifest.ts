import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: "#ffffff",
    background_color: "#ffffff",
    icons: [
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "icon512_maskable.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "icon512_rounded.png",
        type: "image/png",
      },
    ],
    orientation: "any",
    display: "standalone",
    dir: "auto",
    lang: "es-ES",
    name: "Busme",
    short_name: "Busme",
    start_url: "/",
    scope: "/",
    description:
      "Informative web app about Busme, a monitoring and tracking transportation service app.",
  };
}
