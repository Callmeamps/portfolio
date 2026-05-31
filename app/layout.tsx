import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ntokozo Mthimunye | Portfolio",
  description:
    "Portfolio of Ntokozo Mthimunye - Full-stack developer, AI engineer, open-source contributor",
  openGraph: {
    title: "Ntokozo Mthimunye | Portfolio",
    description: "Showcasing AI projects, design systems, and open-source work",
    url: "https://callmeamps.one",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-slate-100">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-5 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-5 blur-3xl rounded-full"></div>
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
