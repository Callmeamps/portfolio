"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";

interface SocialLink {
  label: string;
  href: string;
  icon: "mail" | "external-link" | "star" | "grid";
}

const socials: SocialLink[] = [
  { label: "INSTAGRAM", href: "https://instagram.com/callmeamps", icon: "external-link" },
  { label: "TWITTER / X", href: "https://x.com/callmeamps", icon: "external-link" },
  { label: "GITHUB", href: "https://github.com/Callmeamps", icon: "star" },
  { label: "BLOG", href: "https://blog.callmeamps.one", icon: "external-link" },
];

export function SocialLinks() {
  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {socials.map((social, i) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="sticker-btn sticker-btn-ghost flex items-center justify-between gap-4 group"
          style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * 1.5}deg` }}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
          whileHover={{ scale: 1.03, rotate: 0 }}
        >
          <span className="flex items-center gap-3">
            <Icon name={social.icon} size={18} />
            <span className="font-['Anton'] text-[18px] uppercase tracking-tight">
              {social.label}
            </span>
          </span>
          <Icon name="arrow-up-right" size={16} className="text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.a>
      ))}
    </motion.div>
  );
}
