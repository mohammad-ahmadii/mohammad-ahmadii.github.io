import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES, type SectionId } from '../config/routes';

export interface SectionLinkProps {
  section: SectionId;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Links to a section of the home page.
 *
 * The sections only exist on "/", so a plain <a href="#skills"> would do
 * nothing from /projects. Routing to "/#skills" lets RootLayout's hash-scroll
 * effect take over once the home page has mounted.
 */
export default function SectionLink({ section, children, className, onClick }: SectionLinkProps) {
  return (
    <Link
      to={{ pathname: ROUTES.home, hash: `#${section}` }}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
