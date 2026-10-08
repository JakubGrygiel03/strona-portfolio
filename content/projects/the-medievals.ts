import type { Project } from "@/types/project";

export const theMedievals: Project = {
  slug: "the-medievals",
  title: "The Medievals — Zespół muzyki dawnej",
  client: "Zespół muzyki dawnej",
  eyebrow: "Kultura i zespół",
  category: "culture-ngo",
  stage: "live",
  year: "2026",
  featured: true,
  cover: "/covers/the-medievals.webp",
  siteUrl: "https://www.themedievals.pl",
  highlightMetric: "Rider do pobrania od razu",
  benefits: ["Rider i press kit od razu", "Cztery języki", "Zgłoszenia nie giną"],
  summary:
    "Strona dla festiwali, miast i zamków. Organizator odsłuchuje nagrania, pobiera rider w PDF i wysyła zapytanie o koncert. Zamiast WordPressa i proszenia o pliki mailem.",
  headline: "Strona, z której organizator bierze materiały i pisze o koncercie, a nie tylko ogląda zdjęcia.",
  lead:
    "Dom kultury, zamek albo festiwal dostaje nagrania, rider i opis w jednym miejscu. Nie trzeba wymieniać kilku maili, żeby w ogóle zacząć rozmowę. Po wykonaniu strony zostaje domena.",
  challenge:
    "Poprzednia strona na WordPressie utrudniała domykanie występów. Pliki techniczne, języki i zapytania były osobnym problemem.",
  challengePoints: [
    "Organizator pisał maila o rider, zdjęcia do plakatu i opis.",
    "Nie było wersji językowych, więc festiwal z zagranicy miał trudniej.",
    "Zapytania z formularza potrafiły utknąć albo wpaść w spam.",
  ],
  solution:
    "Rider i zdjęcia są do pobrania od razu, formularz wysyła maila, a strona jest po polsku, angielsku, hiszpańsku i włosku. Serwer nie ma abonamentu.",
  outcomes: [
    {
      title: "Materiały bez proszenia managera",
      body: "Rider techniczny, notka prasowa i zdjęcia do druku są na stronie. Organizator pobiera je sam.",
    },
    {
      title: "Nagrania obok opisu",
      body: "Słychać instrumenty i widać zespół. Nie trzeba najpierw prosić o link do muzyki.",
    },
    {
      title: "Zapytanie, które dochodzi",
      body: "Zgłoszenie zostaje zapisane i idzie mailem. Nie ginie w spamie formularza ze starej strony.",
    },
    {
      title: "Cztery języki",
      body: "Polski, angielski, hiszpański i włoski. Festiwal z zagranicy czyta ofertę bez osobnego tłumaczenia w mailu.",
    },
    {
      title: "Zostaje domena",
      body: "Strona działa bez comiesięcznego rachunku za hosting i bez opieki nad wtyczkami. Stałym kosztem jest domena.",
    },
  ],
  technologies: ["Next.js", "Supabase", "Resend", "Cztery języki", "Vercel"],
  metrics: [
    { label: "Koszt stały", value: "domena", detail: "Hostingu nie ma na rachunku co miesiąc. Zostaje odnowienie adresu." },
    { label: "Pliki", value: "od razu", detail: "Rider, notka i zdjęcia do druku są do pobrania bez maila do zespołu." },
    { label: "Języki", value: "4", detail: "Polski, angielski, hiszpański i włoski. Pod festiwale, nie tylko pod kraj." },
    { label: "Zgłoszenie", value: "mail i zapis", detail: "Formularz zostawia kopię i wysyła wiadomość. Nie zostaje tylko w spamie." },
  ],
  architecture: {
    pattern: "Organizator pobiera rider i wysyła zapytanie. Mail wychodzi sam, a serwer nie ma abonamentu.",
    stack: ["Next.js", "Supabase", "Resend", "Cztery języki"],
    databaseSchema: ["zapytania", "statusy", "materiały", "języki"],
    flow: ["Organizator", "Nagranie i PDF", "Formularz", "Mail"],
  },
  beforeAfter: {
    beforeLabel: "WordPress i maile",
    afterLabel: "Materiały i zgłoszenie na stronie",
    beforeCaption: "Żeby w ogóle rozmawiać o koncercie, organizator najpierw prosił o pliki.",
    afterCaption: "Rider, nagranie i formularz są na stronie. Utrzymanie nie dokłada abonamentu poza domeną.",
    beforePoints: [
      "Maile z prośbą o rider i zdjęcia do plakatu",
      "Zapytania mieszały się w wiadomościach",
      "Tylko polski, trudniej o festiwal z zagranicy",
      "Płatny hosting i opieka nad wtyczkami",
    ],
    afterPoints: [
      "Rider, notka i zdjęcia do pobrania od razu",
      "Każde zgłoszenie zostaje zapisane i idzie mailem",
      "Cztery języki pod festiwale w Europie",
      "Szybka strona bez abonamentu za serwer i bez wtyczek",
    ],
  },
};
