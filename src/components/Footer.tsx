import type { Content } from "@/content";
import { brand, whatsappUrl } from "@/content/config";
import { Logo } from "./Logo";

// Íconos de redes dibujados en línea (lucide ya no trae logos de marcas).
const socialIcons = {
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3zm4.5 12.6c-.2.5-1.1 1-1.6 1.1-.4.1-.9.1-1.5-.1-.3-.1-.8-.3-1.4-.5-2.4-1-4-3.5-4.1-3.6-.1-.2-1-1.3-1-2.5s.6-1.8.9-2.1c.2-.2.5-.3.6-.3h.5c.1 0 .4 0 .6.4l.8 1.9c.1.1.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.4.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.8-.2 1.4z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" />
    </>
  ),
  tiktok: (
    <path d="M16.6 3c.3 2.2 1.6 3.6 3.9 3.8v2.6c-1.4.1-2.6-.3-3.9-1.1v5.1c0 6.4-7 8.4-9.8 3.8-1.8-3-.7-8.2 5.1-8.4v2.8c-.4.1-.9.2-1.3.3-1.4.5-2.2 1.3-2 2.9.4 2.9 5.7 3.8 5.3-1.9V3h2.7z" />
  ),
  threads: (
    <path d="M16.3 11.2c-.1 0-.2-.1-.3-.1-.2-2.9-1.8-4.6-4.5-4.6-1.6 0-3 .7-3.8 2l1.5 1c.6-.9 1.5-1.1 2.3-1.1 1 0 1.7.3 2.1.9.3.4.5 1 .6 1.7-.8-.1-1.7-.2-2.6-.1-2.6.1-4.3 1.7-4.2 3.8.1 1.1.6 2 1.5 2.6.8.5 1.8.8 2.8.7 1.4-.1 2.5-.6 3.2-1.6.6-.7.9-1.7 1-2.9.7.4 1.2.9 1.4 1.6.5 1.1.5 2.9-.9 4.3-1.2 1.2-2.7 1.8-5 1.8-2.5 0-4.4-.8-5.6-2.4C4.7 17.3 4.1 15.2 4.1 12.5S4.7 7.7 5.9 6.2C7.1 4.6 9 3.8 11.5 3.8s4.4.8 5.7 2.4c.6.8 1.1 1.7 1.4 2.8l1.8-.5c-.4-1.4-1-2.6-1.8-3.6C17 2.8 14.6 1.8 11.5 1.8c-3 0-5.4 1-7 3-1.4 1.8-2.2 4.4-2.2 7.6s.8 5.8 2.2 7.6c1.6 2 4 3 7 3 2.8 0 4.7-.7 6.3-2.3 2.1-2.1 2-4.7 1.3-6.3-.5-1.2-1.5-2.2-2.8-2.8zm-4.6 4.6c-1.1.1-2.2-.4-2.3-1.3 0-.7.5-1.6 2.3-1.7h.6c.7 0 1.3.1 1.9.2-.2 2.4-1.3 2.7-2.5 2.8z" />
  ),
};

export function Footer({ t }: { t: Content }) {
  const socials = [
    { key: "whatsapp", label: t.footer.contactCta, href: whatsappUrl(t.business.whatsappMessage) },
    { key: "instagram", label: "Instagram @clew.pymes", href: brand.social.instagram },
    { key: "tiktok", label: "TikTok @clew.pymes", href: brand.social.tiktok },
    { key: "threads", label: "Threads @clew.pymes", href: brand.social.threads },
  ] as const;

  return (
    // El padding inferior extra en móvil deja espacio a la barra de contacto.
    <footer className="bg-deep pt-12 pb-28 text-white md:pt-14 md:pb-10">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <a href="#inicio" aria-label={`${brand.name}, ${t.ui.homeAria}`} className="text-lime">
              <Logo className="h-6 w-auto" />
            </a>
            <span className="text-sm text-white/60">{t.business.tagline}</span>
          </div>
          <ul className="flex gap-2">
            {socials.map((s) => (
              <li key={s.key}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-lime hover:bg-lime hover:text-ink"
                >
                  <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    {socialIcons[s.key]}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label={t.footer.navTitle} className="mt-8 border-t border-white/10 pt-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {t.footer.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-6 items-center text-white/70 transition-colors hover:text-lime">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={t.ui.switchHref} hrefLang={t.ui.switchLabel.toLowerCase()} aria-label={t.ui.switchAria} className="inline-flex min-h-6 items-center text-white/70 transition-colors hover:text-lime">
                {t.ui.switchLabel === "EN" ? "English" : "Español"}
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-6 flex flex-col gap-1 text-xs text-white/50 md:flex-row md:items-center md:gap-4">
          <p>
            © {new Date().getFullYear()} {brand.name}. {t.footer.rights}
          </p>
          <a href={t.ui.privacyHref} className="inline-flex min-h-6 items-center hover:text-lime">
            {t.footer.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}
