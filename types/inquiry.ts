export const projectTypes = ["landing", "ecommerce", "web-app", "service"] as const;
export type ProjectType = (typeof projectTypes)[number];

export const budgetRanges = ["do-10", "10-25", "25-50", "50-plus"] as const;
export type BudgetRange = (typeof budgetRanges)[number];

export const timelines = ["asap", "1-2m", "quarter", "flexible"] as const;
export type Timeline = (typeof timelines)[number];

export const inquiryModules = ["payments", "cms", "booking", "blog", "mailing"] as const;
export type InquiryModule = (typeof inquiryModules)[number];

export interface EstimateInput {
  projectType: ProjectType;
  modules: InquiryModule[];
  scope: 1 | 2 | 3;
}

export interface EstimateResult {
  weeksMin: number;
  weeksMax: number;
  costMin: number;
  costMax: number;
  stack: string[];
  label: string;
}

export interface InquiryInput extends EstimateInput {
  name: string;
  company: string;
  email: string;
  message: string;
  budget: BudgetRange;
  timeline: Timeline;
}

export interface InquiryRecord extends InquiryInput {
  estimate: EstimateResult;
}

export type InquiryActionResult =
  | { ok: true; delivery: "delivered" | "logged" }
  | { ok: false; message: string };
