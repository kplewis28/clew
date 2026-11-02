"use client";

import { ArrowRight, Volume2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import type { Content } from "@/content";
import { whatsappUrl } from "@/content/config";
import { Logo } from "./Logo";

type Intro = NonNullable<Content["intro"]>;
type Scene = { id: string; kind: "line" | "word" | "brand" | "cap" | "ask"; i: number; t: number; d: number };

// Arma la línea de tiempo a partir de los tiempos de la voz.
function buildScenes(intro: Intro): Scene[] {
  const c = intro.cues;
  const s: Scene[] = [{ id: "s1", kind: "line", i: 0, t: 0, d: c.s1d }];
  c.words.forEach((t, i) => s.push({ id: `w${i}`, kind: "word", i, t: t - 0.12, d: 0 }));
  s.push({ id: "s3", kind: "brand", i: 0, t: c.s3 - 0.25, d: c.s3d });
  c.caps.forEach((t, i) => s.push({ id: `c${i}`, kind: "cap", i, t: t - 0.15, d: 0 }));
  s.push({ id: "s5", kind: "ask", i: 0, t: c.s5 - 0.15, d: c.s5d });
  return s;
}

function Words({ text, dur }: { text: string; dur: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="intro-word inline-block" style={{ "--d": `${(i * dur * 1000) / words.length}ms` } as CSSProperties}>
          {w}&nbsp;
        </span>
      ))}
    </>
  );
}

// Experiencia de entrada con voz, música y animación. Solo arranca cuando la
// persona toca (los navegadores no dejan sonar una página sola).
export function HeroIntro({ intro }: { intro: Intro }) {
  const [phase, setPhase] = useState<"gate" | "play" | "out" | "done">("done");
  const [scene, setScene] = useState(0);
  const audio = useRef<HTMLAudioElement>(null);
  const raf = useRef(0);
  const started = useRef(0);
  const scenes = useRef(buildScenes(intro)).current;

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("clew-intro") === "1";
    } catch {}
    if (!seen && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPhase("gate");
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = phase === "gate" || phase === "play" ? "hidden" : "";
  }, [phase]);

  const close = useCallback(() => {
    cancelAnimationFrame(raf.current);
    audio.current?.pause();
    try {
      sessionStorage.setItem("clew-intro", "1");
    } catch {}
    setPhase("out");
    window.setTimeout(() => setPhase("done"), 700);
  }, []);

  const tick = useCallback(() => {
    const t = (performance.now() - started.current) / 1000;
    let idx = 0;
    for (let i = 0; i < scenes.length; i++) if (t >= scenes[i].t) idx = i;
    setScene((prev) => (prev === idx ? prev : idx));
    if (t < intro.cues.end) raf.current = requestAnimationFrame(tick);
  }, [scenes, intro.cues.end]);

  const start = () => {
    setPhase("play");
    setScene(0);
    // El reloj arranca cuando el audio empieza a sonar (o enseguida si no puede sonar).
    const go = () => {
      started.current = performance.now();
      raf.current = requestAnimationFrame(tick);
    };
    const a = audio.current;
    if (!a) return go();
    a.currentTime = 0;
    a.play().then(go, go);
  };

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  if (phase === "done") return null;
  const sc = scenes[scene];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={intro.label}
      className={`fixed inset-0 z-[100] flex flex-col bg-deep text-white transition-opacity duration-700 ${phase === "out" ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <audio ref={audio} src={intro.audio} preload="auto" />

      {phase === "gate" ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6 text-center">
          <Logo className="intro-logo h-10 w-auto text-lime md:h-14" />
          <button
            type="button"
            onClick={start}
            className="intro-gate group relative flex size-44 flex-col items-center justify-center gap-2 rounded-full bg-lime text-ink md:size-52"
          >
            <Volume2 aria-hidden strokeWidth={1.75} className="size-8" />
            <span className="text-lg font-medium md:text-xl">{intro.enter}</span>
            <span className="intro-ring absolute inset-0 rounded-full border-2 border-lime" />
          </button>
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-white/60">{intro.enterNote}</p>
            <button type="button" onClick={close} className="min-h-11 px-4 text-sm text-white/70 underline underline-offset-4 hover:text-lime">
              {intro.silent}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between px-5 py-5 md:px-8">
            <Logo className="h-5 w-auto text-lime md:h-6" />
            <button type="button" onClick={close} className="flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-sm hover:border-lime hover:text-lime">
              {intro.skip}
              <X aria-hidden strokeWidth={1.75} className="size-4" />
            </button>
          </div>

          {/* Progreso */}
          <div aria-hidden className="mx-5 h-1 overflow-hidden rounded-full bg-white/10 md:mx-8">
            <div className="intro-progress h-full bg-lime" style={{ "--dur": `${intro.cues.end}s` } as CSSProperties} />
          </div>

          <div key={sc.id} className={`relative flex flex-1 items-center justify-center overflow-hidden px-6 ${sc.kind === "word" ? "intro-shake" : ""}`}>
            {sc.kind === "line" ? (
              <p className="max-w-5xl text-center text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[1.02] font-medium tracking-[-0.045em]">
                <Words text={intro.lines.s1} dur={sc.d} />
              </p>
            ) : null}

            {sc.kind === "word" ? (
              <div className="text-center">
                <p className="intro-impact text-[clamp(3rem,10vw,9rem)] leading-none font-medium tracking-[-0.05em]">{intro.words[sc.i]}</p>
                <div className="mt-10 flex justify-center gap-2">
                  {intro.words.map((_, i) => (
                    <span key={i} className={`h-1.5 w-10 rounded-full ${i <= sc.i ? "bg-lime" : "bg-white/15"}`} />
                  ))}
                </div>
              </div>
            ) : null}

            {sc.kind === "brand" ? (
              <div className="text-center">
                <span aria-hidden className="intro-flash pointer-events-none fixed inset-0 bg-lime" />
                <Logo className="intro-logo mx-auto h-14 w-auto text-lime md:h-20" />
                <p className="mx-auto mt-10 max-w-4xl text-[clamp(2.1rem,5.4vw,4.6rem)] leading-[1.04] font-medium tracking-[-0.045em]">
                  <Words text={intro.lines.s3} dur={sc.d} />
                </p>
              </div>
            ) : null}

            {sc.kind === "cap" ? (
              <div className="grid w-full max-w-6xl items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
                <div className="intro-cap-text">
                  <p className="text-sm font-medium tracking-[0.2em] text-lime">0{sc.i + 1} / 0{intro.caps.length}</p>
                  <p className="mt-4 text-[clamp(2.4rem,5.8vw,5rem)] leading-[1] font-medium tracking-[-0.045em]">{intro.caps[sc.i].label}</p>
                </div>
                <div className="intro-cap-img overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_-30px_rgba(223,255,106,0.35)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={intro.caps[sc.i].img} alt="" className="aspect-[16/10] w-full object-cover object-top" />
                </div>
              </div>
            ) : null}

            {sc.kind === "ask" ? (
              <div className="text-center">
                <p className="mx-auto max-w-4xl text-[clamp(2.4rem,6.2vw,5.4rem)] leading-[1.02] font-medium tracking-[-0.045em]">
                  <Words text={intro.lines.s5} dur={1.6} />
                </p>
                <div className="intro-cta mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={whatsappUrl(intro.ctaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="hero-cta inline-flex min-h-16 items-center gap-3 rounded-full bg-lime px-9 text-lg font-medium text-ink md:text-xl"
                  >
                    {intro.cta}
                    <ArrowRight aria-hidden strokeWidth={1.75} className="size-5" />
                  </a>
                  <button type="button" onClick={close} className="inline-flex min-h-16 items-center rounded-full border border-white/30 px-8 text-lg hover:border-lime hover:text-lime">
                    {intro.see}
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
