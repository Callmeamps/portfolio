"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { Icon } from "@/components/Icon";

interface ProjectCardProps {
  project: Project;
  tilt?: 1 | 2 | 3;
}

export function ProjectCard({ project, tilt = 1 }: ProjectCardProps) {
  const tiltClass = tilt === 2 ? "tilt-2" : tilt === 3 ? "tilt-3" : "tilt-1";

  return (
    <motion.div
      className={`chaos-card ${tiltClass} group relative cursor-pointer`}
      whileHover={{ scale: 1.03, rotate: 0, transition: { duration: 0.2 } }}
    >
      <div className="mb-4">
        <h3 className="font-['Anton'] text-[32px] text-primary leading-none mb-2 uppercase tracking-tighter">
          {project.name}
        </h3>
        <p className="font-annotation text-annotation text-secondary mb-2">
          {project.updatedAt}
        </p>
      </div>

      <p className="text-on-surface text-body-md mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.languages.slice(0, 2).map((lang) => (
          <span
            key={lang}
            className="inline-block px-2 py-1 text-annotation bg-surface-container text-primary border border-primary"
          >
            {lang}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-wrap gap-1">
          {project.highlights.slice(0, 2).map((highlight) => (
            <span
              key={highlight}
              className="inline-block px-2 py-1 text-annotation bg-secondary/10 text-secondary border border-secondary/20"
            >
              {highlight}
            </span>
          ))}
        </div>
        <span className="sticker-btn sticker-btn-primary text-sm group-hover:bg-secondary transition-colors">
          <Icon name="arrow-up-right" size={16} />
        </span>
      </div>
    </motion.div>
  );
}
