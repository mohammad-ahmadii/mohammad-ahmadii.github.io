/**
 * Single source of truth for route paths.
 * Import these instead of typing string literals in <Link to="...">.
 */
export const ROUTES = {
  home: '/',
  projects: '/projects',
  contact: '/contact',
} as const;

/** Anchors of the sections rendered on the home page. */
export const SECTIONS = {
  top: 'top',
  experience: 'experience',
  projects: 'projects',
  skills: 'skills',
  education: 'education',
  languages: 'languages',
  contact: 'contact',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];
