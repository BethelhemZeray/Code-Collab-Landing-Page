import React from "react";
import { usePlan } from "@/app/context/PlanContext";
import PricingCards from "./PremiumCard";
import PaymentForm from "./payment";

const PremiumRegisterPage = () => {
  const { plan } = usePlan();
  const isPremium = plan === "premium";

  return (
    <>
      <div className="w-full min-h-screen  text-white p-4 flex items-center justify-center">
        <div className="w-full mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl  border border-gray-700 flex">
          {/* Plan indicator header */}
          <div
            className={`${
              isPremium
                ? "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500"
                : "bg-gray-600"
            } p-4`}
          >
            <h1 className="text-2xl font-bold text-center">
              Create Your {isPremium ? "Premium" : "Free"} Account
            </h1>
            <p className="text-center text-sm mt-1 opacity-90">
              {isPremium
                ? "Unlock all premium features and exclusive content"
                : "Get started with our basic features"}
            </p>
          </div>

          <div className="p-6 space-y-6 flex flex-col items-center justify-center">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1 text-gray-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                  placeholder="youremail@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1 text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                  placeholder="••••••••"
                  minLength={8}
                  required
                />
                <p className="mt-1 text-xs text-gray-400">
                  Minimum 8 characters
                </p>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 text-yellow-500 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                  I agree to the{" "}
                  <a href="#" className="text-yellow-400 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-yellow-400 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500 transition ${
                  isPremium
                    ? "bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 shadow-lg shadow-yellow-500/20"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              >
                {isPremium ? "Next" : "Create Free Account"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <a href="#" className="text-yellow-400 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen text-white p-4 flex items-center justify-center">
        <PricingCards />
      </div>
      <div className="w-full min-h-screen text-white p-4 flex items-center justify-center">
        <PaymentForm />
      </div>
    </>
  );
};

export default PremiumRegisterPage;
