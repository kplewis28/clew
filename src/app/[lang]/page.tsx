import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Cases } from "@/components/Cases";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { ContactBar } from "@/components/ContactBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { Steps } from "@/components/Steps";
import { Trust } from "@/components/Trust";
import { dictionaries } from "@/content";
import { brand, isLocale, siteUrl } from "@/content/config";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    url: siteUrl,
    description: t.business.tagline,
    areaServed: ["CO", "US", "EU"],
    telephone: `+${brand.whatsappNumber}`,
    sameAs: [brand.social.instagram, brand.social.tiktok, brand.social.threads],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <Hero t={t} />
        <Marquee t={t} />
        <Cases t={t} />
        <Services t={t} />
        <Steps t={t} />
        <Trust t={t} />
        <Products t={t} />
        <About t={t} />
        <Faq t={t} />
        <FinalCta t={t} />
      </main>
      <Footer t={t} />
      <ContactBar t={t} lang={lang} />
    </>
  );
}
