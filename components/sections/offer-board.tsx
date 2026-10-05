import Link from "next/link";
import { TiltSurface } from "@/components/motion/tilt-surface";
import { formatPln } from "@/lib/utils";

const offers = [
  {
    title: "Strona ofertowa",
    detail: "Jedna usługa, jeden cel, formularz. Dla firmy, która ma dość wizytówki z szablonu.",
    from: 6000,
    weeks: "2–3 tyg.",
  },
  {
    title: "Usługi i rezerwacje",
    detail: "Cennik, wolne terminy i potwierdzenie. Klient nie dzwoni, żeby zapytać, czy jest miejsce.",
    from: 10000,
    weeks: "3–6 tyg.",
  },
  {
    title: "Sklep",
    detail: "Katalog, koszyk i płatność w jednym miejscu. Zamówienie nie urywa się w połowie.",
    from: 18000,
    weeks: "5–8 tyg.",
  },
  {
    title: "Aplikacja",
    detail: "Konta, dane i codzienna praca. Kiedy strona ma coś zapamiętać, a nie tylko pokazać.",
    from: 24000,
    weeks: "6–12 tyg.",
  },
  {
    title: "Przebudowa",
    detail: "Nowa strona na miejscu starej, bez gubienia tego, co już działa. Kwota startuje jak przy stronie usługowej, dokładna po obejrzeniu obecnej.",
    from: 10000,
    weeks: "wycena po audycie",
  },
];

export function OfferBoard() {
  return (
    <section id="oferta" className="bg-surface py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium text-cobalt">Oferta</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-heading sm:text-4xl">
          Cztery rodzaje stron. Cena startuje stąd, nie z sufitu.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-body">
          To dolna granica z kalkulatora, zanim dojdą dodatki. Po rozmowie dostajesz widełki pod konkretny zakres.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer) => (
            <TiltSurface key={offer.title}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-obsidian p-6 shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-cobalt/35 hover:shadow-[0_22px_44px_-28px_rgba(27,67,50,0.4)]">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-heading">{offer.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-body">{offer.detail}</p>
              <p className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-cobalt">od {formatPln(offer.from)}</p>
              <p className="mt-1 text-sm text-muted">{offer.weeks}</p>
              <Link href="/wycena" className="mt-5 text-sm font-medium text-heading underline decoration-cobalt underline-offset-4">
                Policz swój zakres
              </Link>
            </article>
            </TiltSurface>
          ))}
        </div>
      </div>
    </section>
  );
}
