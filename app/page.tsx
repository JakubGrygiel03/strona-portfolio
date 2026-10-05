import { AboutSection } from "@/components/sections/about-section";
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
import { getAllProjects } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <div className="hero-stage relative overflow-hidden bg-ink text-on-ink">
        <div aria-hidden="true" className="fine-grid pointer-events-none absolute inset-0" />
        <Hero />
        <MetricsBar />
      </div>
      <OfferBoard />
      <ProjectGrid projects={getAllProjects()} />
      <AboutSection />
      <ProcessFlow />
      <FitSection />
      <ScopeSection />
      <EstimatorWidget />
      <FaqList />
      <TechMatrix />
      <ContactSection />
    </>
  );
}
