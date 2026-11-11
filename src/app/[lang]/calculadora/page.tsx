import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CostCalculator } from "@/components/CostCalculator";
import { SubpageHeader } from "@/components/SubpageHeader";
import { Highlight } from "@/components/Section";
import { calculator } from "@/content/calculator";
import { calculatorPath, isLocale, localePath } from "@/content/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/calculadora">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = calculator[lang];
  return {
    title: t.seoTitle,
    description: t.seoDescription,
    alternates: {
      canonical: calculatorPath[lang],
      languages: { "es-CO": calculatorPath.es, en: calculatorPath.en, "x-default": calculatorPath.es },
    },
    openGraph: { title: t.seoTitle, description: t.seoDescription, url: calculatorPath[lang] },
  };
}

export default async function CalculatorPage({ params }: PageProps<"/[lang]/calculadora">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = calculator[lang];

  return (
    <>
      <SubpageHeader homeHref={localePath[lang]} homeAria={t.back} backHref={localePath[lang]} backLabel={t.back} />
      <main className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-sm font-medium tracking-[0.2em] text-slate uppercase">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-[2.25rem] leading-[1.1] font-medium tracking-tight text-balance md:text-6xl">
          {t.title} <Highlight tone="sand">{t.highlight}</Highlight>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">{t.intro}</p>
        <div className="mt-12">
          <CostCalculator lang={lang} />
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink/60">{t.note}</p>
      </main>
    </>
  );
}
