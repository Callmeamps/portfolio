"use client";

import { motion } from "framer-motion";
import { PageNav } from "@/components/PageNav";
import { Footer } from "@/components/Footer";
import { Annotation } from "@/components/Annotation";
import { ContactForm } from "@/components/ContactForm";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const protocolRules = [
  "1. We only work with brave souls.",
  "2. If it's boring, we won't do it.",
  "3. Expect the unexpected. Deliver results.",
  "4. No refunds on vibes.",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface bg-grain">
      <PageNav activePage="contact" />

      <main className="lg:pl-56 relative z-10 pt-12 lg:pt-0">
        {/* ── Info Bar ── */}
        <div className="border-b-4 border-primary px-4 py-3 flex justify-between items-center bg-surface flex-wrap gap-2">
          <span className="font-['Anton'] text-[16px] tracking-tight">EDITION NO. 066</span>
          <span className="font-annotation text-annotation text-secondary">BUILDING IN PUBLIC — VOL. 1</span>
        </div>

        {/* ── Big Headline ── */}
        <section className="relative w-full border-b-4 border-primary py-16 px-8 flex justify-center items-center overflow-hidden bg-surface">
          {/* Handwriting annotation */}
          <div className="absolute top-8 left-4 lg:left-[calc(14rem+32px)] z-20">
            <Annotation text="DON'T BE SHY" variant="handwriting" tilt={-6} />
          </div>

          <motion.h1
            className="font-['Anton'] text-[80px] sm:text-[120px] lg:text-[180px] text-primary leading-none tracking-tighter text-center z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            HIT US UP
          </motion.h1>
        </section>

        {/* ── Sub-header ── */}
        <div className="flex justify-between items-center px-4 py-2 border-b-4 border-primary bg-surface text-sm font-bold uppercase flex-wrap gap-2">
          <span>PRICE: YOUR ATTENTION</span>
          <span className="relative">
            MOOD: VOID
            <span className="absolute -top-4 -left-6 font-handwriting text-secondary text-xl opacity-50 rotate-12">?</span>
          </span>
        </div>

        {/* ── Main Content ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          {/* Left: Form */}
          <div className="lg:col-span-8 p-4 lg:p-10 relative">
            <motion.div
              className="mb-12 inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Annotation text="FILL THIS OUT NOW!" variant="sticker" tilt={-2} />
            </motion.div>

            <ContactForm />

            {/* Tape effect */}
            <div className="absolute top-0 right-1/4 w-32 h-6 bg-white/40 backdrop-blur-sm -rotate-6 border border-black/10 mix-blend-overlay pointer-events-none" />
          </div>

          {/* Right: Protocol */}
          <motion.div
            className="lg:col-span-4 border-l-4 border-primary p-4 lg:p-8 bg-surface-container-low"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="font-handwriting text-5xl lg:text-6xl text-secondary leading-tight mb-12 -rotate-2">
              OUR<br />PROTOCOL
            </h2>

            <div className="border-t-2 border-b-2 border-primary py-8">
              <motion.ol
                className="flex flex-col gap-8 font-body-lg text-body-lg text-primary uppercase"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {protocolRules.map((rule) => (
                  <motion.li
                    key={rule}
                    className="pl-4 border-l-4 border-on-tertiary-container"
                    variants={item}
                  >
                    {rule}
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
