export interface PortalDomain {
  slug: "telecommunications" | "security";
  title: string;
  shortDescription: string;
  subsections: DomainSubsection[];
}

export interface DomainSubsection {
  id: string;
  title: string;
  description: string;
  approach: string;
  vendorIds: string[];
  isAbstract?: boolean;
}

export interface PartnerVendor {
  id: string;
  name: string;
  logo: string;
  blurb: string;
  applicableTo: { subsectionId: string; scope: string }[];
}

export interface PartnerProduct {
  id: string;
  vendorId: string;
  productLine: string;
  description: string;
  capabilityTags: string[];
  datasheetUrl: string;
  authorizationScope: string;
  appliesToSubsection: string[];
}

export interface ProgramExperience {
  id: string;
  slug: string;
  title: string;
  client: string;
  sector: string;
  year: string;
  scope: string;
  outcome: string;
  technologies: string[];
}

export interface DocumentEntry {
  id: string;
  title: string;
  category: "datasheet" | "authorization" | "certificate" | "case-study" | "training";
  vendor?: string;
  fileType: "pdf" | "docx";
  fileSize: string;
  date: string;
  url: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  audience: string;
  duration: string;
  format: "in-person" | "remote" | "hybrid";
  description: string;
  outcomes: string[];
}

export interface PartnerSession {
  email: string;
  fullName?: string;
  organizationName?: string;
  ndaAcceptedAt?: string;
  inviteId?: string;
  authenticated: true;
}
