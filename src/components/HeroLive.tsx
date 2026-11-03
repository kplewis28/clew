"use client";

import { BellRing, CalendarCheck, CircleCheck, FileText, MessageCircle, Moon, PackageCheck, Star, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

type Live = {
  time: string;
  badge: string;
  title: string;
  note: string;
  auto: string;
  kpis: { label: string; start: number }[];
  events: { icon: string; title: string; detail: string; kpi: number }[];
};

const ICONS: Record<string, LucideIcon> = {
  order: PackageCheck,
  chat: MessageCircle,
  quote: FileText,
  paid: CircleCheck,
  date: CalendarCheck,
  stock: BellRing,
  review: Star,
};

// Panel "en vivo": las tareas del negocio pasan solas mientras el dueño descansa.
// Es un ejemplo ilustrativo (lo dice el pie), no datos de un cliente.
export function HeroLive({ live }: { live: Live }) {
  const [n, setN] = useState(3);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setN((v) => v + 1), 1700);
    return () => window.clearInterval(id);
  }, []);

  const E = live.events.length;
  const feed = Array.from({ length: Math.min(n, 4) }, (_, k) => {
    const idx = n - 1 - k;
    return { key: idx, ...live.events[idx % E] };
  });
  const counts = live.kpis.map((kp, i) => {
    let c = kp.start;
    for (let j = 0; j < n; j++) if (live.events[j % E].kpi === i) c++;
    return c;
  });

  return (
    <div className="live-tilt relative">
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b100b] p-5 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.95)] md:p-6">
        {/* Encabezado */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.14em] whitespace-nowrap text-lime uppercase md:text-xs">
              <Moon aria-hidden strokeWidth={2} className="size-3.5" />
              {live.badge}
            </p>
            <p className="mt-2 text-[2rem] leading-none font-medium tracking-[-0.04em] whitespace-nowrap text-white tabular-nums md:text-5xl">{live.time}</p>
          </div>
          <span className="mt-1 flex shrink-0 items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/70">
            <span className="live-dot size-2 rounded-full bg-lime" />
            {live.title}
          </span>
        </div>

        {/* Cifras del día */}
        <dl className="mt-5 grid grid-cols-3 gap-2">
          {live.kpis.map((kp, i) => (
            <div key={kp.label} className="rounded-2xl bg-white/[0.05] px-3 py-3">
              <dd key={counts[i]} className="live-num text-2xl font-medium tracking-[-0.03em] text-white tabular-nums md:text-3xl">
                {counts[i]}
              </dd>
              <dt className="mt-0.5 text-[0.7rem] leading-tight text-white/55 md:text-xs">{kp.label}</dt>
            </div>
          ))}
        </dl>

        {/* Lo que va pasando */}
        <ul className="relative mt-4 flex h-[19rem] flex-col gap-2 overflow-hidden md:h-[20.5rem]">
          {feed.map((ev, k) => {
            const Icon = ICONS[ev.icon] ?? CircleCheck;
            return (
              <li
                key={ev.key}
                className={`flex items-center gap-3 rounded-2xl border px-3.5 py-3 transition-all duration-500 ${k === 0 ? "live-new border-lime/40 bg-lime/[0.07]" : "border-white/[0.07] bg-white/[0.03]"}`}
                style={{ opacity: 1 - k * 0.2 }}
              >
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${k === 0 ? "bg-lime text-ink" : "bg-white/[0.07] text-white/80"}`}>
                  <Icon aria-hidden strokeWidth={1.75} className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[0.95rem] font-medium text-white">{ev.title}</span>
                  <span className="block truncate text-sm text-white/55">{ev.detail}</span>
                </span>
                <span className="hidden shrink-0 rounded-full bg-white/[0.06] px-2.5 py-1 text-[0.7rem] text-lime sm:inline">{live.auto}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="mt-3 text-center text-xs text-white/40">{live.note}</p>
    </div>
  );
}
