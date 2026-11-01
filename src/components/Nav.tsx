"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import SmoothScrollLink, { smoothScrollTo } from "@/components/SmoothScrollLink";

/** Full navigation so the browser honors the #work hash. Client-side routing does not. */
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
    <Link
      href="/#work"
      onClick={(event) => {
        event.preventDefault();
        // Client-side routing drops the #work hash, so this has to be a full navigation.
        // eslint-disable-next-line @next/next/no-location-assign-relative-destination
        window.location.assign("/#work");
      }}
      className={className}
      style={style}
    >
      {children}
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#3a302060] bg-[#0a0907cc] backdrop-blur-sm">
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
          className="font-display text-[#c9a84c] hover:opacity-80 transition-opacity text-[16px] sm:text-[18px] tracking-[0.12em] py-1"
        >
          Home
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 md:gap-x-8">
          {isHome ? (
            (
              [
                ["Work", "#work"],
                ["Leadership", "#leadership"],
                ["Illustration", "#illustration"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ] as const
            ).map(([label, href]) => (
              <SmoothScrollLink
                key={label}
                href={href}
                className="font-display text-[#d4c4a8] hover:text-[#c9a84c] transition-colors duration-300 text-[15px] sm:text-[16px] tracking-[0.1em] py-1"
              >
                {label.toUpperCase()}
              </SmoothScrollLink>
            ))
          ) : (
            <WorkHashLink
              className="font-display text-[#d4c4a8] hover:text-[#c9a84c] transition-colors duration-300 flex items-center gap-2 text-[15px] sm:text-[16px] tracking-[0.1em] py-1"
            >
              ← BACK TO PORTFOLIO
            </WorkHashLink>
          )}
        </div>
      </div>
    </nav>
  );
}
