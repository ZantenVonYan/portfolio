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
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
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
          className="font-display text-[#c9a84c] hover:opacity-80 transition-opacity"
          style={{ fontSize: "16px", letterSpacing: "0.14em" }}
        >
          Home
        </Link>
        <div className="flex items-center gap-6 md:gap-10">
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
                className="font-display text-[#d4c4a8] hover:text-[#c9a84c] transition-colors duration-300 hidden sm:block"
                style={{ fontSize: "13px", letterSpacing: "0.14em" }}
              >
                {label.toUpperCase()}
              </SmoothScrollLink>
            ))
          ) : (
            <WorkHashLink
              className="font-display text-[#d4c4a8] hover:text-[#c9a84c] transition-colors duration-300 flex items-center gap-2"
              style={{ fontSize: "13px", letterSpacing: "0.14em" }}
            >
              ← BACK TO PORTFOLIO
            </WorkHashLink>
          )}
        </div>
      </div>
    </nav>
  );
}
