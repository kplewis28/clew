"use client";

import { useEffect, useRef } from "react";

// Cinta lima acanalada del moodboard, animada en canvas: ondula sola, un brillo
// la recorre y se curva hacia el cursor (o el dedo) cuando pasa cerca.
// Misma geometría que scripts/make-ribbon.mjs (public/ribbon.svg es la versión fija).

const W = 1200;
const H = 760;
const BANDS = 28;
const STEP = 24;
const STOPS = 14;

type RGB = [number, number, number];
const DARK: RGB = [18, 28, 14];
const LIME: RGB = [223, 255, 106];
const GLOW: RGB = [248, 255, 214];

const mix = (a: RGB, b: RGB, k: number) =>
  `rgb(${a.map((v, j) => Math.round(v + (b[j] - v) * k)).join(",")})`;

// La punta izquierda siempre nace de un punto (ancho 0) para que nunca se vea cortada.
const smoothstep = (a: number, b: number, x: number) => {
  const k = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return k * k * (3 - 2 * k);
};

function shade(band: number, twist: number, light: number) {
  const t = (band + 0.5) / BANDS - 0.5;
  const facing = Math.pow(Math.abs(twist), 0.7);
  const across = 0.5 - t * Math.sign(twist || 1); // 0 … 1, borde que mira a la luz
  const rib = band % 2 === 0 ? 1 : 0.86;
  const base = (0.12 + 0.88 * facing) * (0.45 + 0.6 * across) * rib;
  // El brillo se concentra en el borde iluminado, como un reflejo sobre la superficie.
  const k = Math.min(1.08, base + light * facing * (0.25 + 0.75 * across) * rib);
  return k > 0.9 ? mix(LIME, GLOW, (k - 0.9) / 0.18) : mix(DARK, LIME, k / 0.9);
}

export function Ribbon({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const xs = Array.from({ length: Math.ceil(W / STEP) + 2 }, (_, i) => i * STEP);
    const pointer = { x: W * 0.7, y: H * 0.3, active: 0 };
    const eased = { ...pointer };
    let scale = 1;
    let frame = 0;
    let onScreen = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      scale = canvas.width / W;
    };

    const draw = (ms: number) => {
      const time = ms / 1000;
      eased.x += (pointer.x - eased.x) * 0.08;
      eased.y += (pointer.y - eased.y) * 0.08;
      eased.active += (pointer.active - eased.active) * 0.06;

      const sway = Math.sin(time * 0.35) * 0.3;
      // El cursor atrae la cinta, pero sin sacarla del lienzo.
      const targetY = Math.min(560, Math.max(200, eased.y));
      const spine = xs.map((x) => {
        let y =
          385 +
          170 * Math.sin((x + 254) / 215 + 0.2 + sway) +
          25 * Math.sin((x + 254) / 95 + 1.4 + time * 0.7);
        const d = (x - eased.x) / 240;
        y += (targetY - y) * 0.4 * Math.exp(-d * d) * eased.active * smoothstep(0, 260, x);
        return y;
      });
      const twist = xs.map((x) =>
        Math.sin(x / 520 + 0.2 * Math.sin(time * 0.45) * smoothstep(0, 400, x)),
      );
      const half = xs.map((x, i) => 165 * twist[i] * smoothstep(0, 220, x));
      // Brillo que recorre la cinta de izquierda a derecha.
      const sweep = (((time * 0.11) % 1.5) - 0.25) * W;

      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = 0.8;

      for (let b = 0; b < BANDS; b++) {
        const top = b / BANDS - 0.5;
        const bottom = (b + 1) / BANDS - 0.5;

        ctx.beginPath();
        xs.forEach((x, i) => {
          const y = spine[i] + top * 2 * half[i];
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        for (let i = xs.length - 1; i >= 0; i--) {
          ctx.lineTo(xs[i], spine[i] + bottom * 2 * half[i]);
        }
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, W, 0);
        for (let s = 0; s <= STOPS; s++) {
          const x = (s / STOPS) * W;
          const i = Math.min(xs.length - 1, Math.round(x / STEP));
          const ds = (x - sweep) / 160;
          const dp = (x - eased.x) / 170;
          const light = 0.3 * Math.exp(-ds * ds) + 0.22 * Math.exp(-dp * dp) * eased.active;
          gradient.addColorStop(s / STOPS, shade(b, twist[i], light));
        }
        ctx.fillStyle = gradient;
        ctx.strokeStyle = gradient; // tapa las líneas finas entre canales
        ctx.fill();
        ctx.stroke();
      }
    };

    const loop = (ms: number) => {
      draw(ms);
      frame = onScreen && !document.hidden ? requestAnimationFrame(loop) : 0;
    };
    const start = () => {
      if (!reduceMotion && !frame) frame = requestAnimationFrame(loop);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * W;
      pointer.y = ((event.clientY - rect.top) / rect.height) * H;
      const near =
        event.clientX > rect.left - 200 &&
        event.clientX < rect.right + 200 &&
        event.clientY > rect.top - 200 &&
        event.clientY < rect.bottom + 200;
      pointer.active = near ? 1 : 0;
    };
    const onPointerLeave = () => {
      pointer.active = 0;
    };

    const visibility = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start();
    });
    const sizing = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(0);
    });
    const onVisibilityChange = () => {
      if (!document.hidden) start();
    };

    resize();
    draw(0);
    visibility.observe(canvas);
    sizing.observe(canvas);
    document.addEventListener("visibilitychange", onVisibilityChange);
    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
      start();
    }

    return () => {
      cancelAnimationFrame(frame);
      visibility.disconnect();
      sizing.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={`aspect-[1200/760] ${className}`} />;
}
