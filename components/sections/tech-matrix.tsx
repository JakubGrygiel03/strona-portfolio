import { Cloud, Code2, Container, CreditCard, Database, GitBranch, Mail, Server, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";

const groups: { title: string; items: { icon: LucideIcon; label: string }[] }[] = [
  {
    title: "Frontend",
    items: [
      { icon: Code2, label: "Next.js" },
      { icon: Workflow, label: "React" },
      { icon: Code2, label: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend i bazy",
    items: [
      { icon: Database, label: "Supabase" },
      { icon: Database, label: "PostgreSQL" },
      { icon: Server, label: "Zapis na serwerze" },
    ],
  },
  {
    title: "Integracje",
    items: [
      { icon: CreditCard, label: "Przelewy24 / Stripe" },
      { icon: Mail, label: "Resend" },
    ],
  },
  {
    title: "Narzędzia",
    items: [
      { icon: GitBranch, label: "Git" },
      { icon: Container, label: "Docker" },
      { icon: Cloud, label: "Vercel" },
    ],
  },
];

export function TechMatrix() {
  return (
    <section id="stack" className="border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Zaplecze"
          title="Z czego składam strony."
          description="Na stronie widać efekt. Ta lista jest po to, żeby było wiadomo, na czym to stoi i co da się później dołożyć."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {groups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-line bg-surface p-5">
              <h3 className="text-sm font-medium text-heading">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-sm text-body">
                    <item.icon className="size-4 text-cobalt" aria-hidden="true" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
