"use client";

import { hero } from "@/content/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

type HeroHeadshotProps = {
  visible: boolean;
};

export function HeroHeadshot({ visible }: HeroHeadshotProps) {
  const reducedMotion = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || reducedMotion) return;

    VanillaTilt.init(frame, {
      max: 10,
      speed: 600,
      glare: true,
      "max-glare": 0.18,
      scale: 1.02,
      gyroscope: false,
    });

    return () => {
      const instance = (frame as HTMLElement & { vanillaTilt?: { destroy: () => void } })
        .vanillaTilt;
      instance?.destroy();
    };
  }, [reducedMotion]);

  return (
    <div
      className={cn(
        "shrink-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
    >
      <div
        ref={frameRef}
        className="h-[clamp(216px,58vw,390px)] w-[clamp(180px,48vw,320px)] overflow-hidden rounded-[20px] border border-border/80 shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(128,0,0,0.08)] transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.14),0_8px_20px_rgba(128,0,0,0.12)] md:h-[clamp(292px,34vw,390px)] md:w-[clamp(240px,28vw,320px)]"
      >
        <Image
          src={hero.headshot.src}
          alt={hero.headshot.alt}
          width={320}
          height={390}
          priority
          className="pointer-events-none h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
