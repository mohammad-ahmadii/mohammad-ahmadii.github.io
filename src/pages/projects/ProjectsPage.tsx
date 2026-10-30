import PageHeader from '@/shared/ui/PageHeader';
import { useState } from 'react';
import { ImageLightbox } from '@/shared/ui';
import { ProjectCard, projects, type Project } from '@/features/projects';

export default function ProjectsPage() {
  const [previewed, setPreviewed] = useState<Project | null>(null);

  return (
    <div className="pt-8 max-w-6xl mx-auto px-4">
      <PageHeader title="Projects" />
      {/* <div className="flex flex-wrap gap-2 justify-center lg:justify-start"> */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onPreviewImage={setPreviewed} />
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
