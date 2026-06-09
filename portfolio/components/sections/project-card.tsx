"use client";

import type { Project, ProjectLink } from "@/content/projects";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { renderRichText } from "@/lib/rich-text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
      <path d="M5 5h6V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-6h-2v6H5V5z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.065 2.065 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const linkIconMap = {
  live: ExternalLinkIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

function ProjectLinkButton({ link }: { link: ProjectLink }) {
  const Icon = linkIconMap[link.type];
  const prominent = link.type === "github";

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      title={link.label}
      className={cn(
        "project-link-icon group/link relative inline-flex text-white transition-[opacity,transform] hover:opacity-90",
        prominent && "order-first scale-110"
      )}
    >
      <Icon />
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-black/85 px-2 py-0.5 text-[10px] font-medium tracking-wide whitespace-nowrap text-white opacity-0 transition-opacity group-hover/link:opacity-100 max-[480px]:hidden">
        {link.label}
      </span>
    </a>
  );
}

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || reducedMotion) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    VanillaTilt.init(wrapper, {
      max: 6,
      speed: 400,
      glare: true,
      "max-glare": 0.12,
      scale: 1.02,
      gyroscope: false,
    });

    return () => {
      const instance = (wrapper as HTMLElement & { vanillaTilt?: { destroy: () => void } })
        .vanillaTilt;
      instance?.destroy();
    };
  }, [reducedMotion]);

  const overlayStrong = "font-semibold text-white/98";
  const stackLabel = project.techTags.join(" · ");

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "group project-card cursor-hover-target relative mx-auto w-full max-w-[900px] overflow-hidden rounded-2xl border border-border/80 shadow-[0_16px_48px_rgba(0,0,0,0.12)] dark:border-white/10 dark:shadow-[0_16px_48px_rgba(0,0,0,0.35)]",
        !reducedMotion && "[@media(hover:hover)]:will-change-transform"
      )}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        width={900}
        height={506}
        className="h-auto w-full transition-[transform,filter] duration-[450ms] ease-out group-hover:scale-[1.07] group-hover:blur-[5px] max-md:group-hover:scale-100 max-md:group-hover:blur-0"
      />

      {/* Always-visible tech tags */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-[rgba(20,20,24,0.92)] via-[rgba(20,20,24,0.55)] to-transparent px-4 pt-10 pb-3.5">
        <p className="mb-2 font-serif text-lg leading-tight text-white md:text-xl">
          {project.title}
        </p>
        <p className="mb-2.5 text-[11px] font-semibold tracking-[0.12em] text-white/75 uppercase">
          {project.subtitle}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/95 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Stack strip — desktop hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] translate-y-full bg-maroon/95 px-4 py-2 text-center text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition-transform duration-300 ease-out group-hover:translate-y-0 max-md:hidden"
      >
        {stackLabel}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-br from-[rgba(60,0,0,0.96)] to-[rgba(28,29,37,0.96)] opacity-0 transition-opacity duration-[450ms] ease-out group-hover:opacity-90 max-md:opacity-0"
      />

      <div className="pointer-events-none absolute top-1/2 left-1/2 z-[4] w-full max-w-[560px] -translate-x-1/2 -translate-y-1/2 px-4 text-center text-[#f4f4f8] opacity-0 transition-[opacity,transform] duration-[450ms] ease-out group-hover:pointer-events-auto group-hover:opacity-100 max-md:hidden">
        <h3 className="pointer-events-none font-serif text-[clamp(32px,6vw,44px)] leading-none font-normal tracking-[-0.5px] text-white select-none">
          {project.title}
        </h3>
        <p className="pointer-events-none mt-2.5 text-xs font-semibold tracking-[0.15em] text-white/82 uppercase select-none">
          {project.subtitle}
        </p>
        <p className="mx-auto mt-4 max-w-[520px] cursor-text text-base leading-[1.65] text-[rgba(244,244,248,0.95)] select-text">
          {renderRichText(project.description, { strongClassName: overlayStrong })}
        </p>

        <ul className="mx-auto mt-4 max-w-[520px] cursor-text space-y-1.5 text-left text-sm leading-[1.5] text-white/90 select-text">
          {project.decisions.map((decision) => (
            <li key={decision} className="flex gap-2">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-red-300/90" aria-hidden />
              {decision}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-3 max-w-[520px] cursor-text border-t border-white/18 pt-3 text-sm leading-[1.55] font-medium text-red-200/98 select-text">
          {project.outcome}
        </p>
        <div className="mt-4 flex items-center justify-center gap-4">
          {project.links.map((link) => (
            <ProjectLinkButton key={`${link.type}-${link.href}`} link={link} />
          ))}
        </div>
      </div>

      {/* Mobile links — always reachable */}
      <div className="pointer-events-auto absolute top-3 right-3 z-[5] flex gap-2 md:hidden">
        {project.links.map((link) => (
          <a
            key={`${link.type}-${link.href}-mobile`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex size-9 items-center justify-center rounded-full bg-maroon/90 text-white shadow-md"
          >
            {link.type === "github" ? <GitHubIcon /> : link.type === "live" ? <ExternalLinkIcon /> : <LinkedInIcon />}
          </a>
        ))}
      </div>
    </div>
  );
}
