import { siteConfig } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="o-mnie" className="bg-surface pt-16 pb-6">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-[16rem_1fr] md:gap-12">
        <img
          src="/jakub.jpg"
          alt={`${siteConfig.person}, ${siteConfig.name}`}
          width={1400}
          height={1750}
          className="aspect-[4/5] w-full max-w-64 rounded-2xl object-cover"
        />
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-cobalt">O mnie</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-heading sm:text-4xl">
            Jedna osoba od rozmowy do publikacji.
          </h2>
          <p className="mt-4 text-base leading-7 text-body">
            Jestem {siteConfig.person}. Prowadzę {siteConfig.name} sam: ustalam zakres, składam stronę i zostaję na
            poprawki po starcie. Nie jesteś numerem w kolejce agencji.
          </p>
        </div>
      </div>
    </section>
  );
}
