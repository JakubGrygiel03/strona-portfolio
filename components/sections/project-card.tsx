import Link from "next/link";
import { TiltSurface } from "@/components/motion/tilt-surface";
import { Badge } from "@/components/ui/badge";
import { categoryLabels, stageLabels, type Project } from "@/types/project";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <TiltSurface className={featured ? "md:col-span-2" : ""}>
    <article
      className={`group h-full rounded-2xl border border-line bg-surface p-5 shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-cobalt/30 hover:shadow-[0_24px_50px_-28px_rgba(27,67,50,0.45)] ${
        featured ? "md:p-8" : ""
      }`}
    >
      <div className={featured ? "md:grid md:grid-cols-[1.2fr_1fr] md:items-center md:gap-8" : ""}>
        <Cover project={project} />
        <div>
          <div className={`mt-4 flex flex-wrap gap-2 ${featured ? "md:mt-0" : ""}`}>
            <Badge>{categoryLabels[project.category]}</Badge>
            <Badge>{stageLabels[project.stage]}</Badge>
          </div>
          <h3 className={`mt-3 font-semibold tracking-[-0.03em] text-heading ${featured ? "text-3xl" : "text-xl"}`}>
            <Link href={`/case-study/${project.slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt">
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-muted">
            {project.client} · {project.year}
          </p>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-body">{project.summary}</p>
          <p className="mt-3 text-sm font-medium text-cobalt">{project.highlightMetric}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
            <Link
              href={`/case-study/${project.slug}`}
              className="text-cobalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
            >
              Przeczytaj historię
            </Link>
            {project.siteUrl ? (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-heading underline decoration-cobalt underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
              >
                Otwórz stronę
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
    </TiltSurface>
  );
}

function Cover({ project }: { project: Project }) {
  return (
    <Link
      href={`/case-study/${project.slug}`}
      aria-label={project.title}
      className="block overflow-hidden rounded-xl border border-line bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
    >
      <div className="relative aspect-[16/10]">
        {project.cover ? (
          <img
            src={project.cover}
            alt=""
            className="absolute inset-0 h-full w-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
        ) : (
          <div className="absolute inset-0 bg-ink">
            <div aria-hidden="true" className="absolute inset-x-5 top-1/3 h-px bg-white/25" />
            <div aria-hidden="true" className="absolute bottom-8 left-5 right-12 h-9 rounded-md border border-white/20" />
          </div>
        )}
      </div>
    </Link>
  );
}
