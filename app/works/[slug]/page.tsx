"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageNav } from "@/components/PageNav";
import { Footer } from "@/components/Footer";
import { Annotation } from "@/components/Annotation";
import { Icon } from "@/components/Icon";
import { VoiceLogPlayer } from "@/components/VoiceLogPlayer";
import { projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: { slug: string };
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug) || projects[0];

  const statusLabel =
    project.status === "live"
      ? "LIVE"
      : project.status === "design"
        ? "DESIGN"
        : project.status === "private"
          ? "PRIVATE"
          : "BUILDING";

  return (
    <div className="min-h-screen bg-surface bg-grain">
      <PageNav activePage="works" />

      <main className="lg:pl-56 relative z-10 ">
        {/* ── Back Nav ── */}
        <motion.div
          className="px-8 py-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/works"
            className="sticker-btn sticker-btn-ghost inline-flex items-center gap-2"
          >
            <Icon name="arrow-left" size={16} className="shrink-0" />
            BACK TO WORKS
          </Link>
        </motion.div>

        {/* ── Hero ── */}
        <section className="px-8 py-12 relative overflow-hidden">
          {/* Background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <h2 className="font-['Anton'] text-[100px] md:text-[150px] text-primary tracking-tighter whitespace-nowrap">
              BUILD
            </h2>
          </div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Meta badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Annotation
                text={`STATUS: ${statusLabel}`}
                variant="default"
                tilt={-1}
              />
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sticker-btn sticker-btn-secondary inline-flex items-center gap-1.5"
                >
                  <Icon name="external-link" size={12} />
                  LIVE DEMO
                </a>
              )}
              <Annotation
                text={`UPDATED: ${project.updatedAt}`}
                variant="default"
                tilt={2}
              />
            </div>

            {/* Title */}
            <h1
              className="font-['Anton'] text-[60px] lg:text-[120px] text-primary tracking-tighter leading-[0.85] mb-8 -rotate-1"
              style={{ textShadow: "8px 8px 0px #8b6a4a" }}
            >
              {project.name.toUpperCase()}
            </h1>

            {/* Voice Log Player */}
            {project.voiceLog && (
              <div className="mb-8">
                <VoiceLogPlayer voiceLog={project.voiceLog} />
              </div>
            )}
          </motion.div>
        </section>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-8">
          {/* Left: Visual */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div id="project-image" className="border-4 border-primary bg-surface-container-high aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              <span className="font-annotation text-annotation text-on-surface-variant text-[24px]">
                [PROJECT IMAGE]
              </span>
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-surface-variant/80 border-2 border-primary -rotate-6" />
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-3 mt-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-24 h-16 border-2 border-primary bg-surface-container flex items-center justify-center"
                >
                  <span className="font-annotation text-annotation text-on-surface-variant text-[10px]">
                    {i}.jpg
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            className="lg:col-span-5"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div id="project-description" className="chaos-card tilt-2 mb-6" variants={item}>
              <h3 className="font-sticker-label text-sticker-label text-secondary uppercase mb-3 border-b-2 border-secondary pb-2">
                DESCRIPTION
              </h3>
              <p className="font-body-md text-body-md text-on-surface">
                {project.description}
              </p>
            </motion.div>

            <motion.div id="project-highlights" className="chaos-card tilt-1 mb-6" variants={item}>
              <h3 className="font-sticker-label text-sticker-label text-secondary uppercase mb-3 border-b-2 border-secondary pb-2">
                HIGHLIGHTS
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="font-annotation text-annotation text-on-surface flex items-center gap-2">
                    <span className="text-secondary">▸</span> {h}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div id="project-tech" className="chaos-card tilt-3 mb-6" variants={item}>
              <h3 className="font-sticker-label text-sticker-label text-secondary uppercase mb-3 border-b-2 border-secondary pb-2">
                TECH
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.languages.map((lang) => (
                  <span
                    key={lang}
                    className="inline-block px-3 py-1 text-annotation bg-surface-container text-primary border border-primary"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              variants={item}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sticker-btn sticker-btn-secondary"
              >
                VIEW ON GITHUB{" "}
                <Icon name="arrow-up-right" size={16} className="inline-block" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Related Projects ── */}
        <section className="px-8 py-20 mt-12 border-t-4 border-primary">
          <motion.h2
            className="font-['Anton'] text-[48px] lg:text-[60px] text-primary tracking-tighter uppercase mb-12 rotate-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            MORE WORK
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p, i) => (
                <motion.div key={p.slug} variants={item}>
                  <Link href={`/works/${p.slug}`}>
                    <div className={`chaos-card ${i % 3 === 0 ? "tilt-1" : i % 3 === 1 ? "tilt-2" : "tilt-3"} cursor-pointer`}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-['Anton'] text-[20px] text-primary uppercase tracking-tight">
                          {p.name}
                        </h3>
                        {p.voiceLog && (
                          <span className="text-annotation text-secondary">▶</span>
                        )}
                      </div>
                      <p className="font-annotation text-annotation text-on-surface-variant line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
