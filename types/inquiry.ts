import { addOnIds, packageIds, type AddOnId, type PackageId } from "@/lib/estimator-data";

export const projectTypes = packageIds;
export type ProjectType = PackageId;

export const budgetRanges = ["do-1500", "1500-3500", "3500-7000", "7000-plus"] as const;
export type BudgetRange = (typeof budgetRanges)[number];

export const timelines = ["asap", "1-2m", "quarter", "flexible"] as const;
export type Timeline = (typeof timelines)[number];

export const inquiryModules = addOnIds;
export type InquiryModule = AddOnId;

export interface EstimateInput {
  projectType: ProjectType;
  modules: InquiryModule[];
}

export interface EstimateResult {
  daysMin: number;
  daysMax: number;
  costMin: number;
  costMax: number;
  stack: string[];
  included: string[];
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
