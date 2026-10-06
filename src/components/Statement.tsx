import type { Content } from "@/content";
import { icons } from "./icons";
import { Reveal } from "./Reveal";
import { Highlight, Section } from "./Section";

export function Statement({ t }: { t: Content }) {
  return (
    <Section id="a-la-medida">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <Reveal>
          <h2 className="text-[2.25rem] leading-[1.12] font-medium tracking-tight text-balance md:text-6xl md:leading-[1.08]">
            {t.statement.title} <Highlight tone="sand">{t.statement.highlight}</Highlight>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate">{t.statement.text}</p>

          <p className="mt-10 text-sm text-slate">{t.audience.label}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {t.audience.items.map((item) => (
              <li key={item} className="rounded-full border border-ink/20 px-3.5 py-1.5 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="flex flex-col self-end">
          {t.statement.pillars.map((pillar, index) => {
            const Icon = icons[pillar.icon];
            return (
              <li key={pillar.title}>
                <Reveal
                  delay={index * 100}
                  className="flex items-start gap-5 border-t border-ink/15 py-6"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-deep text-lime">
                    <Icon aria-hidden strokeWidth={1.5} className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">{pillar.title}</h3>
                    <p className="mt-1 leading-relaxed text-slate">{pillar.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
