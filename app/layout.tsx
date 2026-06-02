import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amps | CallMeAmps — Builder, Madman, Augmented",
  description:
    "Portfolio of Amps (CallMeAmps) — Building systems where humans and agents create together. AI agent platforms, creative tools, open-source infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com"
          rel="preconnect"
        />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Hanken+Grotesk:wght@400;600;700&family=Shadows+Into+Light&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface min-h-screen overflow-x-hidden selection:bg-secondary selection:text-on-secondary">
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
