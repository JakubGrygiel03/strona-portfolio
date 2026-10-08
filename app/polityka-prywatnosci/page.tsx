import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Jak GrygielStudio przetwarza dane z formularza wyceny. Bez śledzących skryptów reklamowych.",
  alternates: { canonical: "/polityka-prywatnosci" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-cobalt">Dokument</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-heading">Polityka prywatności</h1>
      <div className="mt-8 space-y-6 text-base leading-7 text-body">
        <p>
          {siteConfig.name} ({siteConfig.person}, {siteConfig.location}) przetwarza dane, które sam wpisujesz w
          formularzu wyceny: imię, adres e-mail, opcjonalnie nazwę firmy oraz opis projektu. Robię to wyłącznie po to,
          żeby odpowiedzieć na zapytanie i ustalić zakres strony.
        </p>
        <p>
          Wiadomość trafia na skrzynkę {siteConfig.email}. Jeśli skonfigurowany jest serwis poczty, dostajesz krótkie
          potwierdzenie ze skrótem wybranej konfiguracji. Jeśli skonfigurowana jest baza, treść zapytania jest w niej
          zapisana, żeby nie zgubić ustaleń. Nie sprzedaję tych danych i nie podłączam skryptów śledzących ani pikseli
          reklamowych.
        </p>
        <p>
          Dane trzymam tak długo, jak trwa rozmowa i — jeśli dojdzie do współpracy — realizacja projektu. Możesz
          poprosić o ich usunięcie, pisząc na {siteConfig.email} albo dzwoniąc pod {siteConfig.phoneDisplay}.
        </p>
        <p>
          Podstawą kontaktu jest Twoja wiadomość. Rozliczenia odbywają się na podstawie umowy o dzieło. Ta strona nie
          wystawia faktur.
        </p>
        <p>
          <Link href="/" className="font-medium text-heading underline decoration-cobalt decoration-2 underline-offset-4">
            Wróć na stronę główną
          </Link>
        </p>
      </div>
    </article>
  );
}
