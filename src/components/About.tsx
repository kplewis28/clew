import Image from "next/image";
import type { Content } from "@/content";
import { Reveal } from "./Reveal";

// Quién está detrás de clew. El hilo lima entra desde afuera y termina en sus
// gafas cuando la sección aparece (ver .thread-draw en globals.css).
export function About({ t }: { t: Content }) {
  const a = t.about;

  return (
    <section id="quien" className="relative overflow-hidden bg-deep py-20 text-white md:py-32">
      <Reveal className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 md:px-8">
        <div className="relative mx-auto w-full max-w-[460px] md:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-paper">
            <Image
              src={a.photo}
              alt={a.photoAlt}
              fill
              sizes="(min-width: 768px) 460px, 90vw"
              className="object-cover object-[50%_40%]"
            />
          </div>
          <svg
            aria-hidden
            viewBox="0 0 100 125"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible text-lime"
            fill="none"
          >
            <path
              className="thread-draw"
              pathLength={1}
              d="M -40 120 C -22 112, -30 92, -12 86 S 6 96, 10 80 S 2 58, 16 54 S 28 49, 31.5 47"
              stroke="currentColor"
              strokeWidth={0.75}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute bottom-4 left-4 rounded-full bg-lime px-4 py-2 text-sm font-medium text-ink">
            {a.badge}
          </span>
        </div>

        <div>
          <p className="text-sm tracking-[0.16em] text-lime uppercase">{a.kicker}</p>
          <h2 className="mt-5 text-[2.6rem] leading-[1.02] font-medium tracking-[-0.035em] text-balance md:text-7xl">
            {a.name} <span className="text-lime">{a.role}</span>
          </h2>
          {a.lines.map((line) => (
            <p key={line} className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              {line}
            </p>
          ))}

          <ul className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
            {a.stats.map((s) => (
              <li key={s.label} className="bg-deep p-4 md:p-6">
                <p className="text-3xl leading-none font-medium tracking-[-0.035em] text-lime md:text-5xl">{s.value}</p>
                <p className="mt-3 text-[13px] leading-snug text-white/70 md:text-sm">{s.label}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xl leading-snug font-medium tracking-tight text-white md:text-2xl">{a.quote}</p>
        </div>
      </Reveal>
    </section>
  );
}
