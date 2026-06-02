# Handoff 2026-06-02 pi

- Duration: ~120 minutes
- Message Count: ~100
- Compaction Count: 0

## Context

Deep enrichment session for CallMeAmps portfolio site. Covered identity, branding, project roster, voice log system, OLED dark mode, and copy overhaul.

### Identity Resolved
- Public name: **Amps**
- Brand: **CallMeAmps**
- "Frank" = friends/family only. "Ntokozo" = legal only. Neither appears on portfolio.
- Philosophy: Build-first, transhumanist, open-source convictions, human-agent symbiosis
- Two audiences: Zonke clients (AI consultancy) + collaborators/funders
- Personal tagline: "I'm a madman building the future I want. If you want to build the future you want too — join me."

### Branding Cleanup (Complete)
Purged all Shibuya/Shinjuku design exploration artifacts:
- "STAY LOUD" → "CALLMEAMPS" / "BUILDING IN PUBLIC"
- "CHAOS_GEN" → "CALLMEAMPS"
- "NOISE ONLY" → "BUILDING IN PUBLIC"
- "HANDPICKED CHAOS" → "HANDPICKED"
- "LET'S MAKE NOISE" → "LET'S BUILD SOMETHING"
- "HIT US UP" → "LOCK IN"
- "talk chaos" → "build together"
- "WEATHER: CHAOTIC" → "MOOD: VOID"
- Background text "CHAOS"/"NOISE" → "BUILD"
- "Visual chaos & daily noise" (Instagram) → "Builds, aesthetics, and occasional madness."

### About Page — "MadOne"
- "THE BLUEPRINT" replaced with **"MadOne"** on the about page heading
- Bio reflects Amps identity: "I'm a madman building the future I want..."

### Project Roster Overhauled
**Featured (with voice log support):**
1. Daemon List — AI-run companies platform (SvelteKit, Convex, ArcadeDB, Modal, live Railway)
2. Cybernaut — Browser-first AI agent runtime (no-build-step, security-first)
3. Spectrum — Graph-native creative OS (design artifact, PRD)
4. Superposition — Local-first production environment (FastAPI, SQLite)

**Secondary (cards only):**
5. Raiser/FrankOS — Crowdfunding platform (React, Express, SQLite, private)
6. Symphony — Agent orchestration spec (RFC-style spec doc)
7. Zonke — AI consultancy site (multi-funnel, Supabase)

**Removed:** Store page, StoreProductCard, store.ts (fictional products)

### Voice Log System Built
- `components/VoiceLogPlayer.tsx` — play/pause sticker button, progress bar, TikTok-style pop-in/pop-out callouts synced to audio timestamps
- `VoiceLog` data model added to projects.ts with callouts array
- Placeholder audio URLs pointing to OCI bucket paths
- Callout placement targets: title, description, highlights, tech, image

### OLED Dark Mode Overhaul
- Pure black `#000000` background
- Primary: `#a8c4f4` (soft sky blue)
- Secondary: `#b09b7e` (warm amber)
- Tertiary: `#76ff03` (electric green)
- Shadow ink: `rgba(0,0,0,0.85)`
- All hardcoded `#b22a23` → `#8b6a4a`

## References

- OAuth repo: `https://github.com/Callmeamps/portfolio` (pushed)
- `CONTEXT.md` — full context document at repo root
- `BUILD_PLAN.md` — original build plan (reference only)
- `components/VoiceLogPlayer.tsx` — new component
- `data/projects.ts` — complete rewrite with VoiceLog model
- `data/about.ts` — complete rewrite with Amps identity
- `app/globals.css` — dark mode overhaul, custom properties
- `tailwind.config.ts` — darkMode: "class", new color palette

## Outstanding Items for Next Session

### Must Do:
1. **Record voice logs** — 4-5 audio clips (2-3 min each). Pin under "audio experiences" section. Upload to OCI bucket at `/audio/featured/`. Include a cool background tune throughout each recording.
2. **Contact form backend** — Use `man oci` CLI and a free tier SQL DB (Oracle Cloud free tier) to wire up the ContactForm endpoint.

### Polish:
3. **CTA button "ENTER THE VOID"** — Still on homepage hero CTA. Lock In energy, not void energy. Suggest replacing with "LOCK IN" or "SEE THE WORK" to match new diction.
4. **Visual QA** — Run through all routes on localhost to verify dark mode rendering, font loading, animation timing.
5. **Typography check** — Confirm Anton / Hanken Grotesk / Space Mono / Shadows Into Light all loading after all changes.

### Notes:
- "MadOne" heading on About page — confirm this stays permanently as the personal brand heading
- "LOCK IN" is the new CTA diction — use consistently across all CTAs going forward
- Pricing page text "PRICE: YOUR ATTENTION" is clean, keep it
- Protocol rules section (contact page) works as-is; "Expect the unexpected" replaced old "Expect chaos"