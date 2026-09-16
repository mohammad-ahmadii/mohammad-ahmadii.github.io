import { useEffect, useState } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';

import { NAV_LINKS } from '../../shared/config/navigation';
import { SECTIONS } from '../../shared/config/routes';
import SectionLink from '../../shared/ui/SectionLink';

const linkClass = 'text-inkMuted hover:text-signal transition-colors';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  const renderLinks = (onNavigate?: () => void) =>
    NAV_LINKS.map((link) => (
      <RouterNavLink
        key={link.to}
        to={link.to}
        onClick={onNavigate}
        className={({ isActive }) => (isActive ? 'text-signal transition-colors' : linkClass)}
      >
        {link.label}
      </RouterNavLink>
    ));

  return (
    <header className="px-2">
      <div className="max-w-6xl mx-auto  h-16 flex items-center justify-between">
        <SectionLink
          section={SECTIONS.top}
          className="flex items-center gap-3 font-mono text-sm text-ink"
        >
          <span className="w-8 h-8 border border-lineStrong flex items-center justify-center text-signal">
            MA
          </span>
          <span className="hidden sm:inline text-inkMuted">ahmadi / front-end</span>
        </SectionLink>

        <nav
          aria-label="Main"
          className="hidden md:flex items-center gap-7 font-mono text-xs tracking-wider"
        >
          {renderLinks()}
        </nav>

        <button
          type="button"
          className="md:hidden font-mono text-xs border border-lineStrong px-3 py-1.5 text-inkMuted"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="md:hidden bg-bg border-t border-line px-6 py-4 flex flex-col gap-4 font-mono text-xs tracking-wider"
        >
          {renderLinks(() => setOpen(false))}
        </nav>
      )}
    </header>
  );
}
