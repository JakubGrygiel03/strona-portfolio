import { z } from "zod";

export const projectTypeSchema = z.enum(["landing", "ecommerce", "web-app", "service"]);
export const budgetSchema = z.enum(["do-10", "10-25", "25-50", "50-plus"]);
export const timelineSchema = z.enum(["asap", "1-2m", "quarter", "flexible"]);
export const moduleSchema = z.enum(["payments", "cms", "booking", "blog", "mailing"]);

export const estimateInputSchema = z.object({
  projectType: projectTypeSchema,
  modules: z.array(moduleSchema),
  scope: z.union([z.literal(1), z.literal(2), z.literal(3)]),
});

export const contactFieldsSchema = z.object({
  name: z.string().trim().min(2, "Podaj imię.").max(80),
  company: z.string().trim().min(2, "Podaj nazwę firmy.").max(120),
  email: z.string().trim().email("Podaj poprawny adres e-mail."),
  message: z.string().trim().min(20, "Opisz projekt w co najmniej 20 znakach.").max(2000),
  consent: z.boolean().refine((value) => value, { message: "Zaznacz zgodę na kontakt." }),
  website: z.string().max(0).optional(),
});

export const inquirySchema = contactFieldsSchema.omit({ consent: true, website: true }).extend({
  projectType: projectTypeSchema,
  budget: budgetSchema,
  timeline: timelineSchema,
  modules: z.array(moduleSchema),
  scope: z.union([z.literal(1), z.literal(2), z.literal(3)]),
});

export type ContactFields = z.infer<typeof contactFieldsSchema>;
export type InquiryPayload = z.infer<typeof inquirySchema>;
