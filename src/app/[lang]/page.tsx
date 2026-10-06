import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Builds } from "@/components/Builds";
import { CaseStudy } from "@/components/CaseStudy";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Statement } from "@/components/Statement";
import { Steps } from "@/components/Steps";
import { dictionaries } from "@/content";
import { isLocale } from "@/content/config";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];

  return (
    <>
      <main>
        <Hero t={t} />
        <Marquee t={t} />
        <Statement t={t} />
        <Problem t={t} />
        <Steps t={t} />
        <Builds t={t} />
        <Benefits t={t} />
        <CaseStudy t={t} />
        <About t={t} />
        <Faq t={t} />
        <FinalCta t={t} />
      </main>
      <Footer t={t} />
      <FloatingWhatsApp t={t} />
    </>
  );
}
