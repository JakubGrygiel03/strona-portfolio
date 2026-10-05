import type { MetadataRoute } from "next";
import { getAllProjects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteConfig.url, lastModified },
    { url: `${siteConfig.url}/wycena`, lastModified },
    ...getAllProjects().map((project) => ({
      url: `${siteConfig.url}/case-study/${project.slug}`,
      lastModified,
    })),
  ];
}
