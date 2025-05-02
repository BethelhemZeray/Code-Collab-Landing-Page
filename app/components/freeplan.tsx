import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { TService } from "../constants/type";

interface FreePlanProps {
  onStart: () => void;
  servicesList: TService[]; 
}
const Free: React.FC<FreePlanProps> = ({ onStart }) => {
  return (
    <div className="w-full md:w-1/2 bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
      <h3 className="text-2xl font-semibold text-center">Free Plan</h3>
      <p className="text-gray-300 text-center mt-2">
        Get started with basic features at no cost.
      </p>

      {/* ✅ Features List */}
      <ul className="mt-4 space-y-3">
        {[
          "Basic UI components",
          "Limited access to templates",
          "Community support",
        ].map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* ✅ Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={onStart}
          className="px-6 py-3 bg-gray-600 text-white font-medium rounded-lg shadow-md transition hover:bg-gray-500 hover:shadow-xl"
        >
          Get Started for Free
        </button>
      </div>
    </div>
  );
};

export default Free;
