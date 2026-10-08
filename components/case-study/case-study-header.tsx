import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { reveal } from "@/lib/reveal";
import { categoryLabels, stageLabels, type Project } from "@/types/project";

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <>
      <header className="rise rounded-3xl bg-ink p-6 text-on-ink sm:p-10">
        <Link href="/#projekty" className="text-sm text-on-ink-muted hover:text-on-ink">
          Wróć do realizacji
        </Link>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="border-white/15 bg-white/10 text-on-ink">
            {project.eyebrow ?? categoryLabels[project.category]}
          </Badge>
          <Badge className="border-white/15 bg-white/10 text-on-ink">{stageLabels[project.stage]}</Badge>
          <Badge className="border-white/15 bg-white/10 text-on-ink">{project.year}</Badge>
        </div>
        {project.headline ? (
          <p className="mt-5 text-sm font-medium text-amber">{project.title}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-on-ink sm:text-4xl sm:leading-tight">
          {project.headline ?? project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-on-ink-muted">{project.lead ?? project.summary}</p>
        {project.benefits?.length ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.benefits.map((benefit) => (
              <li key={benefit}>
                <Badge className="border-amber/40 bg-amber/10 text-amber">{benefit}</Badge>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm font-medium text-on-ink">{project.highlightMetric}</p>
        )}
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
          className="mt-6 aspect-video w-full rounded-3xl bg-white object-cover object-center ring-1 ring-black/15"
          {...reveal()}
        />
      ) : null}
      {project.outcomes?.length ? (
        <Story project={project} />
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article {...reveal()} className="rounded-2xl border border-line bg-surface p-5">
            <h2 className="text-sm font-medium text-heading">Wyzwanie</h2>
            <p className="mt-3 text-sm leading-6 text-body">{project.challenge}</p>
          </article>
          <article {...reveal(80)} className="rounded-2xl border border-line bg-surface p-5">
            <h2 className="text-sm font-medium text-heading">Rozwiązanie</h2>
            <p className="mt-3 text-sm leading-6 text-body">{project.solution}</p>
          </article>
        </div>
      )}
    </>
  );
}

function Story({ project }: { project: Project }) {
  return (
    <div className="mt-6 grid gap-4">
      <article {...reveal()} className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
        <h2 className="text-sm font-medium text-heading">Co było nie tak</h2>
        <p className="mt-3 text-sm leading-6 text-body">{project.challenge}</p>
        {project.challengePoints?.length ? (
          <ul className="mt-4 space-y-2">
            {project.challengePoints.map((point) => (
              <li key={point} className="text-sm leading-6 text-heading">
                {point}
              </li>
            ))}
          </ul>
        ) : null}
      </article>
      <article {...reveal(80)} className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
        <h2 className="text-sm font-medium text-heading">Co zmieniło się w pracy</h2>
        <ol className="mt-4 space-y-4">
          {project.outcomes?.map((outcome, index) => (
            <li key={outcome.title} className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-3">
              <span className="font-mono text-sm text-cobalt">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <span className="block text-sm font-medium text-heading">{outcome.title}</span>
                <span className="mt-1 block text-sm leading-6 text-body">{outcome.body}</span>
              </span>
            </li>
          ))}
        </ol>
      </article>
    </div>
  );
}
