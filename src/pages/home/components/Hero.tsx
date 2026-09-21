import { profile } from '@/constants/resumeData';
import { SECTIONS } from '../../../shared/config/routes';
import SectionLink from '../../../shared/ui/SectionLink';

export default function Hero() {
  return (
    <section
      id={SECTIONS.top}
      className="relative pt-8 lg:pt-24 pb-20 px-6 border-b border-line overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex gap-12 items-center lg:items-start flex-col-reverse lg:flex-row lg:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-signal mb-4">
            FIG. 01 — INTRODUCTION
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl leading-[1.05] text-ink">
            {profile.name}
          </h1>
          <p className="mt-4 font-mono text-sm tracking-wide text-trace uppercase">
            {profile.title} · {profile.tagline} . {profile.age} years old
          </p>
          <p className="mt-6 max-w-xl text-inkMuted leading-relaxed">{profile.about}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <SectionLink
              section={SECTIONS.contact}
              className="px-5 py-2.5 bg-signal text-bg font-mono text-xs tracking-wider hover:bg-ink transition-colors"
            >
              GET IN TOUCH
            </SectionLink>
            <SectionLink
              section={SECTIONS.experience}
              className="px-5 py-2.5 border border-lineStrong text-ink font-mono text-xs tracking-wider hover:border-signal hover:text-signal transition-colors"
            >
              VIEW EXPERIENCE
            </SectionLink>
          </div>
        </div>
        <div className="max-w-96 rounded-xl border-none overflow-hidden border">
          <img src="./assets/images/avatar.png" />
        </div>
      </div>
    </section>
  );
}
