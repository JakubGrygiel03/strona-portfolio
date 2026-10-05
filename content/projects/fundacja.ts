import type { Project } from "@/types/project";

export const fundacja: Project = {
  slug: "fundacja",
  title: "Fundacja",
  client: "Układ dla organizacji",
  category: "culture-ngo",
  stage: "blueprint",
  year: "2026",
  featured: false,
  highlightMetric: "Cel: darowizna w 3 krokach",
  summary:
    "Układ strony organizacji: szybka darowizna, cele i sprawozdania, które da się sprawdzić bez proszenia o PDF.",
  challenge:
    "Darowizna kończy się na przelewie tradycyjnym, a sprawozdanie leży w skanie. Darczyńca nie widzi, na co idą środki.",
  solution:
    "Kwota, cel i płatność są obok siebie. Cele i sprawozdania wiszą na stronie z datą, więc nie trzeba prosić o skan.",
  technologies: ["Next.js", "Supabase", "Przelewy24", "Sprawozdania"],
  metrics: [
    { label: "Kroki darowizny", value: "3", detail: "Kwota, cel, płatność" },
    { label: "Sprawozdania", value: "na stronie", detail: "Bez skanu w mailu" },
    { label: "Strona celów", value: "lekka", detail: "Da się ją otworzyć bez czekania" },
    { label: "Układ", value: "spokojny", detail: "Kwoty i raporty nie skaczą" },
  ],
  architecture: {
    pattern: "Darowizna i ostatnie sprawozdanie są na jednym ekranie.",
    stack: ["Next.js", "Supabase", "Przelewy24", "Zapis na serwerze"],
    databaseSchema: ["cele", "darowizny", "sprawozdania", "przeznaczenie"],
    flow: ["Darczyńca", "Cel", "Płatność", "Sprawozdanie"],
  },
  beforeAfter: {
    beforeLabel: "Przelew i skan",
    afterLabel: "Moduł darowizn",
    beforeCaption: "Cel jest na ulotce, raport w załączniku.",
    afterCaption: "Kwota, cel i ostatnie sprawozdanie na jednym ekranie.",
    beforePoints: ["Dane do przelewu", "PDF roczny", "Cele w tekście"],
    afterPoints: ["Trzy kroki płatności", "Raport z datą", "Cel na stronie"],
  },
};
