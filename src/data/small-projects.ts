import data from './small-projects.json';

export type SmallProject = {
  id: string;
  title: string;
  url?: string;
  tags: string[];
  description: string;
  company: string;
  clients?: string[];
  tasks?: string[];
  date?: string;
};

export const smallProjects = data as SmallProject[];
