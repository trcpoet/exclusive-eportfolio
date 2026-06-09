"use client";

import { resumes } from "@/content/site";
import { cn } from "@/lib/utils";

type ResumeDownloadsProps = {
  visible?: boolean;
  variant?: "hero" | "inline";
  className?: string;
};

function triggerDownload(href: string, fileName: string) {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.download = fileName;
  anchor.rel = "noopener noreferrer";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

export function ResumeDownloads({
  visible = true,
  variant = "hero",
  className,
}: ResumeDownloadsProps) {
  function downloadBoth() {
    triggerDownload(resumes.swe.href, resumes.swe.fileName);
    window.setTimeout(() => {
      triggerDownload(resumes.data.href, resumes.data.fileName);
    }, 200);
  }

  const baseBtn =
    "cursor-hover-target rounded-full border border-maroon/30 bg-card px-3.5 py-1.5 text-xs font-semibold tracking-wide text-foreground shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-maroon hover:shadow-[0_6px_20px_rgba(128,0,0,0.12)] active:scale-[0.98]";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2",
        variant === "hero" && "mt-4",
        variant === "hero" && visible && "animate-hero-rise",
        variant === "hero" && !visible && "opacity-0",
        className
      )}
    >
      <span className="sr-only">Download resume</span>
      <a
        href={resumes.swe.href}
        download={resumes.swe.fileName}
        className={baseBtn}
      >
        SWE PDF
      </a>
      <a
        href={resumes.data.href}
        download={resumes.data.fileName}
        className={baseBtn}
      >
        Data PDF
      </a>
      <button type="button" onClick={downloadBoth} className={baseBtn}>
        Both PDFs
      </button>
    </div>
  );
}
