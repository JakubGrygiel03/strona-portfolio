"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";
import { useCommandMenu } from "@/components/layout/command-menu";
import { StatusBadge } from "@/components/layout/status-badge";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "/#oferta", label: "Oferta" },
  { href: "/#projekty", label: "Realizacje" },
  { href: "/#proces", label: "Proces" },
  { href: "/wycena", label: "Wycena" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const { setOpen } = useCommandMenu();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="shrink-0 text-[15px] font-medium tracking-[-0.03em] text-on-ink sm:text-base"
          aria-label="Strona główna"
        >
          {siteConfig.name}
        </Link>
        <nav aria-label="Sekcje" className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-on-ink-muted transition-colors duration-200 hover:text-on-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <StatusBadge compact />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Szukaj na stronie"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-xl border border-line bg-surface text-muted transition-colors duration-200 hover:border-line-strong hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
          >
            <Search className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 cursor-pointer items-center rounded-xl border border-line bg-surface px-3 text-sm text-heading md:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobilne"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Zamknij" : "Menu"}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav id="menu-mobilne" aria-label="Sekcje na telefonie" className="border-t border-white/10 bg-ink px-4 py-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-11 items-center rounded-xl px-2 text-base text-on-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
