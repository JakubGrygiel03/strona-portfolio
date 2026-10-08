import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";
import { getAllProjects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

const appDir = path.join(process.cwd(), "app");
const projectsDir = path.join(process.cwd(), "content", "projects");

const skipDirs = new Set(["api", "admin", "actions"]);

async function staticRoutes(): Promise<MetadataRoute.Sitemap> {
  const found: MetadataRoute.Sitemap = [];

  async function walk(dir: string, segments: string[]) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith(".") || skipDirs.has(entry.name)) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name.startsWith("(") && entry.name.endsWith(")")) {
          await walk(full, segments);
          continue;
        }
        if (entry.name.startsWith("[")) continue;
        await walk(full, [...segments, entry.name]);
        continue;
      }
      if (entry.name !== "page.tsx" && entry.name !== "page.ts") continue;
      const file = await stat(full);
      const pathname = segments.length === 0 ? "" : `/${segments.join("/")}`;
      found.push({
        url: `${siteConfig.url}${pathname}`,
        lastModified: file.mtime,
        changeFrequency: pathname === "" ? "weekly" : "monthly",
        priority: pathname === "" ? 1 : pathname === "/wycena" ? 0.9 : 0.4,
      });
    }
  }

  await walk(appDir, []);
  return found;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, studies] = await Promise.all([
    staticRoutes(),
    Promise.all(
      getAllProjects().map(async (project) => {
        const file = await stat(path.join(projectsDir, `${project.slug}.ts`)).catch(() => null);
        return {
          url: `${siteConfig.url}/case-study/${project.slug}`,
          lastModified: file?.mtime ?? new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.8,
        };
      }),
    ),
  ]);

  return [...pages, ...studies];
}
