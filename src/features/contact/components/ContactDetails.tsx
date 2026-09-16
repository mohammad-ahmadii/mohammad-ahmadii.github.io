import { contactChannels } from '../data/contactChannels';

export interface ContactDetailsProps {
  /** 'buttons' for the compact home section, 'list' for the contact page. */
  variant?: 'buttons' | 'list';
}

export default function ContactDetails({ variant = 'buttons' }: ContactDetailsProps) {
  if (variant === 'list') {
    return (
      <ul className="divide-y divide-line border-t border-b border-line">
        {contactChannels.map((channel) => {
          const Icon = channel.icon;
          return (
            <li key={channel.id} className="py-4 flex items-center justify-between gap-4">
              <span className="flex items-center gap-3 font-mono text-[11px] tracking-[0.15em] text-signal">
                <Icon size={16} />
                {channel.label.toUpperCase()}
              </span>
              {channel.href ? (
                <a
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noreferrer' : undefined}
                  className="text-ink hover:text-trace transition-colors break-all text-right"
                >
                  {channel.value}
                </a>
              ) : (
                <span className="text-inkMuted text-right">{channel.value}</span>
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      {contactChannels.map((channel) => {
        const Icon = channel.icon;
        const content = (
          <>
            <Icon size={16} />
            <span>{channel.value}</span>
          </>
        );

        if (!channel.href) {
          return (
            <span
              key={channel.id}
              className="flex gap-2 items-center px-5 py-2.5 border border-lineStrong text-ink font-mono text-xs tracking-wider"
            >
              {content}
            </span>
          );
        }

        return (
          <a
            key={channel.id}
            href={channel.href}
            target={channel.external ? '_blank' : undefined}
            rel={channel.external ? 'noreferrer' : undefined}
            className={
              channel.id === 'email'
                ? 'flex gap-2 items-center px-5 py-2.5 bg-signal text-bg font-mono text-xs tracking-wider hover:bg-ink transition-colors'
                : 'flex gap-2 items-center px-5 py-2.5 border border-lineStrong text-ink font-mono text-xs tracking-wider hover:border-signal hover:text-signal transition-colors'
            }
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}
