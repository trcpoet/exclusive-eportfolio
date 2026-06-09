"use client";

import { useEffect, useState } from "react";

const SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";

export function useScrambleText(
  finalText: string,
  active: boolean,
  duration = 800
) {
  const [display, setDisplay] = useState(finalText);

  useEffect(() => {
    if (!active) {
      setDisplay(finalText);
      return;
    }

    const totalFrames = Math.round(duration / 40);
    let frame = 0;

    const interval = window.setInterval(() => {
      setDisplay(
        finalText
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < Math.floor((frame / totalFrames) * finalText.length)) {
              return char;
            }
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join("")
      );

      if (frame >= totalFrames) {
        setDisplay(finalText);
        window.clearInterval(interval);
      }
      frame++;
    }, 40);

    return () => window.clearInterval(interval);
  }, [active, duration, finalText]);

  return display;
}
