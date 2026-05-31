import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card group">
      <div className="mb-4">
        <h3 className="text-xl font-bold gradient-text mb-2">{project.name}</h3>
        <p className="text-sm text-slate-400">{project.updatedAt}</p>
      </div>

      <p className="text-slate-300 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.languages.map((lang) => (
          <span
            key={lang}
            className="inline-block px-2 py-1 text-xs rounded bg-slate-800 text-cyan-400 border border-slate-700"
          >
            {lang}
          </span>
        ))}
      </div>

      {project.highlights.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="inline-block px-2 py-1 text-xs rounded bg-cyan-600/20 text-cyan-300 border border-cyan-600/30"
            >
              {highlight}
            </span>
          ))}
        </div>
      )}

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary text-sm"
      >
        View on GitHub →
      </a>
    </div>
  );
}
