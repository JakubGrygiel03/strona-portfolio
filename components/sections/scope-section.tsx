import { reveal } from "@/lib/reveal";

const blocks = [
  {
    title: "W cenie startowej",
    items: [
      "Układ strony i wdrożenie na adres.",
      "Formularz kontaktu i podstawowe SEO.",
      "Wersja na telefon i z klawiatury.",
      "Domena zostaje Twoja. Rejestrujesz ją na siebie.",
      "Krótka instrukcja, jak z tego korzystać.",
    ],
  },
  {
    title: "Poza ceną",
    items: [
      "Gotowe teksty i zdjęcia Twojej firmy (jeśli ich nie masz, pomagam ułożyć plan, o czym napisać i jakie kadry przygotować).",
      "Reklamy, social media i pozycjonowanie płatne.",
      "Zmiana koncepcji w trakcie. Nowy pomysł to osobna wycena.",
      "Opieka miesięczna, jeśli chcesz, żebym został przy stronie.",
    ],
  },
  {
    title: "Jak to idzie",
    items: [
      "40–50% zadatku na start, reszta po pokazie działającej strony.",
      "Umowa opisuje zakres, termin, płatność i prawa do strony.",
      "Materiały zbieram na liście: teksty, logo, zdjęcia, dostępy.",
      "Pracujemy w Twoim tempie: gdy potrzebujesz więcej czasu na zebranie materiałów, termin wdrożenia elastycznie przesuwamy w grafiku.",
    ],
  },
];

export function ScopeSection() {
  return (
    <section id="wspolpraca" className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div {...reveal()}>
          <p className="text-sm font-medium text-cobalt">Zakres</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-heading sm:text-4xl">
            Co jest w cenie, a co dokładamy osobno.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {blocks.map((block, index) => (
            <article key={block.title} {...reveal(index * 70)} className="rounded-2xl border border-line bg-surface p-6">
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
