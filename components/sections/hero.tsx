import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllProjects } from "@/content/projects";
import { siteConfig } from "@/lib/site";
import { pluralForm } from "@/lib/utils";

const examples = getAllProjects().length;

const proof = [
  {
    value: String(examples),
    label: `${pluralForm(examples, "działające wdrożenie", "działające wdrożenia", "działających wdrożeń")} w portfolio (sprawdź poniżej)`,
  },
  { value: "7–35 dni", label: "od wizytówki do sklepu, z czasem na sprawdzenie" },
  { value: "Bezpośrednio", label: "bez infolinii i bez handlowca" },
];

export function Hero() {
  return (
    <section className="relative z-10">
      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-16 sm:pt-24">
        <p className="rise text-sm font-medium text-amber">Przyjmuję projekty na bieżący miesiąc</p>
        <h1
          className="rise mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-on-ink sm:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          {siteConfig.headline}
        </h1>
        <p className="rise mt-6 max-w-2xl text-lg leading-8 text-on-ink-muted" style={{ animationDelay: "160ms" }}>
          Tworzę szybkie, przejrzyste strony dla każdego, kto chce jasno pokazać, czym się zajmuje — od firmy i
          fundacji po sklep i rzemiosło. Bez pośredników, bez ociężałych szablonów i bez zgadywania. Rozmawiasz
          bezpośrednio z programistą, który dba o każdy detal — od pierwszego szkicu po uruchomienie.
        </p>
        <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
          <Button asChild size="lg">
            <Link href="/#wycena">Wyceń swój projekt</Link>
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
        <dl
          className="rise mt-14 grid overflow-hidden rounded-2xl border border-white/10 bg-ink-soft sm:grid-cols-3"
          style={{ animationDelay: "340ms" }}
        >
          {proof.map((item, index) => (
            <div
              key={item.label}
              className={
                index > 0
                  ? "border-t border-white/10 px-6 py-6 sm:border-l sm:border-t-0 sm:px-8"
                  : "px-6 py-6 sm:px-8"
              }
            >
              <dt
                className={`font-semibold tracking-[-0.04em] text-on-ink ${item.value.length > 8 ? "text-3xl" : "text-4xl"}`}
              >
                {item.value}
              </dt>
              <dd className="mt-4 border-t border-amber/50 pt-3 text-sm text-on-ink-muted">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
