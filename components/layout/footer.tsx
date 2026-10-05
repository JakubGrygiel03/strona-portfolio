import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-24 text-on-ink-muted md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="text-sm text-amber">{siteConfig.role}</p>
          <p className="mt-3 max-w-xs text-sm leading-6">{siteConfig.description}</p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-on-ink">Po starcie</h2>
          <p className="mt-3 max-w-xs text-sm leading-6">
            Zostaję jeszcze 30 dni, żeby poprawić to, co wyjdzie dopiero w codziennym użyciu.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-on-ink">Kontakt</h2>
          <a href={`mailto:${siteConfig.email}`} className="mt-3 block text-sm hover:text-on-ink">
            {siteConfig.email}
          </a>
          <div className="mt-4 flex gap-4 text-sm">
            <a href={siteConfig.github} className="hover:text-on-ink" rel="noreferrer" target="_blank">
              GitHub
            </a>
            <a href={siteConfig.linkedin} className="hover:text-on-ink" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-sm sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>
            <Link href="/wycena" className="hover:text-on-ink">
              Wycena
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
