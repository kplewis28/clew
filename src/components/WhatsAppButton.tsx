import { ArrowRight } from "lucide-react";
import type { Content } from "@/content";
import { whatsappUrl } from "@/content/config";

const variants = {
  // Sobre fondos oscuros
  lime: "bg-lime text-ink hover:bg-white",
  // Sobre fondos claros o lima
  dark: "bg-deep text-lime hover:bg-slate",
};

type Props = {
  t: Content;
  variant?: keyof typeof variants;
  label?: string;
  size?: "md" | "lg";
  className?: string;
};

export function WhatsAppButton({
  t,
  variant = "lime",
  label = t.cta.primary,
  size = "lg",
  className = "",
}: Props) {
  const sizing = size === "lg" ? "min-h-14 px-7 text-base md:text-lg" : "min-h-11 px-5 text-sm";

  return (
    <a
      href={whatsappUrl(t.business.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-colors duration-200 ${sizing} ${variants[variant]} ${className}`}
    >
      {label}
      <ArrowRight
        aria-hidden
        strokeWidth={1.75}
        className="size-5 transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </a>
  );
}
