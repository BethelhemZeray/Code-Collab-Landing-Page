"use client";
import React from "react";
import { TService } from "@/app/constants/type";

interface ServiceDisplayCardProps {
  service: TService;
  onNext: () => void;
  onSkipAll: () => void;
  isLast: boolean;
}

const ServiceDisplayCard: React.FC<ServiceDisplayCardProps> = ({
  service,
  onNext,
  onSkipAll,
  isLast,
}) => {
  return (
    <div className="w-full h-full min-h-screen bg-gray-900 text-white px-8 py-12">
      <h1 className="text-4xl font-bold text-indigo-300 mb-4">{service.name}</h1>
      <p className="text-lg text-gray-300 mb-6">{service.description}</p>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Features:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-base">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex justify-between">
        <button
          onClick={onSkipAll}
          className="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
        >
          Skip All
        </button>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          {isLast ? "Create Account" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default ServiceDisplayCard;
