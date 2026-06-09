export const siteMeta = {
  title: "Tahsin R. Chowdhury | Full Stack Engineer & Data Analyst",
  description:
    "Tahsin R. Chowdhury — Full Stack Engineer & Data Analyst focused on dependable products, clear analytics, and respectful collaboration. UT Arlington BS Information Systems (STEM, AACSB). DFW.",
  name: "Tahsin R. Chowdhury",
  initials: "TRC",
  location: "DFW",
  email: "tchowdhury29@gmail.com",
} as const;

export const navLinks = [
  { label: "About", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Data", href: "#data-work" },
  { label: "Projects", href: "#web-projects" },
  { label: "Contact", href: "#contact" },
] as const;

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
  {
    label: "Resume (Word)",
    href: "/assets/Tahsin_CV_Master_v8.docx",
    icon: "file-word",
    download: true,
  },
] as const;

export const footerLinks = [
  { label: "Github", href: "https://github.com/trcpoet" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tahsinchowdhury-trc/" },
  { label: "Contact", href: "#contact" },
  { label: "Resume (Word)", href: "/assets/Tahsin_CV_Master_v8.docx", download: true },
] as const;

export const hero = {
  greeting: "Hey",
  name: "I'm Tahsin.",
  intro:
    "I'm a Full Stack Engineer and Data Analyst who cares about the people on the other side of the screen—whether they are customers, teammates, or leaders reading a dashboard. Over 5+ years I have shipped five production web products and three end-to-end data engagements, from live maps and commerce to SaaS billing and survey-driven BI. I focus on clear UX, dependable auth and data, steady releases, and communication you can count on.",
  availability: "DFW · available now.",
  headshot: {
    src: "/assets/headshot2.JPG",
    alt: "Tahsin Rahman Chowdhury",
  },
} as const;

export const modalAbout = {
  title: "Here's a bit about me.",
  subtitle: "Full Stack Engineer · Data Analyst",
  body: `I build software and analytics the way I would want them delivered to me: clear expectations, steady progress, and respect for people's time. Five production web applications from design intent through deployment—payments, maps, realtime collaboration, and ML-backed flows—with attention to security, testing, and release quality. On the analytics side, I turn messy operational data and survey exports into SQL and Power BI work stakeholders can trust in reviews and planning sessions.

When design and engineering priorities differ, I default to listening first, showing options with a prototype or metrics, and agreeing on a path that protects both the user experience and delivery dates. BS Information Systems (STEM + AACSB, UT Arlington, May 2024). DFW · ready to contribute.`,
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
  subtitle: "I'm currently open to new opportunities.",
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
  "AWS",
  "PostgreSQL",
  "Power BI",
  "Python",
  "Node.js",
  "Tailwind CSS",
  "Supabase",
  "Three.js",
  "Firebase",
] as const;

export const about = {
  eyebrow: "About",
  title: "A bit about me",
  titleAccent: "about me",
  lede: `I care when a beautiful mock does not match what end users feel in production—or when a report is accurate but still does not help anyone decide. With a BS in Information Systems (STEM, AACSB, UT Arlington, May 2024) and 5+ years across engineering and analytics, I have delivered five live web applications and three data engagements with the same through-line: respect for users, clarity for stakeholders, and ownership through launch. I translate design into accessible UI, address performance before it becomes a support ticket, and treat code review as a chance to align—not to score points.`,
  closing: "DFW · ready to serve your next initiative.",
  stats: [
    { value: "5", label: "Shipped web products" },
    { value: "3", label: "Analytics partners used" },
    { value: "5+", label: "Years building & analyzing" },
    { value: "DFW", label: "Ready for your team" },
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
