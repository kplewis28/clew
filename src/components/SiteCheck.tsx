"use client";

import { useState } from "react";
import { ArrowUpRight, Check as CheckIcon, X } from "lucide-react";
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
    const top = failed.slice(0, 3);
    const host = new URL(d.finalUrl).hostname.replace(/^www\./, "");
    const issues = top.map((c) => t.checks[c.id].label.toLowerCase()).join(", ");
    const tone = d.score >= 85 ? "text-lime" : d.score >= 60 ? "text-[#ffc65c]" : "text-[#ff8a7a]";

    return (
      <div className="grid gap-4 md:grid-cols-[1fr_1.1fr] md:gap-6" aria-live="polite">
        <div className="flex flex-col rounded-3xl bg-deep p-6 text-white md:p-8">
          <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase">{t.scoreLabel}</p>
          <p className="mt-2 truncate text-white/70">{host}</p>
          <p className={`mt-6 text-7xl font-medium tracking-tight md:text-8xl ${tone}`}>
            {d.score}
            <span className="text-3xl text-white/40 md:text-4xl">/100</span>
          </p>
          <p className="mt-6 text-lg leading-relaxed">{t.verdict(d.score)}</p>

          {d.platform && paid.includes(d.platform) && (
            <div className="mt-6 rounded-2xl border border-white/15 p-5">
              <p className="leading-relaxed text-white/80">{t.platformLine(d.platform)}</p>
              <a href={calculatorPath[lang]} className="mt-3 inline-flex min-h-11 items-center gap-1 font-medium text-lime hover:underline">
                {t.platformCta}
                <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-4" />
              </a>
            </div>
          )}

          <div className="mt-auto pt-8">
            <div className="rounded-2xl bg-lime p-5 text-ink">
              <p className="text-xl font-medium tracking-tight">{t.ctaTitle}</p>
              <p className="mt-2 leading-relaxed">{t.ctaBody}</p>
              <a
                href={whatsappUrl(t.ctaMessage(host, d.score, issues))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 font-medium text-lime transition-opacity hover:opacity-90"
              >
                {t.cta}
                <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-5" />
              </a>
            </div>
            <button
              type="button"
              onClick={() => {
                setState({ kind: "idle" });
                setUrl("");
              }}
              className="mt-4 min-h-11 text-sm font-medium text-white/70 hover:text-lime"
            >
              ← {t.again}
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-paper p-6 md:p-8">
          <h2 className="text-sm font-medium tracking-[0.2em] text-slate uppercase">{top.length ? t.topTitle : t.allTitle}</h2>
          {top.length === 0 && <p className="mt-4 text-lg leading-relaxed">{t.allGood}</p>}
          <ol className="mt-4 space-y-3">
            {top.map((c, i) => (
              <li key={c.id} className="rounded-2xl bg-white p-5">
                <p className="flex gap-3 font-medium">
                  <span className="text-slate">{i + 1}.</span>
                  {t.checks[c.id].bad}
                </p>
                <p className="mt-2 pl-6 leading-relaxed text-ink/70">{t.checks[c.id].why}</p>
              </li>
            ))}
          </ol>

          {top.length > 0 && <h3 className="mt-10 text-sm font-medium tracking-[0.2em] text-slate uppercase">{t.allTitle}</h3>}
          <ul className="mt-4 divide-y divide-ink/10">
            {d.checks.map((c) => (
              <li key={c.id} className="flex items-start gap-3 py-3">
                <span
                  className={`mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full ${c.ok ? "bg-ink text-lime" : "bg-[#ffe1dc] text-[#b3261e]"}`}
                >
                  {c.ok ? <CheckIcon aria-hidden className="size-3.5" strokeWidth={2.5} /> : <X aria-hidden className="size-3.5" strokeWidth={2.5} />}
                </span>
                <span>
                  <span className="font-medium">{t.checks[c.id].label}</span>
                  <span className="block text-sm text-ink/65">
                    {c.id === "speed" ? t.speedValue(d.ms) : c.ok ? t.checks[c.id].ok : t.checks[c.id].bad}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
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
