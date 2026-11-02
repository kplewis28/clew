import { ArrowUpRight } from "lucide-react";
import type { Content } from "@/content";
import { Carousel } from "./Carousel";
import { LoopVideo } from "./LoopVideo";
import { ReelButton } from "./ReelButton";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

// Casos reales en una fila que se desliza: cada tarjeta es la experiencia en
// video, qué cambió en una línea y tres resultados. Todo con permiso del cliente.
export function Cases({ t }: { t: Content }) {
  const c = t.cases;

  return (
    <Section id="casos">
      <SectionHeading title={c.title} highlight={c.highlight} subtitle={c.subtitle} />

      <Reveal className="mt-10 md:mt-14">
        <Carousel prevLabel={c.labels.prev} nextLabel={c.labels.next}>
          {c.items.map((item) => (
            <li
              key={item.id}
              className="flex w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-paper sm:w-[62%] lg:w-[calc((100%-1rem)/2.15)]"
            >
              {/* Experiencia */}
              <div className="relative aspect-[16/10] bg-deep">
                {item.video ? (
                  <LoopVideo src={item.video.src} poster={item.video.poster} label={item.video.alt} className="absolute inset-0 size-full object-cover" />
                ) : (
                  <dl className="absolute inset-0 flex flex-col justify-center gap-4 px-7 text-white md:px-9">
                    {item.results.map((r) => (
                      <div key={r.label} className="flex items-baseline gap-3">
                        <dd className="text-2xl font-medium tracking-[-0.035em] text-lime md:text-3xl">{r.value}</dd>
                        <dt className="text-sm text-white/70">{r.label}</dt>
                      </div>
                    ))}
                  </dl>
                )}
                <span
                  className={`absolute top-3 left-3 flex items-center gap-2 rounded-full px-3 py-1 text-[0.7rem] font-medium tracking-[0.12em] uppercase ${item.live ? "bg-lime text-ink" : "bg-white text-ink"}`}
                >
                  <span aria-hidden className={`size-1.5 rounded-full ${item.live ? "bg-ink" : "bg-ink/40"}`} />
                  {item.status}
                </span>
              </div>

              {/* Historia corta */}
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="text-xs font-medium tracking-[0.15em] text-slate uppercase">{item.tags.join(" · ")}</p>
                <h3 className="mt-3 text-[1.35rem] leading-[1.15] font-medium tracking-[-0.035em] text-balance md:text-2xl">
                  {item.title} <span className="rounded-[0.12em] bg-lime box-decoration-clone px-[0.12em]">{item.highlight}</span>
                </h3>
                <p className="mt-3 leading-relaxed text-slate">{item.text}</p>

                {item.video ? (
                  <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-ink/10 pt-4">
                    {item.results.map((r) => (
                      <div key={r.label} className="flex flex-col-reverse justify-end gap-1">
                        <dt className="text-xs leading-snug text-slate">{r.label}</dt>
                        <dd className="text-base leading-tight font-medium tracking-tight md:text-lg">{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                  {item.reel ? (
                    <ReelButton src={item.reel.src} poster={item.reel.poster} label={c.labels.watch} meta={item.reel.meta} closeLabel={c.labels.close} />
                  ) : null}
                  {item.link ? (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-ink/20 px-4 text-sm font-medium transition-colors hover:border-ink"
                    >
                      {item.link.label}
                      <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </Carousel>
        <p className="mt-2 text-sm text-slate">{c.labels.permission}</p>
      </Reveal>
    </Section>
  );
}
