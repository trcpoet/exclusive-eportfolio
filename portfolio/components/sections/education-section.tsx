import { RevealOnScroll } from "@/components/effects/reveal-on-scroll";
import { SectionTitle } from "@/components/layout/section-title";
import { education, educationSection } from "@/content/education";

export function EducationSection() {
  const titleParts = educationSection.title.split(educationSection.titleAccent);

  return (
    <section
      id="education"
      className="scroll-mt-[var(--nav-height)] bg-background pt-[60px] pb-20"
    >
      <div className="mx-auto w-full max-w-[1100px] px-3">
        <RevealOnScroll>
          <SectionTitle eyebrow={educationSection.eyebrow}>
            <span className="section-accent text-maroon">{educationSection.titleAccent}</span>
            {titleParts[1]}
          </SectionTitle>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <article className="education-card mx-auto max-w-[860px] rounded-2xl border border-border/80 bg-card px-8 py-8 shadow-[0_8px_24px_rgba(0,0,0,0.05)] max-[480px]:px-[22px] max-[480px]:py-6">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-4 border-b border-border/80 pb-5">
              <div>
                <h3 className="mb-1 font-serif text-[26px] leading-tight font-normal tracking-[-0.02em] text-foreground max-[480px]:text-[22px]">
                  {education.school}
                </h3>
                <p className="text-[15px] text-muted-foreground">
                  {education.degree} ·{" "}
                  <span className="text-maroon">{education.highlights}</span>
                </p>
              </div>
              <span className="pt-1.5 text-[13px] font-semibold tracking-[0.08em] text-maroon uppercase">
                {education.years}
              </span>
            </div>

            <p className="text-[15px] leading-[1.7] text-foreground">
              {education.narrative}
            </p>

            <div className="mt-[18px]">
              <h4 className="mb-2.5 text-[11px] font-semibold tracking-[0.25em] text-maroon uppercase">
                Technical
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.technicalChips.map((chip) => (
                  <span
                    key={chip}
                    className="skill-chip inline-flex items-center rounded-full border border-border/80 bg-bg-light px-3 py-1.5 text-[13px] font-medium text-foreground transition-[border-color,color,background-color] duration-200 hover:border-maroon hover:bg-card hover:text-maroon dark:bg-muted/40"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-[18px]">
              <h4 className="mb-2.5 text-[11px] font-semibold tracking-[0.25em] text-maroon uppercase">
                Business
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.businessChips.map((chip) => (
                  <span
                    key={chip}
                    className="skill-chip inline-flex items-center rounded-full border border-border/80 bg-bg-light px-3 py-1.5 text-[13px] font-medium text-foreground transition-[border-color,color,background-color] duration-200 hover:border-maroon hover:bg-card hover:text-maroon dark:bg-muted/40"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </section>
  );
}
