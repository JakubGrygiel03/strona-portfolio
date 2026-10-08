import { z } from "zod";
import { addOnIds, packageIds } from "@/lib/estimator-data";

export const projectTypeSchema = z.enum(packageIds);
export const budgetSchema = z.enum(["do-1500", "1500-3500", "3500-7000", "7000-plus"]);
export const timelineSchema = z.enum(["asap", "1-2m", "quarter", "flexible"]);
export const moduleSchema = z.enum(addOnIds);

const modulesField = z.array(moduleSchema).max(moduleSchema.options.length);

export const estimateInputSchema = z.object({
  projectType: projectTypeSchema,
  modules: modulesField,
});

export const contactFieldsSchema = z.object({
  name: z.string().trim().min(2, "Podaj imię.").max(80),
  company: z.string().trim().max(120),
  email: z.string().trim().email("Podaj poprawny adres e-mail.").max(160),
  message: z.string().trim().min(20, "Opisz projekt w co najmniej 20 znakach.").max(2000),
  website: z.string().max(0).optional(),
});

export const inquirySchema = contactFieldsSchema.omit({ website: true }).extend({
  projectType: projectTypeSchema,
  budget: budgetSchema,
  timeline: timelineSchema,
  modules: modulesField,
});

export type ContactFields = z.infer<typeof contactFieldsSchema>;
export type InquiryPayload = z.infer<typeof inquirySchema>;
