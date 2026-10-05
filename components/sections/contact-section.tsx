"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { sendInquiry } from "@/app/actions/send-inquiry";
import { useBrief } from "@/components/estimate/estimate-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { budgetLabels, moduleOptions, projectTypeOptions, scopeLabels, timelineLabels } from "@/lib/brief-copy";
import { contactFieldsSchema, type ContactFields } from "@/lib/validations/inquiry";

export function ContactSection() {
  const { brief } = useBrief();
  const [pending, startTransition] = useTransition();
  const [sent, setSent] = useState<string | null>(null);
  const form = useForm<ContactFields>({
    resolver: zodResolver(contactFieldsSchema),
    defaultValues: { name: "", company: "", email: "", message: "", consent: false, website: "" },
  });

  function onSubmit(values: ContactFields) {
    if (values.website) {
      form.reset();
      toast.success("Dziękuję. Odezwę się na podany adres.");
      return;
    }
    const { consent: _consent, website: _website, ...fields } = values;
    startTransition(async () => {
      const result = await sendInquiry({ ...fields, ...brief });
      if (!result.ok) {
        toast.error(result.message);
        return;
      }
      const summary = briefSentence(brief);
      form.reset();
      setSent(summary);
      toast.success(
        result.delivery === "delivered"
          ? "Dziękuję. Odezwę się na podany adres."
          : "Dziękuję, wiadomość jest u mnie. Odezwę się na podany adres.",
      );
    });
  }

  return (
    <section id="kontakt" className="bg-ink py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-amber">Kontakt</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-on-ink sm:text-4xl">
            Napisz, czego potrzebujesz.
          </h2>
          <p className="mt-4 text-base leading-7 text-on-ink-muted">
            Do wiadomości dołączę rodzaj strony, czas i budżet z kalkulatora. Odpowiadam sam, zwykle w jeden dzień roboczy.
          </p>
        </div>
        <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-line bg-surface p-5 sm:p-6">
          {sent ? (
            <p role="status" className="rounded-xl border border-line bg-obsidian px-3 py-3 text-sm leading-6 text-body">
              Poszło z tym zakresem: {sent}
            </p>
          ) : (
            <p className="rounded-xl border border-line bg-obsidian px-3 py-3 text-sm leading-6 text-body">
              {briefSentence(brief)}
            </p>
          )}
          <Field label="Imię" error={form.formState.errors.name?.message}>
            <Input autoComplete="name" aria-invalid={Boolean(form.formState.errors.name)} {...form.register("name")} />
          </Field>
          <Field label="Firma" error={form.formState.errors.company?.message}>
            <Input autoComplete="organization" aria-invalid={Boolean(form.formState.errors.company)} {...form.register("company")} />
          </Field>
          <Field label="E-mail" error={form.formState.errors.email?.message}>
            <Input type="email" autoComplete="email" aria-invalid={Boolean(form.formState.errors.email)} {...form.register("email")} />
          </Field>
          <Field label="Opis projektu" error={form.formState.errors.message?.message}>
            <Textarea aria-invalid={Boolean(form.formState.errors.message)} {...form.register("message")} />
          </Field>
          <label className="flex items-start gap-3 text-sm leading-6 text-body">
            <input
              type="checkbox"
              className="mt-1 size-4 accent-ink"
              aria-invalid={Boolean(form.formState.errors.consent)}
              {...form.register("consent")}
            />
            <span>Zgadzam się na kontakt w sprawie tego zapytania na podany adres e-mail.</span>
          </label>
          {form.formState.errors.consent ? (
            <span role="alert" className="block text-xs text-[#7f1d1d]">
              {form.formState.errors.consent.message}
            </span>
          ) : null}
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
        </form>
      </div>
    </section>
  );
}

function briefSentence(brief: ReturnType<typeof useBrief>["brief"]) {
  const type = projectTypeOptions.find((option) => option.id === brief.projectType)?.label ?? "strona";
  const extras = brief.modules
    .map((id) => moduleOptions.find((option) => option.id === id)?.label)
    .filter((label): label is string => Boolean(label));
  const extraText = extras.length > 0 ? ` Dodatki: ${extras.join(", ")}.` : "";
  return `Chodzi o: ${type}. Zakres: ${scopeLabels[brief.scope]}. Budżet ${budgetLabels[brief.budget]}, termin: ${timelineLabels[brief.timeline]}.${extraText}`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
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
