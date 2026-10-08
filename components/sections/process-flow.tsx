import { Globe, MessageCircle, Monitor, Sparkles } from "lucide-react";
import { TiltSurface } from "@/components/motion/tilt-surface";
import { SectionHeading } from "@/components/sections/section-heading";
import { reveal } from "@/lib/reveal";

const steps = [
  {
    icon: MessageCircle,
    title: "Rozmowa i notatki",
    detail:
      "Rozmawiamy przez telefon lub komunikator. Notuję Twoje potrzeby, przeglądamy strony referencyjne, które Ci się podobają, i ustalamy kluczowe funkcje. Dopiero na tej podstawie sporządzamy prostą umowę z gwarancją stałej ceny.",
  },
  {
    icon: Monitor,
    title: "Podgląd na żywo w trakcie prac",
    detail:
      "Nie czekasz w ciemno do końca projektu. Tworzę dla Ciebie prywatny link testowy (Vercel). Możesz na bieżąco, na własnym telefonie i komputerze, klikać roboczą wersję strony, sprawdzać działanie i zgłaszać swoje odczucia.",
  },
  {
    icon: Sparkles,
    title: "Szlifowanie detali",
    detail:
      "W trakcie budowy nie liczę każdej drobnej uwagi na stoperze. Zależy mi na tym, by strona była moją perełką w portfolio, a dla Ciebie powodem do dumy. Sam często proponuję ciekawe smaczki wizualne i usprawnienia.",
  },
  {
    icon: Globe,
    title: "Podpięcie domeny i start",
    detail:
      "Domenę podpinamy na samym końcu, dopiero gdy wszystko jest w 100% sprawdzone, przetestowane i zaakceptowane. Wtedy też następuje rozliczenie końcowe.",
  },
];

export function ProcessFlow() {
  return (
    <section id="proces" className="bg-obsidian py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Współpraca"
          title="Przejrzysty proces. Oglądasz stronę na żywo, zanim podepniemy domenę."
          description="Cztery kroki. Wiesz dokładnie, za co płacisz — bez niespodzianek w trakcie."
        />
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="h-full" {...reveal(index * 70)}>
              <TiltSurface>
                <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-5 transition-[border-color,box-shadow] duration-200 hover:border-cobalt/35 hover:shadow-[0_18px_36px_-24px_rgba(27,67,50,0.45)]">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-amber" />
                  <div className="flex items-center justify-between">
                    <step.icon className="size-5 text-cobalt" aria-hidden="true" />
                    <span className="text-sm font-medium text-cobalt">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-6 text-base font-medium tracking-[-0.02em] text-heading">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-body">{step.detail}</p>
                </div>
              </TiltSurface>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
