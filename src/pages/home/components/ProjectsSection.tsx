import { ProjectCard, projects, type Project } from '@/features/projects';
import { ROUTES, SECTIONS } from '@/shared/config';
import { ImageLightbox, SectionHeader } from '@/shared/ui';
import RouteLink from '@/shared/ui/RouteLink';
import { useState } from 'react';

export interface ProjectsSectionProps {
  fig?: string;
  title?: string;
}

export default function ProjectsSection({
  fig = 'FIG. 03',
  title = 'Projects',
}: ProjectsSectionProps) {
  const [previewed, setPreviewed] = useState<Project | null>(null);

  return (
    <section id={SECTIONS.projects} className="py-24 px-6 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader fig={fig} title={title} />

        <div className="grid gap-6">
          {[projects[0], projects[1]].map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 1}
              total={projects.length}
              onPreviewImage={setPreviewed}
            />
          ))}
          {previewed && (
            <ImageLightbox
              src={previewed.view.imageUrl}
              alt={`Screenshot of ${previewed.name}`}
              onClose={() => setPreviewed(null)}
            />
          )}
        </div>
        <div className="flex justify-center pt-8 ">
          <RouteLink
            route={ROUTES.projects}
            className="px-5 py-2.5 bg-signal text-bg font-mono text-xs tracking-wider hover:bg-ink transition-colors"
          >
            More {'>'}
          </RouteLink>
        </div>
      </div>
    </section>
  );
}
