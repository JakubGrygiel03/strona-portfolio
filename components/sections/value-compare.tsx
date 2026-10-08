import { SpeedTable } from "@/components/sections/speed-table";

const points = [
  {
    title: "Zero stałych faktur za serwer",
    save: "400 – 1 200 zł",
    period: "każdego roku",
    market:
      "Klasyczna agencja stawia stronę na WordPressie i podłącza hosting komercyjny. W pierwszym roku jest tanio, często promocja za około 100 zł. Po roku przychodzi faktura odnowieniowa na 500–900 zł, do tego płatny certyfikat SSL za 150 zł i obowiązkowy backup.",
    here: "Strona działa na bezserwerowej chmurze z darmowym certyfikatem SSL na zawsze.",
    bill: "Jedyny koszt w roku to odnowienie nazwy domeny, około 60–100 zł. Przez 3 lata zostaje w kieszeni od 1 200 zł do 3 500 zł, których nie oddajesz firmom hostingowym.",
  },
  {
    title: "Koniec z prowizjami dla portali",
    save: "6 000 – 24 000 zł",
    period: "rocznie",
    market:
      "Gabinet, salon czy fizjoterapeuta na Booksy albo ZnanyLekarz płaci abonament 150–300 zł miesięcznie i prowizję od nowego klienta, czasem równą pierwszej wizycie. Właściciel apartamentu oddaje Bookingowi 15–18% z wynajmu. Przy obrocie 10 000 zł miesięcznie to 1 500–1 800 zł prowizji co miesiąc.",
    here: "Własny kalendarz i rezerwacje bezpośrednie. Płatność BLIK idzie prosto na konto właściciela, bez prowizji pośrednika.",
    bill: "Strona z rezerwacjami za 2 500 zł zwraca się w 1,5–2 miesiące. Każdy kolejny miesiąc zostaje na koncie, zamiast u pośrednika.",
  },
  {
    title: "Brak podatku od agencji na wejściu",
    save: "2 000 – 5 000 zł",
    period: "na starcie",
    market:
      "W agencji prosta strona rzadko schodzi poniżej 4 000–7 000 zł, a sklep poniżej 10 000–15 000 zł. W tej cenie jest marża handlowca, project managera i biura.",
    here: "Jedna osoba od rozmowy do kodu. Bez handlowca i bez kolejki w biurze.",
    bill: "Wizytówka 850–1 200 zł, strona z panelem 1 900–3 200 zł. Ta sama klasa technologii o 50–60% taniej niż w agencji.",
  },
  {
    title: "Zero przymusowego abonamentu serwisowego",
    save: "1 200 – 3 600 zł",
    period: "rocznie",
    market:
      "W ofertach firm standardem jest opieka i aktualizacje wtyczek: 100–300 zł netto miesięcznie. Bez tej opłaty po pół roku wtyczki przestają działać albo sypią się po aktualizacji PHP.",
    here: "Czysty kod bez obcych wtyczek. Nie wymaga comiesięcznego serwisowania.",
    bill: "Nie ma przymusowego abonamentu. Strona jest oddana na własność. Zmiana po roku to jednorazowa płatność za konkretne zadanie, zamiast 2 400 zł rocznie za samą gotowość.",
  },
];

export function ValueCompare() {
  return (
    <section id="porownanie" className="bg-obsidian py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium text-cobalt">Rachunek</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-heading sm:text-4xl">
          Ile zostaje na koncie, gdy strona pracuje na Ciebie.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-body">
          Zestawienie oparte na realnych kosztach: stałych abonamentach, prowizjach i czasie zwrotu.
        </p>
        <ol className="mt-10 grid gap-4 lg:grid-cols-2">
          {points.map((point, index) => (
            <li key={point.title} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
              <p className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-heading">{point.title}</h3>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-heading">{point.save}</p>
              <p className="mt-1 text-sm text-cobalt">{point.period}</p>
              <p className="mt-5 text-sm leading-6 text-body">
                <span className="font-medium text-heading">Na rynku. </span>
                {point.market}
              </p>
              <p className="mt-3 text-sm leading-6 text-body">
                <span className="font-medium text-cobalt">U Ciebie. </span>
                {point.here}
              </p>
              <p className="mt-5 rounded-xl bg-[#e8f2ec] px-4 py-3 text-sm leading-6 text-heading">{point.bill}</p>
            </li>
          ))}
        </ol>
        <SpeedTable />
      </div>
    </section>
  );
}
