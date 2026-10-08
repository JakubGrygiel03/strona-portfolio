import type { Project } from "@/types/project";

export const weddingPlatform: Project = {
  slug: "wedding-platform",
  title: "Adrianna i Jan — Strona weselna",
  client: "Wesele, jeden adres dla gości",
  eyebrow: "Wydarzenia",
  category: "web-app",
  stage: "live",
  year: "2026",
  featured: true,
  cover: "/covers/adrianna-i-jan.webp",
  siteUrl: "https://adrianna-i-jan.pl",
  highlightMetric: "Tylko koszt domeny",
  benefits: ["Tylko koszt domeny", "RSVP bez dzwonienia", "Dojazd do sali"],
  summary:
    "Zaproszenie i potwierdzenie przyjazdu pod jednym adresem. Gość z telefonu potwierdza obecność, wybiera dietę i włącza dojazd do kościoła albo sali. Zamiast telefonów i arkusza.",
  headline: "Przygotowania bez wydzwaniania do gości i bez gubienia ustaleń na kartkach.",
  lead:
    "Strona jest zrobiona pod telefon gościa. Jeden adres w wiadomości albo kod na zaproszeniu zbiera potwierdzenia, diety i dojazd. Po zapłacie za wykonanie zostaje domena. Abonamentu za portal ślubny nie ma.",
  challenge:
    "Potwierdzenia od kilkudziesięciu osób zwykle rozjeżdżają się na telefony, SMS-y i kartki. W dniu ślubu i tak ktoś dzwoni z pytaniem o godzinę albo drogę.",
  challengePoints: [
    "Część gości nie odpisuje w terminie, więc dni schodzą na telefonach.",
    "Diety, prośby o nocleg i osoby towarzyszące gubią się w SMS-ach i na kartkach.",
    "W dniu ślubu goście dzwonią o dojazd i dokładne godziny.",
  ],
  solution:
    "Gość potwierdza na stronie, dieta wpada na jedną listę, a dojazd otwiera się z telefonu. Stałym kosztem zostaje domena.",
  outcomes: [
    {
      title: "Potwierdzenie z telefonu",
      body: "Gość zaznacza obecność, dopisuje osobę towarzyszącą, wybiera dietę i nocleg. Zapis ląduje na jednej liście, bez przepisywania SMS-ów.",
    },
    {
      title: "Dojazd bez telefonu do pary",
      body: "Przyciski prowadzą do kościoła i do sali w mapach. Gość nie dzwoni z trasy po adres.",
    },
    {
      title: "Plan dnia na stronie",
      body: "Godziny ślubu, życzeń, obiadu i poprawin są w jednym miejscu, więc nie trzeba ich powtarzać każdej osobie.",
    },
    {
      title: "Zostaje domena",
      body: "Po zapłacie za stronę nie ma abonamentu za portal ślubny. Stałym kosztem jest własny adres, a utrzymanie nie dokłada kolejnej opłaty.",
    },
  ],
  technologies: ["Next.js", "Supabase", "Walidacja", "RSVP", "Mobile First"],
  metrics: [
    { label: "Po wykonaniu", value: "domena", detail: "Jedyny stały koszt. Portale ślubne biorą subskrypcję. Tutaj jej nie ma." },
    { label: "RSVP", value: "na stronie", detail: "Obecność, osoba towarzysząca, dieta i nocleg schodzą na jedną listę." },
    { label: "Dojazd", value: "z mapy", detail: "Kościół i sala otwierają się w nawigacji. Gość nie dzwoni z drogi." },
    { label: "Lista", value: "dla sali", detail: "Diety i noclegi nie leżą na kartkach. Da się je oddać managerowi sali." },
  ],
  architecture: {
    pattern: "Gość potwierdza na stronie. Para ma listę, a stałym kosztem zostaje domena.",
    stack: ["Next.js", "Supabase", "Walidacja danych", "Mapy"],
    databaseSchema: ["wydarzenie", "goście", "diety", "noclegi", "plan dnia"],
    flow: ["Gość", "Obecność i dieta", "Lista", "Dojazd"],
  },
  beforeAfter: {
    beforeLabel: "Excel i telefony",
    afterLabel: "Jeden adres wesela",
    beforeCaption: "Potwierdzenia, diety i dojazd żyły w arkuszu, SMS-ach i w głowie świadków.",
    afterCaption: "Gość załatwia to na stronie. Para płaci za domenę, nie za portal ślubny.",
    beforePoints: [
      "Dni na dopytywaniu, kto naprawdę będzie",
      "Diety i noclegi przepisywane z SMS-ów na kartki",
      "Telefony od gości, którzy nie wiedzą, jak dojechać",
      "Portal ślubny z miesięczną subskrypcją",
    ],
    afterPoints: [
      "Gość potwierdza na stronie, bez telefonu od pary",
      "Lista diet i noclegów gotowa dla sali",
      "Dojazd do kościoła i sali otwiera się w mapach",
      "Własny adres, bez abonamentu za portal",
    ],
  },
};
