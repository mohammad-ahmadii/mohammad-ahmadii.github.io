import PageHeader from '@/shared/ui/PageHeader';
import { useState } from 'react';
import { ImageLightbox } from '@/shared/ui';
import { ProjectCard, projects, type Project } from '@/features/projects';

export default function ProjectsPage() {
  const [previewed, setPreviewed] = useState<Project | null>(null);

  return (
    <div className="pt-8 max-w-6xl mx-auto px-4">
      <PageHeader title="Projects" />
      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
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
    </div>
  );
}
