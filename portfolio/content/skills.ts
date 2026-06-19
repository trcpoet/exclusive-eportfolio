export type SkillCategory = {
  title: string;
  tags: string[];
};

export const skillsSection = {
  eyebrow: "Stack",
  title: "Tools I ship with",
  titleAccent: "I ship with",
  intro:
    "I'm a full stack developer aspiring and studying for data science and AI—these are the tools I reach for to build apps people love and dig into data when the story matters.",
} as const;

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages, auth, cloud & quality",
    tags: [
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "Java",
      "HTML / CSS",
      "OAuth",
      "JWT",
      "RLS",
      "Stripe",
      "Zod validation",
      "Vercel",
      "AWS Lambda",
      "Docker",
      "Git / GitHub",
      "CI-friendly deploys",
      "Jest",
      "Testing Library",
      "DevTools profiling",
      "Code review",
    ],
  },
  {
    title: "Frontend",
    tags: [
      "React 19",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Zustand / Redux",
      "WCAG / ARIA",
    ],
  },
  {
    title: "Backend & data",
    tags: [
      "Node.js / Express",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "Drizzle ORM",
      "REST APIs",
    ],
  },
  {
    title: "Data science & AI",
    tags: [
      "Power BI",
      "Pandas",
      "scikit-learn",
      "Streamlit",
      "ML APIs",
      "Power Query / DAX",
    ],
  },
  {
    title: "Data analytics",
    tags: ["Power BI", "Tableau", "Excel", "DAX", "SQL", "Data viz"],
  },
];
