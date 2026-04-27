export interface Solution {
  id: string;
  slug: string;
  title: string;
  category: "commercial" | "tactical" | "special-products" | "services";
  description: string;
  capabilities: Capability[];
  images: string[];
}

export interface Capability {
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  industry: string;
  year: string;
  client: string;
  scope: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  images: string[];
  metrics: { label: string; value: string }[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "company-news" | "industry" | "partnerships" | "projects";
  date: string;
  author: string;
  image: string;
}


export interface Office {
  city: string;
  coordinates: { lat: number; lng: number };
  isHQ: boolean;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface CompanyStat {
  label: string;
  value: number;
  suffix: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "contract";
  description: string;
}
