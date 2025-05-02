"use client";
import React, { useState } from "react";
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
    <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6">
      <div className="p-8">
        <div className="uppercase tracking-wide text-xl text-indigo-300 font-semibold">
          {service.name}
        </div>
        <p className="mt-2 text-gray-300">{service.description}</p>
        
        <div className="mt-4">
          <h3 className="text-lg font-medium text-white">Features:</h3>
          <ul className="mt-2 list-disc list-inside text-gray-300">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={onSkipAll}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            Skip All
          </button>
          <button
            onClick={onNext}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            {isLast ? "Create Account" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDisplayCard;