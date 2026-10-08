import { grygielGitara } from "@/content/projects/grygiel-gitara";
import { salonFryzjerski } from "@/content/projects/salon-fryzjerski";
import { theMedievals } from "@/content/projects/the-medievals";
import { trzyWiatry } from "@/content/projects/trzy-wiatry";
import { weddingPlatform } from "@/content/projects/wedding-platform";
import type { Project } from "@/types/project";

const projects: Project[] = [
  trzyWiatry,
  weddingPlatform,
  grygielGitara,
  theMedievals,
  salonFryzjerski,
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
