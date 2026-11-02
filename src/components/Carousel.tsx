"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, type ReactNode } from "react";

type Props = { children: ReactNode; prevLabel: string; nextLabel: string };

// Fila horizontal con desplazamiento por tarjeta: se desliza con el dedo
// en el celular y con las flechas en el computador.
export function Carousel({ children, prevLabel, nextLabel }: Props) {
  const track = useRef<HTMLUListElement>(null);
  const move = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="absolute -top-20 right-0 hidden gap-2 md:flex">
        <button type="button" onClick={() => move(-1)} aria-label={prevLabel} className="flex size-12 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-ink hover:bg-ink hover:text-lime">
          <ChevronLeft aria-hidden strokeWidth={1.75} className="size-5" />
        </button>
        <button type="button" onClick={() => move(1)} aria-label={nextLabel} className="flex size-12 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-ink hover:bg-ink hover:text-lime">
          <ChevronRight aria-hidden strokeWidth={1.75} className="size-5" />
        </button>
      </div>
      <ul
        ref={track}
        className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:scroll-px-0 md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
    </div>
  );
}
