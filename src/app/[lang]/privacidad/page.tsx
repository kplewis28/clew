import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubpageHeader } from "@/components/SubpageHeader";
import { isLocale, localePath, privacyPath } from "@/content/config";
import { privacy } from "@/content/privacy";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacidad">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const p = privacy[lang];
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    alternates: {
      canonical: privacyPath[lang],
      languages: { "es-CO": privacyPath.es, en: privacyPath.en, "x-default": privacyPath.es },
    },
  };
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacidad">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const p = privacy[lang];

  return (
    <>
      <SubpageHeader homeHref={localePath[lang]} homeAria={p.back} backHref={localePath[lang]} backLabel={p.back} width="3xl" />
      <main className="mx-auto w-full max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <h1 className="text-4xl leading-tight font-medium tracking-[-0.03em] md:text-5xl">{p.title}</h1>
        <p className="mt-3 text-sm text-ink/65">{p.updated}</p>
        <p className="mt-8 text-lg leading-relaxed">{p.intro}</p>
        {p.blocks.map((block) => (
          <section key={block.heading} className="mt-12">
            <h2 className="text-2xl font-medium tracking-[-0.02em]">{block.heading}</h2>
            {block.paragraphs?.map((text) => <Paragraph key={text} text={text} />)}
            {block.list && <List items={block.list} />}
            {block.after?.map((text) => <Paragraph key={text} text={text} />)}
          </section>
        ))}
      </main>
    </>
  );
}

function Paragraph({ text }: { text: string }) {
  return <p className="mt-4 leading-relaxed text-ink/85">{text}</p>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-ink/85 marker:text-ink/40">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
