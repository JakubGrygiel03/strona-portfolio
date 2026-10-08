import Link from "next/link";
import { reveal } from "@/lib/reveal";
import { formatPln } from "@/lib/utils";

const offers = [
  {
    title: "Wizytówka na jednej stronie",
    min: 850,
    max: 1200,
    time: "7–14 dni",
    who: [
      "Strony ślubne: potwierdzenie przyjazdu, mapa i plan dnia dla gości.",
      "Hydraulik, elektryk, stolarz, studio tatuażu, mechanik.",
      "Jedna strona pod konkretną usługę, produkt albo promocję.",
      "Wizytówka trenera, eksperta albo artysty.",
    ],
    includes: [
      "Jedna lekka strona: o mnie, oferta, cennik, galeria i kontakt pod jednym adresem.",
      "Formularz z mailem do Ciebie i przycisk, żeby zadzwonić z telefonu.",
      "Szybko otwiera się na telefonie. Za serwer nie ma stałej opłaty.",
    ],
  },
  {
    title: "Strona z panelem i rezerwacjami",
    min: 1900,
    max: 3200,
    time: "14–24 dni",
    who: [
      "Salon, barber, kosmetyczka, fizjoterapia albo masaż, z kalendarzem wizyt.",
      "Szkoła, zajęcia i korepetycje: zapis na lekcję bez telefonu.",
      "Firma z podstronami: o nas, usługi, zespół, cennik, kontakt, pytania.",
      "Blog albo poradnik branżowy.",
    ],
    includes: [
      "Pełna struktura podstron i panel CMS do zarządzania treścią.",
      "Kalendarz rezerwacji wizyt jest w cenie, razem z mailami.",
      "Bezpieczna baza danych w Supabase.",
    ],
  },
  {
    title: "Platforma albo sklep",
    min: 3800,
    max: 6500,
    time: "21–35 dni",
    who: [
      "Sklep: rzemiosło, ceramika, odzież, kosmetyki, sprzęt.",
      "E-booki, kursy, nagrania i bilety.",
      "Strefa klienta: logowanie i historia zamówień.",
      "Katalog z filtrami: nieruchomości, oferty, większe portfolio.",
    ],
    includes: [
      "Baza danych pod produkty, zamówienia i konta klientów.",
      "Panel: produkty i warianty, zamówienia, wysyłki, baza klientów.",
      "Płatność w koszyku: BLIK, przelew i karta.",
      "Mail do Ciebie i do klienta zaraz po zakupie.",
    ],
  },
];

function Points({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-6 text-heading">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cobalt" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function OfferBoard() {
  return (
    <section id="oferta" className="bg-surface pb-10 pt-14">
      <div className="mx-auto max-w-6xl px-6">
        <div {...reveal()}>
          <p className="text-sm font-medium text-cobalt">Oferta</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-heading sm:text-4xl">
            Trzy rodzaje stron. Cena jest od razu, nie po tygodniach ustaleń.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-body">
            Kwota za ten rodzaj strony. Jeśli dochodzi coś spoza listy, ustalamy to razem przed startem.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-stretch lg:gap-5 lg:[grid-template-rows:auto_auto_auto_auto_auto_auto]">
          {offers.map((offer, index) => (
            <article
              key={offer.title}
              {...reveal(index * 80)}
              className="flex flex-col rounded-2xl border border-line bg-obsidian p-6 lg:row-span-6 lg:grid lg:grid-rows-subgrid lg:p-7"
            >
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-heading">{offer.title}</h3>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-cobalt lg:mt-0 lg:self-end">
                {formatPln(offer.min)} – {formatPln(offer.max)}
              </p>
              <p className="mt-1 text-sm font-medium text-heading lg:mt-0">{offer.time}</p>
              <div className="mt-6 border-t border-line pt-5 lg:mt-0">
                <p className="text-sm font-semibold text-heading">Dla kogo</p>
                <Points items={offer.who} />
              </div>
              <div className="mt-6 border-t border-line pt-5 lg:mt-0">
                <p className="text-sm font-semibold text-heading">Co jest w środku</p>
                <Points items={offer.includes} />
              </div>
              <Link
                href="/wycena"
                className="mt-6 self-start text-sm font-semibold text-heading underline decoration-cobalt decoration-2 underline-offset-4 lg:mt-0 lg:self-end"
              >
                Policz swój zakres
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
