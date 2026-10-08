import Link from "next/link";
import { reveal } from "@/lib/reveal";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-24 text-on-ink-muted md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div {...reveal()}>
          <p className="text-sm text-amber">{siteConfig.role}</p>
          <p className="mt-3 max-w-xs text-sm leading-6">{siteConfig.description}</p>
        </div>
        <div {...reveal(70)}>
          <h2 className="text-sm font-medium text-on-ink">Po starcie</h2>
          <p className="mt-3 max-w-xs text-sm leading-6">
            Hosting w chmurze jest darmowy. Po starcie masz 30 dni wsparcia w cenie. Dalsza opieka, od około 40 zł albo
            100 zł miesięcznie, jest opcjonalna.
          </p>
        </div>
        <div {...reveal(140)}>
          <h2 className="text-sm font-medium text-on-ink">Kontakt</h2>
          <a href={siteConfig.phoneHref} className="mt-3 block text-sm text-on-ink hover:text-amber">
            {siteConfig.phoneDisplay}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-sm hover:text-on-ink">
            {siteConfig.email}
          </a>
          <p className="mt-3 text-sm leading-6">
            {siteConfig.location}. Projekty w całej Polsce, zdalnie.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10" {...reveal()}>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-sm sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="flex gap-4">
            <Link href="/wycena" className="hover:text-on-ink">
              Wycena
            </Link>
            <Link href="/polityka-prywatnosci" className="hover:text-on-ink">
              Polityka prywatności
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
