"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { pluralProjects } from "@/lib/utils";
import { categoryLabels, projectCategories, type Project, type ProjectCategory } from "@/types/project";

type FilterId = "all" | ProjectCategory;

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterId>("all");
  const filters = useMemo(
    () => [
      { id: "all" as const, label: "Wszystkie", count: projects.length },
      ...projectCategories.map((category) => ({
        id: category,
        label: categoryLabels[category],
        count: projects.filter((project) => project.category === category).length,
      })),
    ],
    [projects],
  );
  const visible = active === "all" ? projects : projects.filter((project) => project.category === active);

  return (
    <section id="projekty" className="page-grid py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Realizacje"
          title="Realizacje, które da się otworzyć i przeczytać."
          description="Cztery strony już stoją pod własnym adresem. Salon i fundacja to gotowe układy, bez cudzej domeny."
        />
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtr kategorii">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={active === filter.id}
              onClick={() => setActive(filter.id)}
              className={`min-h-11 cursor-pointer rounded-xl border px-3 py-2 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt ${
                active === filter.id
                  ? "border-cobalt bg-cobalt text-on-accent"
                  : "border-line bg-surface text-muted hover:border-cobalt/40"
              }`}
            >
              {filter.label} · {filter.count}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted" aria-live="polite">
          {pluralProjects(visible.length)}
        </p>
        {visible.length === 0 ? (
          <p className="mt-8 text-sm text-body">Brak projektów w tej kategorii.</p>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {visible.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featured={active === "all" && index === 0 && project.featured}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
