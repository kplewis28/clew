import { ArrowUpRight } from "lucide-react";
import type { Content } from "@/content";
import { whatsappUrl } from "@/content/config";
import { icons } from "./icons";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Builds({ t }: { t: Content }) {
  return (
    <Section id="que-construyo" tone="deep">
      <SectionHeading
        title={t.builds.title}
        highlight={t.builds.highlight}
        subtitle={t.builds.subtitle}
        tone="deep"
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 md:gap-6 lg:grid-cols-3">
        {t.builds.items.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.title}>
              <Reveal
                delay={(index % 3) * 100}
                className="group h-full rounded-3xl border border-white/10 p-7 transition-colors duration-300 hover:border-lime/60 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-lime text-ink">
                    <Icon aria-hidden strokeWidth={1.5} className="size-6" />
                  </span>
                  {/* Abre WhatsApp con un mensaje sobre esta herramienta */}
                  <a
                    href={whatsappUrl(t.business.interestMessage + item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.ui.askAria}: ${item.title}`}
                    className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-lime hover:bg-lime hover:text-ink"
                  >
                    <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-5" />
                  </a>
                </div>
                <h3 className="mt-7 text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-white/75">{item.text}</p>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
