export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
}

export interface CodingProfile {
  platform: string;
  solved: string;
  url: string;
  color: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
