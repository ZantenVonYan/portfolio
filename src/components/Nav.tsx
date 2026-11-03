"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import SmoothScrollLink, { ensureAnchorReachable, smoothScrollTo } from "@/components/SmoothScrollLink";

const SECTIONS = [
  ["Work", "work"],
  ["Impact", "impact"],
  ["Leadership", "leadership"],
  ["Illustration", "illustration"],
  ["About", "about"],
  ["Contact", "contact"],
] as const;

/** Full navigation so the browser honors the hash. Client-side routing does not. */
export function WorkHashLink({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <a href="/#work" className={className} style={style}>
      {children}
    </a>
  );
}

const sectionLinkClass =
  "font-display transition-colors duration-300 text-[15px] sm:text-[16px] tracking-[0.1em] py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8c97a]";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const navEl = document.querySelector("nav");
    if (!navEl) return;
    const apply = () => {
      const offset = Math.ceil(navEl.getBoundingClientRect().height + 16);
      document.documentElement.style.setProperty("--nav-offset", `${offset}px`);
      const outcome = document.getElementById("outcome");
      if (outcome) ensureAnchorReachable(outcome);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(navEl);
    window.addEventListener("resize", apply);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      setCurrent(null);
      return;
    }

    const ids = SECTIONS.map(([, id]) => id);
    let frame = 0;

    const update = () => {
      frame = 0;
      const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 72;
      const marker = navHeight + 160;
      let active: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - marker <= 0) active = id;
      }
      setCurrent(active);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [isHome]);

  return (
    <>
      <a href="#main" className="skip-link">
        SKIP TO CONTENT
      </a>
      <nav
        aria-label="Primary"
        className="fixed top-0 left-0 right-0 z-50 border-b border-[#3a302060] bg-[#0a0907cc] backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-center sm:justify-between gap-x-4 gap-y-2">
          <Link
            href="/"
            onClick={(event) => {
              if (isHome) {
                event.preventDefault();
                smoothScrollTo(0);
                if (window.location.hash) {
                  window.history.replaceState(null, "", "/");
                }
              }
            }}
            className="font-display text-[#c9a84c] hover:opacity-80 transition-opacity text-[16px] sm:text-[18px] tracking-[0.12em] py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8c97a]"
          >
            Home
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 md:gap-x-8">
            {SECTIONS.map(([label, id]) => {
              const active = isHome && current === id;
              const className = `${sectionLinkClass} ${
                active
                  ? "text-[#c9a84c] underline decoration-[#c9a84c] underline-offset-8"
                  : "text-[#d4c4a8] hover:text-[#c9a84c]"
              }`;

              if (isHome) {
                return (
                  <SmoothScrollLink key={id} href={`#${id}`} className={className} current={active}>
                    {label.toUpperCase()}
                  </SmoothScrollLink>
                );
              }

              return (
                <a key={id} href={`/#${id}`} className={className}>
                  {label.toUpperCase()}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
