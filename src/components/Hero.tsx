import Image from "next/image";
import type { Content } from "@/content";
import { brand } from "@/content/config";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

// Hero a sangre: foto de una consulta real (consultora y dueña de negocio) de
// fondo, texto encima a la izquierda y tres tarjetas translúcidas abajo.
// Foto elegida por Cindy (public/hero-reunion.jpg), al estilo de su referencia.
export function Hero({ t }: { t: Content }) {
  return (
    <div className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-deep text-white">
      {/* En móvil la foto ocupa la parte alta y el texto queda debajo; en escritorio, todo el fondo */}
      <div className="absolute inset-x-0 top-0 -z-20 h-[52%] md:inset-0 md:h-auto">
        <Image
          src="/hero-reunion.jpg"
          alt={t.hero.photoAlt}
          fill
          priority
          quality={65}
          sizes="100vw"
          className="object-cover object-[76%_30%] md:object-[75%_30%] lg:origin-[70%_30%] lg:scale-[1.05] lg:object-[68%_30%]"
        />
        {/* Funde el borde inferior de la foto con el fondo (solo móvil) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-deep to-transparent md:hidden" />
      </div>
      {/* Móvil: las personas arriba y el texto abajo, sobre un degradado desde el pie.
          Escritorio: degradado desde la izquierda, donde va el texto. */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-gradient-to-t from-deep via-deep to-transparent md:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black/90 via-black/70 via-45% to-black/10 md:block" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-black/60 to-transparent" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-8 md:py-7">
        <a href="#inicio" aria-label={`${brand.name}, ${t.ui.homeAria}`} className="text-lime">
          <Logo className="h-5 w-auto md:h-6" />
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cambio de idioma: recarga completa para que <html lang> cambie */}
          <a
            href={t.ui.switchHref}
            hrefLang={t.ui.switchLabel.toLowerCase()}
            aria-label={t.ui.switchAria}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 px-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-lime hover:text-lime"
          >
            {t.ui.switchLabel}
          </a>
          <WhatsAppButton t={t} label={t.cta.short} size="md" />
        </div>
      </header>

      <section
        id="inicio"
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pt-16 pb-10 md:justify-center md:px-8 md:pt-10 md:pb-8"
      >
        <div className="max-w-2xl [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
          <h1 className="text-[clamp(2.6rem,4.4vw,4rem)] leading-[1.02] font-medium tracking-[-0.035em]">
            <span className="block">{t.hero.titleStart}</span>{" "}
            <span className="block text-lime">{t.hero.titleHighlight}</span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-white md:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-8">
            <WhatsAppButton t={t} className="w-full sm:w-auto" />
          </div>
        </div>

        <ul className="mt-14 hidden gap-3 sm:grid sm:grid-cols-3 lg:mt-24">
          {t.hero.chips.map((chip) => (
            <li
              key={chip.title}
              className="rounded-2xl border border-white/20 bg-black/45 px-5 py-4 backdrop-blur-md"
            >
              <p className="font-medium text-white">{chip.title}</p>
              <p className="mt-0.5 text-sm text-white/85">{chip.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
