import { SECTIONS } from '@/shared/config';
import { SectionHeader } from '@/shared/ui';
import ExperienceItem from '@/features/experience/components/ExperienceItem';
import { experiences } from '@/features/experience';

export default function ExperienceSection() {
  return (
    <section id={SECTIONS.experience} className="py-24 px-6 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader fig="FIG. 02" title="Experience" />

        <div className="relative pl-8 sm:pl-12">
          {/* main trunk trace */}
          <div className="absolute left-[7px] sm:left-[8px] top-6 bottom-2 w-px bg-trace/40" />

          <ol className="space-y-16">
            {experiences.map((job) => (
              <ExperienceItem key={job.id} job={job} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
