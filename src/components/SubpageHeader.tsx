import { ArrowLeft } from "lucide-react";
import { brand } from "@/content/config";
import { Logo } from "./Logo";

type Props = {
  homeHref: string;
  homeAria: string;
  backHref: string;
  backLabel: string;
  width?: "6xl" | "3xl";
};

// Encabezado de las páginas internas: fijo arriba al bajar, con el logo y un botón
// claro para volver, en la esquina superior izquierda donde la gente lo busca.
export function SubpageHeader({ homeHref, homeAria, backHref, backLabel, width = "6xl" }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-deep/95 text-white backdrop-blur-md">
      <div
        className={`mx-auto flex w-full items-center gap-4 px-5 py-3 md:gap-6 md:px-8 ${width === "3xl" ? "max-w-3xl" : "max-w-6xl"}`}
      >
        <a href={homeHref} aria-label={`${brand.name}, ${homeAria}`} className="shrink-0 text-lime">
          <Logo className="h-5 w-auto md:h-6" />
        </a>
        <span aria-hidden className="h-6 w-px bg-white/15" />
        <a
          href={backHref}
          className="group inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/20 py-1.5 pr-4 pl-1.5 text-sm font-medium text-white transition-colors hover:border-lime hover:text-lime focus-visible:outline-2 focus-visible:outline-lime"
        >
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-lime text-ink transition-transform group-hover:-translate-x-0.5">
            <ArrowLeft aria-hidden strokeWidth={2} className="size-4" />
          </span>
          {backLabel}
        </a>
      </div>
    </header>
  );
}
