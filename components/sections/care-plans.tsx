import { reveal } from "@/lib/reveal";

const guarantees = [
  {
    title: "30 dni gwarancji i wsparcia w cenie każdego wdrożenia",
    detail:
      "Jestem pod telefonem lub na WhatsAppie. Jeśli cokolwiek wymaga drobnej korekty, poprawki tekstu czy upewnienia się, że wszystko gra — pomagam od ręki w ramach dobrej relacji.",
  },
  {
    title: "Darmowe utrzymanie w chmurze",
    detail:
      "Twoja strona stoi stabilnie i bezawaryjnie bez konieczności opłacania komercyjnego hostingu. Jedynym corocznym kosztem jest Twoja domena.",
  },
  {
    title: "100% własności i otwarty kod",
    detail:
      "Baza danych (Supabase) i domena są rejestrowane na dane Twojej firmy. Jeśli kiedykolwiek zdecydujesz się na współpracę z innym programistą — bez problemu przekazuję pełne repozytorium kodu na GitHubie i dostępy do bazy.",
  },
];

const plans = [
  {
    name: "Pakiet Podstawowy",
    price: "od ~40 zł / mies.",
    detail: "Dla tych, którzy nie chcą sami doglądać techniki.",
    items: ["Czuwam nad bezpieczeństwem i sprawdzam działanie.", "Asystuję przy corocznym odnowieniu domeny."],
  },
  {
    name: "Pakiet Aktywny",
    price: "100 zł / mies.",
    detail: "Gdy oferta, cennik albo zdjęcia zmieniają się w ciągu miesiąca.",
    items: [
      "Do 3 godzin w miesiącu na bieżące podmiany oferty, cenników i zdjęć.",
      "Priorytetowy kontakt na komunikatorze.",
    ],
  },
];

export function CarePlans() {
  return (
    <section id="opieka" className="bg-obsidian py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div {...reveal()}>
          <p className="text-sm font-medium text-cobalt">Po starcie</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-heading sm:text-4xl">
            Żadnego uwiązania. Pełna własność i 30 dni spokojnej opieki w cenie.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-body">Po uruchomieniu strony nie zostajesz sam.</p>
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {guarantees.map((item, index) => (
            <li key={item.title} {...reveal(index * 70)} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="text-base font-medium text-heading">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-body">{item.detail}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12" {...reveal()}>
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-heading">
            Opcjonalna opieka po 30 dniach
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-body">
            Sam hosting jest darmowy. Pakiety poniżej to w 100% opcjonalny święty spokój — dla tych, którzy nie chcą
            sami doglądać techniki.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {plans.map((plan, index) => (
            <article key={plan.name} {...reveal(index * 80)} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-heading">{plan.name}</h3>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-cobalt">{plan.price}</p>
              <p className="mt-2 text-sm text-muted">{plan.detail}</p>
              <ul className="mt-6 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="border-l-2 border-cobalt/40 pl-4 text-sm leading-6 text-body">
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
