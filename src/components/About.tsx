import type { Content } from "@/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

// Por qué clew: el significado del nombre y cómo trabajamos. Habla como marca.
export function About({ t }: { t: Content }) {
  const [lead, ...rest] = t.about.lines;
  const def = t.hero.clewDef;

  return (
    <Section id="quien" tone="paper">
      <Reveal className="grid items-start gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
        <figure className="relative overflow-hidden rounded-3xl bg-deep p-7 text-white md:p-9">
          <p className="text-sm tracking-[0.16em] text-white/60 uppercase">{t.about.kicker}</p>
          <p className="mt-10 text-6xl leading-none font-medium tracking-[-0.035em] text-lime md:text-7xl">
            {def.word}
          </p>
          <p className="mt-3 text-white/60">{def.phon}</p>
          <svg aria-hidden viewBox="0 0 300 60" className="mt-8 w-full text-lime" fill="none">
            <path
              d="M2 40 C 40 8, 70 58, 110 30 S 170 6, 200 34 S 262 54, 298 18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <figcaption className="mt-6 text-lg leading-snug text-white/85">{def.text}</figcaption>
        </figure>

        <div className="max-w-xl">
          <h2 className="text-2xl leading-snug font-medium tracking-tight text-balance md:text-4xl md:leading-[1.15]">
            {lead}
          </h2>
          {rest.map((line) => (
            <p key={line} className="mt-4 text-lg leading-relaxed text-slate">
              {line}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
