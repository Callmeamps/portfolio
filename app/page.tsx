import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { projects, otherNotableProjects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-surface">
      <Navigation />
      <Hero />

      {/* Featured Projects Section */}
      <section id="featured" className="lg:pl-80 py-20 px-4 relative z-10">
        <div className="max-w-6xl">
          <div className="mb-12">
            <h2 className="font-headline-xl text-[80px] lg:text-headline-xl text-primary tracking-tighter leading-[0.85] mb-4">
              SELECTED<br />PROJECTS
            </h2>
            <p className="font-annotation text-annotation text-secondary uppercase border-b-2 border-primary pb-2 inline-block -rotate-1">
              HANDPICKED CHAOS
            </p>
          </div>

          {/* Anti-Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 relative mb-32">
            {/* Project 01 */}
            <div className="md:col-span-7 relative group">
              <div className="absolute -top-16 -left-8 font-headline-xl text-[120px] text-outline pointer-events-none">
                01
              </div>
              <ProjectCard project={featuredProjects[0]} tilt={1} />
            </div>

            {/* Project 02 */}
            <div className="md:col-start-8 md:col-span-5 md:mt-32 relative group">
              <div className="absolute -top-12 right-0 font-headline-xl text-[120px] text-outline pointer-events-none">
                02
              </div>
              <ProjectCard project={featuredProjects[1]} tilt={2} />
            </div>

            {/* Project 03 */}
            <div className="md:col-span-6 relative group md:-mt-12">
              <div className="absolute -top-16 -left-4 font-headline-xl text-[120px] text-outline pointer-events-none">
                03
              </div>
              <ProjectCard project={featuredProjects[2]} tilt={3} />
            </div>

            {/* Project 04 */}
            <div className="md:col-start-7 md:col-span-6 md:mt-24 relative group">
              <div className="absolute -top-16 right-8 font-headline-xl text-[120px] text-outline pointer-events-none">
                04
              </div>
              <ProjectCard project={featuredProjects[3]} tilt={1} />
            </div>

            {/* Project 05 */}
            {featuredProjects[4] && (
              <div className="md:col-span-5 relative group">
                <div className="absolute -top-16 -left-8 font-headline-xl text-[120px] text-outline pointer-events-none">
                  05
                </div>
                <ProjectCard project={featuredProjects[4]} tilt={2} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section id="projects" className="lg:pl-80 py-20 px-4 bg-surface-container-high relative z-10">
        <div className="max-w-6xl">
          <div className="mb-12">
            <h2 className="font-headline-lg text-headline-lg-mobile text-primary tracking-tighter uppercase mb-4">
              MORE NOISE
            </h2>
            <p className="font-annotation text-annotation text-secondary">
              Selection of other experimental projects & contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherNotableProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} tilt={((i % 3) + 1) as 1 | 2 | 3} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/Callmeamps?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="sticker-btn sticker-btn-secondary text-body-lg"
            >
              VIEW ALL 64 REPOS →
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="lg:pl-80 py-20 px-4 relative z-10">
        <div className="max-w-6xl">
          <h2 className="font-headline-lg text-headline-lg-mobile text-primary tracking-tighter uppercase mb-12">
            TECH STACK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "FRONTEND", items: ["React · Next.js", "Svelte · Astro", "TypeScript", "Tailwind CSS"] },
              { title: "BACKEND", items: ["Python", "Node.js", "PostgreSQL", "GDScript"] },
              { title: "AI & ML", items: ["Agent Orchestration", "LLM Integration", "Multi-agent Systems", "Claude API"] },
              { title: "TOOLS", items: ["Git · Docker", "Godot Engine", "Railway · AWS", "Design Systems"] },
            ].map((category, i) => (
              <div key={category.title} className={`chaos-card ${i % 3 === 0 ? "tilt-1" : i % 3 === 1 ? "tilt-2" : "tilt-3"}`}>
                <h3 className="font-sticker-label text-sticker-label text-secondary uppercase mb-4 border-b-2 border-secondary pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="font-annotation text-annotation text-on-surface">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="lg:pl-80 py-20 px-4 relative z-10 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg-mobile text-primary tracking-tighter uppercase mb-6">
            LET'S MAKE NOISE
          </h2>
          <p className="font-body-lg text-on-surface mb-8">
            Interested in collaboration, consulting, or just want to talk chaos?
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/Callmeamps"
              target="_blank"
              rel="noopener noreferrer"
              className="sticker-btn sticker-btn-secondary -rotate-1"
            >
              GITHUB
            </a>
            <a
              href="https://blog.callmeamps.one"
              target="_blank"
              rel="noopener noreferrer"
              className="sticker-btn sticker-btn-primary rotate-2"
            >
              BLOG
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
