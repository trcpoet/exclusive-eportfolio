import { RevealOnScroll } from "@/components/effects/reveal-on-scroll";
import { SectionTitle } from "@/components/layout/section-title";
import { skillCategories, skillsSection } from "@/content/skills";

function getSkillDelay(index: number): 0 | 1 | 2 | 3 {
  return ((index % 3) + 1) as 1 | 2 | 3;
}

export function SkillsSection() {
  const titleParts = skillsSection.title.split(skillsSection.titleAccent);

  return (
    <section id="skills" className="scroll-mt-[var(--nav-height)] bg-background pt-[60px] pb-10">
      <div className="mx-auto w-full max-w-[1100px] px-3">
        <RevealOnScroll>
          <SectionTitle eyebrow={skillsSection.eyebrow}>
            {titleParts[0]}
            <span className="text-maroon">{skillsSection.titleAccent}</span>
            {titleParts[1]}
          </SectionTitle>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <p className="mx-auto -mt-9 mb-12 max-w-[820px] text-center text-[17px] leading-[1.7] text-foreground">
            I stay close to{" "}
            <strong className="font-semibold">users, customers, and internal stakeholders</strong>{" "}
            across the full lifecycle: interfaces that explain themselves, access
            controls that protect real people&apos;s data, APIs and databases teams
            can reason about, cloud and CI/CD pipelines that reduce release stress,
            tests that prevent surprises in production, and analytics that answer
            questions decision-makers actually ask. The stack below is how I deliver
            that care at scale.
          </p>
        </RevealOnScroll>

        <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-6 px-3 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <RevealOnScroll
              key={category.title}
              as="article"
              delay={getSkillDelay(index)}
              className="skill-card rounded-[14px] border border-border/80 bg-card px-[26px] pt-[26px] pb-[22px] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-[400ms] ease-out hover:-translate-y-0.5 hover:border-maroon hover:shadow-[0_12px_28px_rgba(128,0,0,0.1)]"
            >
              <h3 className="mb-3.5 font-serif text-[22px] leading-tight font-normal tracking-[-0.02em] text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="skill-chip inline-flex items-center rounded-full border border-border/80 bg-bg-light px-3 py-1.5 text-[13px] font-medium text-foreground transition-[border-color,color,background-color] duration-200 hover:border-maroon hover:bg-card hover:text-maroon dark:bg-muted/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
