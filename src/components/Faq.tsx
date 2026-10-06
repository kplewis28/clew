import { Plus } from "lucide-react";
import type { Content } from "@/content";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Faq({ t }: { t: Content }) {
  return (
    <Section id="preguntas">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading title={t.faq.title} />

        <Reveal className="border-t border-ink/15">
          {t.faq.items.map((item) => (
            <details key={item.question} name="faq" className="group border-b border-ink/15">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium tracking-tight md:text-xl">
                {item.question}
                <Plus
                  aria-hidden
                  strokeWidth={1.5}
                  className="faq-icon size-6 shrink-0 transition-transform duration-200"
                />
              </summary>
              <p className="max-w-xl pb-6 leading-relaxed text-slate">{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
