"use client";

import { motion } from "framer-motion";
import { PageNav } from "@/components/PageNav";
import { Footer } from "@/components/Footer";
import { Annotation } from "@/components/Annotation";
import { SocialLinks } from "@/components/SocialLinks";

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-surface bg-grain">
      <PageNav activePage="home" />

      <main className="lg:pl-56 relative z-10 pt-12 lg:pt-0">
        {/* ── Hero ── */}
        <section className="min-h-[60vh] flex items-center justify-center px-8 py-20 relative overflow-hidden">
          {/* Background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <h2 className="font-['Anton'] text-[100px] md:text-[150px] text-primary tracking-tighter whitespace-nowrap">
              CONNECT
            </h2>
          </div>

          <motion.div
            className="relative z-20 text-center max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className="font-['Anton'] text-[80px] lg:text-[150px] text-primary tracking-tighter leading-[0.85] mb-4 -rotate-1"
              style={{ textShadow: "8px 8px 0px #8b6a4a" }}
            >
              CONNECT
            </h1>
            <div className="mb-8">
              <Annotation text="DROP A LINE // LINK UP" variant="handwriting" tilt={2} />
            </div>
          </motion.div>
        </section>

        {/* ── Social Links ── */}
        <section className="px-8 py-16">
          <div className="max-w-xl mx-auto">
            <SocialLinks />
          </div>
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
              BUILD IN PUBLIC
            </h2>
            <p className="font-body-lg text-on-surface mb-8 max-w-xl mx-auto">
              7 open-source projects and counting. No gatekeeping.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact" className="sticker-btn sticker-btn-secondary -rotate-1">
                SEND A SIGNAL
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
