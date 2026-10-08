import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { reveal } from "@/lib/reveal";

export function RelatedProjects({ currentSlug }: { currentSlug: string }) {
  const related = getFeaturedProjects()
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <aside className="mt-16 border-t border-line pt-10" {...reveal()}>
      <h2 className="text-sm font-medium text-heading">Inne historie</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {related.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/case-study/${project.slug}`}
              className="block rounded-xl border border-line bg-surface px-4 py-4 transition-colors duration-200 hover:border-line-strong"
            >
              <span className="block text-sm text-heading">{project.title}</span>
              <span className="mt-1 block text-sm text-success">{project.highlightMetric}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
