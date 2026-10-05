export function AboutSection() {
  return (
    <section id="o-mnie" className="bg-surface pt-16 pb-6">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[auto_1fr] md:items-start">
        <p
          aria-hidden="true"
          className="grid size-20 place-items-center rounded-2xl bg-ink text-2xl font-semibold text-on-ink"
        >
          J
        </p>
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-cobalt">O mnie</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-heading sm:text-4xl">
            Jedna osoba od rozmowy do publikacji.
          </h2>
          <p className="mt-4 text-base leading-7 text-body">
            Jestem Jakub. Stronę prowadzę sam: ustalam zakres, składam ją i zostaję na poprawki po starcie.
            Nie jesteś numerem w kolejce agencji. Zdjęcie i dłuższe bio dołożę, kiedy będą gotowe — nie wstawiam
            stocku.
          </p>
        </div>
      </div>
    </section>
  );
}
