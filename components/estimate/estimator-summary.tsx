"use client";

import type { BriefSelection } from "@/components/estimate/estimate-provider";
import { buildEstimate } from "@/lib/estimate";
import { daysLabel, formatPln } from "@/lib/utils";

export function EstimatorSummary({ brief }: { brief: BriefSelection }) {
  const estimate = buildEstimate(brief);
  const figureKey = `${estimate.daysMin}-${estimate.daysMax}-${estimate.costMin}-${estimate.costMax}`;
  const days = daysLabel(estimate.daysMin, estimate.daysMax);
  const price = `${formatPln(estimate.costMin)} – ${formatPln(estimate.costMax)}`;

  return (
    <aside className="h-fit rounded-2xl border border-line bg-surface p-6 lg:sticky lg:top-24">
      <p className="text-sm text-success">Orientacyjnie</p>
      <p className="mt-4 text-sm text-muted">{estimate.label}</p>
      <div key={figureKey} className="swap-in mt-2" aria-live="polite">
        <p className="text-3xl font-semibold tracking-[-0.03em] text-heading">{days}</p>
        <p className="mt-2 text-sm text-body">{price}</p>
        {estimate.rush ? (
          <p className="mt-2 text-sm text-heading">
            W tym dopłata za ekspres: {formatPln(estimate.rushFeeMin)} – {formatPln(estimate.rushFeeMax)}
          </p>
        ) : null}
      </div>
      <h3 className="mt-6 text-sm font-medium text-heading">W cenie pakietu</h3>
      <ul key={estimate.included.join("|")} className="swap-in mt-3 flex flex-wrap gap-2">
        {estimate.included.map((item) => (
          <li key={item} className="rounded-full bg-[#e8f2ec] px-2.5 py-1 text-xs font-medium text-cobalt">
            ✓ {item}
          </li>
        ))}
      </ul>
      {estimate.stack.length > 0 ? (
        <div key={estimate.stack.join("|")} className="swap-in">
          <h3 className="mt-6 text-sm font-medium text-heading">Wybrane dodatki</h3>
          <ul className="mt-3 space-y-2 text-sm text-body">
            {estimate.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <p className="mt-6 text-xs leading-5 text-muted">
        To suma pakietu, dodatków i — przy terminie „jak najszybciej” — dopłaty za ekspres. Pozostałe terminy są bez
        dopłaty. Dokładną kwotę podaję po rozmowie. Maile z potwierdzeniami są w cenie, bez dopłaty za SMS i bez
        fakturowania po stronie strony.
      </p>
    </aside>
  );
}
