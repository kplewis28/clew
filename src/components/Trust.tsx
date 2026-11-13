import { Eye, Globe, Languages, MessageCircle, Quote, ShieldCheck, Wallet } from "lucide-react";
import type { Content } from "@/content";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const trustIcons = {
  sketch: Eye,
  price: Wallet,
  domain: Globe,
  direct: MessageCircle,
  languages: Languages,
  real: ShieldCheck,
};

export type TrustIcon = keyof typeof trustIcons;

// Lo que la persona puede esperar al trabajar con clew: compromisos concretos.
export function Trust({ t }: { t: Content }) {
  return (
    <Section id="confianza" tone="deep">
      <SectionHeading title={t.trust.title} highlight={t.trust.highlight} tone="deep" />
      <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:mt-14 lg:grid-cols-3">
        {t.trust.items.map((item, index) => {
          const Icon = trustIcons[item.icon as TrustIcon];
          return (
            <li key={item.title} className="bg-deep">
              <Reveal delay={(index % 3) * 80} className="h-full p-5 md:p-8">
                <Icon aria-hidden strokeWidth={1.5} className="size-6 text-lime md:size-7" />
                <h3 className="mt-4 text-base leading-snug font-medium tracking-tight md:mt-6 md:text-xl">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70 md:text-base">{item.text}</p>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <div className="mt-14 md:mt-20">
        <p className="text-sm tracking-[0.16em] text-lime uppercase">{t.trust.testimonials.kicker}</p>
        <ul className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 md:gap-6">
          {t.trust.testimonials.items.map((item, index) => (
            <li key={item.name}>
              <Reveal delay={index * 120} className="h-full">
                <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-9">
                  <Quote aria-hidden strokeWidth={1.5} className="size-8 text-lime md:size-9" />
                  <blockquote className="mt-5 flex-1 text-lg leading-snug font-medium tracking-tight text-white md:text-xl">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-5 md:mt-8">
                    <p className="text-base font-medium text-white">{item.name}</p>
                    <p className="mt-0.5 text-sm text-white/60">{item.role}</p>
                    <p className="mt-3 inline-flex rounded-full bg-lime/10 px-3 py-1 text-xs font-medium text-lime">{item.project}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-white/50">{t.trust.testimonials.note}</p>
      </div>
    </Section>
  );
}
