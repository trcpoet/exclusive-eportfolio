"use client";

import { siteMeta } from "@/content/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type PreloaderProps = {
  onComplete: () => void;
};

export function Preloader({ onComplete }: PreloaderProps) {
  const reducedMotion = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const delay = reducedMotion ? 220 : 1400;

    const hideTimer = window.setTimeout(() => setHidden(true), delay);
    const removeTimer = window.setTimeout(() => {
      setRemoved(true);
      onComplete();
    }, delay + 500);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, [onComplete, reducedMotion]);

  if (removed) return null;

  return (
    <div
      id="preloader"
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-bg-dark transition-[opacity,visibility] duration-500",
        hidden && "pointer-events-none invisible opacity-0"
      )}
    >
      <div className="relative">
        <p className="text-center font-serif text-[clamp(60px,15vw,100px)] font-normal tracking-[-0.04em] text-white">
          {siteMeta.initials}
        </p>
        <div
          className={cn(
            "mt-4 h-1 rounded-sm bg-maroon",
            reducedMotion ? "w-full" : "w-0 animate-preloader-line"
          )}
        />
      </div>
    </div>
  );
}
