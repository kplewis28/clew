import type { NextConfig } from "next";

// El español es el idioma principal y vive en "/" (servido desde app/[lang] con
// lang = "es"); el inglés vive en "/en". "/es" redirige a "/" para no duplicar.
const nextConfig: NextConfig = {
  images: {
    // 65 para la foto del hero (más liviana), 75 para el resto.
    qualities: [65, 75],
  },
  async redirects() {
    return [{ source: "/es", destination: "/", permanent: true }];
  },
  async rewrites() {
    return [{ source: "/", destination: "/es" }];
  },
};

export default nextConfig;
