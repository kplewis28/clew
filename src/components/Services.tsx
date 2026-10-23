import { ArrowUpRight } from "lucide-react";
import type { Content } from "@/content";
import { whatsappUrl } from "@/content/config";
import { icons } from "./icons";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

// Los cuatro servicios. El primero (sistemas a medida) es el principal y va en
// lima; cada tarjeta abre WhatsApp preguntando por ese servicio.
export function Services({ t }: { t: Content }) {
  return (
    <Section id="servicios" tone="deep">
      <SectionHeading
        title={t.services.title}
        highlight={t.services.highlight}
        subtitle={t.services.subtitle}
        tone="deep"
      />

      <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
        {t.services.items.map((item, index) => {
          const Icon = icons[item.icon];
          const featured = index === 0;
          return (
            <li key={item.title}>
              <Reveal
                delay={(index % 2) * 100}
                className={`flex h-full flex-col rounded-3xl p-7 md:p-8 ${
                  featured ? "border border-lime bg-lime text-ink" : "border border-white/10 bg-white/[0.03]"
                }`}
              >
                <span
                  className={`flex size-12 items-center justify-center rounded-2xl ${
                    featured ? "bg-deep text-lime" : "bg-lime text-ink"
                  }`}
                >
                  <Icon aria-hidden strokeWidth={1.5} className="size-6" />
                </span>
                <h3 className="mt-7 text-2xl leading-tight font-medium tracking-tight text-balance">
                  {item.title}
                </h3>
                <p
                  className={`mt-3 mb-8 leading-relaxed ${featured ? "text-ink" : "text-white/75"}`}
                >
                  {item.text}
                </p>
                <a
                  href={whatsappUrl(t.business.interestMessage + item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.ui.askAria}: ${item.title}`}
                  className={`mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded-full px-5 text-sm font-medium transition-colors duration-200 ${
                    featured
                      ? "bg-deep text-lime hover:bg-slate"
                      : "border border-white/20 text-white hover:border-lime hover:bg-lime hover:text-ink"
                  }`}
                >
                  {t.services.cta}
                  <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-4" />
                </a>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
