export interface VoiceLogCallout {
  time: number; // seconds into the audio
  text: string;
  placement: "title" | "description" | "highlights" | "tech" | "image";
}

export interface VoiceLog {
  src: string; // OCI bucket URL or relative path
  duration: number; // total seconds
  callouts: VoiceLogCallout[];
}

export interface Project {
  name: string;
  slug: string;
  description: string;
  url: string;
  liveUrl?: string;
  featured: boolean;
  languages: string[];
  stars: number;
  updatedAt: string;
  highlights: string[];
  status: "live" | "design" | "private" | "building";
  voiceLog?: VoiceLog;
}

// ── Featured Projects ──

export const projects: Project[] = [
  {
    name: "daemon-list",
    slug: "daemon-list",
    description:
      "A platform for creating, operating, buying, selling, and forking AI-run companies. Companies are structured with boards, proposals, and voting. Agents operate in a hierarchy — managers, departments, workers — with wallets, transactions, and an immutable audit trail. Backed by Convex for real-time data, ArcadeDB for ownership graphs, and Modal for agent compute.",
    url: "https://github.com/Callmeamps/daemon-list",
    liveUrl: "https://daemon-list.up.railway.app",
    featured: true,
    languages: ["SvelteKit", "TypeScript", "Convex", "ArcadeDB"],
    stars: 1,
    updatedAt: "2026-05-23",
    highlights: [
      "Agent hierarchy & governance",
      "Realtime (Convex) + Graph DB (ArcadeDB)",
      "84/84 tests passing",
      "Deployed on Railway",
    ],
    status: "live",
    voiceLog: {
      src: "https://objectstorage.us-phoenix-1.oraclecloud.com/n/axwz1x1bmy93/b/portfolio-audio/o/daemon-list-voice-log.mp3",
      duration: 180,
      callouts: [
        { time: 0, text: "Welcome to Daemon List.", placement: "title" },
        { time: 5, text: "This is where AI agents run companies.", placement: "description" },
        { time: 15, text: "Agents have hierarchy — managers, departments, workers.", placement: "highlights" },
        { time: 30, text: "Companies have boards, proposals, and voting.", placement: "highlights" },
        { time: 50, text: "It's live on Railway. 84 out of 84 tests passing.", placement: "tech" },
      ],
    },
  },
  {
    name: "cybernaut",
    slug: "cybernaut",
    description:
      "Browser-first AI agent runtime. The agent lives in your browser — it can build tools, browse the web, and execute code on the fly. Connect any OpenAI-compatible API: OpenRouter, OpenAI, local Ollama, whatever you want. Thin server, no build step, Alpine.js for reactivity. Security-first: AES-256-GCM password sealing, SCRAM-SHA-256 challenge-response, HMAC-SHA256 session signing.",
    url: "https://github.com/Callmeamps/cybernaut",
    featured: true,
    languages: ["JavaScript", "Alpine.js", "Node.js"],
    stars: 0,
    updatedAt: "2026-06-01",
    highlights: [
      "Browser-first architecture",
      "No build step — ES modules served directly",
      "SCRAM-SHA-256 password security",
      "Any OpenAI-compatible API",
    ],
    status: "live",
    voiceLog: {
      src: "https://objectstorage.us-phoenix-1.oraclecloud.com/n/axwz1x1bmy93/b/portfolio-audio/o/cybernaut-voice-log.mp3",
      duration: 150,
      callouts: [
        { time: 0, text: "This is Cybernaut.", placement: "title" },
        { time: 5, text: "Your AI agent lives in your browser.", placement: "description" },
        { time: 15, text: "No build step. Alpine.js for reactivity.", placement: "tech" },
        { time: 25, text: "AES-256-GCM. SCRAM-SHA-256. Real security.", placement: "highlights" },
      ],
    },
  },
  {
    name: "spectrum",
    slug: "spectrum",
    description:
      "Graph-native creative operating system. Built around a human-steered loop: Variant to expand possibilities, Stitch to compose selected material, Pi to execute the chosen direction. Infinite canvas, inspectable agents, graph-backed persistence, branch and fork lineage. Agents are narrow, atomic, and visible — they work on components, assets, pages, and request-sized tasks.",
    url: "https://github.com/Callmeamps/spectrum",
    featured: true,
    languages: ["Python", "TypeScript"],
    stars: 0,
    updatedAt: "2026-05-22",
    highlights: [
      "Variant → Stitch → Pi workflow",
      "Infinite canvas + graph persistence",
      "Branch/fork lineage system",
      "Design-first (PRD as artifact)",
    ],
    status: "design",
    voiceLog: {
      src: "https://objectstorage.us-phoenix-1.oraclecloud.com/n/axwz1x1bmy93/b/portfolio-audio/o/spectrum-voice-log.mp3",
      duration: 165,
      callouts: [
        { time: 0, text: "Spectrum. A graph-native creative OS.", placement: "title" },
        { time: 8, text: "Variant, Stitch, Pi. The creative loop.", placement: "description" },
        { time: 20, text: "Infinite canvas. Graph-backed persistence.", placement: "highlights" },
        { time: 35, text: "Every agent is narrow, atomic, visible.", placement: "highlights" },
      ],
    },
  },
  {
    name: "superposition",
    slug: "superposition",
    description:
      "Local-first production environment combining chat, terminal, tasks, agents, and dashboards in one unified space. FastAPI backend with SQLite via aiosqlite for local data persistence. WebSocket event broadcasting. No cloud dependencies — runs entirely on your machine.",
    url: "https://github.com/Callmeamps/superposition",
    featured: true,
    languages: ["Python", "FastAPI", "SQLite"],
    stars: 0,
    updatedAt: "2026-04-28",
    highlights: [
      "Local-first — no cloud dependencies",
      "FastAPI + SQLite + WebSocket",
      "Chat + terminal + tasks + agents",
      "Runs entirely on your machine",
    ],
    status: "live",
    voiceLog: {
      src: "https://objectstorage.us-phoenix-1.oraclecloud.com/n/axwz1x1bmy93/b/portfolio-audio/o/superposition-voice-log.mp3",
      duration: 140,
      callouts: [
        { time: 0, text: "Superposition. Local-first production environment.", placement: "title" },
        { time: 8, text: "Chat, terminal, tasks, agents — all in one.", placement: "description" },
        { time: 20, text: "FastAPI. SQLite. WebSocket. No cloud.", placement: "tech" },
      ],
    },
  },

  // ── Secondary Projects ──

  {
    name: "raiser",
    slug: "raiser",
    description:
      "Crowdfunding and project management platform with integrated payment processing via Yoco (South African payment gateway). Features project creation, task management, milestone tracking, and a full CMS. React frontend, Express backend, SQLite database. Docker-ready deployment.",
    url: "https://github.com/Callmeamps/Raiser",
    featured: false,
    languages: ["React", "Express", "SQLite", "TypeScript"],
    stars: 0,
    updatedAt: "2026-05-28",
    highlights: [
      "Yoco payment integration (ZA)",
      "Project management + CMS",
      "Docker-ready deployment",
      "Production-ready",
    ],
    status: "private",
  },
  {
    name: "symphony",
    slug: "symphony",
    description:
      "An open specification for agent orchestration. Symphony reads work from an issue tracker (Linear), creates isolated per-issue workspaces, and runs coding agents to complete the work. Specified in RFC 2119 language — a language-agnostic protocol for turning issue execution into a repeatable daemon workflow with observability, retry logic, and workspace safety invariants.",
    url: "https://github.com/Callmeamps/symphony",
    featured: false,
    languages: ["Python", "TypeScript"],
    stars: 0,
    updatedAt: "2026-04-26",
    highlights: [
      "RFC 2119 specification",
      "Linear integration",
      "Codex app-server protocol",
      "Multi-turn agent sessions",
    ],
    status: "design",
  },
  {
    name: "zonke",
    slug: "zonke",
    description:
      "AI Native Studio — consultancy site for helping companies integrate AI into their workflows. Multi-funnel lead generation: AI audits, tender vault, real estate analysis. Supabase backend with Netlify serverless functions. Industrial Brutalist Terminal design. Deployed across Netlify, Render, and OCI.",
    url: "https://zonke.studio",
    featured: false,
    languages: ["HTML", "Tailwind CSS", "Supabase", "Netlify"],
    stars: 0,
    updatedAt: "2026-06-01",
    highlights: [
      "Multi-funnel lead generation",
      "Supabase + Netlify Functions",
      "Industrial Brutalist design",
      "Deployed across 3 platforms",
    ],
    status: "live",
  },
];
