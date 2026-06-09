"use client";

import { ResumeDownloads } from "@/components/hero/resume-downloads";
import { useContactModal } from "@/components/providers/contact-modal-provider";
import { NavAnchor } from "@/components/layout/nav-anchor";
import { footerLinks, siteMeta } from "@/content/site";

export function Footer() {
  const { openContact } = useContactModal();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-dark py-[6%] text-white">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-3">
        <div className="text-center">
          <div className="font-serif text-2xl font-normal tracking-tight">
            {siteMeta.initials}
          </div>
          <p className="mt-1 text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
            {siteMeta.role} · {siteMeta.roleTagline}
          </p>
        </div>
        <ul className="my-7 flex w-full max-w-[500px] flex-wrap justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <li key={link.label}>
              {link.label === "Contact" ? (
                <button
                  type="button"
                  onClick={openContact}
                  className="relative text-sm text-white after:absolute after:bottom-[-3px] after:right-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
                >
                  {link.label}
                </button>
              ) : (
                <NavAnchor href={link.href} variant="footer">
                  {link.label}
                </NavAnchor>
              )}
            </li>
          ))}
        </ul>
        <ResumeDownloads variant="inline" className="mb-6 justify-center [&_a]:border-white/25 [&_a]:bg-white/10 [&_a]:text-white [&_button]:border-white/25 [&_button]:bg-white/10 [&_button]:text-white" />
        <p className="text-sm text-white/90">
          Copyright &copy; {year} {siteMeta.name}
        </p>
        <p className="mt-2 text-xs text-white/55">
          Built with Next.js 16 + GSAP ·{" "}
          <NavAnchor href="/classic" variant="footer" className="text-white/70">
            Classic site
          </NavAnchor>
        </p>
      </div>
    </footer>
  );
}
