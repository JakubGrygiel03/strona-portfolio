import type { Project } from "@/types/project";

export const trzyWiatry: Project = {
  slug: "trzy-wiatry",
  title: "Trzy Wiatry — Manufaktura ceramiki i drewna",
  client: "Pracownia ceramiki i drewna, Gdańsk",
  eyebrow: "Sklep internetowy",
  category: "e-commerce",
  stage: "live",
  year: "2025",
  featured: true,
  cover: "/covers/trzy-wiatry.webp",
  siteUrl: "https://trzywiatry.pl",
  highlightMetric: "Zero płatnych wtyczek",
  benefits: ["Zero płatnych wtyczek", "Sklep i zakładka B2B", "Panel pracowni w telefonie"],
  summary:
    "Sklep pracowni z osobną zakładką B2B, blogiem i stroną o pracowni. Koszyk z BLIK-iem i Paczkomatami oraz panel, w którym właściciel sam ogarnia produkty i przerwę na wypał. Zamiast WordPressa z wtyczkami.",
  headline: "Sklep pracowni bez awarii wtyczek, bez mulenia telefonu i bez rachunków za dodatki.",
  lead:
    "Poprzedni sklep stał na WordPressie z WooCommerce. Teraz obok siebie jest sklep, zakładka B2B, blog i opis pracowni. Panelem da się ruszyć z telefonu, także gdy piec jest w wypale.",
  challenge:
    "Szablon z wtyczkami wyglądał jak sklep, ale codzienna sprzedaż wisiała na aktualizacjach, wolnym telefonie i kolejnych rachunkach.",
  challengePoints: [
    "Aktualizacja wtyczki mogła wyłożyć koszyk w trakcie sprzedaży.",
    "Wtyczki dokładały zbędny kod, więc strona wolno wstawała na telefonie.",
    "Sklep, hurt i opis pracowni siedziały w jednym szablonie, bez osobnych zakładek.",
    "Dochodziły rachunki za licencje wtyczek i mocniejszy hosting.",
  ],
  solution:
    "Nie ma płatnych wtyczek. Jest sklep, osobna zakładka B2B, blog i opis pracowni. Właściciel sam ustawia przerwę na wypał.",
  outcomes: [
    {
      title: "Sklep, B2B i reszta obok siebie",
      body: "W menu jest sklep, osobna zakładka B2B, blog, o nas i kontakt. Hurt nie miesza się ze sprzedażą na sztuki.",
    },
    {
      title: "Kasa bez dokładania wtyczek",
      body: "BLIK, karta, Apple Pay i Paczkomat InPost są na stronie. Zakup nie zależy od osobnego dodatku, który może paść przy aktualizacji.",
    },
    {
      title: "Przerwa na wypał z telefonu",
      body: "Jeden przełącznik w panelu wstrzymuje wysyłkę i pokazuje datę kolejnego wypału. Nie trzeba do tego wtyczki.",
    },
    {
      title: "Lżejszy kod i koniec opłat za dodatki",
      body: "Wtyczki dokładały kod i potrafiły się wywalić. Ten sklep jest od nich lżejszy, około trzy razy, więc na telefonie wstaje spokojniej. Rachunków za licencje wtyczek nie ma.",
    },
  ],
  technologies: ["Next.js", "Supabase", "Przelewy24", "InPost", "TypeScript"],
  metrics: [
    { label: "Wtyczki", value: "0 zł", detail: "Na WordPressie licencje były płatne. Tych rachunków już nie ma." },
    { label: "Kod", value: "lżejszy", detail: "Około trzy razy mniej niż przy tamtym zestawie wtyczek. Mniej śmieci, mniej awarii koszyka." },
    { label: "Telefon", value: "spokojniej", detail: "Nie ma dziesiątek skryptów w tle, które spowalniały stronę." },
    { label: "Panel", value: "własny", detail: "Produkty i przerwa na wypał są pod ręką, także z telefonu." },
  ],
  architecture: {
    pattern: "Sklep, zakładka B2B i blog są częścią strony, nie wtyczkami.",
    stack: ["Next.js", "Supabase", "Przelewy24", "InPost", "TypeScript"],
    databaseSchema: ["produkty", "zamówienia", "zapytania B2B", "wypał", "wpisy"],
    flow: ["Klient", "Sklep albo B2B", "BLIK i Paczkomat", "Panel pracowni"],
  },
  beforeAfter: {
    beforeLabel: "WordPress i wtyczki",
    afterLabel: "Sklep bez dodatków",
    beforeCaption: "Koszyk, kategorie i hosting wisiały na szablonie oraz płatnych wtyczkach.",
    afterCaption: "Pracownia ma sklep, osobną zakładkę B2B i panel w telefonie.",
    beforePoints: [
      "Kolejna wtyczka mogła wyłożyć koszyk",
      "Wolny start na telefonie przez skrypty dodatków",
      "Rachunki za hosting i licencje wtyczek",
      "Sztywne kategorie, niedopasowane do ceramiki",
    ],
    afterPoints: [
      "Kod bez zewnętrznych wtyczek",
      "Spokojniejszy start na telefonie",
      "Brak opłat za wtyczki i za mocniejszy hosting pod nie",
      "Osobno sklep, B2B, blog i opis pracowni",
    ],
  },
};
