import type { BudgetRange, InquiryModule, ProjectType, Timeline } from "@/types/inquiry";

export const projectTypeOptions: { id: ProjectType; label: string; detail: string }[] = [
  { id: "landing", label: "Strona ofertowa", detail: "Jedna oferta, jeden cel" },
  { id: "ecommerce", label: "Sklep", detail: "Katalog, koszyk, płatność" },
  { id: "web-app", label: "Aplikacja", detail: "Konta, dane, codzienna praca" },
  { id: "service", label: "Usługi i rezerwacje", detail: "Oferta i wolne terminy" },
];

export const moduleOptions: { id: InquiryModule; label: string }[] = [
  { id: "payments", label: "Płatności" },
  { id: "cms", label: "Edycja treści" },
  { id: "booking", label: "System rezerwacji" },
  { id: "blog", label: "Blog" },
  { id: "mailing", label: "Wiadomości e-mail" },
];

export const budgetOptions: { id: BudgetRange; label: string }[] = [
  { id: "do-10", label: "do 10 tys. zł" },
  { id: "10-25", label: "10–25 tys. zł" },
  { id: "25-50", label: "25–50 tys. zł" },
  { id: "50-plus", label: "powyżej 50 tys. zł" },
];

export const timelineOptions: { id: Timeline; label: string }[] = [
  { id: "asap", label: "Jak najszybciej" },
  { id: "1-2m", label: "1–2 miesiące" },
  { id: "quarter", label: "Ten kwartał" },
  { id: "flexible", label: "Elastycznie" },
];

export const scopeLabels: Record<1 | 2 | 3, string> = {
  1: "Najpierw to, co najważniejsze",
  2: "Pełna ścieżka klienta",
  3: "Z dodatkami i panelem",
};

export const budgetLabels = Object.fromEntries(budgetOptions.map((item) => [item.id, item.label])) as Record<
  BudgetRange,
  string
>;

export const timelineLabels = Object.fromEntries(
  timelineOptions.map((item) => [item.id, item.label]),
) as Record<Timeline, string>;
