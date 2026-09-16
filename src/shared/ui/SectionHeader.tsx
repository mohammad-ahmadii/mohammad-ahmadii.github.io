export interface SectionHeaderProps {
  /** Blueprint figure label, e.g. "FIG. 03". */
  fig: string;
  title: string;
}

export default function SectionHeader({ fig, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <p className="font-mono text-xs tracking-[0.2em] text-signal whitespace-nowrap">{fig}</p>
      <span className="h-px flex-1 bg-line" />
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink whitespace-nowrap">
        {title}
      </h2>
    </div>
  );
}
