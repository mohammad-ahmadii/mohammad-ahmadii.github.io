import ArrowRightFillIcon from 'remixicon-react/ArrowRightFillIcon';

import { useParams } from 'react-router-dom';
import { projects } from '@/features/projects/data/projects';
import NotFoundPage from '../not-found';

export default function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((item) => item.id === slug);
  if (!project) return <NotFoundPage />;

  const hasLiveAddress = Boolean(project.view.address);
  const hasSrcAddress = Boolean(project.view.src_address);

  return (
    <div className="pt-8 max-w-6xl mx-auto px-4">
      <article className="group border border-line bg-raised p-6 hover:border-trace/60 transition-colors">
        <div className="flex items-start justify-between gap-4 mb-2">
          <span className="font-mono text-[11px] text-signal">{project.date}</span>
        </div>
        <h3 className="font-display font-bold text-xl text-ink mb-1">{project.name}</h3>
        <div className="flex justify-center max-w-96 xl:max-w-[720px] mx-auto overflow-hidden">
          {project.view.imageUrl && (
            <button
              type="button"
              // onClick={() => onPreviewImage(project)}
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

        <br />
        <br />

        <div>
          <h3 className="text-lg">About the project</h3>
          <p className="text-inkMuted text-sm leading-relaxed mb-5">{project.description}</p>
        </div>

        <div>
          <h3 className="text-lg">Scale</h3>
          <p className="text-inkMuted text-sm leading-relaxed mb-5">{project.scale}</p>
        </div>

        <div>
          <h3 className="text-lg">Employer</h3>
          <p className="text-inkMuted text-sm leading-relaxed mb-5">{project.company}</p>
        </div>

        <div>
          <h3 className="text-lg">My Role</h3>
          <p className="text-inkMuted text-sm leading-relaxed mb-5">{project.role}</p>
        </div>

        <div>
          <h3 className="text-lg  mb-2">My implementations, solutions and challenges</h3>
          <ul className="space-y-2 mb-6 w-full lg:max-w-2xl">
            {project.points.map((point) => (
              <li key={point} className="flex gap-3 text-inkMuted text-sm leading-relaxed">
                <span className="text-trace font-mono shrink-0">›</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg mb-1">Technologies</h3>
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
        </div>

        <br />
        <br />

        <div className="flex justify-center gap-2">
          {hasLiveAddress ? (
            <a
              href={project.view.address ?? undefined}
              target="_blank"
              rel="noreferrer"
              className="text-trace border px-3 py-2 rounded border-trace hover:bg-trace hover:text-black flex gap-2 items-center"
            >
              <span>demo</span> <ArrowRightFillIcon />
            </a>
          ) : (
            <span
              aria-disabled="true"
              title={project.view.title}
              className="disabled text-trace border px-3 py-2 rounded border-trace flex gap-2 items-center cursor-not-allowed"
            >
              <span>demo</span> <ArrowRightFillIcon />
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
      </article>
    </div>
  );
}
