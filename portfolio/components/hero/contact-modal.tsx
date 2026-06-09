"use client";

import { ContactForm } from "@/components/hero/contact-form";
import { contact, modalAbout } from "@/content/site";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

type ContactModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const paragraphs = modalAbout.body.split("\n\n");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton
        className="h-[min(700px,92vh)] w-[min(1100px,92vw)] max-w-[min(1100px,92vw)] gap-0 overflow-hidden rounded-[20px] p-0 sm:max-w-[min(1100px,92vw)]"
      >
        <DialogTitle className="sr-only">
          {modalAbout.title} {contact.title}
        </DialogTitle>

        <div className="grid h-full min-h-0 grid-cols-1 md:grid-cols-2">
          <div className="min-h-0 overflow-y-auto bg-secondary px-8 py-10 text-foreground md:px-[72px] md:pt-14 dark:bg-[#2a2a2e]">
            <h3 className="mt-2 font-serif text-[28px] font-normal tracking-tight">
              {modalAbout.title}
            </h3>
            <p className="mt-3 mb-6 text-sm">{modalAbout.subtitle}</p>
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="mb-3 leading-[1.7]">
                {paragraph}
              </p>
            ))}
            <div className="mt-4 flex flex-wrap">
              {modalAbout.languages.map((language) => (
                <figure
                  key={language.name}
                  className="group relative flex w-1/4 flex-col items-center p-4 transition-transform hover:scale-90 hover:brightness-90"
                >
                  <Image
                    src={language.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="w-full max-w-[48px] transition-transform group-hover:animate-shake"
                  />
                  <figcaption className="absolute -bottom-2.5 scale-0 text-xs transition-transform group-hover:scale-100">
                    {language.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-0 flex-col overflow-y-auto bg-bg-dark px-8 py-10 text-white md:px-[72px] md:pt-14">
            <h3 className="font-serif text-[28px] font-normal tracking-tight">
              {contact.title}
            </h3>
            <p className="mt-3 mb-6 text-sm">{contact.subtitle}</p>
            <ContactForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
