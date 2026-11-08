export interface Project {
  name: string;
  repo: string;
  description: string;
  language: string;
  tags: string[];
  stars: number;
  link: string;
  demo?: string;
}

export interface NavItem {
  label: string;
  id: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  year: string;
}

export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  current?: boolean;
  details: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}
