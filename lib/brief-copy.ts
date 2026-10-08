import { addOnById, addOnPrice, addOnsFor, packages } from "@/lib/estimator-data";
import type { BudgetRange, InquiryModule, ProjectType, Timeline } from "@/types/inquiry";

export const projectTypeOptions: { id: ProjectType; label: string; detail: string }[] = packages.map((item) => ({
  id: item.id,
  label: item.name,
  detail: item.summary,
}));

export function moduleOptionsFor(packageId: ProjectType) {
  return addOnsFor(packageId).map((item) => ({
    id: item.id,
    label: item.name,
    price: addOnPrice(item, packageId),
    days: item.days,
  }));
}

export function moduleLabel(id: InquiryModule) {
  return addOnById(id).name;
}

export const budgetOptions: { id: BudgetRange; label: string }[] = [
  { id: "do-1500", label: "do 1 500 zł" },
  { id: "1500-3500", label: "1 500 – 3 500 zł" },
  { id: "3500-7000", label: "3 500 – 7 000 zł" },
  { id: "7000-plus", label: "powyżej 7 000 zł" },
];

export const timelineOptions: { id: Timeline; label: string; detail: string }[] = [
  { id: "asap", label: "Jak najszybciej", detail: "Ekspres · dopłata 25%" },
  { id: "1-2m", label: "1–2 miesiące", detail: "Termin standardowy, bez dopłaty" },
  { id: "quarter", label: "Ten kwartał", detail: "Termin standardowy, bez dopłaty" },
  { id: "flexible", label: "Elastycznie", detail: "Termin standardowy, bez dopłaty" },
];

export const budgetLabels = Object.fromEntries(budgetOptions.map((item) => [item.id, item.label])) as Record<
  BudgetRange,
  string
>;

export const timelineLabels = Object.fromEntries(timelineOptions.map((item) => [item.id, item.label])) as Record<
  Timeline,
  string
>;
