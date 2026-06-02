# Portfolio CONTEXT

## Identity

| Term | Usage |
|------|-------|
| **Amps** | Personal name on site. Public identity. |
| **CallMeAmps** | Brand/nav identity. GitHub: `@Callmeamps`. |
| **Frank** | Friends and family only. Does NOT appear on the portfolio. |
| **Ntokozo** | Legal/formal name. Does NOT appear on the portfolio. |

## Tagline / Bio

> "I'm a madman building the future I want. If you want to build the future you want too — join me."

## Philosophy

- **Build-first**: "A build tells you more than a plan." Ship, then improve.
- **Transhumanist**: Believes in human augmentation. Human-agent symbiosis, not human replacement.
- **Open-source**: Strong convictions that software should be open and tweakable.
- **Maker**: Builds software, art, games, budgets — across mediums.

## Positioning

NOT "full-stack engineer // AI architect." The work signals human-agent symbiosis. Subtle. Let the projects speak.

## Audiences

1. **Zonke clients** — companies looking for AI consultancy
2. **Collaborators/funders** — people who want to build with Amps

## Site Goal

Feel like hanging out with Amps. Make visitors want to join.

## Tech Stack

- Next.js 14 + React 19 + Tailwind 3 + TypeScript
- Framer Motion for animations
- Google Fonts: Anton, Hanken Grotesk, Space Mono, Shadows Into Light
- Port: 33628
- Design: "Digital Chaos" — punk/zine/anti-grid aesthetic, sticker buttons, tilted elements, hard shadows

## Project Roster

### Featured (with voice logs)

1. **Daemon List** — Platform for AI-run companies. SvelteKit + Convex + ArcadeDB + Modal. Live on Railway. 84/84 tests.
2. **Cybernaut** — Browser-first AI agent runtime. Forked from space-agent. No build step. Security-focused (AES-256-GCM, SCRAM-SHA-256).
3. **Spectrum** — Graph-native creative OS. Variant → Stitch → Pi workflow. Infinite canvas, graph-backed persistence, visible agents. Design artifact (PRD).
4. **Superposition** — Local-first production environment. FastAPI + SQLite + WebSocket. Chat + terminal + tasks + agents + dashboards.

### Secondary (cards only)

5. **Raiser / FrankOS** — Crowdfunding + project management. React + Express + SQLite. Yoco payments (ZA market). Docker. Private.
6. **Symphony** — Agent orchestration service spec. RFC 2119 language. Linear integration. Codex app-server protocol. Specification as artifact.
7. **Zonke** — AI Native Studio consultancy site. Multi-funnel lead gen. Supabase. Netlify/Render/OCI.

### NOT on portfolio

- Board-Wars (lewd game)
- Dodge-It (incomplete, pivoting to web)
- Store page (fictional products — removed)

## Voice Log System

- Audio files hosted on OCI bucket (`/audio/featured/`)
- `<VoiceLogPlayer />` component on project detail pages
- Triggered by sticker button: "▶ HEAR THE STORY"
- TikTok-style callouts: pop in at timestamp, stay ~3-4s, pop out
- Callouts use existing `<Annotation>` component (bordered, tilted, shadow-box stickers)
- Data model: `VoiceLog { src, duration, callouts: [{ time, text, placement }] }`

## Routes

| Page | Status |
|------|--------|
| `/` (home) | Built, needs content refresh |
| `/about` | Built, needs rewrite |
| `/works` | Built, needs project roster update |
| `/works/[slug]` | Built, needs voice log integration |
| `/contact` | Built, form needs backend |
| `/connect` | Built |
| `/store` | **Remove** — fictional content |

## Key Files

```
portfolio/
├── CONTEXT.md                    ← this file
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  ← home
│   ├── globals.css               ← design system
│   ├── about/page.tsx
│   ├── works/page.tsx
│   ├── works/[slug]/page.tsx     ← project detail + voice log
│   ├── contact/page.tsx
│   ├── connect/page.tsx
│   └── store/page.tsx            ← REMOVE
├── components/
│   ├── PageNav.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── Annotation.tsx
│   ├── ContactForm.tsx
│   ├── SocialLinks.tsx
│   ├── StoreProductCard.tsx      ← REMOVE
│   ├── Footer.tsx
│   ├── Icon.tsx
│   └── VoiceLogPlayer.tsx        ← NEW
├── data/
│   ├── projects.ts               ← OVERHAUL
│   ├── about.ts                  ← OVERHAUL
│   ├── social.ts
│   └── store.ts                  ← REMOVE
├── tailwind.config.ts
└── BUILD_PLAN.md
```

## Build Order

1. **P1**: Project data overhaul (`projects.ts`, `about.ts`) — real descriptions, voice log data model
2. **P2**: Voice log player component + integration into project detail pages
3. **P3**: About page rewrite (new bio, remove generic stats)
4. **P4**: Remove store page + `StoreProductCard` + `store.ts`
5. **P5**: Homepage refresh (new hero, updated featured projects, clearer CTA)
6. **P6**: Works page overhaul (new roster, meaningful category filters)
