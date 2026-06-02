export interface Experience {
  year: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export const bio = {
  name: "Amps",
  tagline: "MADMAN // BUILDER // AUGMENTED",
  description:
    "I'm a madman building the future I want. I believe in human augmentation — that the bridge between man and machine is where the most interesting things get built. I design systems where humans and agents create together. If you want to build the future you want too — join me.",
  stats: [
    { label: "PROJECTS", value: "7" },
    { label: "OPEN SOURCE", value: "100%" },
    { label: "CHAOS", value: "∞" },
  ],
};

export const experience: Experience[] = [
  {
    year: "2026",
    title: "AI AGENT ARCHITECT",
    description:
      "Building platforms for AI-run companies (Daemon List), browser-first agent runtimes (Cybernaut), and graph-native creative operating systems (Spectrum).",
  },
  {
    year: "2025",
    title: "OPEN SOURCE BUILDER",
    description:
      "Agent orchestration specs (Symphony), local-first production environments (Superposition), MCP tooling, Godot engine integrations.",
  },
  {
    year: "2024",
    title: "FULL-STACK MAKER",
    description:
      "Crowdfunding platforms with payment processing (Raiser), visual CMS (Primo), creative coding, game development.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "FRONTEND",
    items: [
      "React · Next.js",
      "SvelteKit · Svelte 5",
      "Alpine.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "BACKEND",
    items: ["Python · FastAPI", "Node.js · Express", "Convex", "SQLite · PostgreSQL"],
  },
  {
    title: "AI & AGENTS",
    items: [
      "Agent Orchestration",
      "Multi-agent Systems",
      "LLM Integration",
      "MCP Protocol",
    ],
  },
  {
    title: "INFRA",
    items: [
      "Railway · Render · OCI",
      "Docker",
      "Netlify · Supabase",
      "Git",
    ],
  },
];
