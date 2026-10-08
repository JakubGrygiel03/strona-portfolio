import { reveal } from "@/lib/reveal";
import { siteConfig } from "@/lib/site";

const points = [
  {
    title: "Bezpieczeństwo od podstaw",
    detail:
      "Nie dokładam stosu wtyczek. Formularz, dane kontaktowe i ochrona przed botami są częścią architektury, nie dodatkiem z listy.",
  },
  {
    title: "Rozmowa o celu, nie o żargonie",
    detail:
      "Lata lekcji i pracy z ludźmi nauczyły mnie słuchać. Ustalamy, co klient ma zrobić na stronie: zostawić kontakt albo dokończyć zamówienie.",
  },
  {
    title: "Każda strona podnosi poprzeczkę",
    detail:
      "Nie odklepuję motywu. Kolejne wdrożenie ma być lżejsze i spokojniejsze — takie, które chcę pokazać dalej.",
  },
];

export function AboutSection() {
  return (
    <section id="o-mnie" className="bg-surface py-12">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-6 md:grid-cols-[16rem_1fr] md:gap-12">
        <img
          src="/jakub.webp"
          alt={`${siteConfig.person}, ${siteConfig.name}`}
          width={1400}
          height={1750}
          className="aspect-[4/5] w-full max-w-64 rounded-2xl object-cover"
          {...reveal()}
        />
        <div className="max-w-2xl" {...reveal(80)}>
          <p className="text-sm font-medium text-cobalt">O mnie</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-heading sm:text-4xl">
            Nie składam stron z taśmy.
          </h2>
          <p className="mt-4 text-base leading-7 text-body">
            Jestem {siteConfig.person}. Studiuję informatykę ze specjalizacją cyberbezpieczeństwo na WSB Merito w
            Poznaniu — po to, żeby budować szybkie i bezpieczne strony od podstaw. {siteConfig.name} prowadzę sam:
            od rozmowy do kodu, bez handlowca po drodze.
          </p>
          <p className="mt-4 text-base leading-7 text-body">
            Równolegle gram i uczę gitary. Prowadzę własną markę, nagrywam materiały i na co dzień pracuję z ludźmi.
            Strona ma więc działać na zmysły klienta od pierwszego kliknięcia, nie tylko dobrze wyglądać w kodzie.
          </p>
          <ul className="mt-8 space-y-5">
            {points.map((point) => (
              <li key={point.title} className="border-l-2 border-cobalt/40 pl-4">
                <p className="text-sm font-medium text-heading">{point.title}</p>
                <p className="mt-1 text-sm leading-6 text-body">{point.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-line pt-6 text-base leading-7 text-heading">
            Sukces Twojej strony jest moim sukcesem. Jeśli ktoś wejdzie z telefonu, poczuje lekkość i zostawi
            rezerwację — wiem, że robota jest zrobiona.
          </p>
        </div>
      </div>
    </section>
  );
}
