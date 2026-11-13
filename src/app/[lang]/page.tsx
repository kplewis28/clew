import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Cases } from "@/components/Cases";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { ContactBar } from "@/components/ContactBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HeroIntro } from "@/components/HeroIntro";
import { Marquee } from "@/components/Marquee";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { Steps } from "@/components/Steps";
import { Trust } from "@/components/Trust";
import { dictionaries } from "@/content";
import { brand, isLocale, siteUrl } from "@/content/config";
import { servicePath, services } from "@/content/services";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];
  const abs = (path: string) => new URL(path, siteUrl).toString();
  const org = abs("/") + "#org";
  // Ficha de clew para Google y los buscadores con IA: quién es, qué ofrece,
  // dónde atiende, quién está detrás y las preguntas frecuentes.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": org,
        name: brand.name,
        alternateName: "clew · herramientas para tu negocio",
        url: abs("/"),
        logo: abs("/email/clew-logo-verde.png"),
        image: abs("/cindy-lewis.jpg"),
        description: t.seo.description,
        slogan: t.business.tagline,
        priceRange: lang === "es" ? "Desde USD 500" : "From USD 500",
        currenciesAccepted: "USD",
        areaServed: ["Colombia", "United States", "Switzerland", "Latin America", "Europe"],
        knowsLanguage: ["es", "en"],
        telephone: `+${brand.whatsappNumber}`,
        sameAs: [brand.social.instagram, brand.social.tiktok, brand.social.threads, brand.social.linkedin],
        founder: {
          "@type": "Person",
          name: "Cindy Lewis",
          jobTitle: lang === "es" ? "Diseñadora de producto" : "Product designer",
          image: abs("/cindy-lewis.jpg"),
          worksFor: { "@id": org },
        },
        knowsAbout: t.seo.keywords,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.services.title + " " + t.services.highlight,
          itemListElement: services[lang].map((x) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: x.eyebrow, description: x.seoDescription, url: abs(servicePath(lang, x.slug)) },
            ...(x.minPrice
              ? { priceSpecification: { "@type": "PriceSpecification", minPrice: x.minPrice, priceCurrency: "USD" } }
              : {}),
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": abs("/") + "#website",
        url: abs("/"),
        name: brand.name,
        inLanguage: lang === "es" ? "es" : "en",
        publisher: { "@id": org },
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faq.items.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroIntro intro={t.intro} />
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
