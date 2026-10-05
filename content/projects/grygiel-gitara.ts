import type { Project } from "@/types/project";

export const grygielGitara: Project = {
  slug: "grygiel-gitara",
  title: "Grygiel Gitara",
  client: "Pracownia nauki gry",
  category: "services",
  stage: "live",
  year: "2026",
  featured: true,
  cover: "/covers/grygiel-gitara.png",
  siteUrl: "https://grygielgitara.pl",
  highlightMetric: "3× więcej rezerwacji online",
  summary:
    "Lekcje gitary: widać wolne terminy, a po opłaceniu pakietu uczeń dostaje e-book i nagrania.",
  challenge:
    "Terminy schodziły z Instagrama, a materiały leżały w kilku folderach. Uczeń nie widział, która godzina jest wolna, dopóki nie napisał.",
  solution:
    "Kalendarz blokuje godzinę w chwili zapisu, żeby dwie osoby nie wzięły tego samego terminu. Po płatności uczeń dostaje e-book i playlistę lekcji.",
  technologies: ["Next.js", "Supabase", "Rezerwacje", "E-mail"],
  metrics: [
    { label: "Rezerwacje online", value: "3×", detail: "Wobec zapisów z wiadomości" },
    { label: "Podwójne terminy", value: "0", detail: "Godzina blokuje się przy zapisie" },
    { label: "Strona pakietów", value: "lekka", detail: "Da się ją spokojnie przeczytać" },
    { label: "E-book", value: "sam", detail: "Mail wychodzi po płatności" },
  ],
  architecture: {
    pattern: "Termin się blokuje, a materiał otwiera się po płatności.",
    stack: ["Next.js", "Supabase", "E-mail", "Zapis na serwerze"],
    databaseSchema: ["prowadzący", "terminy", "rezerwacje", "materiały", "dostępy"],
    flow: ["Uczeń", "Kalendarz", "Płatność", "Materiały"],
  },
  beforeAfter: {
    beforeLabel: "Zapisy w wiadomościach",
    afterLabel: "Kalendarz lekcji",
    beforeCaption: "Wolny termin wychodził dopiero po wymianie wiadomości.",
    afterCaption: "Uczeń widzi godzinę, rezerwuje i dostaje materiał.",
    beforePoints: ["Wiadomości jako kalendarz", "Pliki w folderze", "Ręczny e-book"],
    afterPoints: ["Wolne godziny", "Nagrania przy kursie", "Mail po płatności"],
  },
};
