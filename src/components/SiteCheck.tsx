"use client";

import { useState } from "react";
import { ArrowUpRight, Check as CheckIcon } from "lucide-react";
import type { CheckResult } from "@/app/api/revisar/route";
import { calculatorPath, whatsappUrl, type Locale } from "@/content/config";
import { revision } from "@/content/revision";

type State = { kind: "idle" } | { kind: "loading" } | { kind: "error"; message: string } | { kind: "done"; data: CheckResult };

const paid = ["Wix", "Squarespace", "GoDaddy", "Weebly", "Jimdo", "Webflow"];

export function SiteCheck({ lang }: { lang: Locale }) {
  const t = revision[lang];
  const [url, setUrl] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });

  async function run(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    setState({ kind: "loading" });
    try {
      const res = await fetch("/api/revisar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) {
        setState({ kind: "error", message: data.error === "invalid" ? t.errorInvalid : t.errorUnreachable });
        return;
      }
      setState({ kind: "done", data });
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
    const tone = d.score >= 85 ? "text-lime" : d.score >= 60 ? "text-[#ffc65c]" : "text-[#ff8a7a]";
    const badText = (c: (typeof failed)[number]) => {
      const bad = t.checks[c.id].bad;
      return typeof bad === "function" ? bad(Number(c.value) || 0) : bad;
    };

    return (
      <div className="max-w-3xl" aria-live="polite">
        {/* 1. Puntaje */}
        <div className="rounded-3xl bg-deep p-6 text-white md:p-10">
          <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase">{t.scoreLabel}</p>
          <p className="mt-2 truncate text-white/70">{host}</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:gap-10">
            <p className={`text-7xl leading-none font-medium tracking-tight md:text-8xl ${tone}`}>
              {d.score}
              <span className="text-3xl text-white/40 md:text-4xl">/100</span>
            </p>
            <p className="max-w-md text-lg leading-relaxed md:pb-2">{t.verdict(d.score)}</p>
          </div>
        </div>

        {/* 2. Lo que encontramos */}
        <section className="mt-10">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            {failed.length ? t.foundTitle(failed.length) : t.allGood}
          </h2>
          <ol className="mt-6 space-y-4">
            {failed.map((c, i) => (
              <li key={c.id} className="rounded-3xl bg-white p-6 md:p-8">
                <p className="text-sm font-medium tracking-[0.15em] text-slate uppercase">
                  {i + 1} · {t.checks[c.id].label}
                </p>
                <p className="mt-3 text-xl leading-snug font-medium">{badText(c)}</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-6">
                  <div>
                    <p className="text-sm font-medium text-ink/50">{t.whyLabel}</p>
                    <p className="mt-1 leading-relaxed text-ink/80">{t.checks[c.id].why}</p>
                  </div>
                  <div className="border-l-2 border-lime pl-4">
                    <p className="text-sm font-medium text-ink/50">{t.fixLabel}</p>
                    <p className="mt-1 leading-relaxed text-ink/80">{t.checks[c.id].fix}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 3. Invitación */}
        <div className="mt-10 rounded-3xl bg-lime p-6 text-ink md:p-10">
          <p className="text-2xl font-medium tracking-tight md:text-3xl">{t.ctaTitle}</p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed">{t.ctaBody}</p>
          <a
            href={whatsappUrl(t.ctaMessage(host, d.score, issues))}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-7 font-medium text-lime transition-opacity hover:opacity-90 sm:w-auto"
          >
            {t.cta}
            <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-5" />
          </a>
        </div>

        {d.platform && paid.includes(d.platform) && (
          <div className="mt-4 flex flex-col gap-3 rounded-3xl bg-paper p-6 md:flex-row md:items-center md:justify-between md:p-8">
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
          <details className="group mt-4 rounded-3xl bg-paper">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 p-6 font-medium md:px-8 [&::-webkit-details-marker]:hidden">
              {t.passTitle(passed.length)}
              <span aria-hidden className="text-xl transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <ul className="divide-y divide-ink/10 px-6 pb-4 md:px-8">
              {passed.map((c) => (
                <li key={c.id} className="flex items-start gap-3 py-3">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-lime">
                    <CheckIcon aria-hidden className="size-3.5" strokeWidth={2.5} />
                  </span>
                  <span>
                    <span className="font-medium">{t.checks[c.id].label}</span>
                    <span className="block text-sm text-ink/65">
                      {c.id === "speed" ? t.speedValue(d.ms) : t.checks[c.id].ok}
                    </span>
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
          className="mt-6 min-h-11 font-medium text-ink/70 hover:text-ink"
        >
          ← {t.again}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={run} className="rounded-3xl bg-deep p-6 md:p-10">
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
      {state.kind === "error" && (
        <p role="alert" className="mt-4 text-[#ff8a7a]">
          {state.message}
        </p>
      )}
    </form>
  );
}
