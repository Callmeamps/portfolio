"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  { value: "7", label: "PROJECTS" },
  { value: "100%", label: "OPEN SOURCE" },
  { value: "∞", label: "BUILDS" },
];

export function Hero() {
  return (
    <section className="lg:pl-56 min-h-[80vh] lg:min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden pt-24 lg:pt-0 pb-20 lg:pb-40">
      {/* Background floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 -rotate-12 opacity-30 select-none pointer-events-none"
        animate={{ y: [0, -15, 0], rotate: [-12, -8, -12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-['Anton'] text-[100px] md:text-[150px] text-primary-fixed-dim">*</span>
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-[10%] rotate-45 opacity-30 select-none pointer-events-none"
        animate={{ y: [0, 10, 0], rotate: [45, 40, 45] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-['Anton'] text-[100px] md:text-[150px] text-primary-fixed-dim">+</span>
      </motion.div>

      {/* Backdrop glitch text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="font-['Anton'] text-[80px] sm:text-[120px] lg:text-[180px] text-primary tracking-tighter whitespace-nowrap">
          BUILD
        </h2>
      </motion.div>

      {/* Central composition */}
      <motion.div
        className="relative z-20 max-w-4xl text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Primary Hero Text */}
        <motion.h2
          className="font-['Anton'] text-[48px] sm:text-[72px] lg:text-[140px] text-primary tracking-tighter leading-none mb-6 glitch-hover -rotate-1 cursor-crosshair"
          style={{ textShadow: "8px 8px 0px #8b6a4a" }}
          variants={item}
        >
          AMPS
        </motion.h2>

        {/* Annotation */}
        <motion.div
          className="bg-primary text-on-primary font-annotation text-annotation px-4 py-2 mb-12 inline-block rotate-tilt-primary"
          style={{ boxShadow: "4px 4px 0px 0px #8b6a4a" }}
          variants={item}
        >
          <p>MADMAN // BUILDER // AUGMENTED</p>
        </motion.div>

        {/* Subheading */}
        <motion.p
          className="text-body-lg font-bold text-on-surface mb-12 max-w-2xl mx-auto"
          variants={item}
        >
          Building systems where humans and agents create together
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex gap-4 justify-center flex-wrap mb-12" variants={item}>
          <a
            href="#featured"
            className="sticker-btn sticker-btn-secondary -rotate-1 scanline-hover relative"
          >
            <span className="relative z-10">LOCK IN</span>
            <div className="scanline-overlay" />
          </a>
          <a
            href="https://github.com/Callmeamps"
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-btn sticker-btn-primary rotate-2"
          >
            GITHUB
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-12"
          variants={item}
        >
          {stats.map((stat, i) => {
            const tiltClass = i === 0 ? "tilt-1" : i === 1 ? "tilt-2" : "tilt-3";
            return (
              <motion.div
                key={stat.label}
                className={`chaos-card ${tiltClass}`}
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-['Anton'] text-[48px] text-primary">{stat.value}</p>
                <p className="font-annotation text-annotation text-secondary">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}