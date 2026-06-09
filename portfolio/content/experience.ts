export type ExperienceEntry = {
  role: string;
  roleSub?: string;
  dates: string;
  company: string;
  location: string;
  bullets: string[];
};

export const experienceSection = {
  eyebrow: "The journey",
  title: "Experience that supports delivery",
  titleAccent: "Experience",
} as const;

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Founder & Full Stack Engineer",
    dates: "Jan 2024 – Present",
    company: "Self-Employed",
    location: "Arlington, TX",
    bullets: [
      "I delivered **end-to-end web products** for real use cases: five shipped apps where I owned design handoff through database design, authentication, and dependable **Vercel** releases—four of them full design-to-code ownership so stakeholders saw one coherent story.",
      "I integrated **payments, maps, realtime data, sign-in, and ML endpoints** so customers get a smooth front-of-house experience while support and engineering get clear errors, retries, and documented boundaries.",
      "When FUN's map slowed under **300+ live pins**, I profiled in DevTools, moved heavy work into a **Web Worker**, and tuned loading so the UI stayed responsive under real crowd conditions.",
      "I built a **serverless AWS foundation** (Lambda, API Gateway, DynamoDB, RDS, S3, CloudFront, least-privilege IAM, budget alarms) so capacity scales with demand without a dedicated ops footprint.",
      "Security and QA aren't footnotes—**RLS, OAuth, JWT refresh, RBAC** show up everywhere, and **Jest, Testing Library, Zod, and honest PR review** keep regressions from becoming customer surprises.",
    ],
  },
  {
    role: "Software Developer",
    roleSub: "(Coursework)",
    dates: "Apr 2021 – May 2024",
    company: "University of Texas at Arlington",
    location: "Arlington, TX",
    bullets: [
      "UTA is where I internalized the **full SDLC**—Agile cadence paired with shipped coursework in React, TypeScript, Java, SQL, and Python, with documentation written for the next person on the team.",
      "Java coursework stressed **OOP, JDBC, concurrency with locks, and JUnit TDD**—layered applications held to both rubric requirements and a personal bar for clarity and maintainability.",
      "I even spent quality time inside **SAP/ERP** simulations—procurement, inventory, materials—so I'd never treat \"business logic\" as someone else's problem.",
    ],
  },
  {
    role: "Data Analyst",
    dates: "Aug 2019 – Apr 2021",
    company: "University of Texas at Arlington",
    location: "Arlington, TX",
    bullets: [
      "For two years I lived inside **UTA's institutional data**—cleaning, modelling, and visualising messy operational datasets until recurring reports stopped being a scavenger hunt for busy staff.",
      "I learned the soft skill behind the hard numbers: **Power BI decks, crisp write-ups, and live presentations** that helped non-technical partners trust the trend lines.",
    ],
  },
];
