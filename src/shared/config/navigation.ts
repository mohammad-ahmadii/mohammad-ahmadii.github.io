import { ROUTES } from './routes';

export interface RouteNavLink {
  to: string;
  label: string;
}

export type NavLink = RouteNavLink;

export const NAV_LINKS: NavLink[] = [
  { to: ROUTES.home, label: 'HOME' },
  { to: ROUTES.projects, label: 'PROJECTS' },
  { to: ROUTES.contact, label: 'CONTACT' },
];
