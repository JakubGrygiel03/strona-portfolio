import { reveal } from "@/lib/reveal";

const points = [
  {
    gain: "Oszczędzasz 400–1 200 zł każdego roku",
    title: "0 zł rocznie za serwer",
    body: "Nie wciskam drogiego hostingu na abonament. Strona działa w chmurze z darmowym certyfikatem SSL. Płacisz raz za wykonanie, a potem jedynym corocznym kosztem jest odnowienie domeny, około 60–100 zł.",
  },
  {
    gain: "Więcej klientów z telefonu",
    title: "Błyskawiczne ładowanie zamiast powolnego szablonu",
    body: "Aż połowa osób wychodzi, jeśli strona ładuje się dłużej niż 3 sekundy. Nie składam jej z gotowego motywu zapchanego zbędnym kodem. Piszę czysty kod w Next.js — na telefonie otwiera się w ułamku sekundy, a Google premiuje to wyższą pozycją w wynikach.",
  },
  {
    gain: "Rozmawiasz wprost z twórcą",
    title: "Brak pośredników i głuchego telefonu",
    body: "W agencji mówisz do handlowca, ten do project managera, a ten dopiero do programisty. Tutaj dzwonisz do mnie. Zmianę omawiamy w kilka minut, bez korporacyjnej kolejki i tygodni czekania na odpowiedź.",
  },
  {
    gain: "Strona jest Twoją własnością",
    title: "Brak uwiązania i 100% praw autorskich",
    body: "Podpisujemy umowę o dzieło z przeniesieniem autorskich praw majątkowych. Baza, domena i kod należą do Ciebie. Gdy za rok wybierzesz kogoś innego, przekazuję całe repozytorium. Nie trzymam biznesu jako zakładnika.",
  },
  {
    gain: "Zero kupowania kota w worku",
    title: "Podgląd na żywo w trakcie prac",
    body: "Nie czekasz w ciemno do końca. Od pierwszych dni masz prywatny link testowy na telefon: klikasz, sprawdzasz, jak strona leży w dłoni, i zgłaszasz uwagi na bieżąco. Domenę podpinamy wtedy, gdy efekt jest dla Ciebie gotowy.",
  },
  {
    gain: "Święty spokój w cenie",
    title: "30 dni wsparcia po starcie",
    body: "Po uruchomieniu nie zostajesz sam. Przez pierwszy miesiąc jestem pod telefonem i na WhatsAppie. Literówka, nowy cennik albo podmiana zdjęcia — poprawiam to od ręki, bez dodatkowej opłaty.",
  },
];

const figures = [
  { value: "0 zł", label: "ukrytych opłat za serwer" },
  { value: "< 1 s", label: "otwarcie strony na telefonie" },
  { value: "100%", label: "praw autorskich i dostępu do kodu" },
  { value: "30 dni", label: "opieki po starcie, w cenie" },
];

export function WhySection() {
  return (
    <section id="zysk" className="border-y border-line bg-surface py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl" {...reveal()}>
          <p className="text-sm font-medium text-cobalt">Dlaczego warto</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-heading sm:text-4xl">
            Dlaczego strona w GrygielStudio daje więcej niż zlecenie w agencji.
          </h2>
          <p className="mt-4 text-base leading-7 text-body">
            Większość małych firm przepłaca dwa razy: najpierw za budowę na ociężałym szablonie, a potem co roku za
            serwer i „opiekę”, która sprowadza się do klikania aktualizacji wtyczek. U mnie zasady są proste i liczone
            pod Twój zysk.
          </p>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {points.map((point, index) => (
            <li key={point.title} {...reveal(Math.min(index, 3) * 70)} className="rounded-2xl border border-line bg-obsidian p-6">
              <p className="text-xs font-medium text-cobalt">{point.gain}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-heading">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-body">{point.body}</p>
            </li>
          ))}
        </ol>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {figures.map((figure, index) => (
            <li key={figure.value} {...reveal(index * 60)} className="rounded-2xl bg-ink px-5 py-5 text-on-ink">
              <p className="font-mono text-2xl font-semibold tracking-[-0.03em]">{figure.value}</p>
              <p className="mt-2 text-sm leading-5 text-on-ink-muted">{figure.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
