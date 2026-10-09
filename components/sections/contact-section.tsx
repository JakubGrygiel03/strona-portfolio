"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState, useTransition, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { sendInquiry } from "@/app/actions/send-inquiry";
import { useBrief } from "@/components/estimate/estimate-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { budgetLabels, moduleLabel, projectTypeOptions, timelineLabels } from "@/lib/brief-copy";
import { reveal } from "@/lib/reveal";
import { siteConfig } from "@/lib/site";
import { contactFieldsSchema, type ContactFields } from "@/lib/validations/inquiry";

export function ContactSection() {
  const { brief } = useBrief();
  const [pending, startTransition] = useTransition();
  const [sentNote, setSentNote] = useState<string | null>(null);
  const form = useForm<ContactFields>({
    resolver: zodResolver(contactFieldsSchema),
    defaultValues: { name: "", company: "", email: "", message: "", website: "" },
  });

  function onSubmit(values: ContactFields) {
    if (values.website) {
      form.reset();
      setSentNote("Zapytanie przyjęte.");
      return;
    }
    const { website: _website, ...fields } = values;
    startTransition(async () => {
      const result = await sendInquiry({ ...fields, ...brief });
      if (!result.ok) {
        toast.error(result.message);
        return;
      }
      form.reset();
      if (result.delivery === "logged") {
        const note = `Zapytanie zapisane, ale mail nie wyszedł. Napisz też na ${siteConfig.email}.`;
        setSentNote(note);
        toast.error(note);
        return;
      }
      const note = result.confirmation
        ? "Zapytanie przyjęte. Podsumowanie poszło też na Twój e-mail. Odezwę się osobiście w ciągu 24 godzin."
        : "Zapytanie doszło do mnie. Potwierdzenie na Twój adres nie wyszło — odezwę się i tak w ciągu 24 godzin.";
      setSentNote(note);
      toast.success(note);
    });
  }

  return (
    <section id="kontakt" className="bg-ink py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="max-w-xl" {...reveal()}>
          <p className="text-sm font-medium text-amber">Kontakt</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-on-ink sm:text-4xl">
            Napisz, czego potrzebujesz.
          </h2>
          <p className="mt-4 text-base leading-7 text-on-ink-muted">
            Do wiadomości dołączę pakiet i dodatki z kalkulatora. Możesz też zadzwonić albo napisać na e-mail.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm">
            <a href={siteConfig.phoneHref} className="text-on-ink hover:text-amber">
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="text-on-ink-muted hover:text-on-ink">
              {siteConfig.email}
            </a>
            <p className="pt-2 text-on-ink-muted">
              {siteConfig.location}. Realizacje w całej Polsce, w pełni zdalnie.
            </p>
          </div>
        </div>
        <form
          noValidate
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 rounded-2xl border border-line bg-surface p-5 sm:p-6"
          {...reveal(80)}
        >
          {sentNote ? (
            <p role="status" className="rounded-xl border border-cobalt/20 bg-[#e8f2ec] px-3 py-3 text-sm leading-6 text-heading">
              {sentNote}
            </p>
          ) : (
            <p className="rounded-xl border border-line bg-obsidian px-3 py-3 text-sm leading-6 text-body">
              {briefSentence(brief)}
            </p>
          )}
          <Field label="Imię" error={form.formState.errors.name?.message}>
            <Input autoComplete="name" aria-invalid={Boolean(form.formState.errors.name)} {...form.register("name")} />
          </Field>
          <Field label="Firma (opcjonalnie)" error={form.formState.errors.company?.message}>
            <Input
              autoComplete="organization"
              placeholder="Zostaw puste, jeśli piszesz prywatnie"
              aria-invalid={Boolean(form.formState.errors.company)}
              {...form.register("company")}
            />
          </Field>
          <Field label="E-mail" error={form.formState.errors.email?.message}>
            <Input type="email" autoComplete="email" aria-invalid={Boolean(form.formState.errors.email)} {...form.register("email")} />
          </Field>
          <Field label="Opis projektu" error={form.formState.errors.message?.message}>
            <Textarea aria-invalid={Boolean(form.formState.errors.message)} {...form.register("message")} />
          </Field>
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="sr-only"
            {...form.register("website")}
          />
          <Button type="submit" disabled={pending} aria-busy={pending}>
            {pending ? "Wysyłanie…" : "Wyślij wiadomość"}
          </Button>
          <p className="text-sm leading-6 text-body">
            Nie wysyłam automatycznych formułek. Po otrzymaniu wiadomości odzywam się osobiście w ciągu 24 godzin —
            zgadujemy się na krótką, luźną rozmowę telefoniczną, wideocall lub kawę (jeśli jesteś na miejscu), żeby na
            spokojnie omówić Twój pomysł.
          </p>
          <p className="text-xs leading-5 text-muted">
            Wysyłając wiadomość, zgadzasz się na kontakt w sprawie wyceny. Dane służą wyłącznie do odpowiedzi.{" "}
            <Link href="/polityka-prywatnosci" className="underline decoration-line-strong underline-offset-2 hover:text-heading">
              Polityka prywatności
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  );
}

function briefSentence(brief: ReturnType<typeof useBrief>["brief"]) {
  const type = projectTypeOptions.find((option) => option.id === brief.projectType)?.label ?? "strona";
  const extras = brief.modules.map((id) => moduleLabel(id));
  const extraText = extras.length > 0 ? ` Dodatki: ${extras.join(", ")}.` : "";
  const rush = brief.timeline === "asap" ? " Ekspres jest dodatkowo płatny." : "";
  return `Chodzi o: ${type}. Budżet ${budgetLabels[brief.budget]}, termin: ${timelineLabels[brief.timeline]}.${extraText}${rush}`;
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-heading">{label}</span>
      {children}
      {error ? (
        <span role="alert" className="block text-xs text-[#7f1d1d]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
