"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Instantly reset scroll on route changes.
 * Global `scroll-behavior: smooth` breaks Next.js scroll restoration and
 * leaves users mid-page after "View case study" — looking like a broken nav.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
