import { reveal } from "@/lib/reveal";

const forWhom = [
  {
    title: "Lokalne firmy, rzemieślnicy i specjaliści usługowi",
    detail:
      "Masz sprawdzony fach w rękach i chcesz, żeby Twoja strona budziła zaufanie, a klient od razu wiedział, co oferujesz i jak się skontaktować.",
  },
  {
    title: "Klienci prywatni i wydarzenia (np. strony ślubne)",
    detail:
      "Potrzebujesz eleganckiej, funkcjonalnej strony z potwierdzeniem obecności (RSVP) i dojazdem, bez konieczności opłacania drogich abonamentów.",
  },
  {
    title: "Właściciele z otwartą głową",
    detail:
      "Wiesz mniej więcej, jaki efekt chcesz osiągnąć i masz przykłady stron, które Ci się podobają, ale jesteś otwarty na moje inżynieryjne i wizualne podpowiedzi, by strona była naprawdę wygodna w obsłudze.",
  },
  {
    title: "Zespoły i firmy z jedną osobą decyzyjną",
    detail:
      "Jeśli pracujecie w grupie, wspólnie ustalacie oczekiwania przed rozmową, dzięki czemu nie ma chaosu komunikacyjnego.",
  },
];

const notFor = [
  {
    title: "Duże korporacje i skomplikowane systemy z gigantycznym obrotem danych",
    detail:
      "Działam w modelu lean: minimalne koszty, bezpośredni kontakt, lekka architektura. Nie buduję wielkich korporacyjnych portali.",
  },
  {
    title: "Osoby bez żadnego pomysłu ani skrajnie zablokowane na niefunkcjonalne wizje",
    detail:
      "Nie gramy w zgadywanki bez punktu odniesienia i nie forsujemy rozwiązań, które utrudniają klientowi poruszanie się po stronie.",
  },
  {
    title: "Tanie szablony składane z przypadkowych wtyczek",
    detail: "Nie firmuję swoim nazwiskiem ociężałych gotowców, które sypią się po miesiącu.",
  },
  {
    title: "Obsługa social mediów i kampanii reklamowych",
    detail: "Skupiam się na inżynierii stron, bezpieczeństwie i narzędziach, które sprzedają Twoją ofertę.",
  },
];

export function FitSection() {
  return (
    <section id="dla-kogo" className="py-12">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        <article {...reveal()} className="rounded-2xl bg-ink p-6 text-on-ink sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.02em]">Dla kogo</h2>
          <ul className="mt-6 space-y-5">
            {forWhom.map((item) => (
              <li key={item.title} className="border-l-2 border-white/30 pl-4">
                <p className="text-sm font-medium text-on-ink">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-on-ink-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </article>
        <article {...reveal(80)} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-heading">Czego nie biorę</h2>
          <ul className="mt-6 space-y-5">
            {notFor.map((item) => (
              <li key={item.title} className="border-l-2 border-line-strong pl-4">
                <p className="text-sm font-medium text-heading">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-body">{item.detail}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
