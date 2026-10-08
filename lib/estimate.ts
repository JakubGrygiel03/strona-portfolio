import { addOnById, addOnPrice, packageById } from "@/lib/estimator-data";
import type { EstimateInput, EstimateResult } from "@/types/inquiry";

export function buildEstimate(input: EstimateInput): EstimateResult {
  const base = packageById(input.projectType);
  const allowed = new Set(base.allowedAddOnIds);
  const selected = input.modules.filter((id) => allowed.has(id)).map((id) => addOnById(id));
  const extraCost = selected.reduce((sum, item) => sum + addOnPrice(item, base.id), 0);
  const extraDays = selected.reduce((sum, item) => sum + item.days, 0);

  return {
    daysMin: base.daysMin + extraDays,
    daysMax: base.daysMax + extraDays,
    costMin: base.priceMin + extraCost,
    costMax: base.priceMax + extraCost,
    label: base.name,
    included: base.included,
    stack: selected.map((item) => item.name),
  };
}
