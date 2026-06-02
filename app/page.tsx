"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageNav } from "@/components/PageNav";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { Annotation } from "@/components/Annotation";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/about";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-surface bg-grain">
      <PageNav activePage="home" />
      <div className="pt-12 lg:pt-0">
        <Hero />

        {/* ── Annotation Sticker ── */}
        <div className="absolute top-32 left-10 lg:left-[calc(20rem+32px)] z-20">
          <Annotation text="v2.0_EXPERIMENTAL" variant="default" tilt={-3} />
        </div>

        {/* ── Featured Projects Section ── */}
        <section id="featured" className="lg:pl-56 py-20 px-4 relative z-10">
          <div className="max-w-6xl">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-['Anton'] text-[80px] lg:text-[120px] text-primary tracking-tighter leading-[0.85] mb-4">
                SELECTED<br />PROJECTS
              </h2>
              <Annotation text="HANDPICKED" variant="sticker" tilt={-2} />
            </motion.div>

            {/* Anti-Grid Layout */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-12 gap-y-32 relative mb-32"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {featuredProjects.map((project, i) => (
                <motion.div
                  key={project.slug}
                  className={`relative group ${
                    i % 4 === 0
                      ? "md:col-span-7"
                      : i % 4 === 1
                        ? "md:col-start-8 md:col-span-5 md:mt-32"
                        : i % 4 === 2
                          ? "md:col-span-6 md:-mt-12"
                          : "md:col-start-7 md:col-span-6 md:mt-24"
                  }`}
                  variants={item}
                >
                  <div className="absolute -top-16 -left-8 font-['Anton'] text-[120px] text-outline pointer-events-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <Link href={`/works/${project.slug}`}>
                    <ProjectCard project={project} tilt={(i % 3 + 1) as 1 | 2 | 3} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* ── View All CTA ── */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/works" className="sticker-btn sticker-btn-ghost -rotate-1">
                VIEW ALL PROJECTS →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Skills Section ── */}
        <section id="skills" className="lg:pl-56 py-20 px-4 bg-surface-container-high relative z-10 border-t-4 border-primary">
          <div className="max-w-6xl">
            <motion.h2
              className="font-['Anton'] text-[60px] lg:text-[80px] text-primary tracking-tighter uppercase mb-12 -rotate-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              TECH STACK
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skillCategories.map((category, i) => (
                <motion.div
                  key={category.title}
                  className={`chaos-card ${i % 3 === 0 ? "tilt-1" : i % 3 === 1 ? "tilt-2" : "tilt-3"}`}
                  variants={item}
                >
                  <h3 className="font-sticker-label text-sticker-label text-secondary uppercase mb-4 border-b-2 border-secondary pb-2">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((skill) => (
                      <li key={skill} className="font-annotation text-annotation text-on-surface">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section id="contact" className="lg:pl-56 py-20 px-4 relative z-10 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-['Anton'] text-[60px] lg:text-[80px] text-primary tracking-tighter uppercase mb-6">
                LET&apos;S BUILD SOMETHING
              </h2>
              <p className="font-body-lg text-on-surface mb-8">
                Interested in collaboration, consulting, or just want to build together?
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/contact" className="sticker-btn sticker-btn-secondary -rotate-1">
                  CONTACT ME
                </Link>
                <Link href="/connect" className="sticker-btn sticker-btn-primary rotate-2">
                  CONNECT
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
