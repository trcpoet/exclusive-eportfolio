export type ProjectLink = {
  href: string;
  type: "live" | "github" | "linkedin";
  label: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  image: string;
  imageAlt: string;
  links: ProjectLink[];
  category: "web" | "data";
};

export const projectsSection = {
  eyebrow: "Selected work",
  title: "Projects I'm proud to stand behind",
  titleAccent: "proud to stand behind",
  lead: "Each build is grounded in people who depend on the product—clear maps and messaging, commerce flows that feel safe, media experiences that respect access and billing, and analytics stakeholders can question with confidence. Hover a card on desktop or open any link to see the live app and repository.",
  webSubtitle: "Shipped web products",
  dataSubtitle: "Analytics & data work",
} as const;

export const webProjects: Project[] = [
  {
    id: "fun",
    title: "FUN",
    subtitle: "Sports nights on a map · realtime coordination",
    description:
      "Organizers and players need a map that keeps up—venues visible, chat reliable, bookings without conflicts. I shipped a full stack on **React 19, TypeScript, Node/Express, Postgres, Supabase channels, Mapbox, Docker**, with **RLS** and OAuth so each group's data stays private. When **300+ pins** stressed the UI thread, I profiled in DevTools, moved heavy work to a **Web Worker**, and tuned loading so the experience stays smooth under real event load.",
    outcome:
      "A responsive map at real crowd density, dependable messaging, and tenant isolation people can trust.",
    image: "/assets/fun-screenshot.png",
    imageAlt: "FUN Sports Map App",
    links: [
      { href: "https://fun-amber-mu.vercel.app/", type: "live", label: "Live demo" },
      { href: "https://github.com/trcpoet/FUN", type: "github", label: "GitHub" },
    ],
    category: "web",
  },
  {
    id: "skinstric",
    title: "Skinstric AI",
    subtitle: "Beauty meets biology · guided AI skincare flow",
    description:
      "Users upload a photo and wait for analysis—they deserve clear status, honest uncertainty, and respectful errors. I matched detailed Figma specs in **React + Next + TypeScript**, used **GSAP** for motion that supports the flow without hurting layout, and wired async ML responses with explicit loading, confidence, and failure paths. Accessibility and keyboard support stayed in scope from the first screen.",
    outcome:
      "A production-ready flow users can complete—even when the network is uneven or the model is cautious.",
    image: "/assets/skinstric.png",
    imageAlt: "Skinstric AI",
    links: [
      { href: "https://skinstric-orpin.vercel.app/", type: "live", label: "Live demo" },
      { href: "https://github.com/trcpoet/Skinstric", type: "github", label: "GitHub" },
    ],
    category: "web",
  },
  {
    id: "nike",
    title: "Nike Clone",
    subtitle: "E-commerce demo · fast catalog, trustworthy checkout",
    description:
      "Shoppers should enjoy browsing while still trusting checkout. Catalog pages use deliberate **SSR/CSR splits** for speed, the cart uses **Zustand** for predictable state, **Stripe** handles payments, and **Zod** validates payloads before they reach the database. OAuth with Postgres and Drizzle keeps accounts and orders traceable for support and audits.",
    outcome:
      "A storefront you can walk a stakeholder through end to end—with polish that holds up in a demo or review.",
    image: "/assets/NikeClone.png",
    imageAlt: "Nike E-Commerce Store",
    links: [
      { href: "https://nike-ecom-store-phi.vercel.app/", type: "live", label: "Live demo" },
      { href: "https://github.com/trcpoet/nike-ecom-store", type: "github", label: "GitHub" },
    ],
    category: "web",
  },
  {
    id: "summarist",
    title: "Summarist",
    subtitle: "Audiobooks · subscriptions and entitlements done clearly",
    description:
      "Free and paid listeners need the same clarity about what they can hear. I integrated **Firebase auth** across Next's server and client boundaries, used **Firestore** for realtime subscription state, connected **Stripe** for renewals and receipts, and built a custom **audio player** that respects entitlement before each chapter.",
    outcome:
      "Authentication, entitlements, billing, and playback stay aligned—no mismatched \"premium\" access and no unexplained playback stops.",
    image: "/assets/Summarist.png",
    imageAlt: "Summarist Audiobook Platform",
    links: [
      { href: "https://fes-internship-2-qztk.vercel.app/", type: "live", label: "Live demo" },
      { href: "https://github.com/trcpoet/Summarist", type: "github", label: "GitHub" },
    ],
    category: "web",
  },
  {
    id: "awwwards",
    title: "Awwwards",
    subtitle: "Motion & 3D · performance-aware experimentation",
    description:
      "This **React + Vite + Three.js + GSAP** showcase pairs timeline-driven UI motion with WebGL depth while staying honest about **GPU and frame budgets**—so ambitious visuals can be tuned before they ship to customers on everyday laptops.",
    outcome:
      "Practical judgment on when to dial back effects so the experience still feels premium on common hardware.",
    image: "/assets/awwwards.png",
    imageAlt: "Awwwards Design Showcase",
    links: [
      { href: "https://awwwards-lyart-alpha.vercel.app/", type: "live", label: "Live demo" },
      { href: "https://github.com/trcpoet/awwwards", type: "github", label: "GitHub" },
    ],
    category: "web",
  },
  {
    id: "react-movie",
    title: "React Movie",
    subtitle: "Movie night in a browser · search that feels instant",
    description:
      "Discovery should feel fast and forgiving. This **React + Vite** TMDB companion focuses on responsive search, detail pages with the right depth of metadata, and empty and offline states that explain what happened instead of leaving people stuck.",
    outcome:
      "A smooth browse-and-detail loop plus data-fetching patterns I reuse on production-facing apps.",
    image: "/assets/reactMovie.png",
    imageAlt: "React Movie App",
    links: [
      { href: "https://react-movie-weld-theta.vercel.app/", type: "live", label: "Live demo" },
      { href: "https://github.com/trcpoet/react-movie", type: "github", label: "GitHub" },
    ],
    category: "web",
  },
  {
    id: "ultraverse",
    title: "Ultraverse",
    subtitle: "Digital collectibles · storefront focused on clarity",
    description:
      "Many NFT storefronts bury users in jargon. This **Figma-aligned** experience in **React, Next, TypeScript, Tailwind** emphasizes curated browsing, responsive search, intentional image loading, and plain-language feedback after each wallet action so customers always know what changed.",
    outcome:
      "A demo that shows how I would prioritize trust and explanation if blockchain-backed commerce were part of your roadmap.",
    image: "/assets/nft.png",
    imageAlt: "Ultraverse NFT Marketplace",
    links: [
      { href: "https://trc-internship.vercel.app/", type: "live", label: "Live demo" },
      {
        href: "https://github.com/trcpoet/nft-marketplace-app-enhanced",
        type: "github",
        label: "GitHub",
      },
    ],
    category: "web",
  },
];

export const dataProjects: Project[] = [
  {
    id: "sql",
    title: "Retail & Library SQL",
    subtitle: "Retail receipts & library operations · analytical SQL",
    description:
      "Two domains: **retail** with 1,000+ transactions—margins, peak hours, and month-over-month trends using **CTEs and window functions**; and a **library** model where circulation, overdues, and branch metrics stay auditable. Same discipline—different business questions.",
    outcome:
      "Reusable SQL patterns I still apply when product schemas must stay accurate as requirements grow.",
    image: "/assets/data-work-card.svg",
    imageAlt: "SQL analytics projects",
    links: [
      {
        href: "https://github.com/trcpoet/sql_retail_sales_p1",
        type: "github",
        label: "GitHub",
      },
    ],
    category: "data",
  },
  {
    id: "power-bi",
    title: "Data Professional Survey",
    subtitle: "630 voices, one dashboard · Power BI storytelling",
    description:
      "Survey responses need careful cleaning before they inform decisions. I used **Power Query** to normalize salary fields, handle nulls explicitly, and modeled a **star schema with DAX** so leaders could see compensation bands, satisfaction with pay, and tool adoption—including **Python at 67%** alongside meaningful use of R and SQL.",
    outcome:
      "Executive-ready reporting with visuals that welcome follow-up questions instead of hiding assumptions.",
    image: "/assets/data-work-card.svg",
    imageAlt: "Power BI survey dashboard",
    links: [
      {
        href: "https://www.linkedin.com/in/tahsinchowdhury-trc/",
        type: "linkedin",
        label: "LinkedIn",
      },
      { href: "https://github.com/trcpoet", type: "github", label: "GitHub" },
    ],
    category: "data",
  },
  {
    id: "streamlit",
    title: "Data Science Web Apps",
    subtitle: "Interactive analytics · Streamlit prototypes",
    description:
      "When a question is easier to answer with a live tool than a deck, I reach for **Streamlit**: an **NBA stat explorer** fed by scraped game logs, a **DNA sequence visualizer** from FASTA inputs, exploratory views for markets and sports data, and **scikit-learn** classifiers with adjustable inputs—so partners can explore scenarios together instead of waiting on static exports.",
    outcome:
      "A repeatable path from \"can we see this sliced differently?\" to a shareable prototype before the conversation moves on.",
    image: "/assets/data-work-card.svg",
    imageAlt: "Data science web apps",
    links: [
      {
        href: "https://github.com/trcpoet/Data-Science-Projects-Python",
        type: "github",
        label: "GitHub",
      },
    ],
    category: "data",
  },
];

export const allProjects = [...webProjects, ...dataProjects];
