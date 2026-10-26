"use client";

import { useEffect, useState } from "react";
import type { Illustration } from "@/data/illustrations";

export default function IllustrationGallery({ items }: { items: Illustration[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = items.find((item) => item.id === activeId) ?? null;

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const idx = items.findIndex((item) => item.id === active.id);
        if (idx < 0) return;
        const next =
          e.key === "ArrowRight"
            ? items[(idx + 1) % items.length]
            : items[(idx - 1 + items.length) % items.length];
        setActiveId(next.id);
      }
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, items]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            className="group relative text-left border border-[#3a3020] bg-[#1a1712] overflow-hidden card-glow transition-shadow duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a84c]"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#c9a84c30] z-10" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#c9a84c30] z-10" />
            <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1712] isolate">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumbSrc}
                alt={item.alt}
                className="card-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#1a1712] via-[#1a1712]/25 to-transparent" />
              <div className="absolute top-3 right-3 z-10">
                <span
                  className="inline-block font-display font-semibold text-[#e8dcc8] border border-[#867e72] px-2.5 py-1"
                  style={{
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    background: "rgba(10, 9, 7, 0.82)",
                  }}
                >
                  {item.year}
                </span>
              </div>
            </div>
            <div className="relative z-[2] bg-[#1a1712] p-5">
              <h3
                className="font-display text-[#e8dcc8] font-semibold mb-1"
                style={{ fontSize: "20px" }}
              >
                {item.title}
              </h3>
              <p className="font-body text-[#d4c4a8]" style={{ fontSize: "16px" }}>
                {item.medium}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title}, ${active.year}`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(10, 9, 7, 0.92)" }}
          onClick={() => setActiveId(null)}
        >
          <button
            type="button"
            onClick={() => setActiveId(null)}
            className="absolute top-5 right-5 font-display text-[#e8dcc8] hover:text-[#c9a84c] transition-colors"
            style={{ fontSize: "10px", letterSpacing: "0.2em" }}
          >
            CLOSE ✕
          </button>
          <figure
            className="max-w-5xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              className="w-full max-h-[75vh] object-contain border border-[#3a3020] bg-[#0f0d0b]"
            />
            <figcaption className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                <p
                  className="font-display text-[#c9a84c] tracking-widest mb-1"
                  style={{ fontSize: "10px", letterSpacing: "0.22em" }}
                >
                  {active.year} · {active.medium.toUpperCase()}
                </p>
                <p className="font-display text-[#e8dcc8] font-semibold" style={{ fontSize: "20px" }}>
                  {active.title}
                </p>
              </div>
              <p className="font-body text-[#b8a488]" style={{ fontSize: "13px" }}>
                ← → to browse · Esc to close
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
