import { Eye, Globe, Languages, MessageCircle, ShieldCheck, Wallet } from "lucide-react";
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
    </Section>
  );
}
