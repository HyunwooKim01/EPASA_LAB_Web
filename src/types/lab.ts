// 👇 새로 추가하는 Education 양식
export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Career {
  title: string;     
  organization: string; 
  period: string;     
}

export interface Member {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  shortIntro?: string;
  email?: string;
  links?: {
    scholar?: string;
    linkedin?: string;
    github?: string;
  };
  publicationIds?: string[];
  // 👇 새로 추가하는 항목들 (?를 붙여서 필수가 아님을 표시)
  education?: Education[];
  experience?: string[];
  career?: Career[];
}

export type PublicationCategory =
  | 'intl-journal'
  | 'intl-conference'
  | 'domestic-journal'
  | 'domestic-conference';

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  category: PublicationCategory; // 👈 추가
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

export interface ResearchDetail {
  topic: string; // 예: Research Topic #1 : Embedded AI
  subTopics: {
    title: string; // 예: Physical AI를 위한 임베디드 시스템 연구
    descriptions: string[]; // 세부 내용들 (글머리 기호)
  }[];
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
  detailedResearch?: ResearchDetail[];
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
