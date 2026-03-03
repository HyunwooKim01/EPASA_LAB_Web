export interface Member {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  links?: {
    scholar?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'ongoing' | 'completed';
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
}

export interface LabData {
  labName: string;
  missionStatement: string;
  heroImage: string;
  researchAreas: ResearchArea[];
  publications: Publication[];
  members: Member[];
  projects: Project[];
  news: NewsItem[];
  contact: {
    address: string;
    email: string;
    phone: string;
    mapUrl: string;
  };
}
