import type { NextConfig } from "next";
import { writeFileSync } from "fs";
import { join } from "path";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isGithubPages && {
    basePath: "/portfolio",
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

// Create .nojekyll for GitHub Pages (prevents Jekyll ignoring _next/)
if (isGithubPages) {
  writeFileSync(join(process.cwd(), "out", ".nojekyll"), "");
}

export default nextConfig;