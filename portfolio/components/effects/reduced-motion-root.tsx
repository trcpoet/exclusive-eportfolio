"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useEffect } from "react";

export function ReducedMotionRoot() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.classList.toggle("reduced-motion", reducedMotion);
    return () => document.documentElement.classList.remove("reduced-motion");
  }, [reducedMotion]);

  return null;
}
