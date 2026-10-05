import type { ProjectMetric } from "@/types/project";

export function MetricCounter({ metrics }: { metrics: ProjectMetric[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {metrics.map((metric) => (
        <article key={metric.label} className="rounded-2xl border border-line bg-surface p-5">
          <p className="text-sm text-muted">{metric.label}</p>
          <p className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-heading">{metric.value}</p>
          <p className="mt-2 text-sm text-body">{metric.detail}</p>
        </article>
      ))}
    </div>
  );
}
