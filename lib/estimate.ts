import type { EstimateInput, EstimateResult, InquiryModule, ProjectType } from "@/types/inquiry";

const BASE: Record<
  ProjectType,
  { weeks: [number, number]; cost: [number, number]; label: string; stack: string[] }
> = {
  landing: {
    weeks: [2, 3],
    cost: [6000, 12000],
    label: "Strona ofertowa",
    stack: ["Next.js", "Tailwind CSS", "Resend"],
  },
  ecommerce: {
    weeks: [5, 8],
    cost: [18000, 42000],
    label: "Sklep",
    stack: ["Next.js", "Supabase", "Przelewy24"],
  },
  "web-app": {
    weeks: [6, 12],
    cost: [24000, 70000],
    label: "Aplikacja",
    stack: ["Next.js", "Supabase", "Zapis na serwerze"],
  },
  service: {
    weeks: [3, 6],
    cost: [10000, 28000],
    label: "Strona usługowa",
    stack: ["Next.js", "Supabase", "Rezerwacje"],
  },
};

const MODULES: Record<InquiryModule, { weeks: number; cost: number; label: string }> = {
  payments: { weeks: 1, cost: 4000, label: "Płatności" },
  cms: { weeks: 1, cost: 3500, label: "Edycja treści" },
  booking: { weeks: 1.5, cost: 5000, label: "System rezerwacji" },
  blog: { weeks: 0.5, cost: 2000, label: "Blog" },
  mailing: { weeks: 0.5, cost: 1800, label: "Wiadomości e-mail" },
};

const SCOPE_FACTOR = { 1: 0.85, 2: 1, 3: 1.25 } as const;

export function buildEstimate(input: EstimateInput): EstimateResult {
  const base = BASE[input.projectType];
  const moduleWeeks = input.modules.reduce((sum, id) => sum + MODULES[id].weeks, 0);
  const moduleCost = input.modules.reduce((sum, id) => sum + MODULES[id].cost, 0);
  const factor = SCOPE_FACTOR[input.scope];
  const weeksMin = Math.max(1, Math.round((base.weeks[0] + moduleWeeks * 0.6) * factor));
  const weeksMax = Math.max(weeksMin, Math.round((base.weeks[1] + moduleWeeks) * factor));

  return {
    weeksMin,
    weeksMax,
    costMin: Math.round((base.cost[0] + moduleCost * 0.7) * factor),
    costMax: Math.round((base.cost[1] + moduleCost) * factor),
    label: base.label,
    stack: [...base.stack, ...input.modules.map((id) => MODULES[id].label)],
  };
}
