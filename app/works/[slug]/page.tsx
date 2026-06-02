import { projects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

// Required for static export — tells Next.js which slugs to pre-render
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Server component — renders the client component
export default function ProjectDetailPage() {
  return <ProjectDetailClient />;
}