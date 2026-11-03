"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "@/content/config";

type Props = {
  options: string[];
  hint: string;
  button: string;
  message: string;
  empty: string;
};

// Opciones que la persona marca; el botón abre WhatsApp con lo que eligió.
export function ListenPicker({ options, hint, button, message, empty }: Props) {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (o: string) =>
    setPicked((p) => (p.includes(o) ? p.filter((x) => x !== o) : [...p, o]));
  const text = picked.length ? message + picked.join(", ").toLowerCase() + "." : empty;

  return (
    <div>
      <ul className="flex flex-wrap gap-2.5">
        {options.map((o) => {
          const on = picked.includes(o);
          return (
            <li key={o}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => toggle(o)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-[15px] transition-colors duration-150 md:px-5 md:text-base ${
                  on
                    ? "border-lime bg-lime text-ink"
                    : "border-white/20 text-white/85 hover:border-lime/70 hover:text-white"
                }`}
              >
                {on ? <Check aria-hidden strokeWidth={2} className="size-4" /> : null}
                {o}
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm text-white/60">{hint}</p>
      <a
        href={whatsappUrl(text)}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-lime px-7 text-base font-medium text-ink transition-colors duration-200 hover:bg-white sm:w-auto md:text-lg"
      >
        {button}
        <ArrowRight
          aria-hidden
          strokeWidth={1.75}
          className="size-5 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </a>
    </div>
  );
}
