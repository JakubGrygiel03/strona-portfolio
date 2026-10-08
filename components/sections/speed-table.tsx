import { reveal } from "@/lib/reveal";

const rows = [
  {
    area: "Zawartość kodu",
    cheap: "Nawet 80% zbędnego kodu z obcych wtyczek, który spowalnia telefon.",
    ours: "Tylko kod niezbędny do działania Twojej oferty.",
  },
  {
    area: "Czas otwarcia",
    cheap: "4–7 sekund. Wielu klientów wychodzi przed wczytaniem.",
    ours: "Poniżej 1 sekundy. Błyskawiczny dostęp do oferty.",
  },
  {
    area: "Test Google (PageSpeed)",
    cheap: "Często w granicach 30–60/100 punktów.",
    ours: "Celujemy w 95–100/100 punktów.",
  },
  {
    area: "Ryzyko awarii",
    cheap: "Błędy po automatycznych aktualizacjach wtyczek.",
    ours: "Zamknięta, stabilna architektura bez niespodzianek.",
  },
];

export function SpeedTable() {
  return (
    <div className="mt-14" {...reveal()}>
      <h3 className="text-xl font-semibold tracking-[-0.02em] text-heading">Dlaczego nasz kod jest szybszy</h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-body">Czysty kod kontra szablon z wtyczkami.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-surface">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <caption className="sr-only">Porównanie szablonu z wtyczkami i dedykowanego wdrożenia</caption>
          <thead className="bg-ink text-on-ink">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">
                Parametr
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Zwykły szablon z wtyczkami
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-amber">
                Nasze dedykowane wdrożenie
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.area} className="border-t border-line align-top">
                <th scope="row" className="px-4 py-3 font-medium text-heading">
                  {row.area}
                </th>
                <td className="px-4 py-3 text-body">{row.cheap}</td>
                <td className="bg-[#f6faf7] px-4 py-3 font-medium text-heading">{row.ours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
