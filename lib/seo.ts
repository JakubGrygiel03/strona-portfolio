import { packages } from "@/lib/estimator-data";
import { siteConfig } from "@/lib/site";

type JsonLdNode = Record<string, unknown>;

function postalAddress(): JsonLdNode {
  return {
    "@type": "PostalAddress",
    addressLocality: "Gdańsk",
    addressRegion: "Pomorskie",
    addressCountry: "PL",
  };
}

export function siteGraph(): JsonLdNode[] {
  return [
    {
      "@type": "Person",
      name: siteConfig.person,
      jobTitle: "Twórca stron internetowych",
      worksFor: { "@type": "Organization", name: siteConfig.name },
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      url: siteConfig.url,
      image: `${siteConfig.url}/jakub.webp`,
      address: postalAddress(),
      sameAs: [siteConfig.github, siteConfig.linkedin].filter(Boolean),
    },
    {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      image: `${siteConfig.url}/jakub.webp`,
      priceRange: "850–6500 PLN",
      address: postalAddress(),
      areaServed: { "@type": "Country", name: "Polska" },
      founder: { "@type": "Person", name: siteConfig.person },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Wdrożenia stron",
        itemListElement: packages.map((item) => ({
          "@type": "Offer",
          name: item.name,
          description: item.included.join(", "),
          priceCurrency: "PLN",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: item.priceMin,
            maxPrice: item.priceMax,
            priceCurrency: "PLN",
          },
        })),
      },
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
