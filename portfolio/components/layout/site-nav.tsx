"use client";

import { useContactModal } from "@/components/providers/contact-modal-provider";
import { NavAnchor } from "@/components/layout/nav-anchor";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navLinks, siteMeta } from "@/content/site";
import { useScrollChrome } from "@/hooks/use-scroll-chrome";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function SiteNav() {
  const { compact } = useScrollChrome();
  const { openContact } = useContactModal();
  const [open, setOpen] = useState(false);

  function renderNavItem(
    link: (typeof navLinks)[number],
    variant: "desktop" | "mobile"
  ) {
    if (link.label === "Contact") {
      const className =
        variant === "desktop"
          ? undefined
          : "block w-full px-[18px] py-3.5 text-left text-base font-medium normal-case tracking-normal hover:bg-accent/60";

      return (
        <button
          type="button"
          onClick={() => {
            openContact();
            setOpen(false);
          }}
          className={cn(
            variant === "desktop" &&
              "relative text-xs font-semibold uppercase tracking-[0.1em] text-foreground after:absolute after:bottom-[-3px] after:right-0 after:h-[3px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full max-[900px]:text-[11px] max-[900px]:tracking-[0.06em]",
            className
          )}
        >
          {link.label}
        </button>
      );
    }

    return (
      <NavAnchor
        href={link.href}
        className={
          variant === "mobile"
            ? "block px-[18px] py-3.5 text-base font-medium normal-case tracking-normal after:hidden hover:bg-accent/60"
            : undefined
        }
        onNavigate={() => setOpen(false)}
      >
        {link.label}
      </NavAnchor>
    );
  }

  return (
    <header
      id="site-nav"
      className={cn(
        "fixed top-0 right-0 left-0 z-[900] h-[var(--nav-height)] border-b border-transparent transition-[height,background-color,box-shadow,backdrop-filter,border-color] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        compact &&
          "h-[72px] border-border/80 bg-bg-light/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-[14px] dark:bg-bg-dark/90 dark:shadow-none"
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between gap-3 px-5 md:px-10">
        <a
          href="#landing-page"
          aria-label={`${siteMeta.name}, home`}
          className={cn(
            "flex size-14 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-maroon to-maroon-dark text-2xl font-black tracking-tight text-white shadow-[0_4px_14px_rgba(128,0,0,0.25)] transition-[width,height,font-size,border-radius] duration-300 hover:scale-[1.03]",
            compact && "size-12 rounded-lg text-xl"
          )}
        >
          {siteMeta.initials}
        </a>

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-end md:flex"
        >
          <ul className="flex flex-wrap items-center justify-end gap-y-1.5">
            {navLinks.map((link) => (
              <li key={link.href} className="mx-3 max-[900px]:mx-2">
                {renderNavItem(link, "desktop")}
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center justify-end gap-1 md:ml-0">
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-11 md:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(360px,92vw)] p-0">
              <SheetHeader className="border-b border-border px-[18px] py-4">
                <SheetTitle className="font-serif text-[22px] font-normal">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <div key={link.href}>{renderNavItem(link, "mobile")}</div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
