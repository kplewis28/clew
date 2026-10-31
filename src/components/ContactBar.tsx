import { MessageCircle, Phone } from "lucide-react";
import type { Content } from "@/content";
import { brand, whatsappUrl, type Locale } from "@/content/config";
import { ShowAfterScroll } from "./ShowAfterScroll";

// Contacto rápido: barra fija abajo en el celular y botones flotantes en computador.
const labels: Record<Locale, { region: string; call: string; message: string; callLong: string }> = {
  es: { region: "Contacto rápido", call: "Llamar", message: "WhatsApp", callLong: "Llamar" },
  en: { region: "Quick contact", call: "Call", message: "WhatsApp", callLong: "Call" },
};

// +57 300 843 8670
const pretty = `+${brand.whatsappNumber.slice(0, 2)} ${brand.whatsappNumber.slice(2, 5)} ${brand.whatsappNumber.slice(5, 8)} ${brand.whatsappNumber.slice(8)}`;
const tel = `tel:+${brand.whatsappNumber}`;

export function ContactBar({ t, lang }: { t: Content; lang: Locale }) {
  const l = labels[lang];
  const wa = whatsappUrl(t.business.whatsappMessage);

  return (
    <>
      {/* Espacio para que la barra no tape el final de la página en el celular */}
      <div aria-hidden className="h-[calc(76px+env(safe-area-inset-bottom))] bg-deep md:hidden" />

      <aside aria-label={l.region}>
        {/* Celular */}
        <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2.5 border-t border-white/10 bg-deep px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] md:hidden">
          <a
            href={tel}
            className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-lime/60 text-[15px] font-medium text-lime"
          >
            <Phone aria-hidden strokeWidth={1.75} className="size-[18px]" />
            {l.call}
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.cta.floatingLabel}
            className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-lime text-[15px] font-medium text-ink"
          >
            <MessageCircle aria-hidden strokeWidth={1.75} className="size-[18px]" />
            {l.message}
          </a>
        </div>

        {/* Computador */}
        <ShowAfterScroll className="fixed right-6 bottom-6 z-50 hidden flex-col items-end gap-2.5 md:flex">
          <a
            href={tel}
            className="flex min-h-11 items-center gap-2 rounded-full border border-lime/50 bg-deep px-5 text-sm font-medium text-lime shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)] transition-colors hover:border-lime"
          >
            <Phone aria-hidden strokeWidth={1.75} className="size-4" />
            {l.callLong} {pretty}
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center gap-2 rounded-full bg-lime px-6 text-[15px] font-medium text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)] transition-colors hover:bg-white"
          >
            <MessageCircle aria-hidden strokeWidth={1.75} className="size-[18px]" />
            {t.cta.floatingLabel}
          </a>
        </ShowAfterScroll>
      </aside>
    </>
  );
}
