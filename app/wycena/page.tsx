import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { EstimatorWidget } from "@/components/sections/estimator-widget";

export const metadata: Metadata = {
  title: "Wycena",
  description: "Zaznacz rodzaj strony i dodatki, zobacz orientacyjny czas i koszt, a potem napisz.",
  openGraph: {
    title: "Wycena",
    description: "Zaznacz rodzaj strony i dodatki, zobacz orientacyjny czas i koszt, a potem napisz.",
    url: "/wycena",
  },
};

export default function WycenaPage() {
  return (
    <div className="pb-8">
      <div className="mx-auto max-w-6xl px-6 pt-16">
        <div className="rounded-3xl bg-ink px-6 py-12 text-on-ink sm:px-10">
          <p className="text-sm font-medium text-amber">Wycena</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Ułóż zakres, potem napisz.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-on-ink-muted">
            Zaznaczenia zostają, kiedy przejdziesz do wiadomości. Ceny są widełkami, nie obietnicą z ulotki.
          </p>
        </div>
      </div>
      <EstimatorWidget />
      <ContactSection />
    </div>
  );
}
