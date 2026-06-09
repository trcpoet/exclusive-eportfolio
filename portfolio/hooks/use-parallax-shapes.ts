"use client";

import { parallaxShapes } from "@/content/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useCallback, useState } from "react";

const SCALE_FACTOR = 1 / 22;

export function useParallaxShapes() {
  const reducedMotion = useReducedMotion();
  const [offsets, setOffsets] = useState(
    parallaxShapes.map(() => ({ x: 0, y: 0 }))
  );

  const onMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (reducedMotion) return;

      const x = event.clientX * SCALE_FACTOR;
      const y = event.clientY * SCALE_FACTOR;

      setOffsets(
        parallaxShapes.map((_, i) => ({
          x: x * (i % 2 !== 0 ? -1 : 1),
          y: y * (i % 2 !== 0 ? -1 : 1),
        }))
      );
    },
    [reducedMotion]
  );

  return { offsets, onMouseMove };
}
