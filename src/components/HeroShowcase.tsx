"use client";

import { useEffect, useState } from "react";

type Project = { src: string; name: string; type: string; url: string };

// Vitrina del hero: un navegador que pasa por proyectos reales, uno a la vez.
export function HeroShowcase({ projects }: { projects: Project[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % projects.length), 3800);
    return () => window.clearInterval(id);
  }, [projects.length]);

  const p = projects[i];

  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b100b] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="ml-3 truncate rounded-md bg-white/[0.06] px-3 py-1 text-xs text-white/60">{p.url}</span>
        </div>
        <div className="relative aspect-[16/10]">
          {projects.map((x, k) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={x.src}
              src={x.src}
              alt={`${x.name}: ${x.type}`}
              loading={k === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 size-full object-cover object-top transition-all duration-700 ${k === i ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"}`}
            />
          ))}
        </div>
      </div>
      <figcaption className="mt-4 flex items-center justify-between gap-4 text-sm">
        <span key={p.name} className="showcase-cap">
          <span className="font-medium text-white">{p.name}</span>
          <span className="text-white/55"> · {p.type}</span>
        </span>
        <span className="flex gap-1.5">
          {projects.map((x, k) => (
            <button
              key={x.name}
              type="button"
              onClick={() => setI(k)}
              aria-label={x.name}
              className="flex h-6 items-center"
            >
              <span className={`block h-1 rounded-full transition-all duration-500 ${k === i ? "w-8 bg-lime" : "w-4 bg-white/25"}`} />
            </button>
          ))}
        </span>
      </figcaption>
    </figure>
  );
}
