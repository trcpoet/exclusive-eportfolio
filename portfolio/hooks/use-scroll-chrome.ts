"use client";

import { useEffect, useState } from "react";

const SCROLL_COMPACT_AT = 48;
const HERO_FADE_RANGE = 360;

export function useScrollChrome() {
  const [compact, setCompact] = useState(false);
  const [progress, setProgress] = useState(0);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [heroShift, setHeroShift] = useState(0);

  useEffect(() => {
    let ticking = false;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const update = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);

      setCompact(y > SCROLL_COMPACT_AT);
      setProgress(Math.min(100, (y / maxScroll) * 100));

      if (reducedMotion) {
        setHeroOpacity(1);
        setHeroShift(0);
      } else {
        const heroT = Math.min(1, y / HERO_FADE_RANGE);
        setHeroOpacity(1 - heroT * 0.32);
        setHeroShift(heroT * 14);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { compact, progress, heroOpacity, heroShift };
}
