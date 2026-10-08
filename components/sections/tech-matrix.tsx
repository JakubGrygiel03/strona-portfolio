import { Cloud, Code2, CreditCard, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { reveal } from "@/lib/reveal";

const groups: { title: string; icon: LucideIcon; lead: string; detail: string }[] = [
  {
    title: "Frontend i wygląd",
    icon: Code2,
    lead: "Next.js, React, Tailwind",
    detail:
      "Błyskawiczne ładowanie i unikalny styl. Strona nie pobiera dziesiątek zbędnych stylów szablonu. Kod i obrazy powstają w ułamku sekundy, a design jest dopasowany piksel po pikselu do Twojej branży.",
  },
  {
    title: "Baza i logika",
    icon: Database,
    lead: "Supabase, PostgreSQL",
    detail:
      "Bezpieczny sejf na dane Twoich klientów. Numery telefonów, formularze i historia rezerwacji są w szyfrowanej bazie, niedostępnej dla osób trzecich i botów spamujących.",
  },
  {
    title: "Infrastruktura",
    icon: Cloud,
    lead: "Docker, Vercel, chmura",
    detail:
      "Stabilność 24/7 bez opłat za tradycyjny hosting. Architektura bezserwerowa nie zawiesza się przy nagłym wzroście odwiedzin i nie wymaga comiesięcznego opłacania serwera.",
  },
  {
    title: "Płatności i kontakt",
    icon: CreditCard,
    lead: "BLIK, Przelewy24, Stripe, Resend",
    detail:
      "Szybkie płatności i pewne maile. Klient płaci BLIK-iem w kilka sekund, a potwierdzenia zamówień i rezerwacji lądują w skrzynce — bez gubienia się w spamie.",
  },
];

export function TechMatrix() {
  return (
    <section id="stack" className="border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Zaplecze"
          title="Technologie, które czuć na stronie."
          description="Nazwy frameworków są mniej ważne niż to, co z nich wynika: szybkość, spokój o dane i brak abonamentu za serwer."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {groups.map((group, index) => (
            <article key={group.title} {...reveal(index * 70)} className="rounded-2xl border border-line bg-surface p-5">
              <div className="flex items-center gap-3">
                <group.icon className="size-4 text-cobalt" aria-hidden="true" />
                <h3 className="text-sm font-medium text-heading">{group.title}</h3>
              </div>
              <p className="mt-3 text-xs font-medium text-cobalt">{group.lead}</p>
              <p className="mt-2 text-sm leading-6 text-body">{group.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
