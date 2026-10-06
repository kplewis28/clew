import { Check } from "lucide-react";
import type { Content } from "@/content";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function CaseStudy({ t }: { t: Content }) {
  const { before, after, results } = t.caseStudy;

  return (
    <Section id="caso-real">
      <SectionHeading
        title={t.caseStudy.title}
        highlight={t.caseStudy.highlight}
        subtitle={t.caseStudy.intro}
      />

      <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
        <Reveal className="rounded-3xl bg-paper p-7 md:p-8">
          <h3 className="text-sm font-medium tracking-[0.2em] text-slate uppercase">
            {before.label}
          </h3>
          <ul className="mt-5 flex flex-col gap-4">
            {before.items.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-slate">
                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-slate" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="rounded-3xl bg-deep p-7 text-white md:p-8">
          <h3 className="text-sm font-medium tracking-[0.2em] text-lime uppercase">
            {after.label}
          </h3>
          <ul className="mt-5 flex flex-col gap-4">
            {after.items.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <Check aria-hidden strokeWidth={1.5} className="mt-1 size-5 shrink-0 text-lime" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

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
