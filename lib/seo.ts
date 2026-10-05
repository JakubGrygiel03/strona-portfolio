import { siteConfig } from "@/lib/site";

type JsonLdNode = Record<string, unknown>;

export function siteGraph(): JsonLdNode[] {
  return [
    {
      "@type": "Person",
      name: siteConfig.person,
      jobTitle: siteConfig.role,
      worksFor: { "@type": "Organization", name: siteConfig.name },
      email: siteConfig.email,
      url: siteConfig.url,
      image: `${siteConfig.url}/jakub.jpg`,
      sameAs: [siteConfig.github, siteConfig.linkedin],
    },
    {
      "@type": "ProfessionalService",
      name: `${siteConfig.name} — ${siteConfig.role}`,
      description: siteConfig.description,
      url: siteConfig.url,
      email: siteConfig.email,
      areaServed: "PL",
      serviceType: "Strony i aplikacje dla firm",
    },
  ];
}

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": siteGraph(),
  };
}

export function caseStudyJsonLd(project: { title: string; summary: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...siteGraph(),
      {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        url: `${siteConfig.url}/case-study/${project.slug}`,
        creator: { "@type": "Organization", name: siteConfig.name },
      },
    ],
  };
}
