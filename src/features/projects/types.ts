export interface ProjectView {
  address: string | null;
  src_address?: string;
  imageUrl: string;
  title: string;
}

export interface Project {
  id: string;
  name: string;
  company: string;
  role: string;
  date: string;
  location: string;
  stack: string[];
  description: string;
  points: string[];
  view: ProjectView;
}
