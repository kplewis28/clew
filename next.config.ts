import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Política de seguridad sin nonces para que las páginas sigan siendo estáticas
// (ver node_modules/next/dist/docs/01-app/02-guides/content-security-policy.md).
// La página no carga nada de terceros: WhatsApp, Instagram y TikTok son enlaces.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

// El español es el idioma principal y vive en "/" (servido desde app/[lang] con
// lang = "es"); el inglés vive en "/en". "/es" redirige a "/" para no duplicar.
const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  images: {
    // 65 para la foto del hero (más liviana), 75 para el resto.
    qualities: [65, 75],
  },
  async redirects() {
    return [
      { source: "/es", destination: "/", permanent: true },
      { source: "/es/privacidad", destination: "/privacidad", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/", destination: "/es" },
      { source: "/privacidad", destination: "/es/privacidad" },
    ];
  },
};

export default nextConfig;
