export interface Project {
  name: string;
  slug: string;
  description: string;
  url: string;
  featured: boolean;
  languages: string[];
  stars: number;
  updatedAt: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    name: "open-design",
    slug: "open-design",
    description:
      "Local-first, open-source alternative to Anthropic's Claude Design. ⚡ 19 Skills · ✨ 71 brand-grade Design Systems 🖼️ Generate web · desktop · mobile prototypes · slides · images · videos · HyperFrames 📦 Sandboxed preview · HTML/PDF/PPTX/MP4 export 🤖 Runs on Claude Code / Codex / Cursor / Gemini / OpenCode / Qwen / Copilot / Hermes / Kimi CLI.",
    url: "https://github.com/Callmeamps/open-design",
    featured: true,
    languages: ["TypeScript", "Python", "Astro"],
    stars: 0,
    updatedAt: "2026-05-16",
    highlights: [
      "19 integrated skills",
      "71 design systems",
      "Multi-format export",
      "Local-first architecture",
    ],
  },
  {
    name: "superset",
    slug: "superset",
    description:
      "Code Editor for the AI Agents Era - Run an army of Agents on your machine. Comprehensive IDE for multi-agent orchestration and AI development.",
    url: "https://github.com/Callmeamps/superset",
    featured: true,
    languages: ["TypeScript", "JavaScript", "CSS"],
    stars: 0,
    updatedAt: "2026-04-26",
    highlights: [
      "Multi-agent support",
      "Advanced code editor",
      "Real-time collaboration",
      "Built for AI workflows",
    ],
  },
  {
    name: "godot-mcp",
    slug: "godot-mcp",
    description:
      "MCP server for interfacing with Godot game engine. Provides tools for launching the editor, running projects, and capturing debug output.",
    url: "https://github.com/Callmeamps/godot-mcp",
    featured: true,
    languages: ["JavaScript", "GDScript"],
    stars: 0,
    updatedAt: "2025-10-07",
    highlights: [
      "Godot integration",
      "Debug output capture",
      "Editor control",
      "MCP protocol",
    ],
  },
  {
    name: "FIHG",
    slug: "fihg",
    description:
      "First-Class Interhypergraph Grid — modular synth architecture with 3 graph domains. Innovative audio synthesis and signal processing framework.",
    url: "https://github.com/Callmeamps/FIHG",
    featured: true,
    languages: ["Python", "GDScript"],
    stars: 0,
    updatedAt: "2026-05-07",
    highlights: [
      "Modular architecture",
      "Graph domains",
      "Audio synthesis",
      "Signal processing",
    ],
  },
  {
    name: "primo",
    slug: "primo",
    description:
      "Primo is a visual CMS with a built-in code editor, Svelte blocks, and static site generator. Perfect for content creators and developers.",
    url: "https://github.com/Callmeamps/primo",
    featured: true,
    languages: ["Svelte", "TypeScript", "JavaScript"],
    stars: 0,
    updatedAt: "2024-01-12",
    highlights: [
      "Visual CMS",
      "Svelte components",
      "Static generation",
      "Code editor",
    ],
  },
];

export const otherNotableProjects: Project[] = [
  {
    name: "Polarize",
    slug: "polarize",
    description: "Large-scale web application with multiple tech stacks.",
    url: "https://github.com/Callmeamps/Polarize",
    featured: false,
    languages: ["TypeScript", "JavaScript", "Astro"],
    stars: 0,
    updatedAt: "2026-05-20",
    highlights: ["TypeScript", "Astro", "Python"],
  },
  {
    name: "cybernaut",
    slug: "cybernaut",
    description:
      "Full-stack application with complex JavaScript architecture.",
    url: "https://github.com/Callmeamps/cybernaut",
    featured: false,
    languages: ["JavaScript", "CSS", "HTML"],
    stars: 0,
    updatedAt: "2026-05-30",
    highlights: ["JavaScript", "Responsive design"],
  },
  {
    name: "Wager",
    slug: "wager",
    description: "Svelte-based application with TypeScript support.",
    url: "https://github.com/Callmeamps/Wager",
    featured: false,
    languages: ["Svelte", "TypeScript", "JavaScript"],
    stars: 0,
    updatedAt: "2026-05-27",
    highlights: ["Svelte", "TypeScript"],
  },
];
