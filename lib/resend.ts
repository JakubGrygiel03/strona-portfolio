import { Resend } from "resend";
import { budgetLabels, timelineLabels } from "@/lib/brief-copy";
import { formatPln } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import type { InquiryRecord } from "@/types/inquiry";

export async function sendInquiryEmail(
  record: InquiryRecord,
): Promise<{ sent: boolean; reason?: "missing-key" | "error" }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { sent: false, reason: "missing-key" };

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to: process.env.INQUIRY_TO_EMAIL ?? siteConfig.email,
    replyTo: record.email,
    subject: `Brief: ${record.company} — ${record.estimate.label}`,
    text: [
      `Imię: ${record.name}`,
      `Firma: ${record.company}`,
      `E-mail: ${record.email}`,
      `Typ: ${record.estimate.label}`,
      `Budżet klienta: ${budgetLabels[record.budget]}`,
      `Termin: ${timelineLabels[record.timeline]}`,
      `Moduły: ${record.modules.join(", ") || "brak"}`,
      `Zakres: ${record.scope}/3`,
      `Szacunek: ${record.estimate.weeksMin}–${record.estimate.weeksMax} tyg., ${formatPln(record.estimate.costMin)} – ${formatPln(record.estimate.costMax)}`,
      "",
      record.message,
    ].join("\n"),
  });

  if (error) return { sent: false, reason: "error" };

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to: record.email,
    subject: "Dostałem brief",
    text: [
      `${record.name}, dziękuję za wiadomość.`,
      `Chodzi o: ${record.estimate.label}.`,
      `Termin, o którym piszesz: ${timelineLabels[record.timeline]}. Budżet: ${budgetLabels[record.budget]}.`,
      `Orientacyjnie: ${record.estimate.weeksMin}–${record.estimate.weeksMax} tyg., ${formatPln(record.estimate.costMin)} – ${formatPln(record.estimate.costMax)}.`,
      "Końcową wycenę potwierdzę po rozmowie. Odezwę się na ten adres.",
    ].join("\n"),
  });

  return { sent: true };
}
