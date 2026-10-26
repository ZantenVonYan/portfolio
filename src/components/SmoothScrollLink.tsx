"use client";

import { type CSSProperties, type MouseEvent, type ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

function easeOut(t: number) {
  return 1 - (1 - t) ** 3;
}

let frame = 0;

/** One in-page scroll at a time, so a second nav click takes over cleanly. */
export function smoothScrollTo(top: number) {
  window.cancelAnimationFrame(frame);

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const start = window.scrollY;
  const distance = top - start;

  if (reduce || Math.abs(distance) < 1) {
    window.scrollTo(0, top);
    return;
  }

  const duration = Math.min(1100, Math.max(560, Math.abs(distance) * 0.42));
  const startTime = performance.now();

  const step = (now: number) => {
    const t = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, start + distance * easeOut(t));
    if (t < 1) frame = window.requestAnimationFrame(step);
  };

  frame = window.requestAnimationFrame(step);
}

export default function SmoothScrollLink({ href, className, style, children }: Props) {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const id = href.startsWith("#") ? href.slice(1) : "";
    const target = id ? document.getElementById(id) : null;
    if (!target) return;

    event.preventDefault();
    const margin = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - margin;
    smoothScrollTo(top);
    history.pushState(null, "", href);
  }

  return (
    <a href={href} className={className} style={style} onClick={onClick}>
      {children}
    </a>
  );
}
