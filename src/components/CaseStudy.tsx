import type { Content } from "@/content";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function CaseStudy({ t }: { t: Content }) {
  const { results } = t.caseStudy;

  return (
    <Section id="caso-real" tone="paper">
      <SectionHeading
        title={t.caseStudy.title}
        highlight={t.caseStudy.highlight}
        subtitle={t.caseStudy.intro}
        tone="paper"
      />

      <Reveal>
        <dl className="mt-10 grid gap-8 border-t border-ink/15 pt-10 sm:grid-cols-3">
          {results.map((result) => (
            <div key={result.label} className="flex flex-col-reverse justify-end gap-2">
              <dt className="text-slate">{result.label}</dt>
              <dd className="text-3xl font-medium tracking-tight break-words md:text-4xl">
                {result.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
