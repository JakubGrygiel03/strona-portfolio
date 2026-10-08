import { addOnById, addOnPrice, expressRate, packageById } from "@/lib/estimator-data";
import type { EstimateInput, EstimateResult } from "@/types/inquiry";

function roundTo50(value: number) {
  return Math.round(value / 50) * 50;
}

export function buildEstimate(input: EstimateInput): EstimateResult {
  const base = packageById(input.projectType);
  const allowed = new Set(base.allowedAddOnIds);
  const selected = input.modules.filter((id) => allowed.has(id)).map((id) => addOnById(id));
  const extraCost = selected.reduce((sum, item) => sum + addOnPrice(item, base.id), 0);
  const extraDays = selected.reduce((sum, item) => sum + item.days, 0);
  let costMin = base.priceMin + extraCost;
  let costMax = base.priceMax + extraCost;
  let daysMin = base.daysMin + extraDays;
  let daysMax = base.daysMax + extraDays;
  const rush = input.timeline === "asap";
  let rushFeeMin = 0;
  let rushFeeMax = 0;

  if (rush) {
    const rushedMin = roundTo50(costMin * (1 + expressRate));
    const rushedMax = roundTo50(costMax * (1 + expressRate));
    rushFeeMin = rushedMin - costMin;
    rushFeeMax = rushedMax - costMax;
    costMin = rushedMin;
    costMax = rushedMax;
    daysMin = Math.max(4, Math.round(daysMin * 0.6));
    daysMax = Math.max(daysMin + 1, Math.round(daysMax * 0.65));
  }

  return {
    daysMin,
    daysMax,
    costMin,
    costMax,
    label: base.name,
    included: base.included,
    stack: selected.map((item) => item.name),
    rush,
    rushFeeMin,
    rushFeeMax,
  };
}
