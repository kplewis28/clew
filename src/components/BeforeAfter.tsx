"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
  ariaLabel: string;
};

// Comparador: la foto de "antes" se recorta sobre la de "después" y se mueve
// arrastrando, tocando o con las flechas del teclado (es un input range).
export function BeforeAfter({ before, after, beforeAlt, afterAlt, beforeLabel, afterLabel, ariaLabel }: Props) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[16/10] w-full select-none overflow-hidden bg-deep">
      <Image src={after} alt={afterAlt} fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover object-top" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={beforeAlt} fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover object-top" />
      </div>

      <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium tracking-[0.15em] text-white uppercase md:top-4 md:left-4">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-lime px-3 py-1 text-xs font-medium tracking-[0.15em] text-ink uppercase md:top-4 md:right-4">
        {afterLabel}
      </span>

      {/* Línea y manija */}
      <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-lime" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-lime text-ink shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
          <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={ariaLabel}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
