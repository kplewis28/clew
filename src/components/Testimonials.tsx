import { Quote } from "lucide-react";
import type { Content } from "@/content";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

// Lo que dicen los clientes, en su propia sección y con otro tono, para que
// se lea como prueba y no como parte de los compromisos de clew.
export function Testimonials({ t }: { t: Content }) {
  const s = t.testimonials;
  return (
    <Section id="testimonios" tone="lime">
      <SectionHeading title={s.title} highlight={s.highlight} tone="lime" />
      <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6">
        {s.items.map((item, index) => (
          <li key={item.name}>
            <Reveal delay={index * 120} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl bg-deep p-7 text-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)] md:p-10">
                <Quote aria-hidden strokeWidth={1.5} className="size-9 text-lime md:size-11" />
                <blockquote className="mt-6 flex-1 text-xl leading-snug font-medium tracking-tight md:text-2xl">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8 flex flex-wrap items-end justify-between gap-3 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-base font-medium">{item.name}</p>
                    <p className="mt-0.5 text-sm text-white/60">{item.role}</p>
                  </div>
                  <p className="rounded-full bg-lime/10 px-3 py-1 text-xs font-medium text-lime">{item.project}</p>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs text-ink/70">{s.note}</p>
    </Section>
  );
}
