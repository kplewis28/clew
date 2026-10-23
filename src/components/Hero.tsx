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
          {/* Mismo ancho que el título para que el párrafo no quede en una columna angosta */}
          <p className="mt-7 max-w-[36rem] text-lg leading-relaxed text-pretty text-white md:text-xl">
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
