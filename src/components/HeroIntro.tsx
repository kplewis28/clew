"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Content } from "@/content";
import { Logo } from "./Logo";

type Intro = Content["intro"];

// Posición, tamaño y giro de cada palabra en el caos (escena 2).
const CHAOS: { x: number; y: number; s: number; r: number; tone: "w" | "l" | "o" }[] = [
  { x: 18, y: 18, s: 6, r: -6, tone: "w" },
  { x: 72, y: 13, s: 5, r: 5, tone: "o" },
  { x: 40, y: 32, s: 8, r: -3, tone: "l" },
  { x: 82, y: 40, s: 5.5, r: 8, tone: "w" },
  { x: 15, y: 50, s: 6, r: -4, tone: "o" },
  { x: 62, y: 60, s: 7, r: 4, tone: "w" },
  { x: 28, y: 76, s: 5.5, r: -7, tone: "w" },
  { x: 78, y: 82, s: 6.5, r: 5, tone: "o" },
  { x: 50, y: 20, s: 5, r: 2, tone: "w" },
  { x: 50, y: 50, s: 12, r: -3, tone: "l" },
];

// Intro sin voz: tipografía en movimiento, fondos y golpes de sonido.
// Arranca sola al cargar (la decide un script en <head>, ver layout.tsx);
// el sonido se activa con el botón o con el primer toque, desde el segundo en que va.
export function HeroIntro({ intro }: { intro: Intro }) {
  // Cada "↺ Ver intro" vuelve a montar la intro para que las animaciones arranquen de cero
  const [run, setRun] = useState(0);
  useEffect(() => {
    const replay = () => {
      const html = document.documentElement;
      html.classList.remove("intro-hero", "intro-skip");
      html.classList.add("intro-on");
      window.scrollTo(0, 0);
      setRun((r) => r + 1);
    };
    window.addEventListener("clew:replay-intro", replay);
    return () => window.removeEventListener("clew:replay-intro", replay);
  }, []);
  return <IntroRun key={run} intro={intro} replay={run > 0} />;
}

function IntroRun({ intro, replay }: { intro: Intro; replay: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const audio = useRef<HTMLAudioElement>(null);
  const [sound, setSound] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains("intro-on")) return;
    html.style.overflow = "hidden";
    const end = () => {
      html.classList.remove("intro-on");
      html.style.overflow = "";
      audio.current?.pause();
    };
    const el = root.current;
    const onStart = (e: AnimationEvent) => {
      if (e.animationName === "intro-reveal") {
        html.classList.add("intro-hero");
        html.style.overflow = "";
      }
    };
    const onEnd = (e: AnimationEvent) => {
      if (e.animationName === "intro-reveal") end();
    };
    el?.addEventListener("animationstart", onStart);
    el?.addEventListener("animationend", onEnd);
    // Primer toque o tecla: activa el sonido
    const first = () => enable();
    if (replay) enable();
    window.addEventListener("pointerdown", first, { once: true });
    window.addEventListener("keydown", first, { once: true });
    return () => {
      el?.removeEventListener("animationstart", onStart);
      el?.removeEventListener("animationend", onEnd);
      window.removeEventListener("pointerdown", first);
      window.removeEventListener("keydown", first);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Segundo de la intro en que vamos, leído de la animación CSS que marca el tiempo
  const elapsed = () => {
    const clock = root.current?.getAnimations().find((a) => (a as CSSAnimation).animationName === "intro-clock");
    return clock && typeof clock.currentTime === "number" ? clock.currentTime / 1000 : 0;
  };

  function enable() {
    const a = audio.current;
    if (!a || !document.documentElement.classList.contains("intro-on")) return;
    a.currentTime = elapsed();
    a.play().then(() => setSound(true)).catch(() => {});
  }

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const a = audio.current;
    if (!a) return;
    if (sound) {
      a.pause();
      setSound(false);
    } else enable();
  };

  const skip = (e: React.MouseEvent) => {
    e.stopPropagation();
    audio.current?.pause();
    const html = document.documentElement;
    html.classList.add("intro-skip", "intro-hero");
    html.style.overflow = "";
    window.setTimeout(() => html.classList.remove("intro-on", "intro-skip"), 400);
  };

  return (
    <div ref={root} className="intro fixed inset-0 z-[100] overflow-hidden bg-[#050805] text-white">
      <audio ref={audio} src={intro.audio} preload="auto" />
      <span className="intro-clock absolute size-px opacity-0" />

      {/* 1 · La hora */}
      <div aria-hidden className="intro-s1 absolute inset-0 flex flex-col items-center justify-center">
        <p className="intro-time text-[clamp(4.5rem,19vw,16rem)] leading-none font-medium tracking-[-0.06em] text-lime tabular-nums">
          {intro.time}
        </p>
        <p className="intro-timesub mt-4 text-[clamp(1.4rem,3.6vw,2.8rem)] font-medium tracking-[-0.03em] text-white/80">{intro.timeSub}</p>
      </div>

      {/* 2 · El caos */}
      <div aria-hidden className="intro-s2 absolute inset-0">
        {intro.chaos.map((w, i) => {
          const c = CHAOS[i % CHAOS.length];
          return (
            <span
              key={w}
              className={`intro-chaos absolute left-[calc(22%+var(--x)*0.56%)] leading-none md:left-[calc(var(--x)*1%)] font-medium tracking-[-0.05em] whitespace-nowrap ${c.tone === "l" ? "rounded-[0.12em] bg-lime px-[0.12em] text-deep" : c.tone === "o" ? "text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.85)]" : "text-white"}`}
              style={
                {
                  top: `${c.y}%`,
                  fontSize: `clamp(2rem, ${c.s}vw, ${c.s * 1.2}rem)`,
                  "--r": `${c.r}deg`,
                  "--d": `${1.95 + i * 0.17}s`,
                  "--x": c.x,
                } as CSSProperties
              }
            >
              {w}
            </span>
          );
        })}
      </div>

      {/* 3 · La pregunta */}
      <div aria-hidden className="intro-s3 absolute inset-0 flex items-center justify-center px-6 text-center">
        <p className="text-[clamp(2.6rem,8vw,7.5rem)] leading-[0.98] font-medium tracking-[-0.05em]">
          <span className="intro-q1 block">{intro.q1}</span>
          <span className="intro-q2 block text-lime">{intro.q2}</span>
        </p>
      </div>

      {/* 4 · Explosión lima y marca */}
      <div aria-hidden className="intro-s4 absolute inset-0 flex items-center justify-center">
        <span className="intro-blast absolute size-[30vmax] rounded-full bg-lime" />
        <Logo className="intro-mark relative h-[clamp(3.5rem,12vw,9rem)] w-auto text-deep" />
      </div>

      <div className="intro-ui absolute inset-x-0 bottom-0 flex items-center justify-between p-5 md:p-8">
        <button
          type="button"
          onClick={toggle}
          className="flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-black/40 px-4 text-sm text-white/85 backdrop-blur hover:border-lime hover:text-lime"
        >
          {sound ? <Volume2 aria-hidden className="size-4" /> : <VolumeX aria-hidden className="size-4" />}
          {sound ? intro.soundOff : intro.soundOn}
        </button>
        <button type="button" onClick={skip} className="min-h-11 rounded-full px-4 text-sm text-white/70 underline-offset-4 hover:text-lime hover:underline">
          {intro.skip}
        </button>
      </div>
    </div>
  );
}
