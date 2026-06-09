"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type NavAnchorProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
  variant?: "nav" | "footer";
};

export function NavAnchor({
  href,
  children,
  className,
  onNavigate,
  variant = "nav",
}: NavAnchorProps) {
  const isExternal = href.startsWith("http") || href.startsWith("/assets");
  const isHash = href.startsWith("#");

  const styles = cn(
    "relative transition-colors",
    variant === "nav" &&
      "text-xs font-semibold uppercase tracking-[0.1em] text-foreground after:absolute after:bottom-[-3px] after:right-0 after:h-[3px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full max-[900px]:text-[11px] max-[900px]:tracking-[0.06em]",
    variant === "footer" &&
      "text-sm text-white after:absolute after:bottom-[-3px] after:right-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full",
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={styles}
        target="_blank"
        rel="noopener noreferrer"
        download={href.endsWith(".docx") ? true : undefined}
      >
        {children}
      </a>
    );
  }

  if (isHash) {
    return (
      <a
        href={href}
        className={styles}
        onClick={() => onNavigate?.()}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles} onClick={() => onNavigate?.()}>
      {children}
    </Link>
  );
}
