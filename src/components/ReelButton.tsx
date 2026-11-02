"use client";

import { Play, X } from "lucide-react";
import { useRef } from "react";

type Props = {
  src: string;
  poster: string;
  label: string;
  meta: string;
  closeLabel: string;
};

// Portada del reel; al tocarla se abre el video vertical con sonido.
export function ReelButton({ src, poster, label, meta, closeLabel }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  const open = () => {
    dialog.current?.showModal();
    video.current?.play().catch(() => {});
  };
  const close = () => {
    video.current?.pause();
    dialog.current?.close();
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-deep py-1.5 pr-4 pl-1.5 text-sm font-medium text-white transition-colors hover:bg-ink"
      >
        <span className="flex size-8 items-center justify-center rounded-full bg-lime text-ink transition-transform group-hover:scale-110">
          <Play aria-hidden strokeWidth={2} className="size-3.5 translate-x-px fill-current" />
        </span>
        {label}
        <span className="text-white/60">· {meta}</span>
      </button>

      <dialog
        ref={dialog}
        onClose={() => video.current?.pause()}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        className="m-auto max-h-[92svh] w-[min(92vw,26rem)] overflow-visible bg-transparent p-0 backdrop:bg-black/80"
      >
        <div className="relative">
          <video
            ref={video}
            src={src}
            poster={poster}
            controls
            playsInline
            preload="none"
            className="aspect-[9/16] max-h-[88svh] w-full rounded-2xl bg-deep"
          />
          <button
            type="button"
            onClick={close}
            aria-label={closeLabel}
            className="absolute -top-3 -right-3 flex size-11 items-center justify-center rounded-full bg-lime text-ink shadow-lg"
          >
            <X aria-hidden strokeWidth={2} className="size-5" />
          </button>
        </div>
      </dialog>
    </>
  );
}
