"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { reveal } from "@/lib/reveal";
import { pluralForm, pluralProjects } from "@/lib/utils";
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
  const linked = projects.filter((project) => project.siteUrl);
  const unlinked = projects.filter((project) => project.stage === "live" && !project.siteUrl);
  const layouts = projects.filter((project) => project.stage === "blueprint");
  const list = new Intl.ListFormat("pl", { type: "conjunction" });
  const name = (title: string) => title.split(" — ")[0] ?? title;
  const liveSentence = `${linked.length} ${pluralForm(linked.length, "strona jest", "strony są", "stron jest")} pod własnym adresem.`;
  const unlinkedSentence =
    unlinked.length === 0
      ? ""
      : ` ${list.format(unlinked.map((project) => name(project.title)))} ${unlinked.length === 1 ? "jest opisana" : "są opisane"} tutaj, bez publicznego adresu.`;
  const layoutSentence =
    layouts.length === 0
      ? ""
      : ` ${list.format(layouts.map((project) => name(project.title)))} to ${pluralForm(layouts.length, "gotowy układ", "gotowe układy", "gotowe układy")}, jeszcze bez własnego adresu.`;

  return (
    <section id="projekty" className="page-grid py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Realizacje"
          title="Realizacje, które da się otworzyć i przeczytać."
          description={`${liveSentence}${unlinkedSentence}${layoutSentence}`}
        />
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtr kategorii" {...reveal(80)}>
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
                revealDelay={Math.min(index, 5) * 70}
              />
            ))}
            {visible.length % 2 === 1 ? <NextSiteSlot /> : null}
          </div>
        )}
      </div>
    </section>
  );
}

function NextSiteSlot() {
  return (
    <article
      className="hidden h-full flex-col justify-center rounded-2xl border-2 border-dashed border-[#8a8a8a] bg-surface px-8 py-10 md:flex"
      {...reveal(200)}
    >
      <p className="text-xs font-medium tracking-[0.04em] text-muted uppercase">Następna realizacja</p>
      <h3 className="mt-3 max-w-xs text-xl font-semibold tracking-[-0.03em] text-heading">Kolejna strona powstaje.</h3>
      <p className="mt-3 max-w-sm text-sm leading-6 text-body">
        To miejsce czeka na następną stronę. Jak Twoja ma zacząć pracować, napisz.
      </p>
      <a
        href="#kontakt"
        className="mt-6 w-fit rounded-md text-sm font-medium text-cobalt underline decoration-cobalt/40 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
      >
        Napisz
      </a>
    </article>
  );
}
