"use client";

import { useEffect, useRef } from "react";

type Tile = { src: string; label: string };

function Rows({ tiles, eager }: { tiles: Tile[]; eager?: boolean }) {
  const rows = [0, 1, 2].map((r) => {
    const t = tiles.slice(r * 3, r * 3 + 4);
    return [...t, ...t, ...t];
  });
  return (
    <div className="wall-inner absolute top-1/2 left-1/2 flex w-[230%] -translate-x-1/2 -translate-y-1/2 -rotate-[9deg] flex-col gap-5 md:w-[160%] md:gap-7">
      {rows.map((row, i) => (
        <div key={i} className={`wall-row flex w-max gap-5 md:gap-7 ${i % 2 ? "wall-row-rev" : ""}`}>
          {row.map((tile, j) => (
            <figure key={j} className="relative w-[15rem] shrink-0 overflow-hidden rounded-2xl md:w-[24rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tile.src} alt="" loading={eager && i === 0 && j < 4 ? "eager" : "lazy"} className="aspect-[16/10] w-full object-cover object-top" />
              <figcaption className="absolute bottom-2.5 left-2.5 rounded-full bg-black/80 px-2.5 py-1 text-[0.65rem] tracking-[0.1em] text-white/90 uppercase md:text-xs">
                {tile.label}
              </figcaption>
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}

// Muro de trabajo real, apagado, con una lupa lima que lo enciende donde pasa:
// sigue el cursor (o el dedo) y, si nadie la mueve, recorre el muro sola.
export function HeroWall({ tiles, lensLabel }: { tiles: Tile[]; lensLabel: string }) {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    const hero = el?.parentElement;
    if (!el || !hero) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let tx = 0, ty = 0, x = 0, y = 0, last = -1e9, raf = 0;
    const t0 = performance.now();
    const onMove = (e: PointerEvent) => {
      // Sobre el texto o los botones, la lupa no tapa: vuelve a su recorrido
      if ((e.target as Element | null)?.closest?.("#inicio > *, header")) return;
      const r = hero.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      last = performance.now();
    };
    hero.addEventListener("pointermove", onMove);
    const loop = (now: number) => {
      const w = el.clientWidth, h = el.clientHeight;
      const mobile = w < 768;
      if (now - last > 2500) {
        const s = still ? 0 : (now - t0) / 1000;
        tx = w * (mobile ? 0.5 : 0.7) + w * (mobile ? 0.28 : 0.18) * Math.sin(s * 0.55);
        ty = h * (mobile ? 0.17 : 0.5) + h * (mobile ? 0.04 : 0.26) * Math.sin(s * 0.9);
      }
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.setProperty("--lx", `${x}px`);
      el.style.setProperty("--ly", `${y}px`);
      el.style.setProperty("--px", `${(x / w - 0.5) * -24}px`);
      el.style.setProperty("--py", `${(y / h - 0.5) * -16}px`);
      if (!still || now - t0 < 400) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={box} aria-hidden className="hero-wall pointer-events-none absolute inset-0 -z-10 [--lr:5.5rem] md:[--lr:11rem]">
      {/* Apagado */}
      <div className="wall-parallax absolute inset-0 opacity-[0.11]">
        <Rows tiles={tiles} eager />
      </div>
      {/* Encendido dentro de la lupa */}
      <div className="wall-parallax wall-lens absolute inset-0">
        <Rows tiles={tiles} />
      </div>
      {/* Aro de la lupa */}
      <div className="lens-ring absolute rounded-full border-2 border-lime">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-2.5 py-0.5 text-[0.65rem] font-medium tracking-[0.14em] whitespace-nowrap text-ink uppercase md:text-xs">
          {lensLabel}
        </span>
      </div>
    </div>
  );
}
