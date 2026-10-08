import Link from "next/link";
import { TiltSurface } from "@/components/motion/tilt-surface";
import { categoryLabels, stageLabels, type Project } from "@/types/project";

export function ProjectCard({
  project,
  featured = false,
  revealDelay,
}: {
  project: Project;
  featured?: boolean;
  revealDelay?: number;
}) {
  return (
    <TiltSurface
      className={featured ? "rounded-2xl md:col-span-2" : "rounded-2xl"}
      frameClassName="border-2 border-[#8a8a8a] bg-surface shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-cobalt hover:shadow-[0_24px_50px_-28px_rgba(27,67,50,0.45)]"
      revealDelay={revealDelay}
    >
    <article className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-surface p-5">
      <Link
        href={`/case-study/${project.slug}`}
        aria-label={`Przeczytaj historię: ${project.title}`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
      />
      <Cover project={project} />
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-xs font-medium tracking-[0.04em] text-muted uppercase">
          {project.eyebrow ?? categoryLabels[project.category]} · {stageLabels[project.stage]}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-heading">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">
          {project.client} · {project.year}
        </p>
        <p className="mt-3 text-sm leading-6 text-body">{project.summary}</p>
        {project.benefits?.length ? (
          <ul className="mt-4 space-y-2 border-t border-line pt-4">
            {project.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-2.5 text-sm font-medium leading-5 text-heading">
                <span aria-hidden="true" className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-cobalt" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 border-t border-line pt-4 text-sm font-medium text-heading">{project.highlightMetric}</p>
        )}
        <p className="mt-3 text-xs leading-5 text-muted">{project.technologies.join(" · ")}</p>
        <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm font-medium">
          <span className="text-cobalt">Przeczytaj historię</span>
          {project.siteUrl ? (
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 text-heading underline decoration-cobalt underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
            >
              Otwórz stronę
            </a>
          ) : null}
        </div>
      </div>
    </article>
    </TiltSurface>
  );
}

function Cover({ project }: { project: Project }) {
  return (
    <div className="relative -mx-2.5 -mt-2.5 aspect-video overflow-hidden rounded-xl bg-white shadow-[0_16px_32px_-20px_rgba(10,10,10,0.65)] ring-1 ring-black/20">
      {project.cover ? (
        <img
          src={project.cover}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
        />
      ) : (
        <div className="absolute inset-0 bg-ink">
          <div aria-hidden="true" className="absolute inset-x-5 top-1/3 h-px bg-white/25" />
          <div aria-hidden="true" className="absolute bottom-8 left-5 right-12 h-9 rounded-md border border-white/20" />
        </div>
      )}
    </div>
  );
}
