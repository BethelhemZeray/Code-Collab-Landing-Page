"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { usePlan } from "@/app/context/PlanContext";
// import RegistrationForm from "@/components/RegistrationForm";
// import PaymentIntegration from "@/components/PaymentIntegration";

const RegisterPage = () => {
  const searchParams = useSearchParams();
  const { plan, setPlan } = usePlan();

  useEffect(() => {
    const planParam = searchParams.get("plan");
    if (planParam === "free" || planParam === "premium") {
      setPlan(planParam);
    }
  }, [searchParams, setPlan]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          Create Your {plan === "premium" ? "Premium" : "Free"} Account
        </h1>
        <p className="mb-4 text-gray-400">
          {plan === "premium"
            ? "Unlock all features with our premium plan."
            : "Enjoy our free plan with limited features."}
        </p>

        {/* Registration Form Component */}
        {/* This is where you would include your registration form */}
        {/* For example: */}
        {/* <RegistrationForm /> */}

        {plan === "premium" && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            {/* Payment Integration Component */}
            {/* This is where you would integrate your payment system */}
            {/* <PaymentIntegration /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
