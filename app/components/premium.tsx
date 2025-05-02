import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface PremiumPlanProps {
  onStart: () => void;
}

const Premium: React.FC<PremiumPlanProps> = ({ onStart }) => {
  return (
    <div className="w-full md:w-1/2 bg-blue-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
      <h3 className="text-2xl font-semibold text-center">Premium Plan</h3>
      <p className="text-gray-200 text-center mt-2">
        Unlock all advanced features for better productivity.
      </p>

      {/* ✅ Features List */}
      <ul className="mt-4 space-y-3">
        {[
          "Full UI kit & themes",
          "Priority customer support",
          "Access to premium templates",
        ].map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircleIcon className="w-5 h-5 text-yellow-300 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* ✅ Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={onStart}
          className="px-6 py-3 bg-yellow-500 text-gray-900 font-medium rounded-lg shadow-md transition hover:bg-yellow-400 hover:shadow-xl"
        >
          Get Started as Premium
        </button>
      </div>
    </div>
  );
};

export default Premium;
