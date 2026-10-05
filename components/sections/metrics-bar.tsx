import { TiltSurface } from "@/components/motion/tilt-surface";

const notes = [
  {
    title: "Oferta w pierwszym ekranie",
    detail: "Gość wie, co sprzedajesz, zanim zejdzie niżej. Bez slajdu, który trzeba zgadywać.",
  },
  {
    title: "Jedna droga do kontaktu",
    detail: "Mail, formularz albo rezerwacja. Nie pięć miejsc, w których wiadomość ginie.",
  },
  {
    title: "Strona, którą da się rozwijać",
    detail: "Najpierw wizytówka. Sklep, terminy i płatności dochodzą, kiedy naprawdę są potrzebne.",
  },
];

export function MetricsBar() {
  return (
    <section id="metryki" className="pb-16">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">
        {notes.map((note) => (
          <TiltSurface key={note.title}>
            <article className="h-full rounded-2xl border border-white/10 bg-ink-soft px-5 py-5 transition-colors duration-200 hover:border-amber/50">
              <h2 className="text-base font-medium text-on-ink">{note.title}</h2>
              <p className="mt-3 text-sm leading-6 text-on-ink-muted">{note.detail}</p>
            </article>
          </TiltSurface>
        ))}
      </div>
    </section>
  );
}
