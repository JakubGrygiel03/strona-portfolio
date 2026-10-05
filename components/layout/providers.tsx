"use client";

import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { EstimateProvider } from "@/components/estimate/estimate-provider";
import { CommandProvider } from "@/components/layout/command-menu";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <EstimateProvider>
      <CommandProvider>
        {children}
        <Toaster theme="light" position="top-center" />
      </CommandProvider>
    </EstimateProvider>
  );
}
