import { reveal } from "@/lib/reveal";

const questions = [
  {
    q: "Czy muszę mieć gotowe teksty i zdjęcia przed kontaktem?",
    a: "Nie musisz mieć gotowych materiałów na start. Wystarczy, że wiesz, czym się zajmujesz i co chcesz zaoferować. Bardzo pomaga, jeśli przed rozmową przejrzysz inne strony (np. konkurencji), zrobisz kilka zrzutów ekranu i wskażesz: „ten styl mi się podoba, a tego nie chcę”. Podczas rozmowy dobieramy paletę kolorów (jasna, ciemna, konkretny kolor wiodący) i ustalamy układ. Jeśli nie masz profesjonalnych zdjęć, podpowiadam, jak zrobić dobre kadry smartfonem lub dobieramy wysokiej jakości fotografie ze sprawdzonych baz.",
  },
  {
    q: "Ile to trwa i jak wygląda start?",
    a: "Wizytówka one-page to zwykle 1–2 tygodnie, strona z rezerwacjami 2–3 tygodnie, a sklep 3–4 tygodnie. Po wstępnej rozmowie przygotowuję wersję roboczą pod prywatnym adresem testowym, do którego masz dostęp z telefonu na każdym etapie prac.",
  },
  {
    q: "Czy wystawiasz umowę? Jak się rozliczamy?",
    a: "Zawsze podpisujemy umowę o dzieło z przeniesieniem autorskich praw majątkowych do strony i kodu. Współpracuję zarówno z firmami (które mogą rozliczyć koszt w działalności), jak i z osobami prywatnymi (np. narzeczeni zamawiający stronę weselną). Rozliczamy się etapowo: zadatek na start, a reszta po pełnej akceptacji działającej strony.",
  },
  {
    q: "Co dzieje się po publikacji strony?",
    a: "Po podpięciu domeny masz 30 dni spokojnego wsparcia technicznego w cenie projektu. Jeśli w trakcie pierwszego miesiąca zauważysz potrzebę drobnej korekty lub zmiany danych — poprawiam to od ręki. Strona stoi na darmowej, szybkiej chmurze, więc jedynym stałym kosztem w skali roku pozostaje Twoja domena.",
  },
];

export function FaqList() {
  return (
    <section id="pytania" className="bg-surface py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div {...reveal()}>
          <p className="text-sm font-medium text-cobalt">Pytania</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-heading sm:text-4xl">Zanim napiszesz.</h2>
        </div>
        <div className="mt-8 divide-y divide-line border-y border-line" {...reveal(70)}>
          {questions.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none text-base font-medium text-heading [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span aria-hidden="true" className="text-cobalt group-open:hidden">
                    +
                  </span>
                  <span aria-hidden="true" className="hidden text-cobalt group-open:inline">
                    –
                  </span>
                </span>
              </summary>
              <div className="faq-answer">
                <div>
                  <p className="max-w-2xl pt-3 text-sm leading-6 text-body">{item.a}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
