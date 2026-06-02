"use client";

import { motion } from "framer-motion";

interface AnnotationProps {
  text: string;
  variant?: "default" | "handwriting" | "sticker";
  tilt?: number;
  className?: string;
}

export function Annotation({ text, variant = "default", tilt = -2, className = "" }: AnnotationProps) {
  const baseClass = "inline-block px-3 py-1 border-2 border-primary shadow-[4px_4px_0px_0px_rgba(4,13,27,1)]";

  const variantClass = {
    default: "bg-surface-container font-annotation text-annotation text-primary",
    handwriting: "bg-surface-container font-handwriting text-2xl text-secondary",
    sticker: "bg-on-tertiary-container font-sticker-label text-sticker-label text-white",
  };

  return (
    <motion.span
      className={`${baseClass} ${variantClass[variant]} ${className}`}
      style={{ rotate: `${tilt}deg` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {text}
    </motion.span>
  );
}
