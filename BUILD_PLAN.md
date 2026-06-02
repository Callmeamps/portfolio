# Portfolio Build Plan — Digital Chaos

## Status: Existing Stack
```
Next.js 14 + React 19 + Tailwind 3 + TypeScript
Google Fonts: Anton, Hanken Grotesk, Space Mono
Port: 33628
```

## What Exists
```
app/
  layout.tsx       ← Root layout, fonts, metadata
  page.tsx         ← Home page (projects grid, skills, CTA)
  globals.css      ← Tailwind + custom classes (sticker-btn, chaos-card, marquee, glitch)
components/
  Navigation.tsx   ← Desktop sidenav + mobile sticker cluster
  Hero.tsx         ← Hero with stats
  ProjectCard.tsx  ← Project card w/ tilt
  Footer.tsx       ← Marquee footer
data/
  projects.ts      ← 5 featured + 3 other projects
```

## What Needs Building (Pages)

### 1. `/` Home (page.tsx) — ENHANCE
Current works. Add:
- "v2.0_EXPERIMENTAL" annotation sticker (top-left)
- Floating polaroid image element (right side, hidden mobile)
- Scanline hover effect on ENTER THE VOID button
- BACKDROP TEXT: "CHAOS GEN" massive blurred bg text
- Annotation sticker on hero text
- Smooth scroll behavior

### 2. `/about` — NEW
File: `app/about/page.tsx`

Design content:
- Header bar: "THE BLUEPRINT | CHAOS_GEN"
- SidenaV: Works(active), ABOUT(highlighted), CONTACT, SHOP
- Main content:
  - "CHAOS" title (massive, tilted)
  - Bio: full-stack engineer, AI architect, open source contributor
  - Experience timeline / skill grid
  - Hand-drawn annotation elements (`#OFF-GRID` sticker)
  - `STAY LOUD` / `OK` floating action buttons
- Sticker motifs, hard shadows, tilted sections

### 3. `/works` — NEW
File: `app/works/page.tsx`

Design content:
- Header: "EDITION NO. 066" + nav bar
- "SELECTED PROJECTS" massive tilted headline
- Category filter: ALL_WORKS, IDENTITY, MOTION, ZINE, PACKAGING
- Project grid with anti-grid layout (same as home but more items)
- Numbered project cards (01, 02, 03...) with project title + category label

### 4. `/works/[slug]` — NEW (Project Detail)
File: `app/works/[slug]/page.tsx`

Design content:
- Back button: "← BACK TO CHAOS"
- Left side:
  - Large project title
  - Metadata: ID, CLIENT, TECH
  - Description paragraph
  - CTA buttons: "EXPLORE THE SYSTEM" + "CASE STUDY.PDF"
- Right side:
  - Project image area (placeholder)
  - Related projects
- Tilted elements, sticker annotations

### 5. `/store` — NEW
File: `app/store/page.tsx`

Design content:
- SidenaV with SHOP highlighted
- "GOODS STASH" headline
- Cart indicator: "YOUR CART (0)"
- Product cards: image, name, price ("$45"), SALE tags
- Products: zine, stickers, merch (mock data)
- "BUY SOMETHING OR GO HOME!" tagline

### 6. `/contact` — NEW
File: `app/contact/page.tsx`

Design content:
- Info bar: "EDITION NO. 066" + nav
- "HIT US UP" massive headline (15vw font)
- "DON'T BE SHY" handwriting annotation
- Sub-header: "PRICE: YOUR ATTENTION" + "SHIBUYA DISTRICT // VOL. IV" + "WEATHER: CHAOTIC"
- Left: Form fields (Name, Email, Message) with handwriting placeholders
  - "FILL THIS OUT NOW!" sticker
  - "SEND SIGNAL >>>" submit button
- Right: "OUR PROTOCOL" panel with rules (4 rules, green left border)

### 7. `/connect` (Social Links) — NEW
File: `app/connect/page.tsx`

Design content:
- "CONNECT" header
- "DROP A LINE // LINK UP" subtitle
- Social links with arrow_outward icons: Instagram, Twitter/X, GitHub, Blog
- Sticker-style link blocks
- Marquee footer

## Shared Components to Build

### `components/PageNav.tsx` — Extract nav pattern
Used across ALL pages. Reusable sidenav + mobile cluster.
Props: `activePage: 'home' | 'about' | 'works' | 'contact' | 'store'`

### `components/AnnotationSticker.tsx`
Hand-drawn annotation props: `text`, `color`, `tilt`, `variant`

### `components/ProjectDetail.tsx`
Full project view for `/works/[slug]`

### `components/Marquee.tsx`
Reusable marquee (footer, headers)

## Enhanced `globals.css` Additions
```
.font-handwriting  → Shadows Into Light
.border-thick      → 8px solid borders for page frames
.form-input-custom → Underline-only inputs, handwriting font
.grid-lines         → Background grid pattern
.text-glow          → Neon glow effect
rotate-tilt-primary → -2deg
rotate-tilt-secondary → 1.5deg
```

## Enhanced `tailwind.config.ts` Additions
```ts
fontFamily: { handwriting: ['Shadows Into Light'] }
fontSize: { 'display': ['220px', { lineHeight: '180px' }] }
```

## New Data Files
```
data/storeProducts.ts   — Store product mocks
data/socialLinks.ts     — Social URL mappings
data/about.ts           — Bio, experience timeline data
```

## File Structure (Final)
```
app/
  layout.tsx           ← Updated
  page.tsx             ← Enhanced home
  globals.css          ← Enhanced
  about/
    page.tsx           ← NEW
  works/
    page.tsx           ← NEW
    [slug]/
      page.tsx         ← NEW
  contact/
    page.tsx           ← NEW
  store/
    page.tsx           ← NEW
  connect/
    page.tsx           ← NEW
components/
  Navigation.tsx       ← Renamed to PageNav
  Hero.tsx             ← Enhanced
  ProjectCard.tsx      ← Keep
  Footer.tsx           ← Keep
  PageNav.tsx          ← NEW (extract)
  Annotation.tsx       ← NEW
  Marquee.tsx          ← NEW
  ContactForm.tsx      ← NEW
  StoreProductCard.tsx ← NEW
  SocialLinks.tsx      ← NEW
data/
  projects.ts          ← Keep
  about.ts             ← NEW
  store.ts             ← NEW
  social.ts            ← NEW
```

## Build Order
1. Enhance globals.css + tailwind.config.ts (add handwriting, thick borders, grid-lines)
2. Build PageNav component (active page highlight)
3. Build `/about` page
4. Build `/works` page (project grid with filters)
5. Build `/works/[slug]` page (project detail)
6. Build `/contact` page (form + protocol panel)
7. Build `/store` page (product grid)
8. Build `/connect` page (social links)
9. Enhance home page (add annotation stickers, polaroid, scanlines)
10. Build shared components (Annotation, Marquee, ContactForm)
11. Update layout.tsx (add handwriting font)
12. Build + verify all routes

## Design System Checklist (per page)
- [ ] Hard shadows (4px/8px block)
- [ ] Tilted elements (tilt-1, tilt-2, tilt-3)
- [ ] Sticker buttons (border + shadow)
- [ ] Annotation text (Space Mono / handwriting)
- [ ] Thick borders (4px-8px solid primary)
- [ ] Anti-grid placement
- [ ] Background texture (grain/grid-lines)
- [ ] Marquee footer

## Verification
```bash
npm run build   # Zero TypeScript errors
npm run dev     # All routes accessible
```
Port: 33628 → http://localhost:33628
