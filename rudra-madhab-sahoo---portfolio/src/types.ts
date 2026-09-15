export type ProjectCategory = 'all' | 'python' | 'web' | 'ai';

export interface Project {
  id: string;
  name: string;
  category: 'python' | 'web' | 'ai';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  features: string[];
  status?: 'completed' | 'in-progress';
  highlights?: string;
  statsOrConcepts?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  level?: string;
  note?: string;
  iconName?: string;
  category: 'languages' | 'ai_ml' | 'web' | 'tools' | 'database';
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: string;
  description: string;
  tags: string[];
  documentUrl: string;
  isPdf: boolean;
  highlight: string;
  skillsLearned: string[];
}

export interface LearningItem {
  topic: string;
  status: 'In Progress' | 'Continuous' | 'Target 2026';
  category: string;
  description: string;
}

export interface GoalItem {
  goal: string;
  area: string;
  targetYear: string;
  description: string;
}

export interface ProfileData {
  name: string;
  preferredName: string;
  roleTitle: string;
  tagline: string;
  positioningStatement: string;
  degree: string;
  institution: string;
  location: string;
  email: string;
  secondaryEmail: string;
  socials: {
    github: string;
    linkedin: string;
    codolio: string;
    googleDev: string;
  };
  approachValues: {
    title: string;
    subtitle: string;
    description: string;
  }[];
  funFact: string;
  credits: {
    developer: string;
    specialThanks: string;
  };
}
