"use client";

import { CustomCursor } from "@/components/effects/custom-cursor";
import { ReducedMotionRoot } from "@/components/effects/reduced-motion-root";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SiteNav } from "@/components/layout/site-nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReducedMotionRoot />
      <CustomCursor />
      <a
        href="#main-content"
        className="absolute top-3 -left-[9999px] z-[10003] rounded-lg bg-maroon px-5 py-3 text-sm font-semibold text-white focus:left-3"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <SiteNav />
      {children}
    </>
  );
}
