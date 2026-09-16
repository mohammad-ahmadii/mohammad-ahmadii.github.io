import ArrowRightFillIcon from 'remixicon-react/ArrowRightFillIcon';

import type { Project } from '../types';

export interface ProjectCardProps {
  project: Project;
  /** 1-based position, used for the "01 / 03" counter. */
  index: number;
  total: number;
  onPreviewImage: (project: Project) => void;
}

export default function ProjectCard({ project, index, total, onPreviewImage }: ProjectCardProps) {
  const hasLiveAddress = Boolean(project.view.address);
  const hasSrcAddress = Boolean(project.view.src_address);

  return (
    <article className="group border border-line bg-raised p-6 hover:border-trace/60 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-2">
        <p className="font-mono text-[11px] text-inkMuted">
          {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>
        <span className="font-mono text-[11px] text-signal">{project.date}</span>
      </div>

      <h3 className="font-display font-bold text-xl text-ink mb-1">{project.name}</h3>

      <div className="flex flex-col items-start lg:flex-row-reverse justify-between gap-5">
        <div className="flex justify-center max-w-96 xl:max-w-[1024px] mx-auto lg:mr-0 overflow-hidden">
          {project.view.imageUrl && (
            <button
              type="button"
              onClick={() => onPreviewImage(project)}
              aria-label={`Open a larger preview of ${project.name}`}
            >
              <img
                src={project.view.imageUrl}
                className="w-full h-auto object-cover cursor-pointer hover:opacity-80 transition-opacity"
                alt={`Screenshot of ${project.name}`}
              />
            </button>
          )}
        </div>
        <ul className="space-y-2 mb-6 w-full lg:max-w-2xl">
          <p className="text-inkMuted text-sm leading-relaxed mb-5">{project.description}</p>
          {project.points.map((point) => (
            <li key={point} className="flex gap-3 text-ink/90 text-sm leading-relaxed">
              <span className="text-trace font-mono shrink-0">›</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <br />

      <p className="font-mono text-[11px] text-inkMuted mb-4">
        As a {project.role}, I was involved in this project launched by {project.company}.
      </p>
      <div className="flex justify-between flex-col lg:flex-row gap-10">
        <div className="flex flex-wrap gap-2 items-center">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] tracking-wide text-trace border border-trace/30 px-2 py-0.5 h-fit"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          {hasLiveAddress ? (
            <a
              href={project.view.address ?? undefined}
              target="_blank"
              rel="noreferrer"
              className="text-trace border px-3 py-2 rounded border-trace hover:bg-trace hover:text-black flex gap-2 items-center"
            >
              <span>view</span> <ArrowRightFillIcon />
            </a>
          ) : (
            <span
              aria-disabled="true"
              title={project.view.title}
              className="disabled text-trace border px-3 py-2 rounded border-trace flex gap-2 items-center cursor-not-allowed"
            >
              <span>view</span> <ArrowRightFillIcon />
            </span>
          )}
          {hasSrcAddress && (
            <a
              href={project.view.src_address}
              target="_blank"
              rel="noreferrer"
              className="text-trace border px-3 py-2 rounded border-trace hover:bg-trace hover:text-black flex gap-2 items-center"
            >
              <span>source code</span> <ArrowRightFillIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
