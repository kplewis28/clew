import { MessageCircle } from "lucide-react";
import type { Content } from "@/content";
import { whatsappUrl } from "@/content/config";

// Botón fijo de WhatsApp, solo en móvil.
export function FloatingWhatsApp({ t }: { t: Content }) {
  return (
    <a
      href={whatsappUrl(t.business.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.cta.floatingLabel}
      className="fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full border-2 border-lime bg-deep text-lime shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5)] md:hidden"
    >
      <MessageCircle aria-hidden strokeWidth={1.75} className="size-6" />
    </a>
  );
}
