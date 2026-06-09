"use client";

import type { SkillCategory } from "@/content/skills";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

type SkillCategoryCardProps = {
  category: SkillCategory;
  className?: string;
};

export function SkillCategoryCard({ category, className }: SkillCategoryCardProps) {
  const reducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || reducedMotion) return;
    if (!window.matchMedia("(min-width: 768px) and (hover: hover)").matches) return;

    VanillaTilt.init(card, {
      max: 4,
      speed: 500,
      glare: false,
      scale: 1.01,
      gyroscope: false,
    });

    return () => {
      const instance = (card as HTMLElement & { vanillaTilt?: { destroy: () => void } })
        .vanillaTilt;
      instance?.destroy();
    };
  }, [reducedMotion]);

  return (
    <article
      ref={cardRef}
      className={cn(
        "skill-card rounded-[14px] border border-border/80 bg-card px-[26px] pt-[26px] pb-[22px] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-[400ms] ease-out hover:-translate-y-0.5 hover:border-maroon hover:shadow-[0_12px_28px_rgba(128,0,0,0.1)]",
        className
      )}
    >
      <h3 className="mb-3.5 font-serif text-[22px] leading-tight font-normal tracking-[-0.02em] text-foreground">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.tags.map((tag) => (
          <span
            key={tag}
            className="skill-chip inline-flex items-center rounded-full border border-border/80 bg-bg-light px-3 py-1.5 text-[13px] font-medium text-foreground transition-[transform,box-shadow,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-maroon hover:bg-card hover:text-maroon hover:shadow-[0_0_0_1px_rgba(128,0,0,0.25)] dark:bg-muted/40"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
