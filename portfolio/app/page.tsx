import { OpenContactButton } from "@/components/hero/open-contact-button";
import { AboutSection } from "@/components/sections/about-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { LandingPage } from "@/components/sections/landing-page";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { siteMeta } from "@/content";

export default function Home() {
  return (
    <>
      <LandingPage />

      <MarqueeStrip />

      <main id="main-content" className="transition-opacity duration-[450ms] ease-out">
        <AboutSection />
        <SkillsSection />

        <ExperienceSection />
        <EducationSection />

        <ProjectsSection />

        <section
          id="contact"
          className="scroll-mt-[var(--nav-height)] bg-background py-20 md:py-28"
        >
          <div className="mx-auto w-full max-w-[1100px] px-3 text-center md:px-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Contact
            </p>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Let&apos;s talk about your team
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
              I&apos;m open to new opportunities. Send a message through the
              contact form or reach me directly at{" "}
              <a
                href={`mailto:${siteMeta.email}`}
                className="font-medium text-maroon underline-offset-4 hover:underline"
              >
                {siteMeta.email}
              </a>
              .
            </p>
            <OpenContactButton className="mt-8 bg-maroon hover:bg-maroon/90">
              Open contact form
            </OpenContactButton>
          </div>
        </section>
      </main>
    </>
  );
}
