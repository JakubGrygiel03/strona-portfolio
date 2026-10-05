import { ImageResponse } from "next/og";
import { OgCard } from "@/components/seo/og-card";
import { getProjectBySlug } from "@/content/projects";
import { loadOgFonts } from "@/lib/og-font";

export const alt = "Case study projektu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function CaseStudyOg({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <OgCard
        kicker={project?.highlightMetric ?? "Case study"}
        title={project?.title ?? "Projekt"}
        detail={project?.client ?? "Portfolio"}
      />
    ),
    { ...size, fonts },
  );
}
