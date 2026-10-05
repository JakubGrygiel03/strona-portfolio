import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 py-24">
      <div className="rounded-3xl bg-ink px-6 py-12 text-on-ink sm:px-10">
        <p className="text-sm font-medium text-amber">Nie ma takiej strony</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">Ten adres się nie zgadza.</h1>
        <p className="mt-3 max-w-xl text-on-ink-muted">
          Wróć na początek albo przejdź do realizacji. Nic tu nie zginęło z Twojej winy.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/">Wróć na start</Link>
          </Button>
          <Button asChild variant="outline" className="border-on-ink/25 bg-transparent text-on-ink hover:bg-white/10">
            <Link href="/#projekty">Zobacz realizacje</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
