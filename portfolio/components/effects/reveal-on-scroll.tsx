"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type RevealDelay = 0 | 1 | 2 | 3 | 4;

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: RevealDelay;
  as?: "div" | "li" | "article";
};

const delayClasses: Record<RevealDelay, string> = {
  0: "",
  1: "delay-100",
  2: "delay-200",
  3: "delay-300",
  4: "delay-[400ms]",
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealOnScrollProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | HTMLLIElement | HTMLElement>(null);
  const [revealed, setRevealed] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const classes = cn(
    "transform transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none",
    revealed ? "translate-y-0 opacity-100" : "translate-y-9 opacity-0",
    delayClasses[delay],
    className
  );

  if (Tag === "li") {
    return (
      <li ref={ref as React.RefObject<HTMLLIElement>} className={classes}>
        {children}
      </li>
    );
  }

  if (Tag === "article") {
    return (
      <article ref={ref as React.RefObject<HTMLElement>} className={classes}>
        {children}
      </article>
    );
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={classes}>
      {children}
    </div>
  );
}
