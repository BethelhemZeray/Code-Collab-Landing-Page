import React from "react";
import { usePlan } from "@/app/context/PlanContext";

const FreeRegisterPage = () => {
  const { plan } = usePlan();
  const isPremium = plan === "premium";

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 flex items-center justify-center">

          <div className="max-w-md w-full mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-700">
              {/* Plan indicator header */}
              <div className={`${isPremium ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-700'} p-4`}>
                  <h1 className="text-2xl font-bold text-center">
                      Create Your {isPremium ? "Premium" : "Free"} Account
                  </h1>
                  <p className="text-center text-sm mt-1 opacity-90">
                      {isPremium
                          ? "Unlock all premium features and exclusive content"
                          : "Get started with our basic features"}
                  </p>
              </div>

              <div className="p-6 space-y-6">
                  {/* Value proposition */}
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h2 className="font-semibold text-lg mb-2">
                          {isPremium ? "✨ Premium Benefits" : "Free Plan Includes"}
                      </h2>
                      <ul className="text-sm space-y-2">
                          {isPremium ? (
                              <>
                                  <li className="flex items-center">
                                      <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                      </svg>
                                      Unlimited access to all features
                                  </li>
                                  <li className="flex items-center">
                                      <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                      </svg>
                                      Priority customer support
                                  </li>
                                  <li className="flex items-center">
                                      <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                      </svg>
                                      Exclusive content and resources
                                  </li>
                              </>
                          ) : (
                              <>
                                  <li className="flex items-center">
                                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                      </svg>
                                      Basic feature access
                                  </li>
                                  <li className="flex items-center">
                                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                      </svg>
                                      Community support
                                  </li>
                                  <li className="flex items-center">
                                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                      </svg>
                                      Limited content access
                                  </li>
                              </>
                          )}
                      </ul>
                  </div>

                  {/* Registration Form */}
                  <form className="space-y-4">
                      <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-300">
                              Full Name
                          </label>
                          <input
                              type="text"
                              id="name"
                              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="Your Full Name"
                              required />
                      </div>

                      <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">
                              Email Address
                          </label>
                          <input
                              type="email"
                              id="email"
                              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="youremail@example.com"
                              required />
                      </div>

                      <div>
                          <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-300">
                              Password
                          </label>
                          <input
                              type="password"
                              id="password"
                              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="••••••••"
                              minLength={8}
                              required />
                          <p className="mt-1 text-xs text-gray-400">Minimum 8 characters</p>
                      </div>
                      <div className="flex items-center">
                          <input
                              id="terms"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                              required />
                          <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                              I agree to the <a href="#" className="text-blue-400 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
                          </label>
                      </div>

                      <button
                          type="submit"
                          className={`w-full py-3 px-4 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition ${isPremium ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'bg-gray-600 hover:bg-gray-500'}`}
                      >
                          {isPremium ? 'Start Premium Membership' : 'Create Free Account'}
                      </button>
                  </form>

                  <p className="text-center text-sm text-gray-400">
                      Already have an account? <a href="#" className="text-blue-400 hover:underline">Sign in</a>
                  </p>
              </div>
          </div>
          </div>
  );
};

export default FreeRegisterPage;