import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ntokozo Mthimunye | Portfolio",
  description:
    "Portfolio of Ntokozo Mthimunye - Full-stack developer, AI engineer, open-source contributor",
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
          href="https://fonts.googleapis.com/css2?family=Anton&family=Hanken+Grotesk:wght@400;600;700&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface min-h-screen overflow-x-hidden selection:bg-secondary selection:text-on-secondary">
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
