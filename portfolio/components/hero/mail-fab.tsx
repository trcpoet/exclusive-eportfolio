"use client";

import { useContactModal } from "@/components/providers/contact-modal-provider";
import { MagneticWrap } from "@/components/hero/magnetic-wrap";
import { Mail } from "lucide-react";

export function MailFab() {
  const { openContact } = useContactModal();

  return (
    <MagneticWrap className="fixed right-4 bottom-4 z-[555] sm:right-8 sm:bottom-8">
      <button
        type="button"
        onClick={openContact}
        aria-label="Open contact form"
        className="cursor-hover-target flex size-14 items-center justify-center rounded-full bg-foreground text-background shadow-[0_6px_20px_rgba(128,0,0,0.2)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:scale-110 active:scale-90 sm:size-[70px] dark:bg-white dark:text-bg-dark"
      >
        <Mail className="size-6 -scale-x-100 sm:size-8" aria-hidden />
      </button>
    </MagneticWrap>
  );
}
