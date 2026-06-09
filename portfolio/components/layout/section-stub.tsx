import { cn } from "@/lib/utils";

type SectionStubProps = {
  id: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  className?: string;
};

export function SectionStub({
  id,
  eyebrow,
  title,
  titleAccent,
  description,
  className,
}: SectionStubProps) {
  const titleParts = titleAccent
    ? title.split(titleAccent)
    : [title];

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[var(--nav-height)] bg-background py-20 md:py-28",
        className
      )}
    >
      <div className="mx-auto w-full max-w-[1100px] px-3 md:px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          {titleAccent && titleParts.length > 1 ? (
            <>
              {titleParts[0]}
              <span className="text-maroon">{titleAccent}</span>
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </h2>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
