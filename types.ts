import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  category: 'Automation' | 'Manual' | 'Languages' | 'Tools' | 'Soft Skills';
  icon?: LucideIcon;
  logo?: string;
  level?: number; // 1-100
}

export interface Job {
  title: string;
  company: string;
  client?: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  provider: string;
  icon?: string;
}

export interface Achievement {
  title: string;
  description: string;
}