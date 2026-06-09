export type SkillCategory = {
  title: string;
  tags: string[];
};

export const skillsSection = {
  eyebrow: "How I serve teams",
  title: "Skills for people-first delivery",
  titleAccent: "for people-first delivery",
  intro:
    "I stay close to users, customers, and internal stakeholders across the full lifecycle: interfaces that explain themselves, access controls that protect real people's data, APIs and databases teams can reason about, cloud and CI/CD pipelines that reduce release stress, tests that prevent surprises in production, and analytics that answer questions decision-makers actually ask. The stack below is how I deliver that care at scale.",
} as const;

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & foundations",
    tags: [
      "JavaScript ES6+ — readable UI logic",
      "TypeScript — safer change for teams",
      "Java — structured services & coursework depth",
      "Python — analysis through small apps",
      "SQL — clear answers from complex data",
      "C — systems-level fundamentals",
      "HTML5 / CSS3 — accessible structure & layout",
      "SCSS / SASS — maintainable styling",
    ],
  },
  {
    title: "Interfaces customers understand",
    tags: [
      "React 19 — responsive, component-driven UI",
      "Next.js 15 — performance & SEO where they matter",
      "App Router · SSR/CSR — fit rendering to the task",
      "Redux / Zustand — predictable client state",
      "Tailwind CSS — consistent design velocity",
      "GSAP — motion that supports the task",
      "WCAG 2.0 / ARIA — accessibility as standard",
      "Responsive design — every device respected",
    ],
  },
  {
    title: "Services partners can rely on",
    tags: [
      "Node.js / Express — dependable APIs",
      "REST design — clear contracts for integrators",
      "OAuth 2.0 — familiar, secure sign-in",
      "JWT — session handling with refresh discipline",
      "Stripe — payments customers trust",
      "Supabase PostgREST — realtime product data",
      "Firebase Realtime — live updates where needed",
      "Mapbox GL — maps that stay responsive",
      "ML microservices — model output the UI can explain",
    ],
  },
  {
    title: "Data teams can trust",
    tags: [
      "PostgreSQL — relational integrity",
      "RLS & joins — tenant-safe access patterns",
      "Drizzle ORM — typed, maintainable access",
      "DynamoDB / RDS MySQL — fit storage to the problem",
      "Firebase / Mongo — flexibility when requirements shift",
      "CTEs & windows — transparent analytical SQL",
      "ER modelling — schema aligned to the business",
    ],
  },
  {
    title: "Cloud & delivery",
    tags: [
      "Lambda — scalable, event-driven work",
      "API Gateway — governed entry to services",
      "S3 & CloudFront — reliable global assets",
      "IAM least privilege — reduced risk posture",
      "Budget alarms — cost visibility for stakeholders",
      "Vercel CI/CD — repeatable preview & production",
      "Docker — consistent environments for teams",
    ],
  },
  {
    title: "Quality your users feel",
    tags: [
      "TDD mindset — confidence before merge",
      "Jest / RTL — UI behaviour covered by tests",
      "Zod — validated payloads end to end",
      "JUnit — disciplined Java test practice",
      "Chrome DevTools — measured performance tuning",
      "GitHub PR review — constructive, timely feedback",
    ],
  },
  {
    title: "Security & access",
    tags: [
      "Row Level Security — data scoped to the right user",
      "OAuth 2.0 / JWT refresh — current auth practice",
      "RBAC — clear roles for customers & staff",
      "Secure API auth — fewer vulnerabilities in the field",
      "InfoSec coursework — risk-aware engineering habits",
    ],
  },
  {
    title: "Analytics for decisions",
    tags: [
      "SQL — CTEs & windows for operational questions",
      "pandas / NumPy — clean inputs, clear outputs",
      "scikit-learn — interpretable model workflows",
      "Streamlit — stakeholder-friendly exploration",
      "Power BI + DAX — executive-ready reporting",
      "Star schema / Power Query — auditable BI models",
      "Tableau — complementary visual analysis",
      "Matplotlib · Seaborn · Altair — clear charts",
      "Excel — rapid analysis when speed matters",
    ],
  },
  {
    title: "Business context",
    tags: [
      "Business systems analysis — IT aligned to operations",
      "SAP / ERP — enterprise process awareness",
      "ERP workflows — requirements grounded in reality",
      "SDLC — predictable delivery with partners",
      "Project & operations management — respectful scope",
    ],
  },
  {
    title: "Collaboration tools",
    tags: [
      "Git / GitHub — transparent change history",
      "npm / Yarn — dependable dependency hygiene",
      "VS Code / IntelliJ — daily engineering environments",
      "Linux CLI — comfortable on servers",
      "Figma — design handoff partners appreciate",
      "Jira + Agile/Scrum — steady cadence with the team",
    ],
  },
  {
    title: "Continuous learning",
    tags: [
      "React Native — mobile experiences for customers",
      "Angular — enterprise UI patterns",
      "GraphQL — flexible client data fetching",
      "FastAPI / Django — Python service depth",
      "GitHub Actions — reliable automation",
      "Storybook — documented UI for cross-functional teams",
      "PyTorch / Snowflake — ML & warehouse expansion",
      "MongoDB full-stack — additional persistence options",
    ],
  },
];
