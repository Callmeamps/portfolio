import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#040d1b",
        "on-primary": "#ffffff",
        "secondary": "#b22a23",
        "on-secondary": "#ffffff",
        "surface": "#fff8f1",
        "on-surface": "#1e1b17",
        "surface-container": "#f4ede5",
        "surface-container-high": "#eee7df",
        "tertiary-fixed-dim": "#8ad6ad",
      },
      fontFamily: {
        "headline-xl": ["Anton"],
        "headline-lg": ["Anton"],
        "headline-lg-mobile": ["Anton"],
        "sticker-label": ["Anton"],
        "body-lg": ["Hanken Grotesk"],
        "body-md": ["Hanken Grotesk"],
        "annotation": ["Space Mono"],
      },
      fontSize: {
        "headline-xl": ["120px", { lineHeight: "100px", letterSpacing: "-0.04em", fontWeight: "400" }],
        "headline-lg": ["80px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "400" }],
        "headline-lg-mobile": ["48px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "400" }],
        "sticker-label": ["18px", { lineHeight: "20px", fontWeight: "400" }],
        "body-lg": ["20px", { lineHeight: "28px", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "600" }],
        "annotation": ["14px", { lineHeight: "18px", fontWeight: "400" }],
      },
      spacing: {
        "tilt-primary": "-2deg",
        "tilt-secondary": "1.5deg",
        "gutter": "16px",
        "unit": "4px",
        "margin-safe": "32px",
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
