import type { Project } from "@/types/project";

export const trzyWiatry: Project = {
  slug: "trzy-wiatry",
  title: "Trzy Wiatry",
  client: "Manufaktura ceramiki i drewna",
  category: "e-commerce",
  stage: "live",
  year: "2025",
  featured: true,
  cover: "/covers/trzy-wiatry.png",
  siteUrl: "https://trzywiatry.pl",
  highlightMetric: "+38% osób dokończyło koszyk",
  summary:
    "Sklep rzemieślniczy, w którym da się porównać pojemność naczyń i zapłacić bez wychodzenia ze strony.",
  challenge:
    "Poprzedni katalog gubił warianty naczyń i desek. Klient nie umiał porównać pojemności, a płatność kończyła się poza sklepem i zrywała koszyk.",
  solution:
    "Katalog pokazuje warianty przy produkcie. Zamówienie zostaje w sklepie aż do płatności Przelewy24, więc koszyk nie znika w połowie drogi.",
  technologies: ["Next.js", "Supabase", "Przelewy24", "TypeScript"],
  metrics: [
    { label: "Otwarcie katalogu", value: "0,7 s", detail: "Wcześniej strona czekała kilka sekund" },
    { label: "Dokończone koszyki", value: "+38%", detail: "90 dni po zmianie" },
    { label: "Układ strony", value: "spokojny", detail: "Karty i zdjęcia nie podskakują" },
    { label: "Droga do płatności", value: "krótsza", detail: "Mniej kroków, zanim da się zapłacić" },
  ],
  architecture: {
    pattern: "Zamówienie zostaje w sklepie aż do płatności.",
    stack: ["Next.js", "Supabase", "Przelewy24", "Walidacja danych"],
    databaseSchema: ["produkty", "warianty", "zamówienia", "płatności", "stan magazynu"],
    flow: ["Klient", "Katalog", "Zamówienie", "Płatność"],
  },
  beforeAfter: {
    beforeLabel: "Stary katalog",
    afterLabel: "Nowa strona",
    beforeCaption: "Wolna lista, filtr poza ekranem, płatność urywa koszyk.",
    afterCaption: "Filtr pojemności przy karcie i płatność w tym samym miejscu.",
    beforePoints: ["Wolne otwieranie", "Brak wariantów", "Płatność poza sklepem"],
    afterPoints: ["Szybki katalog", "Filtr pojemności", "Płatność w sklepie"],
  },
};
