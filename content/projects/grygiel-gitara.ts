import type { Project } from "@/types/project";

export const grygielGitara: Project = {
  slug: "grygiel-gitara",
  title: "Grygiel Gitara — Pracownia nauki gry",
  client: "Gdańsk i lekcje online",
  eyebrow: "Usługi i edukacja",
  category: "services",
  stage: "live",
  year: "2026",
  featured: true,
  cover: "/covers/grygiel-gitara.webp",
  siteUrl: "https://grygielgitara.pl",
  highlightMetric: "Tylko koszt domeny",
  benefits: ["Wszystko w jednym miejscu", "Tylko koszt domeny", "Zapisy bez dzwonienia"],
  summary:
    "Strona i zaplecze dla nauczyciela muzyki. Uczeń sam wybiera termin lekcji próbnej albo kupuje e-book, a po zalogowaniu ma nuty i materiały. Zamiast wiadomości, notesu i ręcznego wysyłania plików.",
  headline:
    "Własna pracownia lekcji i materiałów, bez chaosu w wiadomościach i bez opłat za platformy kursowe.",
  lead:
    "Strona, kalendarz lekcji, sprzedaż materiałów i strefa dla uczniów są pod jednym adresem. Nie ma comiesięcznego abonamentu za osobną platformę do kursów ani za kalendarz. Stałym kosztem zostaje własna domena.",
  challenge:
    "Lekcje stacjonarne i online, koncerty oraz serwis instrumentów szły bez asystenta. Organizacja rozjeżdżała się na kilka miejsc, a pytania o wolne godziny odciągały od instrumentu.",
  challengePoints: [
    "Terminy i zapisy leżały w Messengerze, WhatsAppie i SMS-ach.",
    "Po lekcji nuty i pliki PDF trzeba było wysyłać ręcznie mailem.",
    "Wykorzystane lekcje z pakietu liczyło się w notesie.",
    "Odpisywanie na pytania o wolne godziny przerywało pracę.",
  ],
  solution:
    "Uczeń sam wybiera termin albo kupuje materiał. Pliki czekają na jego koncie, a utrzymanie strony nie ma abonamentu poza domeną.",
  outcomes: [
    {
      title: "Zapis na lekcję próbną bez dzwonienia",
      body: "Uczeń wybiera formę: Gdańsk albo online, pakiet i wolną godzinę. Nauczyciel potwierdza termin z panelu w telefonie.",
    },
    {
      title: "E-book „Gitarowy Reset” bez ręcznego załącznika",
      body: "Płatność idzie BLIK-iem albo kartą. Kupujący od razu pobiera plik, a potwierdzenie wychodzi mailem.",
    },
    {
      title: "Konto ucznia z materiałami",
      body: "Po zalogowaniu widać pliki, nuty z zajęć i ile lekcji zostało w pakiecie. Da się też oddać własną książkę bez osobnej wysyłki.",
    },
    {
      title: "Zostaje domena",
      body: "Serwer nie ma abonamentu. W roku odnawia się własną domenę. Osobna platforma do kursów i kalendarza to często 150–300 zł miesięcznie. Tego rachunku nie ma.",
    },
  ],
  technologies: ["Next.js", "Supabase", "Stripe", "Rezerwacje", "PWA"],
  metrics: [
    { label: "Serwer", value: "0 zł", detail: "Strona stoi bez abonamentu. Stałym kosztem zostaje roczna domena." },
    { label: "Zapisy", value: "z kalendarza", detail: "Uczeń wybiera wolną godzinę. Potwierdzenie jest w panelu, nie w trakcie lekcji." },
    { label: "Materiały", value: "na koncie", detail: "Nuty i pliki czekają po zalogowaniu. Nie trzeba dosyłać ich mailem." },
    { label: "E-book", value: "od razu", detail: "Po płatności plik jest do pobrania, a mail z potwierdzeniem wychodzi sam." },
  ],
  architecture: {
    pattern: "Termin i plik nie żyją w wiadomościach. Zapis wpada do panelu, a materiał czeka na koncie ucznia.",
    stack: ["Next.js", "Supabase", "Stripe", "Resend", "PWA"],
    databaseSchema: ["zgłoszenia", "lekcje", "karnety", "uczniowie", "zamówienia", "materiały"],
    flow: ["Uczeń", "Termin albo e-book", "Panel", "Konto z materiałami"],
  },
  beforeAfter: {
    beforeLabel: "Wiadomości i notes",
    afterLabel: "Jeden adres i panel",
    beforeCaption: "Zapisy, pliki i karnety były porozrzucane, a do strony łatwo dokładał się abonament.",
    afterCaption: "Uczeń sam wybiera termin, materiały ma na koncie, a stałym kosztem zostaje domena.",
    beforePoints: [
      "Zapisy na WhatsAppie i telefony w trakcie lekcji",
      "Nuty i PDF-y wysyłane ręcznie po każdych zajęciach",
      "150–300 zł miesięcznie za osobną platformę do kursów",
      "Karnet sprawdzany w notatkach",
    ],
    afterPoints: [
      "Uczeń sam wybiera wolny termin z kalendarza",
      "Materiały czekają na koncie po zalogowaniu",
      "0 zł za serwer. Zostaje roczna domena",
      "Licznik lekcji i historia spotkań w panelu",
    ],
  },
};
