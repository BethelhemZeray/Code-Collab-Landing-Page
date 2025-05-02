// app/getstarted/free/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchServices } from "@/redux/slices/serviceSlice";
import { useRouter } from "next/navigation";
import ServiceDisplayCard from "@/app/components/service_related/ServiceDisplayCard";

const PremiumPlanPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const services = useSelector((state: RootState) => state.service.services);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Filter free services
  const premiumServices = services.filter(service => service.type === "premium");

  useEffect(() => {
    const loadServices = async () => {
      try {
        await dispatch(fetchServices());
      } finally {
        setIsLoading(false);
      }
    };
    loadServices();
  }, [dispatch]);

  const handleNext = () => {
    if (currentIndex < premiumServices.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Last service - navigate to account creation
      router.push("/auth/register?plan=premium");
    }
  };

  const handleSkipAll = () => {
    // Skip all services and go directly to account creation
    router.push("/auth/register?plan=premium");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (premiumServices.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h2 className="text-2xl mb-4">No free services available</h2>
        <button
          onClick={() => router.push("/auth/register")}
          className="px-6 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition"
        >
          Create Account
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Free Plan Services</h1>
        <p className="text-gray-400">
          {currentIndex + 1} of {premiumServices.length} services
        </p>
      </div>

      <ServiceDisplayCard
        service={premiumServices[currentIndex]}
        onNext={handleNext}
        onSkipAll={handleSkipAll}
        isLast={currentIndex === premiumServices.length - 1}
      />
    </div>
  );
};

export default PremiumPlanPage;