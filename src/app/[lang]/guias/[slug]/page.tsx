import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Plus } from "lucide-react";
import { ContactBar } from "@/components/ContactBar";
import { SubpageHeader } from "@/components/SubpageHeader";
import { dictionaries } from "@/content";
import { brand, calculatorPath, isLocale, localePath, locales, siteUrl, whatsappUrl, type Locale } from "@/content/config";
import { findGuide, guideById, guideLabels, guidePath, guides, guidesPath, guidesUpdated } from "@/content/guides";
import { serviceById, servicePath } from "@/content/services";

type Params = { lang: string; slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => guides[lang].map((g) => ({ lang, slug: g.slug })));
}

const other = (lang: Locale): Locale => (lang === "es" ? "en" : "es");

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const g = findGuide(lang, slug);
  if (!g) return {};
  const twin = guideById(other(lang), g.id);
  const es = lang === "es" ? g : twin;
  const en = lang === "en" ? g : twin;
  return {
    title: g.seoTitle,
    description: g.seoDescription,
    alternates: {
      canonical: guidePath(lang, g.slug),
      languages: { "es-CO": guidePath("es", es.slug), en: guidePath("en", en.slug), "x-default": guidePath("es", es.slug) },
    },
    openGraph: { type: "article", title: g.seoTitle, description: g.seoDescription, url: guidePath(lang, g.slug), siteName: brand.name },
  };
}

export default async function GuidePage({ params }: { params: Promise<Params> }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const g = findGuide(lang, slug);
  if (!g) notFound();
  const l = guideLabels[lang];
  const t = dictionaries[lang];
  const home = localePath[lang];
  const abs = (p: string) => new URL(p, siteUrl).toString();
  const svc = serviceById(lang, g.service);
  const date = new Date(guidesUpdated + "T12:00:00Z").toLocaleDateString(lang === "es" ? "es-CO" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: g.title,
        description: g.seoDescription,
        inLanguage: lang === "es" ? "es" : "en",
        datePublished: guidesUpdated,
        dateModified: guidesUpdated,
        mainEntityOfPage: abs(guidePath(lang, g.slug)),
        image: abs("/cindy-lewis.jpg"),
        author: { "@type": "Person", name: "Cindy Lewis", jobTitle: l.authorRole, url: abs(home) },
        publisher: { "@id": abs("/") + "#org" },
      },
      {
        "@type": "FAQPage",
        mainEntity: g.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: l.home, item: abs(home) },
          { "@type": "ListItem", position: 2, name: l.guides, item: abs(guidesPath[lang]) },
          { "@type": "ListItem", position: 3, name: g.title, item: abs(guidePath(lang, g.slug)) },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SubpageHeader homeHref={home} homeAria={l.back} backHref={guidesPath[lang]} backLabel={lang === "es" ? "Volver a las guías" : "Back to guides"} />

      <main>
        <article>
          <div className="bg-deep pt-10 pb-16 text-white md:pt-14 md:pb-20">
            <div className="mx-auto w-full max-w-3xl px-5 md:px-8">
              <nav aria-label="breadcrumb" className="text-sm text-white/55">
                <a href={home} className="hover:text-lime">{l.home}</a> <span aria-hidden>/</span>{" "}
                <a href={guidesPath[lang]} className="hover:text-lime">{l.guides}</a>
              </nav>
              <h1 className="mt-7 text-[2.3rem] leading-[1.05] font-medium tracking-[-0.035em] text-balance md:text-6xl">{g.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-white/75 md:text-xl">{g.dek}</p>
              <p className="mt-8 text-sm text-white/55">
                {l.author}, {l.authorRole} · {l.updated} <time dateTime={guidesUpdated}>{date}</time>
              </p>
            </div>
          </div>

          <div className="bg-paper py-14 text-ink md:py-20">
            <div className="mx-auto w-full max-w-3xl px-5 md:px-8">
              <section className="rounded-3xl bg-lime p-7 md:p-9">
                <h2 className="text-sm font-medium tracking-[0.16em] uppercase">{g.shortTitle}</h2>
                <p className="mt-4 text-lg leading-relaxed md:text-xl">{g.short}</p>
              </section>

              {g.sections.map((s) => (
                <section key={s.h} className="mt-14">
                  <h2 className="text-[1.75rem] leading-[1.15] font-medium tracking-tight md:text-4xl">{s.h}</h2>
                  {s.blocks.map((b, i) => {
                    if (b.type === "p") return <p key={i} className="mt-5 text-lg leading-relaxed text-slate">{b.text}</p>;
                    if (b.type === "list") {
                      const Tag = b.ordered ? "ol" : "ul";
                      return (
                        <Tag key={i} className={`mt-5 space-y-3 pl-6 text-lg leading-relaxed text-slate ${b.ordered ? "list-decimal" : "list-disc"} marker:text-ink`}>
                          {b.items.map((it) => (
                            <li key={it} className="pl-1">{it}</li>
                          ))}
                        </Tag>
                      );
                    }
                    return (
                      <figure key={i} className="mt-6">
                        <div className="overflow-x-auto rounded-2xl border border-ink/15">
                          <table className="w-full min-w-[480px] text-left text-[15px] md:text-base">
                            <thead className="bg-sand">
                              <tr>{b.head.map((h, j) => <th key={j} scope="col" className="px-4 py-3 font-medium">{h}</th>)}</tr>
                            </thead>
                            <tbody>
                              {b.rows.map((r, j) => (
                                <tr key={j} className="border-t border-ink/10">
                                  {r.map((c, k) => k === 0 ? <th key={k} scope="row" className="px-4 py-3 font-medium">{c}</th> : <td key={k} className="px-4 py-3 text-slate">{c}</td>)}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {b.note ? <figcaption className="mt-3 text-sm text-slate">{b.note}</figcaption> : null}
                      </figure>
                    );
                  })}
                </section>
              ))}

              {g.calc ? (
                <a href={calculatorPath[lang]} className="mt-12 inline-flex items-center gap-2 font-medium underline decoration-lime decoration-2 underline-offset-4 hover:decoration-ink">
                  {l.calc} <ArrowRight aria-hidden strokeWidth={1.75} className="size-4" />
                </a>
              ) : null}

              <section className="mt-16">
                <h2 className="text-[1.75rem] leading-[1.15] font-medium tracking-tight md:text-4xl">{l.faq}</h2>
                <div className="mt-6 border-t border-ink/15">
                  {g.faq.map((f) => (
                    <details key={f.q} name="faq" className="group border-b border-ink/15">
                      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium tracking-tight">
                        {f.q}
                        <Plus aria-hidden strokeWidth={1.5} className="faq-icon size-6 shrink-0 transition-transform duration-200" />
                      </summary>
                      <p className="pb-6 leading-relaxed text-slate">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </article>

        <section className="bg-deep py-20 text-white md:py-28">
          <div className="mx-auto w-full max-w-3xl px-5 md:px-8">
            <h2 className="text-[2.2rem] leading-[1.05] font-medium tracking-[-0.035em] text-balance md:text-6xl">
              {l.ctaTitle}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">{svc.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsappUrl(svc.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-14 items-center gap-2.5 rounded-full bg-lime px-7 text-base font-medium text-ink transition-colors hover:bg-white md:text-lg"
              >
                {l.ctaButton}
                <ArrowRight aria-hidden strokeWidth={1.75} className="size-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href={servicePath(lang, svc.slug)} className="inline-flex min-h-14 items-center rounded-full border border-white/25 px-7 text-base text-white transition-colors hover:border-lime">
                {l.serviceLink}: {svc.eyebrow}
              </a>
            </div>

            <div className="mt-16 border-t border-white/10 pt-10">
              <p className="text-sm tracking-[0.16em] text-white/55 uppercase">{l.related}</p>
              <ul className="mt-5 space-y-3">
                {g.related.map((id) => {
                  const r = guideById(lang, id);
                  return (
                    <li key={id}>
                      <a href={guidePath(lang, r.slug)} className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 px-5 py-4 transition-colors hover:border-lime">
                        <span className="text-lg">{r.title}</span>
                        <ArrowRight aria-hidden strokeWidth={1.75} className="size-5 shrink-0 text-lime" />
                      </a>
                    </li>
                  );
                })}
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
