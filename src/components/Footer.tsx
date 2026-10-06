import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Content } from "@/content";
import { brand, whatsappUrl } from "@/content/config";
import { Logo } from "./Logo";

function ColumnTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-sm font-medium text-white">{children}</h2>;
}

const linkClass = "text-white/70 transition-colors hover:text-lime";

export function Footer({ t }: { t: Content }) {
  return (
    // El padding inferior extra en móvil deja espacio al botón flotante.
    <footer className="border-t border-white/10 bg-deep pt-14 pb-28 text-white md:pt-20 md:pb-10">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div>
            <a href="#inicio" aria-label={`${brand.name}, ${t.ui.homeAria}`} className="text-lime">
              <Logo className="h-6 w-auto" />
            </a>
            <p className="mt-4 max-w-xs leading-relaxed text-white/70">{t.business.tagline}</p>
          </div>

          <nav aria-label={t.footer.navTitle}>
            <ColumnTitle>{t.footer.navTitle}</ColumnTitle>
            <ul className="mt-4 flex flex-col gap-3">
              {t.footer.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <ColumnTitle>{t.footer.contactTitle}</ColumnTitle>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={whatsappUrl(t.business.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 ${linkClass}`}
                >
                  {t.footer.contactCta}
                  <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-4" />
                </a>
              </li>
              <li>
                <a
                  href={t.ui.switchHref}
                  hrefLang={t.ui.switchLabel.toLowerCase()}
                  aria-label={t.ui.switchAria}
                  className={linkClass}
                >
                  {t.footer.languageTitle}: {t.ui.switchLabel === "EN" ? "English" : "Español"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-white/10 pt-6 text-sm text-white/60 md:mt-20">
          © {new Date().getFullYear()} {brand.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
