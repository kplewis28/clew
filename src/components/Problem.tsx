import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Content } from "@/content";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

// Tarjetas con foto: etiqueta, título, texto y la imagen abajo. La del medio va
// en lima para marcar el ritmo, como en la referencia que eligió Cindy.
export function Problem({ t }: { t: Content }) {
  return (
    <Section id="problema" tone="paper">
      <SectionHeading title={t.problem.title} highlight={t.problem.highlight} tone="paper" />

      <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
        {t.problem.items.map((item, index) => {
          const featured = index === 1;
          return (
            <li key={item.title}>
              <Reveal
                delay={index * 100}
                className={`flex h-full flex-col rounded-3xl p-5 md:p-6 ${
                  featured ? "bg-lime" : "bg-sand"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      featured ? "border-ink/25" : "border-ink/15 bg-paper"
                    }`}
                  >
                    {item.label}
                  </span>
                  <a
                    href="#que-construyo"
                    aria-label={`${t.ui.solutionAria}: ${item.title}`}
                    className="flex size-10 items-center justify-center rounded-full bg-paper text-ink transition-colors hover:bg-deep hover:text-lime"
                  >
                    <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-5" />
                  </a>
                </div>

                <h3 className="mt-6 text-2xl leading-tight font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className={`mt-3 mb-6 leading-relaxed ${featured ? "text-ink" : "text-slate"}`}>
                  {item.text}
                </p>

                <div className="relative mt-auto aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
