import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { categoryLabels, stageLabels, type Project } from "@/types/project";

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <>
    <header className="rounded-3xl bg-ink p-6 text-on-ink sm:p-10">
      <Link href="/#projekty" className="text-sm text-on-ink-muted hover:text-on-ink">
        Wróć do realizacji
      </Link>
      <div className="mt-6 flex flex-wrap gap-2">
        <Badge className="border-white/15 bg-white/10 text-on-ink">{categoryLabels[project.category]}</Badge>
        <Badge className="border-white/15 bg-white/10 text-on-ink">{stageLabels[project.stage]}</Badge>
        <Badge className="border-white/15 bg-white/10 text-on-ink">{project.year}</Badge>
      </div>
      <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-on-ink sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-on-ink-muted">{project.summary}</p>
      <p className="mt-6 text-sm font-medium text-on-ink">{project.highlightMetric}</p>
      {project.siteUrl ? (
        <a
          href={project.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-11 items-center rounded-xl bg-cobalt px-4 text-sm font-medium text-on-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
        >
          Otwórz stronę
        </a>
      ) : null}
    </header>
    {project.cover ? (
      <img
        src={project.cover}
        alt={`${project.title}, strona główna`}
        className="mt-6 aspect-[16/10] w-full rounded-3xl bg-surface object-contain object-center"
      />
    ) : null}
    <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-line bg-surface p-5">
          <h2 className="text-sm font-medium text-heading">Wyzwanie</h2>
          <p className="mt-3 text-sm leading-6 text-body">{project.challenge}</p>
        </article>
        <article className="rounded-2xl border border-line bg-surface p-5">
          <h2 className="text-sm font-medium text-heading">Rozwiązanie</h2>
          <p className="mt-3 text-sm leading-6 text-body">{project.solution}</p>
        </article>
      </div>
    </>
  );
}
