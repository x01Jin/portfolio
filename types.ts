export interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  details?: string[];
}
