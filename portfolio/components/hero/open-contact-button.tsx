"use client";

import { useContactModal } from "@/components/providers/contact-modal-provider";
import { Button } from "@/components/ui/button";

type OpenContactButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export function OpenContactButton({
  className,
  children,
}: OpenContactButtonProps) {
  const { openContact } = useContactModal();

  return (
    <Button type="button" variant="default" className={className} onClick={openContact}>
      {children}
    </Button>
  );
}
