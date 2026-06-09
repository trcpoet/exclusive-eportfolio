"use client";

import { HeroHeadshot } from "@/components/hero/hero-headshot";
import { SocialLinks } from "@/components/hero/social-links";
import { hero } from "@/content/site";
import { useMediaQuery } from "@/hooks/use-media-query";
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
  const isDesktop = useMediaQuery("(min-width: 768px)");
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
    <header
      className={cn(
        "flex w-full max-w-[1100px] items-center justify-between gap-[clamp(24px,5vw,60px)] px-[clamp(16px,4vw,30px)] transition-[opacity,transform] duration-200 ease-out",
        "max-md:relative max-md:top-auto max-md:left-auto max-md:mx-auto max-md:mt-4 max-md:mb-6 max-md:flex-col-reverse max-md:gap-7",
        isDesktop && "absolute top-1/2 left-1/2 -translate-x-1/2"
      )}
      style={{
        transform: isDesktop
          ? `translate(-50%, calc(-50% + ${heroShift}px))`
          : undefined,
        opacity: heroOpacity,
        marginTop: isDesktop ? 32 : 16,
      }}
    >
      <div className="min-w-0 flex-1">
        <h1 className="font-serif text-[clamp(52px,11vw,120px)] leading-none tracking-[-0.04em] text-foreground">
          {reducedMotion && ready ? hero.greeting : greeting}
        </h1>
        <h1 className="hero-name-glow font-serif text-[clamp(52px,11vw,120px)] leading-none tracking-[-0.04em] text-maroon">
          {reducedMotion && ready ? hero.name : name}
        </h1>

        <p
          className={cn(
            "mt-3 max-w-[450px] text-[clamp(17px,1.6vw,18px)] leading-[1.85] tracking-wide text-foreground",
            showDetails && "animate-hero-rise",
            !showDetails && "opacity-0"
          )}
        >
          I&apos;m a{" "}
          <strong className="font-semibold text-maroon">Full Stack Engineer</strong>{" "}
          and{" "}
          <strong className="font-semibold text-maroon">Data Analyst</strong> who
          cares about the people on the other side of the screen—whether they are
          customers, teammates, or leaders reading a dashboard. Over{" "}
          <strong>5+ years</strong> I have shipped <strong>five</strong> production
          web products and <strong>three</strong> end-to-end data engagements, from
          live maps and commerce to SaaS billing and survey-driven BI. I focus on
          clear UX, dependable auth and data, steady releases, and communication
          you can count on.{" "}
          <strong className="text-maroon">{hero.availability}</strong>
          <br />
          Here&apos;s more{" "}
          <Link
            href="#about-me"
            className="font-semibold text-maroon underline-offset-4 hover:underline"
          >
            about me.
          </Link>
        </p>

        <SocialLinks visible={showDetails} />
      </div>

      <HeroHeadshot visible={showDetails} />
    </header>
  );
}
