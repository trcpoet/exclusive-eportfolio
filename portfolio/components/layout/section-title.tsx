import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ eyebrow, children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "mb-[60px] text-center font-serif text-[clamp(36px,8vw,52px)] leading-tight font-normal tracking-[-0.02em] text-foreground",
        className
      )}
    >
      <span className="mb-4 block font-sans text-[11px] font-semibold tracking-[0.25em] text-maroon uppercase">
        {eyebrow}
      </span>
      {children}
    </h2>
  );
}
