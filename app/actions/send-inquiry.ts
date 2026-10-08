"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { calculateEstimate } from "@/app/actions/calculate-estimate";
import { allowInquiry } from "@/lib/rate-limit";
import { sendInquiryEmail } from "@/lib/resend";
import { createServerSupabase } from "@/lib/supabase/server";
import { inquirySchema } from "@/lib/validations/inquiry";
import type { InquiryActionResult, InquiryRecord } from "@/types/inquiry";

const incomingSchema = inquirySchema.extend({
  website: z.string().max(200).optional(),
});

export async function sendInquiry(input: unknown): Promise<InquiryActionResult> {
  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!allowInquiry(ip)) {
    return { ok: false, message: "Za dużo wiadomości naraz. Spróbuj za kilka minut albo napisz e-mail." };
  }

  const parsed = incomingSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: "Sprawdź pola formularza i spróbuj ponownie." };
  }

  if (parsed.data.website?.trim()) {
    return { ok: true, delivery: "logged" };
  }

  parsed.data.name = oneLine(parsed.data.name);
  parsed.data.company = oneLine(parsed.data.company);
  parsed.data.email = oneLine(parsed.data.email);

  const { website: _trap, ...fields } = parsed.data;
  const estimate = await calculateEstimate({
    projectType: fields.projectType,
    modules: fields.modules,
  });
  const record: InquiryRecord = { ...fields, estimate };
  const stored = await storeInquiry(record);
  const mailed = await sendInquiryEmail(record);

  if (!stored && !mailed.sent && mailed.reason === "error") {
    return {
      ok: false,
      message: "Nie udało się wysłać zapytania. Napisz bezpośrednio na adres e-mail.",
    };
  }

  if (!stored && !mailed.sent) {
    console.info("[inquiry] fallback log", {
      company: record.company,
      email: record.email,
      projectType: record.projectType,
      days: `${estimate.daysMin}-${estimate.daysMax}`,
    });
    return { ok: true, delivery: "logged" };
  }

  return { ok: true, delivery: "delivered" };
}

async function storeInquiry(record: InquiryRecord): Promise<boolean> {
  const supabase = createServerSupabase();
  if (!supabase) return false;

  const { error } = await supabase.from("inquiries").insert({
    name: record.name,
    company: record.company,
    email: record.email,
    message: record.message,
    project_type: record.projectType,
    budget: record.budget,
    timeline: record.timeline,
    modules: record.modules,
    estimate: record.estimate,
  });

  if (error) {
    console.info("[inquiry] supabase fallback", error.message);
    return false;
  }

  return true;
}

function oneLine(value: string) {
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
}
