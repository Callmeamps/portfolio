"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageNav } from "@/components/PageNav";
import { Footer } from "@/components/Footer";
import { Annotation } from "@/components/Annotation";
import { bio, experience, skillCategories } from "@/data/about";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface bg-grain">
      <PageNav activePage="about" />

      <main className="lg:pl-56 relative z-10 pt-12 lg:pt-0">
        {/* ── Hero Section ── */}
        <section className="min-h-[70vh] flex items-center justify-center px-8 py-20 relative overflow-hidden">
          {/* Background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <h2 className="font-['Anton'] text-[100px] md:text-[150px] text-primary tracking-tighter whitespace-nowrap">
              BUILD
            </h2>
          </div>

          {/* Annotation sticker */}
          <div className="absolute top-24 left-12 lg:left-[calc(20rem+48px)] z-20">
            <Annotation text="#OFF-GRID" variant="handwriting" tilt={-6} />
          </div>

          {/* Central content */}
          <motion.div
            className="relative z-20 text-center max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="font-['Anton'] text-[80px] lg:text-[150px] text-primary tracking-tighter leading-[0.85] mb-6 -rotate-1 glitch-hover cursor-crosshair"
              style={{ textShadow: "8px 8px 0px #8b6a4a" }}
            >
              THE<br />BLUEPRINT
            </h1>

            <div className="bg-primary text-on-primary font-annotation text-annotation px-4 py-2 mb-8 inline-block rotate-tilt-primary" style={{ boxShadow: "4px 4px 0px 0px #8b6a4a" }}>
              <p>{bio.tagline}</p>
            </div>

            <p className="text-body-lg font-bold text-on-surface max-w-2xl mx-auto">
              {bio.description}
            </p>
          </motion.div>
        </section>

        {/* ── Stats ── */}
        <motion.section
          className="px-8 py-16 border-t-4 border-b-4 border-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
            {bio.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={`chaos-card text-center ${i === 0 ? "tilt-1" : i === 1 ? "tilt-2" : "tilt-3"}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <p className="font-['Anton'] text-[48px] text-primary">{stat.value}</p>
                <p className="font-annotation text-annotation text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Experience Timeline ── */}
        <section className="px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="font-['Anton'] text-[60px] lg:text-[80px] text-primary tracking-tighter uppercase mb-12 -rotate-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              TIMELINE
            </motion.h2>

            <motion.div
              className="space-y-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {experience.map((exp) => (
                <motion.div
                  key={exp.year}
                  className="flex gap-6 items-start"
                  variants={item}
                >
                  <div className="shrink-0">
                    <span className="font-['Anton'] text-[32px] text-secondary">{exp.year}</span>
                  </div>
                  <div className="border-l-4 border-secondary pl-6 pb-8">
                    <h3 className="font-['Anton'] text-[24px] text-primary uppercase tracking-tight mb-1">
                      {exp.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Skills Grid ── */}
        <section className="px-8 py-20 bg-surface-container-high border-t-4 border-primary">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="font-['Anton'] text-[60px] lg:text-[80px] text-primary tracking-tighter uppercase mb-12 rotate-1"
              initial={{ opacity: 0, x: 30 }}
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
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  className={`chaos-card ${i % 3 === 0 ? "tilt-1" : i % 3 === 1 ? "tilt-2" : "tilt-3"}`}
                  variants={item}
                >
                  <h3 className="font-sticker-label text-sticker-label text-secondary uppercase mb-4 border-b-2 border-secondary pb-2">
                    {cat.title}
                  </h3>
                  <ul className="space-y-2">
                    {cat.items.map((skill) => (
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

        {/* ── CTA ── */}
        <section className="px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-['Anton'] text-[48px] lg:text-[80px] text-primary tracking-tighter uppercase mb-6">
              LET&apos;S BUILD
            </h2>
            <p className="font-body-lg text-on-surface mb-8 max-w-xl mx-auto">
              Interested in collaboration, consulting, or just want to build together?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact" className="sticker-btn sticker-btn-secondary -rotate-1">
                CONTACT ME
              </a>
              <a href="/works" className="sticker-btn sticker-btn-primary rotate-2">
                VIEW WORKS
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
