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
        className="relative min-h-screen scroll-mt-[var(--nav-height)] overflow-hidden bg-[radial-gradient(ellipse_at_20%_50%,rgba(128,0,0,0.04)_0%,transparent_55%),radial-gradient(ellipse_at_80%_20%,rgba(128,0,0,0.03)_0%,transparent_45%)] pt-[var(--nav-height)] transition-[min-height,padding] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-md:min-h-0 max-md:pb-12 dark:bg-bg-dark"
      >
        <ParallaxShapes offsets={offsets} />
        <HeroSection ready={ready} />
        <MailFab />
        <ScrollCue />
      </section>
    </>
  );
}
