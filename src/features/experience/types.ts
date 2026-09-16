import type { Project } from '../projects';

export interface Role {
  role: string;
  duration: string;
  points: string[];
}
export interface Experience {
  id: string;
  company: string;
  company_logo: string;
  companyUrl: string;
  date: string;
  duration: string;
  location: string;
  blurb: string;
  roles: Role[];
  projects: Project[];
}
