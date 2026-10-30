import ArrowRightFillIcon from 'remixicon-react/ArrowRightFillIcon';

import type { Project } from '../types';
import { Link } from 'react-router-dom';

export interface ProjectCardProps {
  project: Project;
  onPreviewImage: (project: Project) => void;
}

export default function ProjectCard({ project, onPreviewImage }: ProjectCardProps) {
  return (
    <article className="relative group border border-line bg-raised p-4 hover:border-trace/60 transition-colors h-[440px]">
      <h3 className="font-display font-bold text-lg text-ink line-clamp-1">{project.name}</h3>
      <br />
      <div className="flex flex-col items-start gap-5 h-56">
        <div className="flex justify-center max-w-72 mx-auto overflow-hidden">
          <button
            type="button"
            onClick={() => onPreviewImage(project)}
            aria-label={`Open a larger preview of ${project.name}`}
          >
            <img
              src={
                project.view.imageUrl
                  ? project.view.imageUrl
                  : '/assets/images/image-placeholder.png'
              }
              className="w-full h-auto object-cover cursor-pointer hover:opacity-80 transition-opacity"
              alt={`Screenshot of ${project.name}`}
            />
          </button>
        </div>
      </div>

      <p className="text-inkMuted text-sm leading-relaxed mb-5 line-clamp-2 h-12">
        {project.description}
      </p>
      <br />
      <div className="flex justify-center gap-2 ">
        <Link
          to={`/projects/${project.id}`}
          className="text-trace border px-3 py-2 rounded border-trace hover:bg-trace hover:text-black flex gap-2 items-center"
        >
          details <ArrowRightFillIcon />
        </Link>
      </div>
    </article>
  );
}
