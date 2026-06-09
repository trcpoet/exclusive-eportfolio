"use client";

import { HeroHeadshot } from "@/components/hero/hero-headshot";
import { ResumeDownloads } from "@/components/hero/resume-downloads";
import { SocialLinks } from "@/components/hero/social-links";
import { hero } from "@/content/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useScrambleText } from "@/hooks/use-scramble-text";
import { useScrollChrome } from "@/hooks/use-scroll-chrome";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeroSectionProps = {
  ready: boolean;
};

export function HeroSection({ ready }: HeroSectionProps) {
  const reducedMotion = useReducedMotion();
  const { heroOpacity, heroShift } = useScrollChrome();
  const [showDetails, setShowDetails] = useState(false);
  const [scrambleName, setScrambleName] = useState(false);

  const greeting = useScrambleText(hero.greeting, ready && !reducedMotion, 800);
  const name = useScrambleText(
    hero.name,
    scrambleName && !reducedMotion,
    800
  );

  useEffect(() => {
    if (!ready) return;

    if (reducedMotion) {
      setShowDetails(true);
      return;
    }

    const nameTimer = window.setTimeout(() => setScrambleName(true), 400);
    const detailsTimer = window.setTimeout(() => setShowDetails(true), 1600);

    return () => {
      window.clearTimeout(nameTimer);
      window.clearTimeout(detailsTimer);
    };
  }, [ready, reducedMotion]);

  return (
    <div
      className="relative z-10 w-full transition-[opacity,transform] duration-200 ease-out"
      style={{
        opacity: heroOpacity,
        transform: `translateY(${heroShift}px)`,
      }}
    >
      <header className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 lg:px-8 xl:gap-14">
        <div className="order-2 min-w-0 lg:order-1">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-maroon uppercase">
            {hero.role} · {hero.roleTagline}
          </p>
          <h1 className="font-serif text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95] tracking-[-0.04em] text-foreground">
            {reducedMotion && ready ? hero.greeting : greeting}
          </h1>
          <h1 className="hero-name-glow font-serif text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95] tracking-[-0.04em] text-maroon">
            {reducedMotion && ready ? hero.name : name}
          </h1>

          <p
            className={cn(
              "mt-3 max-w-[32rem] text-pretty text-[clamp(1rem,1.6vw,1.125rem)] font-medium leading-snug text-foreground",
              showDetails && "animate-hero-rise",
              !showDetails && "opacity-0"
            )}
          >
            {hero.engineerLine}
          </p>

          <p
            className={cn(
              "mt-3 max-w-[32rem] text-pretty text-[clamp(0.95rem,1.4vw,1.05rem)] leading-[1.75] text-muted-foreground",
              showDetails && "animate-hero-rise",
              !showDetails && "opacity-0"
            )}
          >
            {hero.intro}{" "}
            <strong className="font-medium text-maroon">{hero.availability}</strong>{" "}
            <Link
              href="#about-me"
              className="font-semibold text-maroon underline-offset-4 hover:underline"
            >
              About me →
            </Link>
          </p>

          <SocialLinks visible={showDetails} />
          <ResumeDownloads visible={showDetails} />
        </div>

        <HeroHeadshot
          visible={showDetails}
          className="order-1 justify-self-center lg:order-2 lg:justify-self-end"
        />
      </header>
    </div>
  );
}
