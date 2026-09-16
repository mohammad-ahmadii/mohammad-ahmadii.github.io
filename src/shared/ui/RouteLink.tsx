import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { type RoutePath } from '../config/routes';

export interface RouteLinkProps {
  route: RoutePath;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function RouteLink({ route, children, className, onClick }: RouteLinkProps) {
  return (
    <Link to={{ pathname: route }} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
