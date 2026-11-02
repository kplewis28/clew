import type { CSSProperties } from "react";
import type { Content } from "@/content";
import { brand } from "@/content/config";
import { Logo } from "./Logo";
import { HeroThread } from "./HeroThread";
import { WhatsAppButton } from "./WhatsAppButton";

// Hero: la promesa en grande con un solo botón. Detrás, el enredo de la intro
// y un hilo lima (clew = el hilo que saca del laberinto) que termina en el botón.
// La intro (HeroIntro) desemboca aquí.
export function Hero({ t }: { t: Content }) {
  return (
    <div className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-deep text-white">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-8 md:py-7">
        <a href="#inicio" aria-label={`${brand.name}, ${t.ui.homeAria}`} className="text-lime">
          <Logo className="h-5 w-auto md:h-6" />
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cambio de idioma: las dos opciones a la vista, la actual marcada.
              Recarga completa para que <html lang> cambie */}
          <nav
            aria-label={t.ui.languageAria}
            className="flex min-h-11 items-center gap-0.5 rounded-full border border-white/30 bg-black/40 p-1 pl-2.5 text-sm font-semibold backdrop-blur-md"
          >
            {/* Ícono de idioma (globo) en vez de banderas: el español no es de un solo país */}
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="mr-1 size-[18px] shrink-0 text-lime">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
            </svg>
            {[
              { code: "ES", name: "Español" },
              { code: "EN", name: "English" },
            ].map(({ code, name }) => {
              const label = (
                <>
                  <span className="sm:hidden">{code}</span>
                  <span className="hidden sm:inline">{name}</span>
                </>
              );
              return code === t.ui.currentLabel ? (
                <span key={code} aria-current="true" className="rounded-full bg-white px-2.5 py-1.5 text-deep sm:px-3">
                  {label}
                </span>
              ) : (
                <a
                  key={code}
                  href={t.ui.switchHref}
                  hrefLang={code.toLowerCase()}
                  aria-label={t.ui.switchAria}
                  className="rounded-full px-2.5 py-1.5 text-white/80 transition-colors hover:bg-white/15 hover:text-white sm:px-3"
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      <HeroThread hint={t.hero.threadHint} />

      <section
        id="inicio"
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pt-8 pb-16 md:justify-center md:px-8 lg:pb-20"
      >
        <div className="max-w-[46rem]">
          <h1 className="text-[clamp(3rem,7vw,6.6rem)] leading-[0.93] font-medium tracking-[-0.055em]">
            <span className="hero-pop block" style={{ "--d": "80ms" } as CSSProperties}>
              {t.hero.titleStart}
            </span>
            <span className="hero-pop block" style={{ "--d": "220ms" } as CSSProperties}>
              {t.hero.titleMid}{" "}
              <span className="hero-strike" style={{ "--d": "700ms" } as CSSProperties}>
                {t.hero.titleHighlight}
              </span>
            </span>
          </h1>
          <p
            className="hero-in mt-7 max-w-[30rem] text-lg leading-relaxed text-pretty text-white/75 md:text-xl"
            style={{ "--d": "900ms" } as CSSProperties}
          >
            {t.hero.subtitle}
          </p>
          <div className="hero-in mt-9" style={{ "--d": "1050ms" } as CSSProperties}>
            <span data-thread-target className="inline-flex w-full sm:w-auto">
              <WhatsAppButton t={t} label={t.hero.cta} message={t.hero.ctaMessage} className="w-full sm:w-auto" />
            </span>
          </div>
        </div>

      </section>
    </div>
  );
}
