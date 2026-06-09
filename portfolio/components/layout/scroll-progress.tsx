"use client";

import { useContactModal } from "@/components/providers/contact-modal-provider";
import { useScrollChrome } from "@/hooks/use-scroll-chrome";
import { cn } from "@/lib/utils";

export function ScrollProgress({ className }: { className?: string }) {
  const { progress } = useScrollChrome();
  const { open } = useContactModal();

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-[10002] h-[3px] max-w-full origin-left bg-gradient-to-r from-maroon-dark to-maroon transition-[width,opacity] duration-150 ease-out",
        open && "opacity-0",
        className
      )}
      style={{ width: `${progress}%` }}
    />
  );
}
