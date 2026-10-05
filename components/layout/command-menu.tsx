"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { getAllProjects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

interface CommandMenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CommandMenuContext = createContext<CommandMenuContextValue | null>(null);

const navigation = [
  { href: "/", label: "Start" },
  { href: "/#oferta", label: "Oferta" },
  { href: "/#projekty", label: "Realizacje" },
  { href: "/#o-mnie", label: "O mnie" },
  { href: "/#proces", label: "Proces" },
  { href: "/#wspolpraca", label: "Współpraca" },
  { href: "/#pytania", label: "Pytania" },
  { href: "/#stack", label: "Zaplecze" },
  { href: "/wycena", label: "Wycena" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function CommandProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <CommandMenuContext.Provider value={{ open, setOpen }}>
      {children}
      <CommandMenu />
    </CommandMenuContext.Provider>
  );
}

export function useCommandMenu() {
  const context = useContext(CommandMenuContext);
  if (!context) {
    throw new Error("Menu szukania jest poza CommandProvider.");
  }
  return context;
}

function CommandMenu() {
  const { open, setOpen } = useCommandMenu();
  const router = useRouter();
  const projects = getAllProjects();

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      toast.success("Adres e-mail skopiowany do schowka.");
      setOpen(false);
    } catch {
      toast.error("Nie udało się skopiować adresu. Jest w stopce strony.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0">
        <DialogTitle className="sr-only">Szukaj na stronie</DialogTitle>
        <DialogDescription className="sr-only">
          Nawigacja, projekty i kopiowanie adresu e-mail.
        </DialogDescription>
        <Command className="bg-surface text-heading" label="Szukaj na stronie">
          <Command.Input
            placeholder="Szukaj projektu, sekcji albo akcji..."
            className="h-12 w-full border-b border-line bg-transparent px-4 text-sm outline-none placeholder:text-muted"
          />
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
              Brak wyników dla tego zapytania.
            </Command.Empty>
            <Command.Group heading="Nawigacja" className="text-xs text-muted">
              {navigation.map((item) => (
                <Command.Item
                  key={item.href}
                  value={item.label}
                  onSelect={() => go(item.href)}
                  className="mt-1 cursor-pointer rounded-lg px-3 py-2 text-sm text-body data-[selected=true]:bg-surface-hover data-[selected=true]:text-heading"
                >
                  {item.label}
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group heading="Projekty" className="mt-2 text-xs text-muted">
              {projects.map((project) => (
                <Command.Item
                  key={project.slug}
                  value={`${project.title} ${project.client} ${project.technologies.join(" ")}`}
                  onSelect={() => go(`/case-study/${project.slug}`)}
                  className="mt-1 cursor-pointer rounded-lg px-3 py-2 text-sm text-body data-[selected=true]:bg-surface-hover data-[selected=true]:text-heading"
                >
                  <span className="text-heading">{project.title}</span>
                  <span className="ml-2 text-sm text-muted">{project.highlightMetric}</span>
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group heading="Akcje" className="mt-2 text-xs text-muted">
              <Command.Item
                value="kopiuj email wycena"
                onSelect={() => void copyEmail()}
                className="mt-1 cursor-pointer rounded-lg px-3 py-2 text-sm text-body data-[selected=true]:bg-surface-hover data-[selected=true]:text-heading"
              >
                Kopiuj e-mail
              </Command.Item>
              <Command.Item
                value="przejdz do wyceny brief"
                onSelect={() => go("/wycena")}
                className="mt-1 cursor-pointer rounded-lg px-3 py-2 text-sm text-body data-[selected=true]:bg-surface-hover data-[selected=true]:text-heading"
              >
                Przejdź do wyceny
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
