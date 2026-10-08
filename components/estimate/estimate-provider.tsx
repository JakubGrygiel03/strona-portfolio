"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { packageById } from "@/lib/estimator-data";
import type { BudgetRange, InquiryModule, ProjectType, Timeline } from "@/types/inquiry";

export interface BriefSelection {
  projectType: ProjectType;
  modules: InquiryModule[];
  budget: BudgetRange;
  timeline: Timeline;
}

const defaultBrief: BriefSelection = {
  projectType: "one-page",
  modules: [],
  budget: "do-1500",
  timeline: "flexible",
};

interface BriefContextValue {
  brief: BriefSelection;
  update: (patch: Partial<BriefSelection>) => void;
  toggleModule: (moduleId: InquiryModule) => void;
}

const BriefContext = createContext<BriefContextValue | null>(null);

export function EstimateProvider({ children }: { children: ReactNode }) {
  const [brief, setBrief] = useState<BriefSelection>(defaultBrief);

  const update = useCallback((patch: Partial<BriefSelection>) => {
    setBrief((current) => {
      const next = { ...current, ...patch };
      if (patch.projectType) {
        const allowed = new Set(packageById(patch.projectType).allowedAddOnIds);
        next.modules = next.modules.filter((id) => allowed.has(id));
      }
      return next;
    });
  }, []);

  const toggleModule = useCallback((moduleId: InquiryModule) => {
    setBrief((current) => {
      const allowed = packageById(current.projectType).allowedAddOnIds;
      if (!allowed.includes(moduleId)) return current;
      return {
        ...current,
        modules: current.modules.includes(moduleId)
          ? current.modules.filter((item) => item !== moduleId)
          : [...current.modules, moduleId],
      };
    });
  }, []);

  const value = useMemo(() => ({ brief, update, toggleModule }), [brief, update, toggleModule]);

  return <BriefContext.Provider value={value}>{children}</BriefContext.Provider>;
}

export function useBrief() {
  const context = useContext(BriefContext);
  if (!context) {
    throw new Error("Konfigurator briefu jest poza EstimateProvider.");
  }
  return context;
}
