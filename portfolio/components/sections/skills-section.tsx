import { RevealOnScroll } from "@/components/effects/reveal-on-scroll";
import { SectionTitle } from "@/components/layout/section-title";
import { SkillCategoryCard } from "@/components/sections/skill-category-card";
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
            <span className="section-accent text-maroon">{skillsSection.titleAccent}</span>
            {titleParts[1]}
          </SectionTitle>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <p className="mx-auto -mt-9 mb-12 max-w-[720px] text-center text-[17px] leading-[1.7] text-foreground">
            {skillsSection.intro}
          </p>
        </RevealOnScroll>

        <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-6 px-3 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={category.title} delay={getSkillDelay(index)}>
              <SkillCategoryCard category={category} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
