import type { Project } from "@/types/project";

export const theMedievals: Project = {
  slug: "the-medievals",
  title: "The Medievals",
  client: "Zespół muzyki dawnej",
  category: "culture-ngo",
  stage: "live",
  year: "2026",
  featured: true,
  cover: "/covers/the-medievals.png",
  siteUrl: "https://www.themedievals.pl",
  highlightMetric: "Rider bez maila do menedżera",
  summary:
    "Witryna koncertowa: repertuar, player nagrań i rider techniczny, który organizator pobiera bez pisania do zespołu.",
  challenge:
    "Organizator dostawał rider w załączniku po dwóch dniach korespondencji. Nagrania były rozsypane między YouTube a dyskiem.",
  solution:
    "Koncerty i nagrania są w jednym miejscu. Organizator pobiera rider przy wydarzeniu, a player pokazuje tylko to, co zespół już opublikował.",
  technologies: ["Next.js", "Supabase", "Nagrania", "TypeScript"],
  metrics: [
    { label: "Czas do ridera", value: "od razu", detail: "Pobranie ze strony koncertu" },
    { label: "Strona koncertu", value: "lekka", detail: "Otwiera się bez czekania" },
    { label: "Odtwarzacz", value: "na miejscu", detail: "Nie przesuwa reszty strony" },
    { label: "Źródła nagrań", value: "1", detail: "Koniec z rozjazdem linków" },
  ],
  architecture: {
    pattern: "Koncert, nagranie i rider są przy tym samym wydarzeniu.",
    stack: ["Next.js", "Supabase", "Pliki ridera"],
    databaseSchema: ["koncerty", "nagrania", "ridery", "miejsca"],
    flow: ["Organizator", "Strona koncertu", "Rider", "Nagrania"],
  },
  beforeAfter: {
    beforeLabel: "Mail i dysk",
    afterLabel: "Strona zespołu",
    beforeCaption: "Rider w załączniku, nagrania w kilku miejscach.",
    afterCaption: "Event, player i rider na jednym adresie.",
    beforePoints: ["Rider mailem", "Linki do nagrań", "PDF bez daty"],
    afterPoints: ["Rider przy koncercie", "Odtwarzacz na stronie", "Plik z wersją"],
  },
};
