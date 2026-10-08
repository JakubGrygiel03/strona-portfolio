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
  { href: "/#wycena", label: "Wycena" },
  { href: "/#kontakt", label: "Kontakt" },
];

function scrollToSection(event: { preventDefault(): void }, href: string) {
  if (window.location.pathname !== "/") return;
  const id = href.split("#")[1];
  const node = id ? document.getElementById(id) : null;
  if (!node) return;
  event.preventDefault();
  node.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(history.state, "", href);
}

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
          onClick={(event) => {
            if (window.location.pathname !== "/") return;
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (window.location.hash) history.replaceState(history.state, "", "/");
          }}
        >
          {siteConfig.name}
        </Link>
        <nav aria-label="Sekcje" className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-on-ink-muted transition-colors duration-200 hover:text-on-ink"
              onClick={(event) => scrollToSection(event, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <StatusBadge compact className="hidden md:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Szukaj na stronie"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-xl border border-line bg-surface text-muted transition-[color,transform] duration-200 hover:border-line-strong hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt active:scale-95"
          >
            <Search className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 cursor-pointer items-center rounded-xl border border-line bg-surface px-3 text-sm text-heading transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt active:scale-95 md:hidden"
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
              onClick={(event) => {
                setMenuOpen(false);
                scrollToSection(event, link.href);
              }}
              className="flex min-h-11 items-center rounded-xl px-2 text-base text-on-ink transition-transform duration-200 active:scale-95"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
