"use client";

import { useEffect, useState, type ReactNode } from "react";

// Muestra su contenido solo después de bajar un poco (para no tapar la portada).
export function ShowAfterScroll({ offset = 560, className = "", children }: { offset?: number; className?: string; children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return (
    <div
      className={`${className} transition-all duration-300 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
      aria-hidden={!visible}
    >
      {children}
    </div>
  );
}
