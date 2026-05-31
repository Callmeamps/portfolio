import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { projects, otherNotableProjects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Featured Projects */}
      <section id="featured" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-lg">
              Handpicked projects showcasing innovation, scale, and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Notable Projects */}
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Other Notable Projects
            </h2>
            <p className="text-slate-400 text-lg">
              A selection of other interesting work and experiments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherNotableProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/Callmeamps?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-lg"
            >
              View All 64 Repositories →
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-12">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <h3 className="font-bold text-lg mb-4 gradient-text">Frontend</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• React · Next.js</li>
                <li>• Svelte · Astro</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg mb-4 gradient-text">Backend</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• Python</li>
                <li>• Node.js</li>
                <li>• PostgreSQL</li>
                <li>• GDScript</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg mb-4 gradient-text">AI & ML</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• Agent Orchestration</li>
                <li>• LLM Integration</li>
                <li>• Multi-agent Systems</li>
                <li>• Claude API</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg mb-4 gradient-text">Tools</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• Git · Docker</li>
                <li>• Godot Engine</li>
                <li>• Figma</li>
                <li>• AWS · Railway</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border-t border-b border-slate-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Interested in collaboration, consulting, or discussing ideas?
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/Callmeamps"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Connect on GitHub
            </a>
            <a
              href="mailto:hello@callmeamps.one"
              className="btn btn-secondary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
