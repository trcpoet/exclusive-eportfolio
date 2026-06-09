"use client";

import { parallaxShapes } from "@/content/site";
import Image from "next/image";

const SHAPE_POSITIONS = [
  { top: "15vh", left: "5vw" },
  { top: "15vh", left: "50vw" },
  { top: "15vh", left: "80vw" },
  { top: "50vh", left: "5vw" },
  { top: "50vh", left: "50vw" },
  { top: "50vh", left: "80vw" },
  { top: "80vh", left: "5vw" },
  { top: "80vh", left: "50vw" },
  { top: "80vh", left: "80vw" },
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
          className="pointer-events-none fixed z-0 opacity-45 saturate-[0.85]"
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
