"use client";

import { GrainOverlay } from "@/components/hero/grain-overlay";
import { HeroSection } from "@/components/hero/hero-section";
import { MailFab } from "@/components/hero/mail-fab";
import { ParallaxShapes } from "@/components/hero/parallax-shapes";
import { Preloader } from "@/components/hero/preloader";
import { ScrollCue } from "@/components/hero/scroll-cue";
import { useParallaxShapes } from "@/hooks/use-parallax-shapes";
import { useState } from "react";

export function LandingPage() {
  const [ready, setReady] = useState(false);
  const { offsets, onMouseMove } = useParallaxShapes();

  return (
    <>
      {!ready ? <Preloader onComplete={() => setReady(true)} /> : null}
      <GrainOverlay />
      <section
        id="landing-page"
        onMouseMove={onMouseMove}
        className="relative flex min-h-[calc(100svh-var(--nav-height))] scroll-mt-[var(--nav-height)] flex-col justify-center overflow-x-clip bg-[radial-gradient(ellipse_at_20%_50%,rgba(128,0,0,0.04)_0%,transparent_55%),radial-gradient(ellipse_at_80%_20%,rgba(128,0,0,0.03)_0%,transparent_45%)] pb-16 pt-[var(--nav-height)] dark:bg-bg-dark md:min-h-[calc(100dvh-var(--nav-height))] md:pb-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <ParallaxShapes offsets={offsets} />
        </div>

        <HeroSection ready={ready} />

        <MailFab />
        <ScrollCue />
      </section>
    </>
  );
}
