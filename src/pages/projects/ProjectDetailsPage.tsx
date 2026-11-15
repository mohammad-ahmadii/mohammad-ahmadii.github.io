import CalendarLineIcon from 'remixicon-react/CalendarLineIcon';
import InformationLineIcon from 'remixicon-react/InformationLineIcon';
import BarChartBoxLineIcon from 'remixicon-react/BarChartBoxLineIcon';
import BuildingLineIcon from 'remixicon-react/BuildingLineIcon';
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon';
import CodeBoxLineIcon from 'remixicon-react/CodeBoxLineIcon';
import StackLineIcon from 'remixicon-react/StackLineIcon';
import ExternalLinkLineIcon from 'remixicon-react/ExternalLinkLineIcon';
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';
import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import GlobalLineIcon from 'remixicon-react/GlobalLineIcon';

import { useParams } from 'react-router-dom';
import { projects } from '@/features/projects/data/projects';
import NotFoundPage from '../not-found';

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-trace/10 text-trace">
          <Icon size={19} />
        </div>
        <h2 className="font-semibold text-base text-ink">{title}</h2>
      </div>

      <div className="pl-11 text-sm text-inkMuted leading-7">{children}</div>
    </section>
  );
}

export default function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((item) => item.id === slug);

  if (!project) return <NotFoundPage />;

  const hasLiveAddress = Boolean(project.view.address);
  const hasSrcAddress = Boolean(project.view.src_address);

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 md:py-16">
      <article className="border border-line bg-raised rounded-2xl overflow-hidden">
        {/* Header */}
        <header className="p-6 md:p-8 border-b border-line">
          <div className="flex items-center gap-2 text-xs font-mono text-signal mb-4">
            <CalendarLineIcon size={15} />
            <time>{project.date}</time>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <h1 className="font-display font-bold text-2xl md:text-3xl text-ink">
                {project.name}
              </h1>
              <p className="text-sm text-inkMuted mt-2">Project overview and development details</p>
            </div>

            <div className="flex gap-2 shrink-0">
              {hasLiveAddress ? (
                <a
                  href={project.view.address!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-trace text-white text-sm font-medium hover:opacity-85 transition-opacity"
                >
                  <GlobalLineIcon size={17} />
                  Live Demo
                  <ExternalLinkLineIcon size={15} />
                </a>
              ) : (
                <span
                  title={project.view.title}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-line text-inkMuted text-sm cursor-not-allowed opacity-60"
                >
                  <GlobalLineIcon size={17} />
                  Demo unavailable
                </span>
              )}

              {hasSrcAddress && (
                <a
                  href={project.view.src_address!}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source code"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-line text-ink hover:border-trace hover:text-trace transition-colors"
                >
                  <GithubLineIcon size={19} />
                  <span className="hidden sm:inline text-sm">Source</span>
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Project image */}
        {project.view.imageUrl && (
          <div className="p-5 md:p-8 border-b border-line">
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-line bg-base">
              <img
                src={project.view.imageUrl}
                alt={`Screenshot of ${project.name}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8 space-y-9">
          <Section icon={InformationLineIcon} title="About the project">
            <p>{project.description}</p>
          </Section>

          <Section icon={BarChartBoxLineIcon} title="Project Scale">
            <p>{project.scale}</p>
          </Section>

          <Section icon={BuildingLineIcon} title="Employer">
            <p>{project.company}</p>
          </Section>

          <Section icon={UserStarLineIcon} title="My Role">
            <p>{project.role}</p>
          </Section>

          <Section icon={CodeBoxLineIcon} title="Implementations, Solutions & Challenges">
            <ul className="space-y-3">
              {project.points.map((point, index) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="flex items-center justify-center shrink-0 w-6 h-6 rounded-md bg-trace/10 text-trace text-xs font-mono mt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section icon={StackLineIcon} title="Technologies & Tools">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg border border-trace/20 bg-trace/5 text-trace text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>
        </div>

        {/* Footer */}
        <footer className="px-6 md:px-8 py-5 border-t border-line bg-base/50 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-inkMuted">Project details · {project.date}</span>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm text-inkMuted hover:text-trace transition-colors"
          >
            <ArrowRightLineIcon size={17} className="rotate-180" />
            Back to projects
          </button>
        </footer>
      </article>
    </main>
  );
}
