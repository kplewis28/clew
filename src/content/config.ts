// Datos compartidos por todos los idiomas.

export const brand = {
  name: "clew",
  // WhatsApp de Cindy: indicativo de Colombia (57) + 3008438670, sin "+" ni espacios.
  whatsappNumber: "573008438670",
};

// TODO: reemplazar por el dominio real al desplegar (o definir NEXT_PUBLIC_SITE_URL en Vercel).
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clew.vercel.app";

export const whatsappUrl = (message: string) =>
  `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;

// El español vive en "/" y el inglés en "/en" (ver rewrites en next.config.ts).
export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const localePath: Record<Locale, string> = { es: "/", en: "/en" };
export const htmlLang: Record<Locale, string> = { es: "es-CO", en: "en" };
export const ogLocale: Record<Locale, string> = { es: "es_CO", en: "en_US" };

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
