import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { ProjectViewSwitcher } from "@/components/case-study/project-view-switcher";
import { RelatedProjects } from "@/components/case-study/related-projects";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllProjects, getProjectBySlug } from "@/content/projects";
import { caseStudyJsonLd } from "@/lib/seo";

type CaseStudyProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Nie znaleziono projektu" };

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/case-study/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: `/case-study/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-6xl px-6 py-16">
      <JsonLd data={caseStudyJsonLd(project)} />
      <CaseStudyHeader project={project} />
      <ProjectViewSwitcher project={project} />
      <RelatedProjects currentSlug={project.slug} />
    </article>
  );
}
