import type { Content } from "@/content";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Steps({ t }: { t: Content }) {
  return (
    <Section id="como-funciona" tone="sand">
      <SectionHeading title={t.steps.title} highlight={t.steps.highlight} />

      <ol className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
        {t.steps.items.map((step, index) => (
          <li key={step.title}>
            <Reveal delay={index * 100} className="border-t-2 border-ink pt-6">
              <div className="flex items-end justify-between gap-4">
                {/* Numerales en cursiva pesada, como el logotipo */}
                <span
                  aria-hidden
                  className="text-7xl leading-[0.8] font-extrabold tracking-[-0.06em] italic md:text-8xl"
                >
                  0{index + 1}
                </span>
                <span className="rounded-full bg-deep px-3 py-1 text-sm text-lime">
                  {step.meta}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-medium tracking-tight">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-slate">{step.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
