import type { Project } from "@/types/project";

export const salonFryzjerski: Project = {
  slug: "salon-fryzjerski",
  title: "Salon fryzjerski",
  client: "Układ dla salonu",
  category: "services",
  stage: "blueprint",
  year: "2026",
  featured: false,
  highlightMetric: "Cel: wizyta bez telefonu",
  summary:
    "Gotowy układ strony: wolne terminy, cennik i zdjęcia przed i po.",
  challenge:
    "Salon traci godziny na telefonach o wolny fotel. Zdjęcia żyją na Instagramie, a cennik w relacji, która znika.",
  solution:
    "Na stronie widać wolne godziny, cennik jako tekst i galerię w tym samym kadrze, żeby porównanie było uczciwe.",
  technologies: ["Next.js", "Supabase", "Rezerwacje", "Porównanie zdjęć"],
  metrics: [
    { label: "Potwierdzenie wizyty", value: "do minuty", detail: "Cel, kiedy kalendarz już działa" },
    { label: "Telefony o termin", value: "mniej", detail: "Cel po pokazaniu wolnych foteli" },
    { label: "Strona oferty", value: "lekka", detail: "Cennik da się przeczytać od razu" },
    { label: "Galeria", value: "spokojna", detail: "Porównanie nie rozjeżdża kadru" },
  ],
  architecture: {
    pattern: "Wolny fotel, cennik i zdjęcia są na jednej stronie.",
    stack: ["Next.js", "Supabase", "Zapis wizyty", "E-mail"],
    databaseSchema: ["styliści", "usługi", "terminy", "wizyty", "metamorfozy"],
    flow: ["Klient", "Cennik", "Wolny fotel", "Potwierdzenie"],
  },
  beforeAfter: {
    beforeLabel: "Telefon i relacja",
    afterLabel: "Rezerwacja na stronie",
    beforeCaption: "Wolny termin wychodzi dopiero w rozmowie.",
    afterCaption: "Cennik, metamorfoza i wolny fotel na jednej stronie.",
    beforePoints: ["Cennik w relacji", "Galeria na Instagramie", "Termin przez telefon"],
    afterPoints: ["Cennik na stronie", "Porównanie zdjęć", "Termin z potwierdzeniem"],
  },
};
