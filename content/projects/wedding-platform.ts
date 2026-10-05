import type { Project } from "@/types/project";

export const weddingPlatform: Project = {
  slug: "wedding-platform",
  title: "Adrianna i Jan",
  client: "Strona wesela",
  category: "web-app",
  stage: "live",
  year: "2026",
  featured: true,
  cover: "/covers/adrianna-i-jan.png",
  siteUrl: "https://adrianna-i-jan.pl",
  highlightMetric: "96% potwierdzeń bez arkusza",
  summary:
    "Strona wesela: data, kościół, sala i potwierdzenie przyjazdu pod jednym adresem.",
  challenge:
    "Potwierdzenia przyjeżdżały mailem, SMS-em i w tabeli. Para nie widziała, kto wybrał danie, a plan dnia żył w osobnym PDF-ie.",
  solution:
    "Każdy gość dostaje własny link i widzi tylko swoje dane. Zapisuje przyjazd i wybór menu, a para ma plan dnia obok listy.",
  technologies: ["Next.js", "Supabase", "Potwierdzenia", "Walidacja"],
  metrics: [
    { label: "Potwierdzenia online", value: "96%", detail: "Zamiast ręcznego arkusza" },
    { label: "Czas potwierdzenia", value: "40 s", detail: "Od linku do zapisu" },
    { label: "Strona gościa", value: "lekka", detail: "Da się otworzyć na telefonie" },
    { label: "Źródła danych", value: "1", detail: "Koniec z rozjazdem tabel" },
  ],
  architecture: {
    pattern: "Każdy gość ma własny link i widzi tylko siebie.",
    stack: ["Next.js", "Supabase", "Zapis na serwerze", "Walidacja danych"],
    databaseSchema: ["wydarzenie", "goście", "potwierdzenia", "menu", "plan dnia"],
    flow: ["Gość", "Własny link", "Zapis", "Lista pary"],
  },
  beforeAfter: {
    beforeLabel: "Arkusz i PDF",
    afterLabel: "Jedna strona",
    beforeCaption: "Potwierdzenia w kilku miejscach, plan dnia osobno.",
    afterCaption: "Jeden link, jeden zapis, plan dnia obok potwierdzenia.",
    beforePoints: ["Tabela gości", "PDF z planem", "Ręczne liczenie menu"],
    afterPoints: ["Własny link", "Plan na stronie", "Menu przy potwierdzeniu"],
  },
};
