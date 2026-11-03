"use client";

import { type CSSProperties, type MouseEvent, type ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** Marks the nav item for the section currently in view. */
  current?: boolean;
};

function easeOut(t: number) {
  return 1 - (1 - t) ** 3;
}

let frame = 0;

export function navScrollOffset() {
  const fromVar = Number.parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--nav-offset"),
  );
  const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 72;
  return Number.isFinite(fromVar) ? fromVar : navHeight + 16;
}

/**
 * A section near the bottom cannot move up to the nav unless the page is
 * tall enough. Grow the end spacer by only the missing distance.
 */
export function ensureAnchorReachable(target: HTMLElement) {
  const offset = navScrollOffset();
  const top = target.getBoundingClientRect().top + window.scrollY;
  const spacer = document.getElementById("scroll-end-spacer");
  const existing = spacer ? spacer.offsetHeight : 0;
  const scrollHeightWithout = document.documentElement.scrollHeight - existing;
  const needed = Math.max(0, Math.ceil(top - offset + window.innerHeight - scrollHeightWithout));
  if (spacer && spacer.offsetHeight !== needed) {
    spacer.style.height = `${needed}px`;
  }
  return top - offset;
}

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

export default function SmoothScrollLink({ href, className, style, children, current }: Props) {
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
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    smoothScrollTo(ensureAnchorReachable(target));
    history.pushState(null, "", href);
  }

  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={onClick}
      aria-current={current ? "location" : undefined}
    >
      {children}
    </a>
  );
}
