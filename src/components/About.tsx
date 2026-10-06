import Image from "next/image";
import type { Content } from "@/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About({ t }: { t: Content }) {
  const [lead, ...rest] = t.about.lines;

  return (
    <Section id="quien" tone="paper">
      <Reveal className="grid items-center gap-10 md:grid-cols-[280px_1fr] md:gap-16">
        <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-3xl bg-sand">
          {t.about.photo ? (
            <Image
              src={t.about.photo}
              alt={t.about.photoAlt}
              fill
              sizes="280px"
              className="object-cover object-[50%_35%]"
            />
          ) : (
            <span className="flex h-full items-center justify-center text-sm text-slate">
              {t.about.photoPlaceholder}
            </span>
          )}
        </div>

        <div className="max-w-2xl">
          <h2 className="text-2xl leading-snug font-medium tracking-tight text-balance md:text-4xl md:leading-[1.15]">
            {lead}
          </h2>
          {rest.map((line) => (
            <p key={line} className="mt-5 text-lg leading-relaxed text-slate">
              {line}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
