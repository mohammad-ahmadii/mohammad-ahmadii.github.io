export interface PgaeHeaderProps {
  /** Blueprint figure label, e.g. "FIG. 03". */
  title: string;
}

export default function PageHeader({ title }: PgaeHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink whitespace-nowrap">
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
