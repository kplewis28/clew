"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Check as CheckIcon } from "lucide-react";
import type { CheckResult } from "@/app/api/revisar/route";
import { calculatorPath, whatsappUrl, type Locale } from "@/content/config";
import { revision } from "@/content/revision";
import { Reveal } from "./Reveal";

type State = { kind: "idle" } | { kind: "loading" } | { kind: "error"; message: string } | { kind: "done"; data: CheckResult };

const paid = ["Wix", "Squarespace", "GoDaddy", "Weebly", "Jimdo", "Webflow"];

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const scoreColor = (s: number) => (s >= 85 ? "#dfff6a" : s >= 60 ? "#ffc65c" : "#ff8a7a");

// Anillo con el puntaje: se llena y cuenta desde 0.
function ScoreRing({ score }: { score: number }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const duration = reducedMotion() ? 1 : 1200;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setShown(Math.round(score * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [score]);

  const r = 70;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative size-44 shrink-0 md:size-52">
      <svg viewBox="0 0 160 160" className="size-full -rotate-90" aria-hidden>
        <circle cx="80" cy="80" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
        <circle
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke={scoreColor(score)}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - shown / 100)}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-6xl leading-none font-medium tracking-tight md:text-7xl" style={{ color: scoreColor(score) }}>
          {shown}
        </span>
        <span className="mt-1 text-sm text-white/50">/ 100</span>
      </div>
    </div>
  );
}

// Mientras revisa: va mostrando qué está mirando.
function LoadingSteps({ steps }: { steps: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => Math.min(n + 1, steps.length - 1)), 900);
    return () => clearInterval(id);
  }, [steps.length]);
  return (
    <ul className="mt-6 space-y-2" aria-live="polite">
      {steps.slice(0, i + 1).map((s, n) => (
        <li key={s} className="flex items-center gap-3 text-white/80 motion-safe:animate-[sc-in_.4s_ease-out_both]">
          <span
            className={`inline-flex size-5 items-center justify-center rounded-full ${n < i ? "bg-lime text-ink" : "border-2 border-lime/60 border-t-transparent motion-safe:animate-spin"}`}
          >
            {n < i && <CheckIcon aria-hidden className="size-3" strokeWidth={3} />}
          </span>
          {s}
        </li>
      ))}
    </ul>
  );
}

export function SiteCheck({ lang }: { lang: Locale }) {
  const t = revision[lang];
  const [url, setUrl] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });

  async function run(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    setState({ kind: "loading" });
    const minWait = new Promise((r) => setTimeout(r, reducedMotion() ? 0 : 2400));
    try {
      const res = await fetch("/api/revisar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      await minWait;
      if (!res.ok) {
        setState({ kind: "error", message: data.error === "invalid" ? t.errorInvalid : t.errorUnreachable });
        return;
      }
      setState({ kind: "done", data });
      window.scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" });
    } catch {
      setState({ kind: "error", message: t.errorUnreachable });
    }
  }

  if (state.kind === "done") {
    const d = state.data;
    const failed = d.checks.filter((c) => !c.ok).sort((a, b) => b.weight - a.weight);
    const passed = d.checks.filter((c) => c.ok);
    const host = new URL(d.finalUrl).hostname.replace(/^www\./, "");
    const issues = failed.slice(0, 3).map((c) => t.checks[c.id].short).join(", ");
    const badText = (c: (typeof failed)[number]) => {
      const bad = t.checks[c.id].bad;
      return typeof bad === "function" ? bad(Number(c.value) || 0) : bad;
    };
    const impact = (w: number) =>
      w >= 15
        ? { label: t.impact.high, cls: "bg-[#ffe1dc] text-[#9b1c13]" }
        : w >= 10
          ? { label: t.impact.mid, cls: "bg-[#fff0cc] text-[#7a5200]" }
          : { label: t.impact.low, cls: "bg-ink/5 text-ink/60" };

    return (
      <div className="max-w-4xl" aria-live="polite">
        {/* 1. Puntaje */}
        <div className="relative overflow-hidden rounded-[2rem] bg-deep p-7 text-white motion-safe:animate-[sc-in_.6s_cubic-bezier(.2,.8,.2,1)_both] md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full opacity-25 blur-3xl"
            style={{ background: scoreColor(d.score) }}
          />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
            <ScoreRing score={d.score} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase">{t.scoreLabel}</p>
              <p className="mt-1 truncate text-white/60">{host}</p>
              <p className="mt-4 text-2xl leading-snug font-medium text-balance md:text-3xl">{t.verdict(d.score)}</p>
              <div className="mt-6">
                <div className="flex gap-1.5" aria-hidden>
                  {[...passed, ...failed].map((c, i) => (
                    <span
                      key={c.id}
                      className={`h-2 flex-1 rounded-full motion-safe:animate-[sc-grow_.5s_ease-out_both] ${c.ok ? "bg-lime" : "bg-white/15"}`}
                      style={{ animationDelay: `${300 + i * 60}ms` }}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-white/60">{t.summary(passed.length, d.checks.length)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Lo que encontramos */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            {failed.length ? t.foundTitle(failed.length) : t.allGood}
          </h2>
          <ol className="mt-8 space-y-5">
            {failed.map((c, i) => {
              const imp = impact(c.weight);
              return (
                <li key={c.id}>
                  <Reveal delay={i * 90} className="group rounded-[2rem] bg-white p-6 transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] md:p-9">
                    <div className="flex gap-5 md:gap-7">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-deep text-lg font-medium text-lime md:size-14 md:text-xl">
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-medium tracking-[0.15em] text-slate uppercase">{t.checks[c.id].label}</span>
                          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${imp.cls}`}>{imp.label}</span>
                        </div>
                        <p className="mt-3 text-xl leading-snug font-medium md:text-2xl">{badText(c)}</p>
                        <p className="mt-3 leading-relaxed text-ink/70">{t.checks[c.id].why}</p>
                        <div className="mt-5 rounded-2xl bg-lime/35 p-4 md:p-5">
                          <p className="text-sm font-medium">{t.fixLabel}</p>
                          <p className="mt-1 leading-relaxed text-ink/85">{t.checks[c.id].fix}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </section>

        {/* 3. Invitación */}
        <Reveal className="relative mt-16 overflow-hidden rounded-[2rem] bg-lime p-7 text-ink md:mt-20 md:p-12">
          <p className="max-w-xl text-3xl leading-tight font-medium tracking-tight md:text-5xl">{t.ctaTitle}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed">{t.ctaBody}</p>
          <a
            href={whatsappUrl(t.ctaMessage(host, d.score, issues))}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-ink px-8 text-lg font-medium text-lime transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            {t.cta}
            <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-5" />
          </a>
        </Reveal>

        {d.platform && paid.includes(d.platform) && (
          <div className="mt-4 flex flex-col gap-3 rounded-[2rem] bg-paper p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <p className="max-w-md leading-relaxed text-ink/80">{t.platformLine(d.platform)}</p>
            <a
              href={calculatorPath[lang]}
              className="inline-flex min-h-11 shrink-0 items-center gap-1 font-medium underline decoration-lime decoration-2 underline-offset-4"
            >
              {t.platformCta}
              <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-4" />
            </a>
          </div>
        )}

        {/* 4. Lo que ya está bien */}
        {passed.length > 0 && (
          <details className="group mt-4 rounded-[2rem] bg-paper">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 p-6 font-medium md:px-8 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center gap-3">
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-ink text-lime">
                  <CheckIcon aria-hidden className="size-4" strokeWidth={2.5} />
                </span>
                {t.passTitle(passed.length)}
              </span>
              <span aria-hidden className="text-2xl transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <ul className="grid gap-x-8 px-6 pb-6 md:grid-cols-2 md:px-8">
              {passed.map((c) => (
                <li key={c.id} className="border-t border-ink/10 py-3">
                  <span className="font-medium">{t.checks[c.id].label}</span>
                  <span className="block text-sm text-ink/65">
                    {c.id === "speed" ? t.speedValue(d.ms) : t.checks[c.id].ok}
                  </span>
                </li>
              ))}
            </ul>
          </details>
        )}

        <button
          type="button"
          onClick={() => {
            setState({ kind: "idle" });
            setUrl("");
          }}
          className="mt-8 min-h-11 font-medium text-ink/70 hover:text-ink"
        >
          ← {t.again}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={run} className="rounded-[2rem] bg-deep p-6 md:p-10">
      <label htmlFor="site-url" className="sr-only">
        {t.placeholder}
      </label>
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          id="site-url"
          type="text"
          inputMode="url"
          autoComplete="url"
          autoCapitalize="none"
          spellCheck={false}
          placeholder={t.placeholder}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={state.kind === "loading"}
          className="min-h-14 flex-1 rounded-full border border-white/15 bg-white/5 px-6 text-lg text-white placeholder:text-white/40 focus:border-lime focus:outline-none"
        />
        <button
          type="submit"
          disabled={state.kind === "loading" || !url.trim()}
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-lime px-8 text-lg font-medium text-ink transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {state.kind === "loading" ? t.loading : t.button}
        </button>
      </div>
      {state.kind === "loading" && <LoadingSteps steps={t.loadingSteps} />}
      {state.kind === "error" && (
        <p role="alert" className="mt-4 text-[#ff8a7a]">
          {state.message}
        </p>
      )}
    </form>
  );
}
