"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";

type MagneticWrapProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticWrap({
  children,
  className,
  strength = 0.28,
}: MagneticWrapProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={cn("inline-flex transition-transform duration-100", className)}
      onMouseMove={(event) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (event.clientX - centerX) * strength;
        const deltaY = (event.clientY - centerY) * strength;
        el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transition =
          "transform 500ms cubic-bezier(0.23, 1, 0.32, 1)";
        el.style.transform = "translate(0, 0)";
      }}
      onMouseEnter={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transition = "transform 100ms ease-out";
      }}
    >
      {children}
    </div>
  );
}
