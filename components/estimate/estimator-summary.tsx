import { buildEstimate } from "@/lib/estimate";
import { formatPln } from "@/lib/utils";
import type { BriefSelection } from "@/components/estimate/estimate-provider";

export function EstimatorSummary({ brief }: { brief: BriefSelection }) {
  const estimate = buildEstimate(brief);

  return (
    <aside className="h-fit rounded-2xl border border-line bg-surface p-6 lg:sticky lg:top-24" aria-live="polite">
      <p className="text-sm text-success">Orientacyjnie</p>
      <p className="mt-4 text-sm text-muted">{estimate.label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-heading">
        {estimate.weeksMin}–{estimate.weeksMax} tyg.
      </p>
      <p className="mt-2 text-sm text-body">
        {formatPln(estimate.costMin)} – {formatPln(estimate.costMax)}
      </p>
      <h3 className="mt-6 text-sm font-medium text-heading">Co wchodzi w ten zakres</h3>
      <ul className="mt-3 space-y-2 text-sm text-body">
        {estimate.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-6 text-xs leading-5 text-muted">
        Widełki są orientacyjne. Końcowa wycena powstaje po briefie, nie z suwaka.
      </p>
    </aside>
  );
}
