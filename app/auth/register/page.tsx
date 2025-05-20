"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { usePlan } from "@/app/context/PlanContext";
import FreePlanRegister from "./free/page";
import PremiumRegisterPage from "./premium/page";

const RegisterPage = () => {
  const searchParams = useSearchParams();
  const { plan, setPlan } = usePlan();

  useEffect(() => {
    const planParam = searchParams.get("plan");
    console.log("plan: ", planParam)
    if (planParam === "free" || planParam === "premium") {
      setPlan(planParam);
    }
  }, [searchParams, setPlan]);

  return (
    <div className="min-h-screen text-white mb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold ">
          Create Your {plan === "premium" ? "Premium" : "Free"} Account
        </h1>
        <p className="mb-4 text-gray-400">
          {plan === "premium"
            ? <PremiumRegisterPage />
            : <FreePlanRegister />}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
