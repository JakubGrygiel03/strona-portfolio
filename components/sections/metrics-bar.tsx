import { TiltSurface } from "@/components/motion/tilt-surface";

const notes = [
  {
    title: "Jasna oferta",
    detail: "Od razu widać, czym się zajmujesz.",
  },
  {
    title: "Pod Twoją pracę",
    detail: "Wygląd jest dopasowany, nie wzięty z półki.",
  },
  {
    title: "Da się rozbudować",
    detail: "Sklep, terminy i płatności dokładamy później.",
  },
];

export function MetricsBar() {
  return (
    <section id="metryki" className="relative z-10 pb-12">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">
        {notes.map((note, index) => (
          <TiltSurface key={note.title}>
            <article
              className="rise h-full rounded-2xl border border-white/10 bg-ink-soft px-5 py-5 transition-colors duration-200 hover:border-amber/50"
              style={{ animationDelay: `${420 + index * 80}ms` }}
            >
              <h2 className="text-base font-medium text-on-ink">{note.title}</h2>
              <p className="mt-3 text-sm leading-6 text-on-ink-muted">{note.detail}</p>
            </article>
          </TiltSurface>
        ))}
      </div>
    </section>
  );
}
