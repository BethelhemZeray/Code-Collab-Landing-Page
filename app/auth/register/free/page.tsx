import React from "react";
import { usePlan } from "@/app/context/PlanContext";

const FreeRegisterPage = () => {
  const { plan } = usePlan();
  const isPremium = plan === "premium";

  return (
    <div className="w-full min-h-screen text-white p-4 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-700">
        {/* Plan indicator header */}
        <div
          className={`${
            isPremium
              ? "bg-gradient-to-r from-purple-600 to-blue-600"
              : "bg-gradient-to-r from-green-400 to-green-500"
          } p-4`}
        >
          <h1 className="text-2xl font-bold text-center">
            Create Your {isPremium ? "Premium" : "Free"} Account
          </h1>
          <p className="text-center text-sm mt-1 opacity-100">
            {isPremium
              ? "Unlock all premium features and exclusive content"
              : "Get started with our basic features"}
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Registration Form */}
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
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
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
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
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
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
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
                className="w-4 h-4 text-green-400 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                I agree to the{" "}
                <a href="#" className="text-green-300 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-300 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                isPremium
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:ring-white"
                  : "bg-green-600 hover:bg-green-400 focus:ring-green-300"
              } transition`}
            >
              {isPremium ? "Start Premium Membership" : "Create Free Account"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <a href="#" className="text-green-300 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeRegisterPage;
