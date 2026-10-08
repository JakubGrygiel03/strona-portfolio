import type { Project } from "@/types/project";

export const salonFryzjerski: Project = {
  slug: "salon-fryzjerski",
  title: "PaniFryzjerka — Rodzinny salon urody w Gdańsku",
  client: "Salon urody, Gdańsk",
  eyebrow: "Usługi i uroda",
  category: "services",
  stage: "live",
  year: "2026",
  featured: false,
  cover: "/covers/pani-fryzjerka.webp",
  highlightMetric: "Bez prowizji Booksy",
  benefits: ["Bez prowizji Booksy", "Cennik według długości włosów", "Własny kalendarz"],
  summary:
    "Własna strona i zapisy dla salonu. Cennik zależy od długości włosów, na zdjęciach widać efekt przed i po, a wizytę da się umówić w trzech krokach. Bez prowizji dla portalu rezerwacji.",
  headline: "Grafik wizyt bez przerywania pracy telefonem i bez prowizji dla aplikacji.",
  lead:
    "Klientka umawia się bezpośrednio u właścicielki. Salon nie oddaje procentu od wizyty i nie stoi w katalogu obok innych zakładów. Zapisać się da się także wieczorem i w weekend.",
  challenge:
    "Salon wisiał na telefonie i na aplikacji, która bierze prowizję, a przy okazji pokazuje konkurencję.",
  challengePoints: [
    "Telefon w trakcie mycia albo farbowania wybijał z pracy i przeszkadzał osobie na fotelu.",
    "Aplikacja bierze abonament i procent od wizyt, a obok profilu poleca inne salony.",
    "Klientki dopytywały o cenę zależną od długości włosów i o to, jak wychodzą zabiegi.",
  ],
  solution:
    "Zapis jest na stronie salonu. Od wizyty nie schodzi prowizja, a cena i efekt są widoczne zanim ktoś zadzwoni.",
  outcomes: [
    {
      title: "Zapis w trzech krokach",
      body: "Klientka wybiera zabieg, widzi cenę pod długość włosów i klika wolną godzinę. Nie zakłada konta.",
    },
    {
      title: "Zdjęcia przed i po",
      body: "Na stronie są realne prace salonu. Na telefonie da się porównać efekt, zanim ktoś przyjdzie na fotel.",
    },
    {
      title: "Prowizji nie ma",
      body: "Od zapisanej wizyty nic nie schodzi na Booksy. W miesiącu zostaje około 100–250 zł, zależnie od procentu i liczby zrobionych usług.",
    },
    {
      title: "Mniej powtarzanych pytań",
      body: "Adres, zdjęcie wejścia, parking i odpowiedzi na typowe pytania są na stronie, więc nie trzeba ich powtarzać przed każdą wizytą.",
    },
  ],
  technologies: ["Next.js", "Rezerwacje", "Przed i po", "SEO lokalne"],
  metrics: [
    {
      label: "Prowizja",
      value: "0 zł",
      detail: "Od wizyty nic nie schodzi na Booksy. Zostaje około 100–250 zł miesięcznie, zależnie od procentu i liczby usług.",
    },
    { label: "Zapis", value: "3 kroki", detail: "Zabieg, długość włosów, wolna godzina. Bez zakładania konta." },
    { label: "Efekt", value: "na zdjęciu", detail: "Przed i po widać na stronie, zanim klientka przyjdzie." },
    { label: "Kontakty", value: "u salonu", detail: "Numery i historia wizyt nie zostają w obcym portalu." },
  ],
  architecture: {
    pattern: "Wizyta zapisuje się u salonu. Prowizja od niej nie schodzi.",
    stack: ["Next.js", "Własny kalendarz", "Cennik według długości", "Zdjęcia przed i po"],
    databaseSchema: ["usługi", "cennik", "terminy", "wizyty", "klientki"],
    flow: ["Klientka", "Zabieg", "Godzina", "Kalendarz salonu"],
  },
  beforeAfter: {
    beforeLabel: "Aplikacja pośrednika",
    afterLabel: "Zapisy na stronie salonu",
    beforeCaption: "Grafik i procent od wizyty były po stronie portalu, a telefon i tak dzwonił w trakcie zabiegu.",
    afterCaption: "Klientka umawia się na stronie. Przychód z wizyty zostaje w salonie, a kontakty też.",
    beforePoints: [
      "Abonament i prowizja od zapisanych wizyt",
      "Obok salonu widać inne zakłady",
      "Praca przerywana telefonem w trakcie zabiegu",
      "Baza klientek zostaje w portalu",
    ],
    afterPoints: [
      "0 zł prowizji. Przychód z wizyty zostaje w salonie",
      "Klientka jest na stronie salonu, bez reklam konkurencji",
      "Zapisy wpadają do kalendarza, także wieczorem i w weekend",
      "Numery i historia wizyt są u salonu",
    ],
  },
};
