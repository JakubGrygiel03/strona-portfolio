"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { ArchitectureFlow } from "@/components/case-study/architecture-flow";
import { BeforeAfterSlider } from "@/components/case-study/before-after-slider";
import { MetricCounter } from "@/components/case-study/metric-counter";
import { reveal } from "@/lib/reveal";
import type { Project } from "@/types/project";

const triggers = [
  { value: "ui", label: "Wcześniej i teraz" },
  { value: "architecture", label: "Jak to działa" },
  { value: "impact", label: "Co z tego wynikło" },
];

export function ProjectViewSwitcher({ project }: { project: Project }) {
  return (
    <Tabs.Root defaultValue="ui" className="mt-10" {...reveal()}>
      <Tabs.List className="flex flex-wrap gap-2" aria-label="Perspektywa projektu">
        {triggers.map((trigger) => (
          <Tabs.Trigger
            key={trigger.value}
            value={trigger.value}
            className="cursor-pointer rounded-xl border border-line px-3 py-2 text-sm text-body transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt data-[state=active]:border-line-strong data-[state=active]:bg-surface-hover data-[state=active]:text-heading"
          >
            {trigger.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.Content value="ui" className="mt-6 outline-none">
        {project.beforeAfter ? (
          <BeforeAfterSlider data={project.beforeAfter} />
        ) : (
          <p className="text-sm text-body">Tu nie było starej strony do porównania. Projekt powstał od zera.</p>
        )}
      </Tabs.Content>
      <Tabs.Content value="architecture" className="mt-6 outline-none">
        <ArchitectureFlow
          flow={project.architecture.flow}
          pattern={project.architecture.pattern}
          schema={project.architecture.databaseSchema}
          stack={project.architecture.stack}
        />
      </Tabs.Content>
      <Tabs.Content value="impact" className="mt-6 outline-none">
        <MetricCounter metrics={project.metrics} />
      </Tabs.Content>
    </Tabs.Root>
  );
}
