import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ContactBar } from "@/components/ContactBar";
import { SubpageHeader } from "@/components/SubpageHeader";
import { dictionaries } from "@/content";
import { brand, isLocale, localePath, siteUrl } from "@/content/config";
import { guideLabels, guidePath, guides, guidesPath } from "@/content/guides";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const l = guideLabels[lang];
  return {
    title: l.hubSeoTitle,
    description: l.hubSeoDescription,
    alternates: { canonical: guidesPath[lang], languages: { "es-CO": guidesPath.es, en: guidesPath.en, "x-default": guidesPath.es } },
  };
}

export default async function GuidesHub({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const l = guideLabels[lang];
  const t = dictionaries[lang];
  const home = localePath[lang];
  const abs = (p: string) => new URL(p, siteUrl).toString();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: l.hubSeoTitle,
    url: abs(guidesPath[lang]),
    hasPart: guides[lang].map((g) => ({ "@type": "Article", headline: g.title, url: abs(guidePath(lang, g.slug)) })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SubpageHeader homeHref={home} homeAria={l.back} backHref={home} backLabel={l.back} />
      <main>
        <section className="bg-deep pt-12 pb-20 text-white md:pt-16 md:pb-28">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h1 className="max-w-4xl text-[2.5rem] leading-[1.03] font-medium tracking-[-0.035em] text-balance md:text-7xl">
              {l.hubTitle} <span className="text-lime">{l.hubHighlight}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{l.hubIntro}</p>
          </div>
        </section>
        <section className="bg-paper py-16 text-ink md:py-24">
          <ul className="mx-auto grid w-full max-w-6xl gap-4 px-5 md:grid-cols-3 md:px-8">
            {guides[lang].map((g) => (
              <li key={g.id}>
                <a href={guidePath(lang, g.slug)} className="group flex h-full flex-col rounded-3xl bg-sand p-7 transition-colors hover:bg-lime">
                  <h2 className="text-2xl leading-snug font-medium tracking-tight">{g.title}</h2>
                  <p className="mt-4 leading-relaxed text-slate">{g.dek}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 font-medium">
                    {l.read} <ArrowRight aria-hidden strokeWidth={1.75} className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-16 w-full max-w-6xl px-5 text-sm text-slate md:px-8">
            © {new Date().getFullYear()} {brand.name}. {t.footer.rights}
          </p>
        </section>
      </main>
      <ContactBar t={t} lang={lang} />
    </>
  );
}
