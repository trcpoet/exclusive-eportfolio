"use client";

import { ContactModal } from "@/components/hero/contact-modal";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ContactModalContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openContact: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(
  null
);

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openContact = useCallback(() => setOpen(true), []);

  const value = useMemo(
    () => ({ open, setOpen, openContact }),
    [open, openContact]
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal open={open} onOpenChange={setOpen} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}
