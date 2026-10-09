import { Resend } from "resend";
import { budgetLabels, moduleLabel, timelineLabels } from "@/lib/brief-copy";
import { clientInquiryMail, ownerInquiryMail, type InquiryMailModel } from "@/lib/inquiry-mail";
import { siteConfig } from "@/lib/site";
import { daysLabel, formatPln } from "@/lib/utils";
import type { InquiryRecord } from "@/types/inquiry";

const studioFrom = "GrygielStudio <kontakt@grygielstudio.com>";

export async function sendInquiryEmail(
  record: InquiryRecord,
): Promise<{ sent: boolean; confirmed: boolean; reason?: "missing-key" | "error" }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return { sent: false, confirmed: false, reason: "missing-key" };

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL?.trim() || studioFrom;
  const to = process.env.INQUIRY_TO_EMAIL?.trim() || siteConfig.email;
  const model = mailModel(record);

  const owner = ownerInquiryMail(model);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: record.email,
    subject: `Nowe zapytanie: ${model.company} — ${model.packageLabel}`,
    html: owner.html,
    text: owner.text,
  });

  if (error) {
    console.error("Resend inquiry mail failed", error.message);
    return { sent: false, confirmed: false, reason: "error" };
  }

  const client = clientInquiryMail(model);
  const confirmation = await resend.emails.send({
    from,
    to: record.email,
    replyTo: to,
    subject: "Dostałem Twoją konfigurację — odezwę się w ciągu 24h",
    html: client.html,
    text: client.text,
  });

  if (confirmation.error) {
    console.error("Resend confirmation failed", confirmation.error.message);
    return { sent: true, confirmed: false };
  }

  return { sent: true, confirmed: true };
}

function mailModel(record: InquiryRecord): InquiryMailModel {
  const modules =
    record.modules.length > 0 ? record.modules.map((id) => moduleLabel(id)).join(", ") : "bez dodatków";
  const rush = record.estimate.rush
    ? `, w tym dopłata za ekspres ${formatPln(record.estimate.rushFeeMin)} – ${formatPln(record.estimate.rushFeeMax)}`
    : "";
  return {
    name: record.name,
    company: record.company.trim() || "osoba prywatna",
    email: record.email,
    message: record.message,
    packageLabel: record.estimate.label,
    modules,
    included: record.estimate.included.join(", "),
    budget: budgetLabels[record.budget],
    timeline: `${timelineLabels[record.timeline]}${record.estimate.rush ? " · dopłata 25%" : ""}`,
    range: `${daysLabel(record.estimate.daysMin, record.estimate.daysMax)}, ${formatPln(record.estimate.costMin)} – ${formatPln(record.estimate.costMax)}${rush}`,
    phoneDisplay: siteConfig.phoneDisplay,
    phoneHref: siteConfig.phoneHref,
    studioEmail: siteConfig.email,
  };
}
