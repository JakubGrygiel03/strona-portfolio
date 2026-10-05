const forWhom = [
  "Firma, która chce jedną stronę zamiast pięciu linków w bio.",
  "Sklep albo usługi, gdzie klient ma dokończyć sprawę bez telefonu.",
  "Zespół, który za rok dołoży płatności, terminy albo panel — i nie chce zaczynać od zera.",
];

const notFor = [
  "Kampania na Instagramie i obsługa social mediów.",
  "Gotowy motyw za kilkaset złotych, bez ustaleń.",
  "Projekt, w którym zakres ma się zmieniać co tydzień bez nowej wyceny.",
];

export function FitSection() {
  return (
    <section id="dla-kogo" className="py-16">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        <article className="rounded-2xl bg-ink p-6 text-on-ink sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.02em]">Dla kogo</h2>
          <ul className="mt-6 space-y-4">
            {forWhom.map((item) => (
              <li key={item} className="border-l-2 border-white/30 pl-4 text-sm leading-6 text-on-ink-muted">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-heading">Czego nie biorę</h2>
          <ul className="mt-6 space-y-4">
            {notFor.map((item) => (
              <li key={item} className="border-l-2 border-line-strong pl-4 text-sm leading-6 text-body">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
