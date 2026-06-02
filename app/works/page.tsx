"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageNav } from "@/components/PageNav";
import { Footer } from "@/components/Footer";
import { Annotation } from "@/components/Annotation";
import { Icon } from "@/components/Icon";
import { projects } from "@/data/projects";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const statusFilters = ["ALL", "LIVE", "DESIGN", "PRIVATE"] as const;

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-surface bg-grain">
      <PageNav activePage="works" />

      <main className="lg:pl-56 relative z-10 pt-12 lg:pt-0">
        {/* ── Header ── */}
        <motion.div
          className="border-b-4 border-primary px-8 py-4 flex justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-['Anton'] text-[20px] tracking-tight">EDITION NO. 066</span>
          <div className="flex gap-2">
            <Link href="/" className="sticker-btn sticker-btn-ghost text-sm">HOME</Link>
            <Link href="/about" className="sticker-btn sticker-btn-ghost text-sm">ABOUT</Link>
            <Link href="/contact" className="sticker-btn sticker-btn-ghost text-sm">CONTACT</Link>
          </div>
        </motion.div>

        {/* ── Hero ── */}
        <section className="px-8 py-20 relative overflow-hidden">
          {/* Background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <h2 className="font-['Anton'] text-[100px] md:text-[150px] text-primary tracking-tighter whitespace-nowrap">
              CALLMEAMPS
            </h2>
          </div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className="font-['Anton'] text-[80px] lg:text-[150px] text-primary tracking-tighter leading-[0.85] mb-4 -rotate-1"
              style={{ textShadow: "8px 8px 0px #8b6a4a" }}
            >
              SELECTED<br />PROJECTS
            </h1>
            <Annotation text="WHAT I'VE BUILT" variant="sticker" tilt={-2} />
          </motion.div>
        </section>

        {/* ── Status Filters ── */}
        <motion.div
          className="px-8 pb-12 flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {statusFilters.map((filter, i) => (
            <button
              key={filter}
              className={`sticker-btn ${i === 0 ? "sticker-btn-secondary" : "sticker-btn-ghost"}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* ── Project Grid (Anti-Grid) ── */}
        <section className="px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-y-32 relative mb-32"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, i) => (
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
                {/* Number watermark */}
                <div className="absolute -top-16 -left-4 font-['Anton'] text-[120px] text-outline pointer-events-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <Link href={`/works/${project.slug}`}>
                  <div className={`chaos-card ${i % 3 === 0 ? "tilt-1" : i % 3 === 1 ? "tilt-2" : "tilt-3"} cursor-pointer`}>
                    {/* Status + Year */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-2 items-center">
                        <span className={`inline-block px-2 py-0.5 text-annotation font-bold uppercase ${
                          project.status === "live"
                            ? "bg-on-tertiary-container text-white"
                            : project.status === "design"
                              ? "bg-secondary-container text-white"
                              : "bg-surface-container-high text-on-surface-variant"
                        }`}>
                          {project.status}
                        </span>
                        <span className="font-annotation text-annotation text-on-surface-variant">
                          {project.updatedAt.split("-")[0]}
                        </span>
                      </div>
                      {project.voiceLog && (
                        <span className="sticker-btn sticker-btn-primary text-annotation py-0.5 px-2 flex items-center gap-1">
                          <span className="text-sm">▶</span> VOICE LOG
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-['Anton'] text-[32px] text-primary leading-none mb-2 uppercase tracking-tighter">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="font-body-md text-body-md text-on-surface mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.languages.slice(0, 3).map((lang) => (
                        <span
                          key={lang}
                          className="inline-block px-2 py-1 text-annotation bg-surface-container text-primary border border-primary"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>

                    {/* Highlights + CTA */}
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-1">
                        {project.highlights.slice(0, 2).map((h) => (
                          <span
                            key={h}
                            className="inline-block px-2 py-1 text-annotation bg-secondary/10 text-secondary border border-secondary/20"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                      <span className="sticker-btn sticker-btn-primary text-sm group-hover:bg-secondary transition-colors">
                        <Icon name="arrow-up-right" size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── CTA ── */}
        <section className="px-8 py-20 text-center border-t-4 border-primary">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-['Anton'] text-[48px] lg:text-[80px] text-primary tracking-tighter uppercase mb-6">
              WANT MORE?
            </h2>
            <p className="font-body-lg text-on-surface mb-8 max-w-xl mx-auto">
              This is what I'm building right now. Reach out if something sparks your interest.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact" className="sticker-btn sticker-btn-secondary -rotate-1">
                GET IN TOUCH
              </a>
              <a
                href="https://github.com/Callmeamps?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="sticker-btn sticker-btn-ghost rotate-1"
              >
                GITHUB{" "}
                <Icon name="arrow-up-right" size={14} className="inline-block" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
