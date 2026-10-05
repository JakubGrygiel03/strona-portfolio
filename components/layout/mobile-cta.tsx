import Link from "next/link";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink p-3 md:hidden">
      <Link
        href="/wycena"
        className="flex h-12 items-center justify-center rounded-xl bg-cobalt text-sm font-medium text-on-accent"
      >
        Umów wycenę
      </Link>
    </div>
  );
}
