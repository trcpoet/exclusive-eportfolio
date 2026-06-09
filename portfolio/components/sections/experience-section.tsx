import { RevealOnScroll } from "@/components/effects/reveal-on-scroll";
import { SectionTitle } from "@/components/layout/section-title";
import { experienceEntries, experienceSection } from "@/content/experience";
import { renderRichText } from "@/lib/rich-text";

function getEntryDelay(index: number): 1 | 2 | 3 {
  return ((index % 3) + 1) as 1 | 2 | 3;
}

export function ExperienceSection() {
  const titleParts = experienceSection.title.split(experienceSection.titleAccent);

  return (
    <section
      id="experience"
      className="scroll-mt-[var(--nav-height)] bg-background pt-[60px] pb-10"
    >
      <div className="mx-auto w-full max-w-[1100px] px-3">
        <RevealOnScroll>
          <SectionTitle eyebrow={experienceSection.eyebrow}>
            <span className="section-accent text-maroon">{experienceSection.titleAccent}</span>
            {titleParts[1]}
          </SectionTitle>
        </RevealOnScroll>

        <ol className="relative mx-auto max-w-[860px] px-3 pl-9">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-7 w-0.5 bg-gradient-to-b from-maroon to-maroon/15"
          />

          {experienceEntries.map((entry, index) => (
            <RevealOnScroll
              key={`${entry.role}-${entry.dates}`}
              as="li"
              delay={getEntryDelay(index)}
              className="timeline-entry group relative list-none pb-9 pl-8 last:pb-0"
            >
              <div
                aria-hidden
                className="timeline-dot absolute top-1.5 -left-2.5 size-4 rounded-full border-[3px] border-maroon bg-card shadow-[0_0_0_4px_var(--background)] transition-transform duration-200 group-hover:scale-125 dark:shadow-[0_0_0_4px_var(--bg-dark)]"
              />

              <div className="timeline__body">
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl leading-tight font-normal tracking-[-0.02em] text-foreground">
                    {entry.role}
                    {entry.roleSub ? (
                      <span className="ml-1 font-sans text-[15px] font-normal text-muted-foreground">
                        {entry.roleSub}
                      </span>
                    ) : null}
                  </h3>
                  <span className="timeline-date rounded-full border border-transparent px-2 py-0.5 text-[13px] font-semibold tracking-[0.08em] text-maroon uppercase transition-colors duration-200 group-hover:border-maroon/30 group-hover:bg-maroon/8">
                    {entry.dates}
                  </span>
                </div>

                <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {entry.company}
                  </span>
                  <span>
                    <span className="mr-3 text-muted-foreground">·</span>
                    {entry.location}
                  </span>
                </div>

                <ul className="list-disc space-y-1.5 pl-[18px] marker:text-maroon">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 40)}
                      className="text-base leading-[1.65] text-foreground"
                    >
                      {renderRichText(bullet)}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
