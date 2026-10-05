"use server";

import { calculateEstimate } from "@/app/actions/calculate-estimate";
import { sendInquiryEmail } from "@/lib/resend";
import { createServerSupabase } from "@/lib/supabase/server";
import { inquirySchema } from "@/lib/validations/inquiry";
import type { InquiryActionResult, InquiryRecord } from "@/types/inquiry";

export async function sendInquiry(input: unknown): Promise<InquiryActionResult> {
  const parsed = inquirySchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: "Sprawdź pola formularza i spróbuj ponownie." };
  }

  const estimate = await calculateEstimate({
    projectType: parsed.data.projectType,
    modules: parsed.data.modules,
    scope: parsed.data.scope,
  });
  const record: InquiryRecord = { ...parsed.data, estimate };
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
      weeks: `${estimate.weeksMin}-${estimate.weeksMax}`,
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
    scope: record.scope,
    estimate: record.estimate,
  });

  if (error) {
    console.info("[inquiry] supabase fallback", error.message);
    return false;
  }

  return true;
}
