export const siteMeta = {
  title: "Tahsin R. Chowdhury | Founder & Engineer",
  description:
    "Founder and engineer — full stack developer aspiring data scientist. React, Next.js, TypeScript, Postgres, Python, and AI. UT Arlington BS Information Systems. DFW.",
  name: "Tahsin R. Chowdhury",
  initials: "TRC",
  role: "Founder & Engineer",
  roleTagline: "Full Stack Developer · Aspiring Data Scientist",
  location: "DFW",
  email: "tchowdhury29@gmail.com",
  emailAlt: "tahsin.chowdhury@mavs.uta.edu",
} as const;

export const navLinks = [
  { label: "About", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#web-projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const resume = {
  label: "Resume",
  fileName: "Tahsin SWE Data 1Page.pdf",
  href: "/assets/tahsin_swe_data_1page.pdf",
} as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tahsinchowdhury-trc/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/trcpoet",
    icon: "github",
  },
] as const;

export const footerLinks = [
  { label: "GitHub", href: "https://github.com/trcpoet" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tahsinchowdhury-trc/" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  greeting: "Hey",
  name: "I'm Tahsin.",
  role: siteMeta.role,
  roleTagline: siteMeta.roleTagline,
  engineerLine:
    "Full stack developer building apps people actually want to use—and studying data science and AI on the side.",
  intro:
    "I'm a founder and engineer who loves new, interesting things that solve real problems. I aspire to build work that makes the world a little better—whether that's a live app on Vercel or a model that helps someone understand their data.",
  availability: "DFW · open to entry-level SWE & data roles.",
  headshot: {
    src: "/assets/headshot2.JPG",
    alt: "Tahsin Rahman Chowdhury",
  },
} as const;

export const modalAbout = {
  title: "Here's a bit about me.",
  subtitle: "Founder & engineer · full stack · aspiring data scientist",
  body: `I like building things people love. Right now that means React/Next apps with auth, realtime, and polish—but I'm also studying data science and AI because the best products need both great code and great insight.

**Software:** live apps for sports, skincare, commerce, audiobooks, and motion—on React, TypeScript, Node, Postgres, Supabase, Stripe, and Vercel.

**Data & AI:** SQL, Power BI, Python, and ML flows when the problem needs more than a frontend.

BS Information Systems (STEM + AACSB), UT Arlington, May 2024. DFW.`,
  languages: [
    { name: "HTML", icon: "https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "NEXT.JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TYPESCRIPT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "NODE.JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "POSTGRESQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "TAILWIND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  ],
} as const;

export const contact = {
  title: "Let's get in touch!",
  subtitle: "Open to entry-level software and data roles.",
  submitLabel: "Send message",
  successMessage:
    "Thanks for the message! Looking forward to speaking to you soon.",
  emailJs: {
    serviceId: "service_frm9cdp",
    templateId: "template_ux16esc",
    publicKey: "fZork7537wneqtdF2",
  },
} as const;

export const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "AWS",
  "Vercel",
  "GSAP",
  "Machine Learning",
  "Zod",
] as const;

export const about = {
  eyebrow: "About",
  title: "A bit about me",
  titleAccent: "about me",
  lede: `Founder and engineer—a full stack developer aspiring and studying for data science and AI. I like building new, interesting things that people love and that solve real problems. UT Arlington BS Information Systems (STEM, AACSB, May 2024).`,
  closing: "DFW · aspiring to build things that make the world a better place.",
  stats: [
    { value: "FUN", label: "Pickup sports worldwide · find your crew on the map" },
    { value: "5", label: "Live apps · Vercel, Postgres, OAuth, Stripe" },
    { value: "Nike", label: "Billion-dollar storefront clone · live pricing per size & color" },
    { value: "3", label: "Data builds · SQL stories, BI dashboards, ML explorers" },
  ],
} as const;

export const parallaxShapes = [
  { src: "/assets/semi circle.svg", className: "shape--0" },
  { src: "/assets/circle.svg", className: "shape--1" },
  { src: "/assets/squiggly.svg", className: "shape--2" },
  { src: "/assets/circle.svg", className: "shape--3" },
  { src: "/assets/triangle.svg", className: "shape--4" },
  { src: "/assets/circle.svg", className: "shape--5" },
  { src: "/assets/squiggly.svg", className: "shape--6" },
  { src: "/assets/circle.svg", className: "shape--7" },
  { src: "/assets/semi circle.svg", className: "shape--8" },
] as const;
