const blocks = [
  {
    title: "W cenie startowej",
    items: [
      "Układ strony i wdrożenie na adres.",
      "Formularz kontaktu i podstawowe SEO.",
      "Wersja na telefon i z klawiatury.",
      "30 dni poprawek po publikacji.",
      "Krótka instrukcja, jak z tego korzystać.",
    ],
  },
  {
    title: "Poza ceną",
    items: [
      "Teksty i zdjęcia firmy — bez nich strona stoi.",
      "Reklamy, social media i pozycjonowanie płatne.",
      "Nowe funkcje po ustaleniu zakresu.",
      "Abonament opieki. Po 30 dniach ustalamy go osobno, bez kwoty z góry.",
    ],
  },
  {
    title: "Jak to idzie",
    items: [
      "Zaliczka na start, reszta przy publikacji.",
      "Umowa opisuje zakres, termin, płatność i prawa do strony.",
      "Materiały zbieram na liście: teksty, logo, zdjęcia, dostępy.",
      "Jeśli przez dwa tygodnie nie ma decyzji, termin publikacji się przesuwa.",
    ],
  },
];

export function ScopeSection() {
  return (
    <section id="wspolpraca" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium text-cobalt">Współpraca</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-heading sm:text-4xl">
          Co jest w cenie, a co dokładamy osobno.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {blocks.map((block) => (
            <article key={block.title} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="text-base font-medium text-heading">{block.title}</h3>
              <ul className="mt-4 space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="text-sm leading-6 text-body">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
