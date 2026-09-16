import type { Experience } from '../types';

export interface ExperienceItemProps {
  job: Experience;
}

export default function ExperienceItem({ job }: ExperienceItemProps) {
  return (
    <li className="relative">
      {/* node pin */}
      <span className="absolute -left-8 sm:-left-12 top-3.5 w-4 h-4 rounded-full border-2 border-trace bg-bg" />

      <div className="flex flex-wrap items-center gap-x-3">
        <img src={job.company_logo} alt={`${job.company} logo`} width={40} height={40} />
        <h3 className="font-display font-bold text-xl text-ink">
          {job.companyUrl ? (
            <a
              href={job.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-trace transition-colors"
            >
              {job.company}
            </a>
          ) : (
            <span>{job.company}</span>
          )}
        </h3>
      </div>

      <div className="font-mono text-xs text-inkMuted flex flex-wrap gap-x-4 gap-y-1 mb-4">
        <span>{job.date}</span>
        <span className="text-signal">{job.duration}</span>
        <span>{job.location}</span>
      </div>

      <p className="text-inkMuted text-sm mb-4 max-w-2xl">{job.blurb}</p>

      {job.roles.length > 0 && (
        <div className="space-y-4">
          {job.roles.map((role) => (
            <div key={role.role} className="relative pl-6 border-l border-line">
              <span className="absolute -left-1 top-6 w-2 h-2 rounded-full bg-signal" />
              <div className="bg-raised border border-line px-4 py-3">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="font-display text-ink text-lg">{role.role}</span>
                  <span className="font-mono text-[11px] text-inkMuted">{role.duration}</span>
                </div>
                <br />
                <ul className="space-y-2 mb-6 max-w-2xl">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3 text-ink/90 text-sm leading-relaxed">
                      <span className="text-trace font-mono shrink-0">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </li>
  );
}
