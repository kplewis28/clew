import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Content } from "@/content";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Products({ t }: { t: Content }) {
  return (
    <Section id="herramientas" tone="paper">
      <SectionHeading
        title={t.products.title}
        highlight={t.products.highlight}
        subtitle={t.products.subtitle}
        tone="paper"
      />

      <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
        {t.products.items.map((item, index) => {
          const dark = index === 0;
          const linkProps = item.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
          return (
            <li key={item.title}>
              <Reveal
                delay={index * 100}
                className={`flex h-full flex-col overflow-hidden rounded-3xl ${dark ? "bg-deep text-white" : "bg-lime text-ink"}`}
              >
                {/* Vista previa real: abre la herramienta */}
                <a
                  href={item.href}
                  {...linkProps}
                  tabIndex={-1}
                  aria-hidden
                  className="group block px-5 pt-5 md:px-7 md:pt-7"
                >
                  <div
                    className={`overflow-hidden rounded-t-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:-translate-y-1 ${dark ? "bg-white/10" : "bg-deep"}`}
                  >
                    <div className={`flex items-center gap-2 px-4 py-2.5 ${dark ? "bg-white/10" : "bg-deep"}`}>
                      <span className="size-2.5 rounded-full bg-white/30" />
                      <span className="size-2.5 rounded-full bg-white/30" />
                      <span className="size-2.5 rounded-full bg-white/30" />
                      <span className="ml-2 truncate rounded-full bg-white/10 px-3 py-0.5 text-xs text-white/70">
                        {item.address}
                      </span>
                    </div>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(min-width: 768px) 520px, 90vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </a>

                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <span
                    className={`self-start rounded-full px-3 py-1 text-xs font-medium tracking-[0.15em] uppercase ${dark ? "bg-white/10 text-lime" : "bg-ink/10 text-ink"}`}
                  >
                    {item.tag}
                  </span>
                  <h3 className="mt-5 text-2xl font-medium tracking-tight md:text-3xl">{item.title}</h3>
                  <p className={`mt-3 flex-1 leading-relaxed ${dark ? "text-white/75" : "text-ink/80"}`}>
                    {item.text}
                  </p>
                  <a
                    href={item.href}
                    {...linkProps}
                    className={`mt-8 inline-flex min-h-12 items-center gap-2 self-start rounded-full px-6 font-medium transition-colors ${dark ? "bg-lime text-ink hover:bg-white" : "bg-ink text-lime hover:bg-deep"}`}
                  >
                    {item.cta}
                    <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-5" />
                  </a>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
