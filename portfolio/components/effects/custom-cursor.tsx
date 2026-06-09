"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, .cursor-hover-target';

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringElRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const hoverMedia = window.matchMedia("(hover: hover)");
    const updateEnabled = () => setEnabled(hoverMedia.matches && !reducedMotion);
    updateEnabled();
    hoverMedia.addEventListener("change", updateEnabled);
    return () => hoverMedia.removeEventListener("change", updateEnabled);
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
      const dot = dotRef.current;
      if (dot) {
        dot.style.left = `${event.clientX}px`;
        dot.style.top = `${event.clientY}px`;
      }
    };

    const onOver = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest(INTERACTIVE_SELECTOR);
      setHovering(Boolean(target));
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    const animateRing = () => {
      const ring = ringElRef.current;
      if (ring) {
        ringRef.current.x += (mouseRef.current.x - ringRef.current.x) * 0.2;
        ringRef.current.y += (mouseRef.current.y - ringRef.current.y) * 0.2;
        ring.style.left = `${ringRef.current.x}px`;
        ring.style.top = `${ringRef.current.y}px`;
      }
      frameRef.current = requestAnimationFrame(animateRing);
    };

    frameRef.current = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        id="cursor-dot"
        aria-hidden
        className="pointer-events-none fixed z-[10000] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-maroon transition-transform duration-75"
      />
      <div
        ref={ringElRef}
        id="cursor-ring"
        aria-hidden
        className={cn(
          "pointer-events-none fixed z-[9999] size-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-maroon opacity-60 transition-[width,height,opacity,border-color] duration-200",
          hovering && "size-14 opacity-100 mix-blend-difference"
        )}
      />
    </>
  );
}
