// context/PlanContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";

type PlanType = "free" | "premium" | null;

interface PlanContextType {
  plan: PlanType;
  setPlan: (plan: PlanType) => void;
}

const PlanContext = createContext<PlanContextType>({
  plan: null,
  setPlan: () => {},
});

export const PlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<PlanType>(null);

  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => useContext(PlanContext);