import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Builds } from "@/components/Builds";
import { CaseStudy } from "@/components/CaseStudy";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { ContactBar } from "@/components/ContactBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { Statement } from "@/components/Statement";
import { Steps } from "@/components/Steps";
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
    sameAs: [brand.social.instagram, brand.social.tiktok],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <Hero t={t} />
        <Marquee t={t} />
        <Statement t={t} />
        <Services t={t} />
        <Problem t={t} />
        <Steps t={t} />
        <Builds t={t} />
        <Benefits t={t} />
        <CaseStudy t={t} />
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
