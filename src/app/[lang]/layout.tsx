import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { dictionaries } from "@/content";
import {
  brand,
  htmlLang,
  isLocale,
  localePath,
  locales,
  ogLocale,
  siteUrl,
} from "@/content/config";
import "../globals.css";

// Inter hace las veces de Neue Haas Grotesk (la tipografía de marca es de pago).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { seo } = dictionaries[lang];

  return {
    metadataBase: new URL(siteUrl),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: "Cindy Lewis" }],
    alternates: {
      canonical: localePath[lang],
      languages: {
        "es-CO": localePath.es,
        en: localePath.en,
        "x-default": localePath.es,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      url: localePath[lang],
      siteName: brand.name,
      title: seo.title,
      description: seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0f150f",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={htmlLang[lang]} className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
