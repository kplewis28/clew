"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { calculator, clewFrom, platforms, type PlatformId } from "@/content/calculator";
import type { Locale } from "@/content/config";
import { whatsappUrl } from "@/content/config";

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const pill =
  "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-2";
const pillOn = "border-ink bg-ink text-lime";
const pillOff = "border-ink/20 bg-white/60 text-ink hover:border-ink";

export function CostCalculator({ lang }: { lang: Locale }) {
  const t = calculator[lang];
  const [platformId, setPlatformId] = useState<PlatformId>("wix");
  const [planIndex, setPlanIndex] = useState(1);
  const [custom, setCustom] = useState(25);
  const [years, setYears] = useState(2);

  const platform = platforms.find((p) => p.id === platformId)!;
  const isOther = platformId === "otra";
  const monthly = isOther ? Math.max(0, custom || 0) : platform.plans[Math.min(planIndex, platform.plans.length - 1)].monthly;

  const r = useMemo(() => {
    const yearly = monthly * 12;
    const paybackMonths = monthly > 0 ? Math.ceil(clewFrom / monthly) : 0;
    return { yearly, soFar: yearly * years, three: yearly * 3, saving: yearly * 3 - clewFrom, paybackMonths };
  }, [monthly, years]);

  const platformName = isOther ? t.otherPlatform.toLowerCase() : platform.name;

  return (
    <div className="grid gap-4 md:grid-cols-[1.1fr_1fr] md:gap-6">
      <div className="rounded-3xl bg-paper p-6 md:p-8">
        <fieldset>
          <legend className="text-sm font-medium tracking-[0.2em] text-slate uppercase">{t.platformLabel}</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {platforms.map((p) => (
              <button
                key={p.id}
                type="button"
                aria-pressed={p.id === platformId}
                onClick={() => {
                  setPlatformId(p.id);
                  setPlanIndex(1);
                }}
                className={`${pill} ${p.id === platformId ? pillOn : pillOff}`}
              >
                {p.id === "otra" ? t.otherPlatform : p.name}
              </button>
            ))}
          </div>
        </fieldset>

        {isOther ? (
          <label className="mt-8 block">
            <span className="text-sm font-medium tracking-[0.2em] text-slate uppercase">{t.customLabel}</span>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              step={1}
              value={custom}
              onChange={(e) => setCustom(Number(e.target.value))}
              className="mt-4 block min-h-12 w-40 rounded-2xl border border-ink/20 bg-white px-4 text-lg font-medium"
            />
          </label>
        ) : (
          <fieldset className="mt-8">
            <legend className="text-sm font-medium tracking-[0.2em] text-slate uppercase">{t.planLabel}</legend>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {platform.plans.map((plan, i) => {
                const on = i === Math.min(planIndex, platform.plans.length - 1);
                return (
                  <button
                    key={plan.name}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setPlanIndex(i)}
                    className={`flex min-h-14 flex-col items-start justify-center rounded-2xl border px-4 py-2 text-left transition-colors ${on ? pillOn : pillOff}`}
                  >
                    <span className="text-sm font-medium">{plan.name}</span>
                    <span className={`text-xs ${on ? "text-white/70" : "text-slate"}`}>
                      {usd(plan.monthly)}
                      {t.perMonth}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}

        <label className="mt-8 block">
          <span className="flex items-baseline justify-between gap-4">
            <span className="text-sm font-medium tracking-[0.2em] text-slate uppercase">{t.yearsLabel}</span>
            <span className="text-lg font-medium whitespace-nowrap">{t.years(years)}</span>
          </span>
          <input
            type="range"
            min={1}
            max={10}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-4 w-full accent-ink"
          />
        </label>
      </div>

      <div className="flex flex-col rounded-3xl bg-deep p-6 text-white md:p-8" aria-live="polite">
        <h2 className="text-sm font-medium tracking-[0.2em] text-lime uppercase">{t.resultTitle}</h2>
        <dl className="mt-6 grid grid-cols-2 gap-6">
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-white/70">{t.perYear}</dt>
            <dd className="text-3xl font-medium tracking-tight md:text-4xl">{usd(r.yearly)}</dd>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-white/70">{t.paidSoFar(t.years(years))}</dt>
            <dd className="text-3xl font-medium tracking-tight md:text-4xl">{usd(r.soFar)}</dd>
          </div>
          <div className="col-span-2 flex flex-col-reverse gap-1 border-t border-white/10 pt-6">
            <dt className="text-white/70">{t.nextThree}</dt>
            <dd className="text-5xl font-medium tracking-tight text-lime md:text-6xl">{usd(r.three)}</dd>
          </div>
        </dl>

        <div className="mt-8 rounded-2xl bg-lime p-5 text-ink">
          <p className="text-sm font-medium tracking-[0.2em] uppercase">{t.clewTitle}</p>
          <p className="mt-2 text-2xl font-medium tracking-tight">
            {t.clewFrom} {usd(clewFrom)}
          </p>
          <p className="text-sm text-ink/75">{t.clewOnce}</p>
          <p className="mt-3 leading-relaxed">
            {r.saving > 0 ? `${t.paysBack(r.paybackMonths)} ${t.savings(usd(r.saving))}` : t.lowPlan}
          </p>
        </div>

        <a
          href={whatsappUrl(t.ctaMessage(platformName, usd(r.yearly)))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-lime px-6 font-medium text-lime transition-colors hover:bg-lime hover:text-ink"
        >
          {t.cta}
          <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-5" />
        </a>
      </div>
    </div>
  );
}
