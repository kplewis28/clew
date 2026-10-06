import { Sparkle } from "lucide-react";
import type { Content } from "@/content";

// Cinta lima con las tres palabras de marca. Es decorativa: las mismas
// palabras aparecen como texto real en la sección siguiente.
export function Marquee({ t }: { t: Content }) {
  const words = Array.from({ length: 4 }, () => t.marquee).flat();

  return (
    <div aria-hidden className="overflow-hidden bg-lime py-4 text-ink md:py-5">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {words.map((word, index) => (
              <li
                key={index}
                className="flex items-center text-xl font-extrabold tracking-tight uppercase italic md:text-2xl"
              >
                <span className="px-6 md:px-8">{word}</span>
                <Sparkle strokeWidth={2} className="size-4 md:size-5" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
