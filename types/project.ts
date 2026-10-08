export const projectCategories = [
  "e-commerce",
  "services",
  "web-app",
  "culture-ngo",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const categoryLabels: Record<ProjectCategory, string> = {
  "e-commerce": "Sklepy",
  services: "Usługi",
  "web-app": "Aplikacje",
  "culture-ngo": "Kultura i organizacje",
};

export type ProjectStage = "live" | "blueprint";

export const stageLabels: Record<ProjectStage, string> = {
  live: "Zrobione",
  blueprint: "Gotowy układ",
};

export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectArchitecture {
  databaseSchema: string[];
  stack: string[];
  pattern: string;
  flow: string[];
}

export interface BeforeAfter {
  beforeLabel: string;
  afterLabel: string;
  beforeCaption: string;
  afterCaption: string;
  beforePoints: string[];
  afterPoints: string[];
}

export interface ProjectOutcome {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  stage: ProjectStage;
  summary: string;
  eyebrow?: string;
  headline?: string;
  lead?: string;
  benefits?: string[];
  challenge: string;
  challengePoints?: string[];
  solution: string;
  outcomes?: ProjectOutcome[];
  featured: boolean;
  year: string;
  cover?: string;
  siteUrl?: string;
  technologies: string[];
  highlightMetric: string;
  metrics: ProjectMetric[];
  architecture: ProjectArchitecture;
  beforeAfter?: BeforeAfter;
}
