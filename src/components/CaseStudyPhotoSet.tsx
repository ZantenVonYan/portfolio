"use client";

import { useEffect, useState } from "react";
import { useModalDialog } from "@/components/useModalDialog";

type Photo = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
};

export default function CaseStudyPhotoSet({
  label,
  caption,
  photos,
}: {
  label: string;
  caption?: string;
  photos: Photo[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : photos[activeIndex];
  const { dialogRef, closeRef, rememberTrigger } = useModalDialog(activeIndex !== null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? index : (index + 1) % photos.length));
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null ? index : (index - 1 + photos.length) % photos.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [activeIndex, photos.length]);

  const showPrevious = () => {
    setActiveIndex((index) =>
      index === null ? index : (index - 1 + photos.length) % photos.length,
    );
  };
  const showNext = () => {
    setActiveIndex((index) => (index === null ? index : (index + 1) % photos.length));
  };

  return (
    <>
      <figure className="max-w-md border border-[#3a3020] overflow-hidden bg-[#0a0907]">
        {label ? (
          <p
            className="font-display text-[#c9a84c] tracking-widest px-4 py-2.5 border-b border-[#3a3020] bg-[#12100d]"
            style={{ fontSize: "14px", letterSpacing: "0.14em" }}
          >
            {label}
          </p>
        ) : null}
        <div className="grid grid-cols-4 gap-px bg-[#3a3020]">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => {
                rememberTrigger();
                setActiveIndex(index);
              }}
              className="relative aspect-[3/4] overflow-hidden bg-[#0a0907] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a84c]"
              aria-label={`View larger: ${photo.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
        {caption ? (
          <figcaption
            className="font-body text-[#b8a488] px-4 py-3 border-t border-[#3a3020]"
            style={{ fontSize: "14px", lineHeight: "1.6" }}
          >
            {caption}
          </figcaption>
        ) : null}
      </figure>

      {active && activeIndex !== null ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={active.label ?? active.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(10, 9, 7, 0.92)" }}
          onClick={() => setActiveIndex(null)}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setActiveIndex(null)}
            className="dialog-close"
          >
            CLOSE ✕
          </button>
          <figure
            className="max-w-5xl w-full max-h-[90vh] flex flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={active.alt}
                className="mx-auto max-h-[calc(100vh-9rem)] max-w-full object-contain border border-[#3a3020] bg-[#0f0d0b]"
              />
              {photos.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 min-h-11 min-w-11 font-display text-[#e8dcc8] border border-[#867e72] bg-[#0a0907]/80 px-3 py-2 hover:text-[#c9a84c] hover:border-[#c9a84c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8c97a] transition-colors"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 min-h-11 min-w-11 font-display text-[#e8dcc8] border border-[#867e72] bg-[#0a0907]/80 px-3 py-2 hover:text-[#c9a84c] hover:border-[#c9a84c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8c97a] transition-colors"
                  >
                    →
                  </button>
                </>
              ) : null}
            </div>
            <figcaption className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                {active.label ? (
                  <p
                    className="font-display text-[#c9a84c] tracking-widest mb-1"
                    style={{ fontSize: "14px", letterSpacing: "0.14em" }}
                  >
                    {active.label}
                  </p>
                ) : null}
                {active.caption ? (
                  <p className="font-body text-[#e8dcc8]" style={{ fontSize: "16px" }}>
                    {active.caption}
                  </p>
                ) : null}
              </div>
              <p className="font-body text-[#b8a488]" style={{ fontSize: "13px" }}>
                {activeIndex + 1} / {photos.length} · ← → to browse · Esc to close
              </p>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
