"use client";

import { RotateCcw } from "lucide-react";

// Botón discreto para volver a ver la intro (con sonido, porque es un toque)
export function ReplayIntro({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("clew:replay-intro"))}
      className="absolute bottom-5 left-5 z-10 flex min-h-11 items-center gap-2 rounded-full px-3 text-xs tracking-[0.14em] text-white/50 uppercase transition-colors hover:text-lime md:bottom-7 md:left-8"
    >
      <RotateCcw aria-hidden strokeWidth={1.75} className="size-4" />
      {label}
    </button>
  );
}
