import type { Content } from "@/content";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Benefits({ t }: { t: Content }) {
  return (
    <Section id="que-cambia" tone="lime">
      <SectionHeading title={t.benefits.title} highlight={t.benefits.highlight} tone="lime" />

      <ul className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
        {t.benefits.items.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={index * 100} className="border-t-2 border-ink pt-6">
              <h3 className="text-2xl leading-tight font-medium tracking-tight">{item.title}</h3>
              <p className="mt-3 leading-relaxed">{item.text}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
