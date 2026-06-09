import { RevealOnScroll } from "@/components/effects/reveal-on-scroll";
import { SectionTitle } from "@/components/layout/section-title";
import { about } from "@/content/site";

export function AboutSection() {
  return (
    <section
      id="about-me"
      className="scroll-mt-[var(--nav-height)] bg-background pt-20 pb-10"
    >
      <div className="mx-auto w-full max-w-[1100px] px-3">
        <RevealOnScroll>
          <SectionTitle eyebrow={about.eyebrow}>
            A bit <span className="text-maroon">{about.titleAccent}</span>
          </SectionTitle>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <p className="mx-auto mb-14 max-w-[820px] text-center text-[19px] leading-[1.7] text-foreground md:text-[19px] max-md:text-[17px]">
            I care when a beautiful mock does not match what{" "}
            <strong className="font-semibold">end users</strong> feel in
            production—or when a report is accurate but still does not help
            anyone decide. With a BS in Information Systems (
            <strong className="font-semibold">STEM</strong>,{" "}
            <strong className="font-semibold">AACSB</strong>, UT Arlington, May
            2024) and{" "}
            <strong className="font-semibold text-maroon">5+ years</strong> across
            engineering and analytics, I have delivered{" "}
            <strong className="font-semibold">five live web applications</strong>{" "}
            and{" "}
            <strong className="font-semibold">three data engagements</strong> with
            the same through-line: respect for users, clarity for stakeholders,
            and ownership through launch. I translate design into accessible UI,
            address performance before it becomes a support ticket, and treat code
            review as a chance to align—not to score points.{" "}
            <strong className="font-semibold text-maroon">{about.closing}</strong>
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={2}>
          <ul className="mx-auto grid max-w-[980px] grid-cols-1 gap-3.5 px-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {about.stats.map((stat) => (
              <li
                key={stat.label}
                className="stat-card rounded-[14px] border border-border/80 bg-card px-5 py-7 text-center shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-250 hover:-translate-y-1 hover:border-maroon hover:shadow-[0_14px_32px_rgba(128,0,0,0.12)]"
              >
                <span className="mb-2.5 block font-serif text-[44px] leading-none text-maroon max-[480px]:text-4xl">
                  {stat.value}
                </span>
                <span className="block text-[13px] font-medium tracking-wide text-muted-foreground">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
