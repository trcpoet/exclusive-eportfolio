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
  title: "Experience that ships",
  titleAccent: "Experience",
} as const;

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Founder & Engineer",
    dates: "Jan 2024 – Present",
    company: "Self-Employed",
    location: "Arlington, TX",
    bullets: [
      "Clients and my own products needed full-stack apps, not slide decks. I built **5 production web apps** on Vercel—auth, Postgres, payments, maps, and ML flows—and owned design through deploy on four of them. The work is live and clickable, not buried in a PDF: [FUN](https://fun-amber-mu.vercel.app/), [Nike clone](https://nike-ecom-store-phi.vercel.app/), [Skinstric AI](https://skinstric-orpin.vercel.app/), [Summarist](https://fes-internship-2-qztk.vercel.app/), and [Awwwards](https://awwwards-lyart-alpha.vercel.app/).",
      "[FUN](https://fun-amber-mu.vercel.app/)'s map started choking with **300+ pins** on the main thread. I profiled renders and moved clustering into a **Web Worker** so organizers could keep chatting over a responsive map at crowd density.",
      "One-off deploys were adding up, so I stood up an **AWS serverless** base—Lambda, API Gateway, DynamoDB, RDS, S3, CloudFront—with least-privilege IAM. New products extend the same template instead of reinventing infra.",
      "Feature creep kept breaking auth and validation. I made **RLS, OAuth, JWT refresh, Zod, and Jest** the default before new scope lands, so reviews stay focused on product instead of footguns.",
    ],
  },
  {
    role: "Software Developer",
    dates: "Apr 2021 – May 2024",
    company: "University of Texas at Arlington",
    location: "Arlington, TX",
    bullets: [
      "Coursework had to mirror how teams actually ship. I built across **React, TypeScript, Java, SQL, and Python** with Agile sprints and readable handoffs—patterns I still reach for in production repos.",
      "Enterprise Java demanded layered, testable code. **OOP, JDBC, concurrency, and JUnit TDD** on multi-tier apps taught me how to model business logic before the API surface gets wide.",
      "ERP simulations came with strict procurement and inventory rules. **SAP/ERP** case work trained me to translate requirements and sign off data flows before writing code.",
    ],
  },
  {
    role: "Data Analyst",
    dates: "Aug 2019 – Apr 2021",
    company: "University of Texas at Arlington",
    location: "Arlington, TX",
    bullets: [
      "Campus teams sat on messy institutional datasets. I cleaned, modeled, and documented **recurring reports** so partners could rerun them without pulling me back into every cycle.",
      "Leaders needed insight, not raw exports. I built **Power BI** dashboards and walkthrough decks around their questions—shorter meetings and visuals they could slice on their own.",
    ],
  },
];
