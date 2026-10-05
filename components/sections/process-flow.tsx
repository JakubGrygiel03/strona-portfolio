import { HeartHandshake, MessageCircle, PenLine, Wrench } from "lucide-react";
import { TiltSurface } from "@/components/motion/tilt-surface";
import { SectionHeading } from "@/components/sections/section-heading";

const steps = [
  {
    icon: MessageCircle,
    title: "Rozmowa",
    detail: "Ustalamy, co strona ma załatwić i dla kogo. Bez listy życzeń, której nikt nie dowiezie.",
  },
  {
    icon: PenLine,
    title: "Szkic",
    detail: "Najpierw pokazuję układ: co jest na górze, gdzie jest oferta i jak się pisze.",
  },
  {
    icon: Wrench,
    title: "Budowa",
    detail: "Składam stronę i przechodzę ją tak, jak przejdzie ją klient — na telefonie i z klawiatury.",
  },
  {
    icon: HeartHandshake,
    title: "Start i 30 dni",
    detail: "Strona idzie na adres. Przez miesiąc poprawiam to, co wyjdzie dopiero w użyciu.",
  },
];

export function ProcessFlow() {
  return (
    <section id="proces" className="bg-surface pt-2 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Jak to wygląda"
          title="Cztery kroki. Po każdym wiesz, co masz w ręku."
          description="Każdy etap kończy się czymś, co da się zobaczyć i ocenić, zanim pójdziemy dalej."
        />
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="h-full">
              <TiltSurface>
                <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-obsidian p-5 transition-[border-color,box-shadow] duration-200 hover:border-cobalt/35 hover:shadow-[0_18px_36px_-24px_rgba(27,67,50,0.45)]">
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
