import { RevealOnScroll } from "@/components/effects/reveal-on-scroll";
import { SectionTitle } from "@/components/layout/section-title";
import { ProjectCard } from "@/components/sections/project-card";
import {
  dataProjects,
  projectsSection,
  webProjects,
} from "@/content/projects";

function getProjectDelay(index: number): 1 | 2 | 3 | 4 {
  const delays = [1, 2, 3, 4] as const;
  return delays[index % delays.length];
}

type ProjectListProps = {
  projects: typeof webProjects;
};

function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="grid list-none grid-cols-1 gap-8 p-0 md:gap-12">
      {projects.map((project, index) => (
        <RevealOnScroll key={project.id} as="li" delay={getProjectDelay(index)}>
          <ProjectCard project={project} />
        </RevealOnScroll>
      ))}
    </ul>
  );
}

export function ProjectsSection() {
  const titleParts = projectsSection.title.split(projectsSection.titleAccent);

  return (
    <section
      id="projects"
      className="scroll-mt-[var(--nav-height)] bg-background pt-[60px] pb-20 md:pb-28"
    >
      <div className="mx-auto w-full max-w-[1100px] px-3">
        <RevealOnScroll>
          <SectionTitle eyebrow={projectsSection.eyebrow}>
            {titleParts[0]}
            <span className="text-maroon">{projectsSection.titleAccent}</span>
            {titleParts[1]}
          </SectionTitle>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <p className="mx-auto -mt-9 mb-10 max-w-[760px] text-center text-[17px] leading-[1.7] text-foreground">
            Each build is grounded in{" "}
            <strong className="font-semibold">people who depend on the product</strong>
            —clear maps and messaging, commerce flows that feel safe, media
            experiences that respect access and billing, and analytics stakeholders
            can question with confidence. Hover a card on desktop or open any link
            to see the live app and repository.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <h2
            id="web-projects"
            className="mt-2 scroll-mt-[calc(var(--nav-height)+16px)] text-center font-serif text-[clamp(28px,4vw,40px)] leading-tight font-normal tracking-[-0.5px] text-foreground"
          >
            {projectsSection.webSubtitle}
          </h2>
        </RevealOnScroll>

        <div className="mt-9">
          <ProjectList projects={webProjects} />
        </div>

        <div id="data-work" className="mt-[72px] scroll-mt-[calc(var(--nav-height)+16px)]">
          <RevealOnScroll>
            <h2 className="text-center font-serif text-[clamp(28px,4vw,40px)] leading-tight font-normal tracking-[-0.5px] text-foreground">
              {projectsSection.dataSubtitle}
            </h2>
          </RevealOnScroll>

          <div className="mt-9">
            <ProjectList projects={dataProjects} />
          </div>
        </div>
      </div>
    </section>
  );
}
