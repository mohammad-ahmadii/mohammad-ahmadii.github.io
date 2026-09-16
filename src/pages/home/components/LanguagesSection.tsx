import { languages } from '@/constants/resumeData';
import { SECTIONS } from '../../../shared/config/routes';
import SectionHeader from '../../../shared/ui/SectionHeader';

export default function LanguagesSection() {
  return (
    <section id={SECTIONS.languages} className="py-24 px-6 border-b border-line">
      <div className="max-w-6xl mx-auto gap-12">
        <div>
          <SectionHeader fig="FIG. 06" title="LANGUAGES" />
          <ul className="space-y-3">
            {languages.map((language) => (
              <li
                key={language.name}
                className="flex items-center justify-between border-b border-line pb-3"
              >
                <span className="text-ink font-display">{language.name}</span>
                <span className="font-mono text-xs text-inkMuted">{language.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
