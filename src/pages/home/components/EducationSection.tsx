import { education } from '@/constants/resumeData';
import { SECTIONS } from '../../../shared/config/routes';
import SectionHeader from '../../../shared/ui/SectionHeader';

export default function EducationSection() {
  return (
    <section id={SECTIONS.education} className="py-24 px-6 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader fig="FIG. 05" title="Education" />

        <div className="divide-y divide-line border-t border-b border-line">
          {education.map((item) => (
            <div
              // key={item.id}
              className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                {item.logo ? (
                  <a href={item.link ?? undefined} target="_blank" rel="noreferrer">
                    <img
                      src={item.logo}
                      alt={`logo image of ${item.school}`}
                      className="cursor-pointer"
                      width={60}
                    />
                  </a>
                ) : (
                  <div className="w-16" />
                )}
                <div>
                  <p className="font-display font-semibold text-ink">{item.degree}</p>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <p className="text-inkMuted text-sm">{item.school}</p>
                    </a>
                  ) : (
                    <p className="text-inkMuted text-sm">{item.school}</p>
                  )}
                </div>
              </div>
              <div className="font-mono text-xs text-inkMuted flex gap-4 shrink-0">
                <span>{item.date}</span>
                <span className="text-signal">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
