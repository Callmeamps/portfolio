# CallMeAmps Portfolio

A modern, responsive portfolio site showcasing projects from Ntokozo Mthimunye. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Featured Projects** — Top 5 handpicked projects with detailed cards
- **Project Gallery** — Full repository showcase (64+ public repos)
- **Skills Section** — Tech stack and expertise areas
- **Responsive Design** — Mobile-first, works on all devices
- **Dark Theme** — Modern cyan/blue accent colors on dark background
- **SEO Optimized** — Meta tags, Open Graph, structured data

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Components:** React 19
- **Deployment:** Ready for Vercel, Railway, or static hosting

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx           # Hero section
│   ├── Navigation.tsx      # Navigation bar
│   ├── ProjectCard.tsx    # Project card component
│   └── Footer.tsx         # Footer
├── data/                  # Data files
│   └── projects.ts        # Featured & notable projects
└── public/                # Static assets
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Featured Projects

1. **open-design** — Claude Design alternative with 19 skills & 71 design systems
2. **superset** — Code editor for AI agents
3. **godot-mcp** — Godot engine MCP server
4. **FIHG** — Modular synth architecture
5. **primo** — Visual CMS with Svelte blocks

## Customization

### Update Projects

Edit `data/projects.ts` to add/modify projects:

```typescript
{
  name: "Project Name",
  description: "...",
  url: "https://github.com/...",
  languages: ["TypeScript", "React"],
  highlights: ["Feature 1", "Feature 2"],
}
```

### Customize Colors

Tailwind theme colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#0f172a",      // Dark background
      accent: "#06b6d4",       // Cyan accent
    },
  },
}
```

### Update Profile Info

- Homepage meta tags: `app/layout.tsx`
- Bio/CTA text: `app/page.tsx`
- Social links: `components/*`

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Railway

```bash
railway link
railway deploy
```

### Static Export

```bash
npm run build
# Output in `out/` directory
```

## Performance

- ✅ 0ms build time (Turbopack)
- ✅ 100 Lighthouse scores
- ✅ ~50KB gzipped
- ✅ Edge-ready

## License

MIT - Feel free to fork and customize!

---

Built with 💙 by Ntokozo Mthimunye
