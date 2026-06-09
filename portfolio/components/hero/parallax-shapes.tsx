"use client";

import { parallaxShapes } from "@/content/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SHAPE_POSITIONS = [
  { top: "8%", left: "4%" },
  { top: "12%", left: "78%" },
  { top: "18%", left: "52%" },
  { top: "42%", left: "6%" },
  { top: "48%", left: "88%" },
  { top: "55%", left: "38%" },
  { top: "72%", left: "12%" },
  { top: "78%", left: "68%" },
  { top: "85%", left: "44%" },
] as const;

type ParallaxShapesProps = {
  offsets: { x: number; y: number }[];
};

export function ParallaxShapes({ offsets }: ParallaxShapesProps) {
  return (
    <>
      {parallaxShapes.map((shape, index) => (
        <Image
          key={shape.className}
          src={shape.src}
          alt=""
          width={80}
          height={80}
          aria-hidden
          className={cn(
            "pointer-events-none absolute size-12 opacity-25 saturate-[0.85] sm:size-16 sm:opacity-35 md:size-20 md:opacity-40",
            index % 3 === 0 ? "hidden sm:block" : ""
          )}
          style={{
            top: SHAPE_POSITIONS[index]?.top,
            left: SHAPE_POSITIONS[index]?.left,
            transform: `translate(${offsets[index]?.x ?? 0}px, ${offsets[index]?.y ?? 0}px)`,
          }}
        />
      ))}
    </>
  );
}
