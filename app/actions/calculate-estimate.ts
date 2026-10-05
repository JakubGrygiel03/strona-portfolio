"use server";

import { buildEstimate } from "@/lib/estimate";
import { estimateInputSchema } from "@/lib/validations/inquiry";
import type { EstimateResult } from "@/types/inquiry";

export async function calculateEstimate(input: unknown): Promise<EstimateResult> {
  const parsed = estimateInputSchema.parse(input);
  return buildEstimate(parsed);
}
