import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Plus } from "lucide-react";
import { ContactBar } from "@/components/ContactBar";
import { SubpageHeader } from "@/components/SubpageHeader";
import { Highlight } from "@/components/Section";
import { dictionaries } from "@/content";
import { brand, calculatorPath, isLocale, localePath, locales, siteUrl, whatsappUrl, type Locale } from "@/content/config";
import { findService, serviceById, serviceLabels, servicePath, services } from "@/content/services";

type Params = { lang: string; service: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => services[lang].map((s) => ({ lang, service: s.slug })));
}

const other = (lang: Locale): Locale => (lang === "es" ? "en" : "es");

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang, service } = await params;
  if (!isLocale(lang)) return {};
  const s = findService(lang, service);
  if (!s) return {};
  const twin = serviceById(other(lang), s.id);
  const es = lang === "es" ? s : twin;
  const en = lang === "en" ? s : twin;
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: {
      canonical: servicePath(lang, s.slug),
      languages: {
        "es-CO": servicePath("es", es.slug),
        en: servicePath("en", en.slug),
        "x-default": servicePath("es", es.slug),
      },
    },
    openGraph: { type: "website", title: s.seoTitle, description: s.seoDescription, url: servicePath(lang, s.slug), siteName: brand.name },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { lang, service } = await params;
  if (!isLocale(lang)) notFound();
  const s = findService(lang, service);
  if (!s) notFound();
  const l = serviceLabels[lang];
  const t = dictionaries[lang];
  const abs = (p: string) => new URL(p, siteUrl).toString();
  const home = localePath[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": abs(servicePath(lang, s.slug)) + "#service",
        name: s.eyebrow,
        serviceType: s.eyebrow,
        description: s.seoDescription,
        url: abs(servicePath(lang, s.slug)),
        provider: { "@id": abs("/") + "#org" },
        areaServed: ["Colombia", "United States", "Switzerland", "Latin America", "Europe"],
        availableLanguage: ["es", "en"],
        ...(s.minPrice
          ? {
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                priceSpecification: { "@type": "PriceSpecification", minPrice: s.minPrice, priceCurrency: "USD" },
                description: s.price,
              },
            }
          : {}),
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: l.home, item: abs(home) },
          { "@type": "ListItem", position: 2, name: s.eyebrow, item: abs(servicePath(lang, s.slug)) },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SubpageHeader homeHref={home} homeAria={l.back} backHref={home} backLabel={l.back} />

      <main>
        <section className="bg-deep pt-10 pb-20 text-white md:pt-16 md:pb-28">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <nav aria-label="breadcrumb" className="text-sm text-white/55">
              <a href={home} className="hover:text-lime">{l.home}</a> <span aria-hidden>/</span> <span className="text-white/80">{s.eyebrow}</span>
            </nav>
            <h1 className="mt-8 max-w-4xl text-[2.6rem] leading-[1.03] font-medium tracking-[-0.035em] text-balance md:text-7xl">
              {s.title} <span className="text-lime">{s.highlight}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{s.intro}</p>
            <a
              href={whatsappUrl(s.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex min-h-14 items-center gap-2.5 rounded-full bg-lime px-7 text-base font-medium text-ink transition-colors hover:bg-white md:text-lg"
            >
              {l.ctaButton}
              <ArrowRight aria-hidden strokeWidth={1.75} className="size-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </section>

        <section className="bg-paper py-20 text-ink md:py-28">
          <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:px-8">
            <div>
              <h2 className="text-[2rem] leading-[1.1] font-medium tracking-tight md:text-5xl">{l.forWho}</h2>
            </div>
            <ul className="divide-y divide-ink/15 border-y border-ink/15">
              {s.forWho.map((x) => (
                <li key={x} className="flex gap-4 py-5 text-lg leading-snug">
                  <Check aria-hidden strokeWidth={2} className="mt-1 size-5 shrink-0 text-ink" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-sand py-20 text-ink md:py-28">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="text-[2rem] leading-[1.1] font-medium tracking-tight md:text-5xl">
              <Highlight tone="sand">{l.includes}</Highlight>
            </h2>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.includes.map((x, i) => (
                <li key={x.title} className="rounded-3xl bg-paper p-7">
                  <span className="text-sm text-slate">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 text-xl font-medium tracking-tight">{x.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate">{x.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-deep py-20 text-white md:py-28">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
            <div>
              <h2 className="text-[2rem] leading-[1.1] font-medium tracking-tight md:text-5xl">{l.price}</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{s.price}</p>
              {s.calcLink ? (
                <a href={calculatorPath[lang]} className="mt-6 inline-flex items-center gap-2 text-lime underline-offset-4 hover:underline">
                  {l.calc} <ArrowRight aria-hidden strokeWidth={1.75} className="size-4" />
                </a>
              ) : null}
            </div>
            {s.caseRef ? (
              <a href={`${home === "/" ? "" : home}/#casos`} className="group block rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-lime md:p-9">
                <p className="text-sm tracking-[0.16em] text-lime uppercase">{l.caseKicker}</p>
                <p className="mt-5 text-2xl leading-snug font-medium tracking-tight md:text-3xl">{s.caseRef.title}</p>
                <p className="mt-3 leading-relaxed text-white/70">{s.caseRef.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-lime">
                  {l.caseLink} <ArrowRight aria-hidden strokeWidth={1.75} className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            ) : null}
          </div>
        </section>

        <section className="bg-sand py-20 text-ink md:py-28">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <h2 className="text-[2rem] leading-[1.1] font-medium tracking-tight md:text-5xl">{l.faq}</h2>
            <div className="border-t border-ink/15">
              {s.faq.map((f) => (
                <details key={f.q} name="faq" className="group border-b border-ink/15">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium tracking-tight md:text-xl">
                    {f.q}
                    <Plus aria-hidden strokeWidth={1.5} className="faq-icon size-6 shrink-0 transition-transform duration-200" />
                  </summary>
                  <p className="max-w-xl pb-6 leading-relaxed text-slate">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-deep py-24 text-white md:py-32">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="max-w-4xl text-[2.5rem] leading-[1.04] font-medium tracking-[-0.035em] text-balance md:text-7xl">
              {l.ctaTitle} <span className="text-lime">{l.ctaHighlight}</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">{l.ctaText}</p>
            <a
              href={whatsappUrl(s.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex min-h-14 items-center gap-2.5 rounded-full bg-lime px-7 text-base font-medium text-ink transition-colors hover:bg-white md:text-lg"
            >
              {l.ctaButton}
              <ArrowRight aria-hidden strokeWidth={1.75} className="size-5 transition-transform group-hover:translate-x-0.5" />
            </a>

            <div className="mt-20 border-t border-white/10 pt-10">
              <p className="text-sm tracking-[0.16em] text-white/55 uppercase">{l.others}</p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {services[lang]
                  .filter((x) => x.id !== s.id)
                  .map((x) => (
                    <li key={x.id}>
                      <a href={servicePath(lang, x.slug)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-white transition-colors hover:border-lime hover:bg-lime hover:text-ink">
                        {x.eyebrow} <ArrowRight aria-hidden strokeWidth={1.75} className="size-4" />
                      </a>
                    </li>
                  ))}
              </ul>
              <p className="mt-10 text-sm text-white/50">
                © {new Date().getFullYear()} {brand.name}. {t.footer.rights}
              </p>
            </div>
          </div>
        </section>
      </main>
      <ContactBar t={t} lang={lang} />
    </>
  );
}
