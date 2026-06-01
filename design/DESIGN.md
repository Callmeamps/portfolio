---
name: Digital Chaos
colors:
  surface: '#fff8f1'
  surface-dim: '#e0d9d1'
  surface-bright: '#fff8f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2ea'
  surface-container: '#f4ede5'
  surface-container-high: '#eee7df'
  surface-container-highest: '#e8e1da'
  on-surface: '#1e1b17'
  on-surface-variant: '#45474c'
  inverse-surface: '#33302b'
  inverse-on-surface: '#f7f0e8'
  outline: '#75777d'
  outline-variant: '#c5c6cc'
  surface-tint: '#565f70'
  primary: '#040d1b'
  on-primary: '#ffffff'
  primary-container: '#1a2332'
  on-primary-container: '#818a9d'
  inverse-primary: '#bec7db'
  secondary: '#b22a23'
  on-secondary: '#ffffff'
  secondary-container: '#ff6153'
  on-secondary-container: '#650003'
  tertiary: '#001007'
  on-tertiary: '#ffffff'
  tertiary-container: '#002918'
  on-tertiary-container: '#4d9873'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae3f7'
  primary-fixed-dim: '#bec7db'
  on-primary-fixed: '#131c2a'
  on-primary-fixed-variant: '#3e4758'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#900e0e'
  tertiary-fixed: '#a5f3c8'
  tertiary-fixed-dim: '#8ad6ad'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005235'
  background: '#fff8f1'
  on-background: '#1e1b17'
  surface-variant: '#e8e1da'
typography:
  headline-xl:
    fontFamily: Anton
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 100px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anton
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.02em
  sticker-label:
    fontFamily: Anton
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 20px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  annotation:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 18px
spacing:
  unit: 4px
  margin-safe: 32px
  gutter: 16px
  tilt-primary: -2deg
  tilt-secondary: 1.5deg
---

## Brand & Style
The design system is built on a foundation of **Eccentric Punk-Tech**, a visual language that rejects corporate sanitization in favor of raw, high-energy expression. It targets a creative, counter-culture audience that values authenticity over polish.

The style is defined by a "Digital Chaos" aesthetic:
- **Aggressive Minimalism:** A limited but violent color palette paired with massive, tight-kerning typography.
- **Analog-Digital Hybrid:** Incorporating hand-drawn annotations, "sticker" motifs, and "glitch" textures over a clean, structured base.
- **Anti-Grid Philosophy:** While functional, the UI intentionally breaks the grid with tilted elements, overlapping layers, and erratic placements to create a sense of physical energy and motion.
- **Tactile Urgency:** Elements feel like physical artifacts—patches, taped-on labels, and spray-painted notes—stuck onto a digital canvas.

## Colors
The palette is a mix of sophisticated "Old World" tones and "Acid" synthetic highlights.

- **Base:** The background uses a warm, textured off-white/cream (`#F2EBE3`) to evoke recycled paper or newsprint.
- **Ink:** Deep Charcoal Navy (`#1A2332`) provides the primary weight for text and borders, offering a heavy contrast that feels permanent.
- **Punk Accents:** Vibrant Red (`#CC3D33`) and Forest Green (`#2D7A57`) are used for primary actions and status-heavy labels.
- **Acid Highlights:** High-vis Yellow (`#E6FB04`) and Orange (`#FF5C00`) are used sparingly for "tape" effects, price tags, and critical warnings to draw immediate attention.

## Typography
Typography is the primary driver of the design system's "Noise."

- **Headlines:** Use **Anton** for massive, impactful headings. Kerning should be set extremely tight, occasionally overlapping characters. Headlines should often be tilted (between -2 and +3 degrees).
- **Navigation & Labels:** Smaller instances of Anton are used for "sticker" buttons to maintain the aggressive silhouette.
- **Body:** **Hanken Grotesk** provides a clean, highly legible counter-point to the chaotic headers. Use heavier weights (Bold/Black) to maintain the "thick ink" look.
- **Technical/Annotative:** **Space Mono** is used for hand-drawn style notes, metadata, and "glitch" elements, providing a hacker/DIY feel.

## Layout & Spacing
This system uses an **Experimental Non-Grid** model. While a standard 12-column foundation exists for developer sanity, elements should routinely "break" out of their containers.

- **The Layering Principle:** Treat the screen as a physical desk. Elements (cards, images, buttons) should overlap slightly. 
- **The Tilt:** Apply subtle CSS transforms (rotations) to major blocks. No more than 3 degrees to ensure readability remains intact while breaking the horizontal plane.
- **Margins:** Maintain a heavy outer "safe zone" of 32px to ensure the chaos feels contained and intentional rather than broken.
- **Mobile Reflow:** On mobile, revert to a single-column stack but maintain the overlapping "sticker" motifs and tilted headers to preserve the brand energy.

## Elevation & Depth
Depth is created through **Physical Stacking** rather than lighting and shadows.

- **Hard Shadows:** Avoid soft blurs. Use "Block Shadows"—solid offsets of the primary navy color (usually 4px or 8px) to give elements a 3D, cut-out appearance.
- **Z-Index Layering:** Use hand-drawn annotations and "tape" elements that sit on the highest Z-index, crossing over the borders of containers below them.
- **Backdrop Text:** Use massive, low-opacity (10-15%) headline text in the background as a texture layer, creating a "leaked ink" or "stencil" effect.

## Shapes
The shape language is **Sharp and Brutalist**.

- **Corners:** Everything is 90-degree sharp. Avoid border-radii unless it is a specific "pill sticker" used for a secondary tag.
- **Sticker Motif:** UI elements should look like rectangles of paper. Navigation items are rectangular blocks with no rounding, mimicking physical dymo labels or cut-out cardstock.
- **Hand-Drawn Lines:** Incorporate SVG-based "scribble" underlines or "X" marks that look like they were added with a felt-tip marker.

## Components
- **Buttons (Stickers):** Rectangular blocks of solid color (Red, Green, or Navy) with white Anton text. They should have a 2px solid black border and a solid 4px offset shadow.
- **Cards:** Heavy 3px borders. The card header should often be a separate "tab" element that sits on top of the main frame. Tilt the entire card container by 1-2 degrees.
- **Input Fields:** Thick black outlines. Use the "Space Mono" font for placeholder text to mimic typewriter or computer terminal input.
- **Status Indicators:** Use high-contrast "Acid" colors. A "Critical" status should look like a highlighter-yellow piece of tape with hand-written text on it.
- **Navigation:** Instead of a standard bar, use a cluster of "Patch" buttons in the top-right corner, stacked vertically with varying widths and colors.
- **Marquee:** A scrolling "ticker tape" at the bottom of the screen (white text on a black background) using Space Mono to convey urgent or secondary information.