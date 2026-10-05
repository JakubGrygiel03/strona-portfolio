import Link from "next/link";
import { Button } from "@/components/ui/button";

const proof = [
  { value: "6", label: "opisanych realizacji" },
  { value: "30 dni", label: "opieki po starcie" },
  { value: "1 dzień", label: "cel odpowiedzi na maila" },
];

export function Hero() {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-16 sm:pt-24">
        <p className="rise text-sm font-medium text-amber">Przyjmuję nowe projekty</p>
        <h1 className="rise mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-on-ink sm:text-6xl [animation-delay:80ms]">
          Strony, które tłumaczą ofertę i zbierają zapytania.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-on-ink-muted">
          Projektuję i wdrażam strony dla firm: co robicie, dla kogo i jak klient ma napisać.
          Bez szablonu, który wygląda jak każdy inny.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/wycena">Umów wycenę</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-on-ink/25 bg-transparent text-on-ink hover:bg-white/10"
          >
            <Link href="/#projekty">Zobacz realizacje</Link>
          </Button>
        </div>
        <dl className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 bg-ink-soft sm:grid-cols-3">
          {proof.map((item, index) => (
            <div
              key={item.label}
              className={
                index > 0
                  ? "border-t border-white/10 px-6 py-6 sm:border-l sm:border-t-0 sm:px-8"
                  : "px-6 py-6 sm:px-8"
              }
            >
              <dt className="text-4xl font-semibold tracking-[-0.04em] text-on-ink">{item.value}</dt>
              <dd className="mt-4 border-t border-amber/50 pt-3 text-sm text-on-ink-muted">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
