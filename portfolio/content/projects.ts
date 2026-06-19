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
  techTags: string[];
  decisions: string[];
  image: string;
  imageAlt: string;
  links: ProjectLink[];
  category: "web" | "data";
};

export const projectsSection = {
  eyebrow: "Selected work",
  title: "Projects I've shipped",
  titleAccent: "I've shipped",
  webSubtitle: "Apps people actually want to open",
  dataSubtitle: "Data & ML side quests",
} as const;

export const webProjects: Project[] = [
  {
    id: "fun",
    title: "FUN",
    subtitle: "Pickup sports, anywhere · find your crew on the map",
    techTags: ["React 19", "TypeScript", "Node", "Postgres", "Supabase", "Mapbox"],
    decisions: [
      "Web Worker clustering so 300+ player pins never freeze the map.",
      "Realtime chat + row-level security so every group's data stays theirs.",
    ],
    description:
      "A social sports app for finding pickup games and players just like you—any sport, anywhere in the world. Drop a pin, start a chat, and meet people who want to run the same game you do. I built the map, messaging, and auth stack so it feels less like a spreadsheet and more like showing up at the park.",
    outcome:
      "Players scroll a live world map past 300+ pins without lag—the heavy lifting stays off the main thread.",
    image: "/assets/fun-screenshot.png",
    imageAlt: "FUN Sports Map App",
    links: [
      { href: "https://github.com/trcpoet/FUN", type: "github", label: "View repo" },
      { href: "https://fun-amber-mu.vercel.app/", type: "live", label: "Live demo" },
    ],
    category: "web",
  },
  {
    id: "skinstric",
    title: "Skinstric AI",
    subtitle: "Luxury skincare · AI that reads your skin",
    techTags: ["Next.js", "TypeScript", "GSAP", "ML API"],
    decisions: [
      "GSAP motion that feels premium without wrecking layout on slower phones.",
      "Every ML response gets loading, confidence, and error states—no mystery spinners.",
    ],
    description:
      "Skinstric shows another side of AI and machine learning: luxury skincare. Snap a photo, get a thoughtful read on your skin, and move through a flow that feels like a high-end brand—not a lab experiment. I translated the Figma vision into Next.js with async ML, smooth motion, and accessibility baked in.",
    outcome:
      "Users finish the ritual on spotty Wi‑Fi because the app always tells them what's happening under the hood.",
    image: "/assets/skinstric.png",
    imageAlt: "Skinstric AI",
    links: [
      { href: "https://github.com/trcpoet/Skinstric", type: "github", label: "View repo" },
      { href: "https://skinstric-orpin.vercel.app/", type: "live", label: "Live demo" },
    ],
    category: "web",
  },
  {
    id: "nike",
    title: "Nike Clone",
    subtitle: "Billion-dollar storefront · sizes, colors, live pricing",
    techTags: ["Next.js", "Zustand", "Stripe", "Postgres", "Drizzle", "Zod"],
    decisions: [
      "SSR catalog for that instant Nike browse feel; client cart for snappy checkout.",
      "Every color and size carries its own price and discount logic—not one flat tag.",
    ],
    description:
      "A full clone of Nike's billion-dollar shopping experience—browse iconic drops, pick your color and size, and watch prices and discounts update like the real thing. Stripe checkout, OAuth accounts, and validation that keeps bad orders out of the database.",
    outcome:
      "Shoppers get real storefront energy—variant pricing, discounts, and checkout that doesn't break on bad input.",
    image: "/assets/NikeClone.png",
    imageAlt: "Nike E-Commerce Store",
    links: [
      { href: "https://github.com/trcpoet/nike-ecom-store", type: "github", label: "View repo" },
      { href: "https://nike-ecom-store-phi.vercel.app/", type: "live", label: "Live demo" },
    ],
    category: "web",
  },
  {
    id: "summarist",
    title: "Summarist",
    subtitle: "Your favorite books, summarized · press play and go",
    techTags: ["Next.js", "Firebase", "Firestore", "Stripe", "Audio API"],
    decisions: [
      "Stripe subscriptions and Firestore entitlements stay in sync—no free premium by accident.",
      "Custom audio player checks access before every chapter loads.",
    ],
    description:
      "Too many books, not enough time? Summarist lets you listen to tight summaries of the titles you love—free chapters to start, subscriptions when you're hooked. I wired auth, billing, and a custom player so what you hear always matches what you paid for.",
    outcome:
      "Listeners binge summaries without billing surprises—entitlements update the moment Stripe does.",
    image: "/assets/Summarist.png",
    imageAlt: "Summarist Audiobook Platform",
    links: [
      { href: "https://github.com/trcpoet/Summarist", type: "github", label: "View repo" },
      { href: "https://fes-internship-2-qztk.vercel.app/", type: "live", label: "Live demo" },
    ],
    category: "web",
  },
  {
    id: "awwwards",
    title: "Awwwards",
    subtitle: "Motion playground · GSAP skills on full display",
    techTags: ["React", "Vite", "Three.js", "GSAP"],
    decisions: [
      "UI timelines and WebGL scenes tuned separately—motion you can dial without breaking 3D.",
      "Effects capped for everyday laptops so the flex doesn't melt your GPU.",
    ],
    description:
      "The brief was simple: flex the GSAP skills. Scroll-driven timelines, layered transitions, and Three.js accents that feel award-site worthy—built to show motion craft without turning your laptop into a space heater.",
    outcome:
      "Silky scroll choreography on mid-range hardware because WebGL and GSAP each have a budget.",
    image: "/assets/awwwards.png",
    imageAlt: "Awwwards Design Showcase",
    links: [
      { href: "https://github.com/trcpoet/awwwards", type: "github", label: "View repo" },
      { href: "https://awwwards-lyart-alpha.vercel.app/", type: "live", label: "Live demo" },
    ],
    category: "web",
  },
  {
    id: "react-movie",
    title: "React Movie",
    subtitle: "Movie night, sorted · search millions of titles instantly",
    techTags: ["React", "Vite", "TMDB API", "React Query"],
    decisions: [
      "Debounced search + skeleton UI so typing never feels like shouting into the void.",
      "Friendly empty and offline states—no blank screen of shame.",
    ],
    description:
      "Your personal movie night concierge—search TMDB's catalog, filter fast, and land on something worth watching. Built for that \"what should we stream?\" moment with instant feedback even when the API is slow.",
    outcome:
      "Search feels immediate because the UI answers before the network always does.",
    image: "/assets/reactMovie.png",
    imageAlt: "React Movie App",
    links: [
      { href: "https://github.com/trcpoet/react-movie", type: "github", label: "View repo" },
      { href: "https://react-movie-weld-theta.vercel.app/", type: "live", label: "Live demo" },
    ],
    category: "web",
  },
  {
    id: "ultraverse",
    title: "Ultraverse",
    subtitle: "Collect the drop · NFT marketplace with personality",
    techTags: ["Next.js", "TypeScript", "Tailwind", "Web3"],
    decisions: [
      "Figma-faithful layouts with image loading tuned for big catalogs.",
      "Wallet toasts in plain English—users always know what just happened.",
    ],
    description:
      "An NFT marketplace that doesn't talk like a whitepaper—browse curated drops, search collections, and connect your wallet with copy that actually makes sense. Built for collectors who care about the art, not just the hash.",
    outcome:
      "First-time wallet users stick around because every action explains itself in human language.",
    image: "/assets/nft.png",
    imageAlt: "Ultraverse NFT Marketplace",
    links: [
      {
        href: "https://github.com/trcpoet/nft-marketplace-app-enhanced",
        type: "github",
        label: "View repo",
      },
      { href: "https://trc-internship.vercel.app/", type: "live", label: "Live demo" },
    ],
    category: "web",
  },
];

export const dataProjects: Project[] = [
  {
    id: "sql",
    title: "SQL Projects",
    subtitle: "Separate builds · library, retail, Amazon & more",
    techTags: ["SQL", "PostgreSQL", "Analytics"],
    decisions: [
      "Each domain is its own project—a library catalog, retail store sales, Amazon orders, and more—with a schema built for that data.",
      "CTEs and window functions tuned per dataset: margins and sales trends for retail, circulation and overdue logic for the library.",
    ],
    description:
      "A growing collection of standalone SQL projects, each modeling a different world: a library catalog and circulation system, retail store sales, Amazon order data, and others. Per project I design the schema, load real-world-shaped data, and write CTEs and window functions that turn messy rows into answers finance and ops teams can trust.",
    outcome:
      "Each project stands on its own—reusable query patterns I carry from one dataset to the next.",
    image: "/assets/data-work-card.svg",
    imageAlt: "SQL analytics projects",
    links: [
      {
        href: "https://github.com/trcpoet/sql_retail_sales_p1",
        type: "github",
        label: "Retail SQL repo",
      },
      {
        href: "https://github.com/trcpoet",
        type: "github",
        label: "More on GitHub",
      },
    ],
    category: "data",
  },
  {
    id: "power-bi",
    title: "Data Professional Survey",
    subtitle: "630 data pros · salaries, tools, and the Python wave",
    techTags: ["Power BI", "Power Query", "DAX", "Python"],
    decisions: [
      "Power Query tamed messy salary fields before a single chart went live.",
      "Star schema so anyone can slice pay, satisfaction, and tool adoption on their own.",
    ],
    description:
      "Ever wonder what 630 data professionals actually earn and which tools they reach for? I cleaned the survey chaos in Power Query, built a star schema, and wired DAX so leaders can explore adoption—Python showing up at 67%—without waiting on another export.",
    outcome:
      "Execs go from \"what's the headline?\" to their own drill-down in two clicks.",
    image: "/assets/data-work-card.svg",
    imageAlt: "Power BI survey dashboard",
    links: [
      {
        href: "https://www.linkedin.com/in/tahsinchowdhury-trc/",
        type: "linkedin",
        label: "LinkedIn",
      },
      { href: "https://github.com/trcpoet", type: "github", label: "View repo" },
    ],
    category: "data",
  },
  {
    id: "streamlit",
    title: "Data Science Web Apps",
    subtitle: "NBA stats, DNA, ML · twist the knobs live in the browser",
    techTags: ["Python", "Streamlit", "scikit-learn", "Pandas"],
    decisions: [
      "NBA explorer pulls scraped logs—filters update live, not static screenshots.",
      "sklearn sliders let stakeholders stress-test models while you're still in the meeting.",
    ],
    description:
      "Data science shouldn't end in a slide deck. I built Streamlit apps for NBA game logs, genomics exploration, and sklearn classifiers—interactive toys where stakeholders twist filters and inputs in real time instead of asking for \"one more version.\"",
    outcome:
      "Meetings end with a shared prototype, not a follow-up email asking for another chart.",
    image: "/assets/data-work-card.svg",
    imageAlt: "Data science web apps",
    links: [
      {
        href: "https://github.com/trcpoet/Data-Science-Projects-Python",
        type: "github",
        label: "View repo",
      },
    ],
    category: "data",
  },
];

export const allProjects = [...webProjects, ...dataProjects];
