import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { CarePlans } from "@/components/sections/care-plans";
import { ContactSection } from "@/components/sections/contact-section";
import { EstimatorWidget } from "@/components/sections/estimator-widget";
import { FaqList } from "@/components/sections/faq-list";
import { FitSection } from "@/components/sections/fit-section";
import { Hero } from "@/components/sections/hero";
import { MetricsBar } from "@/components/sections/metrics-bar";
import { OfferBoard } from "@/components/sections/offer-board";
import { ProcessFlow } from "@/components/sections/process-flow";
import { ProjectGrid } from "@/components/sections/project-grid";
import { ScopeSection } from "@/components/sections/scope-section";
import { TechMatrix } from "@/components/sections/tech-matrix";
import { ValueCompare } from "@/components/sections/value-compare";
import { WhySection } from "@/components/sections/why-section";
import { getAllProjects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.headline,
    description:
      "Tworzę szybkie, przejrzyste strony dla firmy, fundacji, sklepu i rzemiosła. Rozmawiasz bezpośrednio z programistą.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.headline,
    description:
      "Tworzę szybkie, przejrzyste strony dla firmy, fundacji, sklepu i rzemiosła. Rozmawiasz bezpośrednio z programistą.",
  },
};

export default function HomePage() {
  return (
    <>
      <div className="hero-stage relative overflow-hidden bg-ink text-on-ink">
        <div aria-hidden="true" className="fine-grid pointer-events-none absolute inset-0" />
        <Hero />
        <MetricsBar />
      </div>
      <ValueCompare />
      <WhySection />
      <OfferBoard />
      <ProjectGrid projects={getAllProjects()} />
      <AboutSection />
      <ProcessFlow />
      <FitSection />
      <ScopeSection />
      <CarePlans />
      <EstimatorWidget />
      <FaqList />
      <TechMatrix />
      <ContactSection />
    </>
  );
}
