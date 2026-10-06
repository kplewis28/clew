import type { Content } from "@/content";
import { Reveal } from "./Reveal";
import { Ribbon } from "./Ribbon";
import { WhatsAppButton } from "./WhatsAppButton";

export function FinalCta({ t }: { t: Content }) {
  return (
    <section id="agenda" className="relative overflow-hidden bg-deep py-24 text-white md:py-36">
      {/* La cinta lima animada del moodboard (reacciona al cursor) */}
      <Ribbon className="pointer-events-none absolute right-0 bottom-0 hidden w-[min(62%,920px)] max-w-none translate-y-[30%] opacity-90 md:block" />

      <Reveal className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <h2 className="max-w-4xl text-[2.5rem] leading-[1.04] font-medium tracking-[-0.035em] text-balance md:text-7xl">
          {t.finalCta.title} <span className="text-lime">{t.finalCta.highlight}</span>
        </h2>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
          {t.finalCta.text}
        </p>
        <div className="mt-9 flex flex-col items-start gap-4">
          <WhatsAppButton t={t} className="w-full sm:w-auto" />
          <p className="text-sm text-white/65">{t.hero.note}</p>
        </div>
      </Reveal>
    </section>
  );
}
