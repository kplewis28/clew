"use client";

import { useEffect, useRef, useState } from "react";

type P = { x: number; y: number };

// Pseudoaleatorio estable (mismo enredo en cada visita)
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// Curva suave que pasa por todos los puntos (Catmull-Rom)
function smooth(pts: P[], steps = 10): P[] {
  const out: P[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] ?? p2;
    for (let s = 0; s < steps; s++) {
      const t = s / steps, t2 = t * t, t3 = t2 * t;
      out.push({
        x: 0.5 * (2 * p1.x + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
        y: 0.5 * (2 * p1.y + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
      });
    }
  }
  out.push(pts[pts.length - 1]);
  return out;
}

// El enredo (el caos de la intro) y un hilo lima que lo atraviesa y sale hasta
// el botón. Al pasar el cursor o el dedo, los hilos se apartan: se "desenreda".
type Def = { word: string; phon: string; text: string };

export function HeroThread({ hint, words, def }: { hint: string; words: string[]; def: Def }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [touched, setTouched] = useState(false);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const cv = canvas.current;
    const hero = cv?.parentElement;
    if (!cv || !hero) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, dpr = 1, raf = 0;
    let tangle: { base: P[]; phase: number; amp: number; alpha: number }[] = [];
    let thread: P[] = [];
    let labels: { p: P; w: string; phase: number }[] = [];
    let doneOnce = false;
    let lens: number[] = [];
    const ptr = { x: -9999, y: -9999, active: false };
    let started = -1;

    const build = () => {
      const r = hero.getBoundingClientRect();
      W = r.width;
      H = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = W * dpr;
      cv.height = H * dpr;
      cv.style.width = `${W}px`;
      cv.style.height = `${H}px`;
      const mobile = W < 768;
      const rand = rng(7);
      // Zona del enredo: a la derecha en computador, toda la portada en celular
      const x0 = mobile ? -40 : W * 0.42, x1 = W + 40, y0 = -40, y1 = H + 40;
      const n = mobile ? 34 : 64;
      tangle = Array.from({ length: n }, () => {
        const k = 6 + Math.floor(rand() * 5);
        const pts = Array.from({ length: k }, () => ({ x: x0 + rand() * (x1 - x0), y: y0 + rand() * (y1 - y0) }));
        return { base: smooth(pts, 8), phase: rand() * 6.28, amp: 3 + rand() * 6, alpha: 0.06 + rand() * 0.1 };
      });
      // Las tareas sueltas dentro del enredo, para que se lea como "tu caos"
      const r3 = rng(3);
      // En una rejilla con algo de azar, para que no se monten unas sobre otras
      const cols = mobile ? 3 : 4, rows = Math.ceil(words.length / cols);
      const gx0 = mobile ? W * 0.12 : W * 0.5, gx1 = mobile ? W * 0.88 : W * 0.95;
      const gy0 = mobile ? H * 0.12 : H * 0.16, gy1 = mobile ? H * 0.36 : H * 0.88;
      labels = words.map((w, i) => {
        const c = i % cols, rr = Math.floor(i / cols);
        const cw = (gx1 - gx0) / cols, ch = (gy1 - gy0) / rows;
        return {
          w,
          phase: r3() * 6.28,
          p: { x: gx0 + cw * (c + 0.5) + (r3() - 0.5) * cw * 0.5, y: gy0 + ch * (rr + 0.5) + (r3() - 0.5) * ch * 0.5 },
        };
      });
      // El hilo: entra arriba a la derecha, se anuda tres veces y sale hasta el botón
      const btn = hero.querySelector<HTMLElement>("[data-thread-target]");
      const b = btn?.getBoundingClientRect();
      const end = b ? { x: b.right - r.left + 6, y: b.top - r.top + b.height / 2 } : { x: W * 0.4, y: H * 0.7 };
      const r2 = rng(11);
      const knots = mobile
        ? [{ x: W * 0.7, y: H * 0.17 }, { x: W * 0.36, y: H * 0.24 }, { x: W * 0.74, y: H * 0.31 }]
        : [{ x: W * 0.8, y: H * 0.27 }, { x: W * 0.62, y: H * 0.52 }, { x: W * 0.84, y: H * 0.72 }];
      const way: P[] = [{ x: W + 60, y: mobile ? H * 0.11 : H * 0.1 }];
      knots.forEach((c, i) => {
        // tramo que deambula antes de cada nudo
        way.push({ x: c.x + (r2() - 0.5) * (mobile ? 90 : 220), y: c.y - (mobile ? 40 : 90) + (r2() - 0.5) * 40 });
        const rx = (mobile ? 24 : 42) + r2() * (mobile ? 14 : 30);
        const ry = rx * (0.65 + r2() * 0.5);
        const rot = r2() * Math.PI;
        const dir = i % 2 ? -1 : 1;
        const turns = 1.2 + r2() * 0.5;
        const steps = Math.round(10 * turns);
        for (let a = 0; a <= steps; a++) {
          const ang = (a / steps) * Math.PI * 2 * turns * dir;
          const ex = Math.cos(ang) * rx, ey = Math.sin(ang) * ry;
          const k = 1 + a * 0.015;
          way.push({ x: c.x + (ex * Math.cos(rot) - ey * Math.sin(rot)) * k, y: c.y + (ex * Math.sin(rot) + ey * Math.cos(rot)) * k });
        }
      });
      if (mobile) way.push({ x: W - 8, y: H * 0.36 }, { x: W - 8, y: end.y - 40 }, { x: end.x + 4, y: end.y - 8 }, end);
      else way.push({ x: end.x + 260, y: end.y + 40 }, { x: end.x + 120, y: end.y - 10 }, { x: end.x + 40, y: end.y + 4 }, end);
      thread = smooth(way, 12);
      lens = [0];
      for (let i = 1; i < thread.length; i++) lens.push(lens[i - 1] + Math.hypot(thread[i].x - thread[i - 1].x, thread[i].y - thread[i - 1].y));
    };

    const push = (p: P, t: number, amp: number, phase: number, k: number): P => {
      let x = p.x + (still ? 0 : Math.sin(t * 0.7 + phase + p.y * 0.01) * amp);
      let y = p.y + (still ? 0 : Math.cos(t * 0.6 + phase + p.x * 0.01) * amp);
      if (ptr.active) {
        const dx = x - ptr.x, dy = y - ptr.y, d = Math.hypot(dx, dy), R = W < 768 ? 110 : 170;
        if (d < R && d > 0.1) {
          const f = (1 - d / R) ** 2 * k;
          x += (dx / d) * f;
          y += (dy / d) * f;
        }
      }
      return { x, y };
    };

    const frame = (now: number) => {
      const t = now / 1000;
      const html = document.documentElement;
      const ready = !html.classList.contains("intro-on") || html.classList.contains("intro-hero");
      if (ready && started < 0) started = now;
      const prog = still ? 1 : started < 0 ? 0 : Math.min(1, (now - started - 350) / 2200);
      const ease = 1 - Math.pow(1 - Math.max(0, prog), 3);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Enredo
      for (const ln of tangle) {
        ctx.beginPath();
        let near = 0;
        ln.base.forEach((p, i) => {
          const q = push(p, t, ln.amp, ln.phase, 70);
          if (ptr.active && Math.hypot(q.x - ptr.x, q.y - ptr.y) < 130) near = 1;
          if (i) ctx.lineTo(q.x, q.y);
          else ctx.moveTo(q.x, q.y);
        });
        ctx.strokeStyle = `rgba(246,246,242,${ln.alpha + near * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Tareas sueltas
      ctx.font = `500 ${W < 768 ? 12 : 14}px Inter, "Helvetica Neue", Arial, sans-serif`;
      ctx.textAlign = "center";
      for (const lb of labels) {
        const q = push(lb.p, t, 6, lb.phase, 80);
        ctx.fillStyle = "rgba(246,246,242,0.34)";
        ctx.fillText(lb.w, q.x, q.y);
      }

      // Hilo lima
      if (ease >= 1 && !doneOnce) {
        doneOnce = true;
        setDrawn(true);
      }
      if (ease > 0) {
        const L = lens[lens.length - 1] * ease;
        ctx.beginPath();
        let head = thread[0];
        for (let i = 0; i < thread.length && lens[i] <= L; i++) {
          const q = push(thread[i], t, 1.5, 0, 26);
          head = q;
          if (i) ctx.lineTo(q.x, q.y);
          else ctx.moveTo(q.x, q.y);
        }
        ctx.strokeStyle = "#dfff6a";
        ctx.lineWidth = W < 768 ? 2.5 : 3;
        ctx.shadowColor = "rgba(223,255,106,0.55)";
        ctx.shadowBlur = 14;
        ctx.stroke();
        // Punta del hilo
        ctx.beginPath();
        ctx.arc(head.x, head.y, ease < 1 ? 5 : 4 + Math.sin(t * 3) * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "#dfff6a";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      if (!still) raf = requestAnimationFrame(frame);
    };

    const move = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      ptr.x = e.clientX - r.left;
      ptr.y = e.clientY - r.top;
      ptr.active = true;
      setTouched(true);
    };
    const leave = () => {
      ptr.active = false;
    };

    build();
    raf = requestAnimationFrame(frame);
    const ro = new ResizeObserver(() => {
      build();
      if (still) raf = requestAnimationFrame(frame);
    });
    ro.observe(hero);
    if (!still) {
      hero.addEventListener("pointermove", move);
      hero.addEventListener("pointerdown", move);
      hero.addEventListener("pointerleave", leave);
      hero.addEventListener("pointerup", (e) => e.pointerType !== "mouse" && leave());
    }
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerdown", move);
      hero.removeEventListener("pointerleave", leave);
    };
  }, [words]);

  return (
    <>
      <canvas ref={canvas} aria-hidden className="hero-wall pointer-events-none absolute inset-0 -z-10" />
      {/* Qué significa el hilo: la definición de la palabra clew */}
      <p
        className={`pointer-events-none absolute right-[5%] bottom-[12%] hidden max-w-[17rem] border-l-2 border-lime pl-4 transition-all duration-700 lg:block ${drawn ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
      >
        <span className="block text-sm text-white">
          <span className="font-medium text-lime">{def.word}</span> <span className="text-white/50">{def.phon}</span>
        </span>
        <span className="mt-1 block text-sm leading-snug text-white/75">{def.text}</span>
      </p>
      <p
        aria-hidden
        className={`thread-hint pointer-events-none absolute right-5 bottom-6 hidden items-center gap-2 text-xs tracking-[0.14em] text-white/45 uppercase transition-opacity duration-700 md:right-8 md:bottom-8 md:flex ${touched ? "opacity-0" : "opacity-100"}`}
      >
        <span className="size-1.5 rounded-full bg-lime" />
        {hint}
      </p>
    </>
  );
}
