"use client";

import { useContactModal } from "@/components/providers/contact-modal-provider";
import { NavAnchor } from "@/components/layout/nav-anchor";
import { footerLinks, siteMeta } from "@/content/site";

export function Footer() {
  const { openContact } = useContactModal();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-dark py-[6%] text-white">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-3">
        <div className="font-serif text-2xl font-normal tracking-tight">
          {siteMeta.initials}
        </div>
        <ul className="my-7 flex w-full max-w-[500px] justify-around">
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
        <p className="text-sm text-white/90">
          Copyright &copy; {year} {siteMeta.name}
        </p>
      </div>
    </footer>
  );
}
