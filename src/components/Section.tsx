import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

const tones = {
  sand: "bg-sand text-ink",
  paper: "bg-paper text-ink",
  deep: "bg-deep text-white",
  lime: "bg-lime text-ink",
};

export type Tone = keyof typeof tones;

type SectionProps = {
  id?: string;
  tone?: Tone;
  children: ReactNode;
};

export function Section({ id, tone = "sand", children }: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} relative overflow-hidden py-20 md:py-28`}>
      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}

// La parte resaltada del titular: lima sobre oscuro, "marcador" lima sobre
// claro y bloque oscuro sobre lima, como en las piezas de marca.
const highlights: Record<Tone, string> = {
  deep: "text-lime",
  sand: "rounded-[0.12em] bg-lime box-decoration-clone px-[0.12em]",
  paper: "rounded-[0.12em] bg-lime box-decoration-clone px-[0.12em]",
  lime: "rounded-[0.12em] bg-deep box-decoration-clone px-[0.12em] text-lime",
};

export function Highlight({ tone, children }: { tone: Tone; children: ReactNode }) {
  return <span className={highlights[tone]}>{children}</span>;
}

type HeadingProps = {
  title: string;
  highlight?: string;
  subtitle?: string;
  tone?: Tone;
};

export function SectionHeading({ title, highlight, subtitle, tone = "sand" }: HeadingProps) {
  const subtitleColor =
    tone === "deep" ? "text-white/75" : tone === "lime" ? "text-ink" : "text-slate";

  return (
    <Reveal className="max-w-3xl">
      <h2 className="text-[2rem] leading-[1.12] font-medium tracking-tight text-balance md:text-5xl md:leading-[1.1]">
        {title}
        {highlight ? (
          <>
            {" "}
            <Highlight tone={tone}>{highlight}</Highlight>
          </>
        ) : null}
      </h2>
      {subtitle ? (
        <p className={`mt-5 text-lg leading-relaxed ${subtitleColor}`}>{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
