import { Resend } from "resend";
import { budgetLabels, moduleLabel, timelineLabels } from "@/lib/brief-copy";
import { daysLabel, formatPln } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import type { InquiryRecord } from "@/types/inquiry";

export async function sendInquiryEmail(
  record: InquiryRecord,
): Promise<{ sent: boolean; reason?: "missing-key" | "error" }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return { sent: false, reason: "missing-key" };

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL?.trim() || "GrygielStudio <onboarding@resend.dev>";
  const to = process.env.INQUIRY_TO_EMAIL?.trim() || siteConfig.email;
  const modules =
    record.modules.length > 0 ? record.modules.map((id) => moduleLabel(id)).join(", ") : "bez dodatków";
  const company = record.company.trim() || "osoba prywatna";
  const range = `${daysLabel(record.estimate.daysMin, record.estimate.daysMax)}, ${formatPln(record.estimate.costMin)} – ${formatPln(record.estimate.costMax)}`;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: record.email,
    subject: `Brief: ${company} — ${record.estimate.label}`,
    text: [
      `Imię: ${record.name}`,
      `Firma: ${company}`,
      `E-mail: ${record.email}`,
      `Pakiet: ${record.estimate.label}`,
      `Dodatki: ${modules}`,
      `W cenie: ${record.estimate.included.join(", ")}`,
      `Budżet klienta: ${budgetLabels[record.budget]}`,
      `Termin: ${timelineLabels[record.timeline]}${record.estimate.rush ? ` (ekspres, dopłata ${formatPln(record.estimate.rushFeeMin)} – ${formatPln(record.estimate.rushFeeMax)})` : ""}`,
      `Szacunek: ${range}`,
      "",
      record.message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend inquiry mail failed", error.message);
    return { sent: false, reason: "error" };
  }

  const confirmation = [
    "Cześć!",
    "",
    "Dzięki za kontakt i przesłanie wstępnej konfiguracji.",
    "",
    "Poniżej podsumowanie tego, co zaznaczyłeś w kalkulatorze:",
    `Pakiet: ${record.estimate.label}`,
    `Dodatki: ${modules}`,
    `Orientacyjnie: ${range}${record.estimate.rush ? ` (w tym dopłata za ekspres ${formatPln(record.estimate.rushFeeMin)} – ${formatPln(record.estimate.rushFeeMax)})` : ""}`,
    "",
    "Przejrzę to i odezwę się do Ciebie osobiście w ciągu 24h na telefon lub maila, żeby na spokojnie porozmawiać.",
    "",
    "– Jakub",
  ].join("\n");

  const confirmationResult = await resend.emails.send({
    from,
    to: record.email,
    subject: "Dostałem Twoją konfigurację — odezwę się w ciągu 24h",
    text: confirmation,
  });

  if (confirmationResult.error) {
    console.error("Resend confirmation failed", confirmationResult.error.message);
  }

  return { sent: true };
}
