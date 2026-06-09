import { RevealOnScroll } from "@/components/effects/reveal-on-scroll";
import { ResumeDownloads } from "@/components/hero/resume-downloads";
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
            A bit <span className="section-accent text-maroon">{about.titleAccent}</span>
          </SectionTitle>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <p className="mx-auto mb-8 max-w-[720px] text-center text-[17px] leading-[1.7] text-foreground">
            {about.lede}{" "}
            <strong className="font-semibold text-maroon">{about.closing}</strong>
          </p>
          <div className="mb-12 flex justify-center">
            <ResumeDownloads variant="inline" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={2}>
          <ul className="mx-auto grid max-w-[980px] grid-cols-1 gap-3.5 px-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {about.stats.map((stat) => (
              <li
                key={stat.label}
                className="stat-card rounded-[14px] border border-border/80 bg-card px-5 py-7 text-center shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-250 hover:-translate-y-1 hover:border-maroon hover:shadow-[0_14px_32px_rgba(128,0,0,0.12)]"
              >
                <span className="mb-2.5 block font-serif text-[clamp(28px,5vw,44px)] leading-none text-maroon">
                  {stat.value}
                </span>
                <span className="block text-[13px] leading-snug font-medium tracking-wide text-muted-foreground">
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
