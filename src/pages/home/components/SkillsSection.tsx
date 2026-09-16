import { skillGroups } from '@/constants/resumeData';
import { SECTIONS } from '../../../shared/config/routes';
import SectionHeader from '../../../shared/ui/SectionHeader';

export default function SkillsSection() {
  return (
    <section id={SECTIONS.skills} className="py-24 px-6 border-b border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader fig="FIG. 04" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.label} className="border border-line bg-raised p-5">
              <p className="font-mono text-[11px] tracking-[0.15em] text-signal mb-4">
                {group.label.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-ink/90 border border-lineStrong px-2.5 py-1 hover:border-trace hover:text-trace transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
