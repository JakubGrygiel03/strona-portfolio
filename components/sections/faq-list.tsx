const questions = [
  {
    q: "Ile kosztuje strona?",
    a: "Strona ofertowa startuje od 6 000 zł, usługi od 10 000 zł, sklep od 18 000 zł, aplikacja od 24 000 zł. Dodatki — płatności, terminy, edycja treści — podnoszą widełki. Kalkulator na stronie liczy orientacyjnie, końcowa kwota powstaje po rozmowie.",
  },
  {
    q: "Ile to trwa?",
    a: "Prosta oferta to zwykle 2–3 tygodnie. Sklep i aplikacja schodzą w kilka tygodni dłużej, bo dochodzi płatność, konta i treść. Termin ustalamy po tym, jak są teksty i decyzje, nie przed.",
  },
  {
    q: "Czy muszę mieć gotowe teksty i zdjęcia?",
    a: "Nie na pierwszej rozmowie. Do startu już tak — bez nich strona stoi. Pomagam ułożyć strukturę tekstu. Zdjęć z banku nie podstawiam jako zdjęć Twojej firmy.",
  },
  {
    q: "Czy sam będę mógł coś zmienić?",
    a: "Tak, jeśli w zakresie jest edycja treści. Jak jej nie ma, poprawki przez pierwszy miesiąc robię ja. Po tym czasie albo zostaje opieka, albo uczysz się jednej prostej ścieżki.",
  },
  {
    q: "Co jest po publikacji?",
    a: "30 dni poprawek tego, co wyjdzie w użyciu. Nie jest to abonament na nowe funkcje. Nowa funkcja to nowy zakres.",
  },
  {
    q: "Czy da się wejść na strony klientów?",
    a: "Tak. Przy Trzech Wiatrach, Adriannie i Janie, The Medievals i Grygiel Gitarze jest link do strony. Salon i fundacja zostają układami, dopóki nie ma własnego adresu.",
  },
];

export function FaqList() {
  return (
    <section id="pytania" className="bg-surface py-16">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-medium text-cobalt">Pytania</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-heading sm:text-4xl">
          Zanim napiszesz.
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
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
              <p className="mt-3 max-w-2xl text-sm leading-6 text-body">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
