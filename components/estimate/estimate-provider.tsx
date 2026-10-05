"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { BudgetRange, InquiryModule, ProjectType, Timeline } from "@/types/inquiry";

export interface BriefSelection {
  projectType: ProjectType;
  modules: InquiryModule[];
  scope: 1 | 2 | 3;
  budget: BudgetRange;
  timeline: Timeline;
}

const defaultBrief: BriefSelection = {
  projectType: "web-app",
  modules: ["cms"],
  scope: 2,
  budget: "25-50",
  timeline: "quarter",
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
    setBrief((current) => ({ ...current, ...patch }));
  }, []);
  const toggleModule = useCallback((moduleId: InquiryModule) => {
    setBrief((current) => ({
      ...current,
      modules: current.modules.includes(moduleId)
        ? current.modules.filter((item) => item !== moduleId)
        : [...current.modules, moduleId],
    }));
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
