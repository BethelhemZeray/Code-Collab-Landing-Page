
import React, { useRef } from "react";
import { usePlan } from "@/app/context/PlanContext";
import PricingCards from "./PremiumCard";
import PaymentForm from "./payment";
import { Crown } from "lucide-react";

const PremiumRegisterPage = () => {
  const { plan } = usePlan();
  const isPremium = plan === "premium";
  const pricingCardsRef = useRef<HTMLDivElement>(null);
  const paymentFormRef = useRef<HTMLDivElement>(null);

  const handleNextClick = (section: 'pricing' | 'payment') => {
    // Log all input values before scrolling
    const name = (document.getElementById('name') as HTMLInputElement)?.value;
    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const password = (document.getElementById('password') as HTMLInputElement)?.value;
    const terms = (document.getElementById('terms') as HTMLInputElement)?.checked;

    console.log('Form values:', {
      name,
      email,
      password,
      agreedToTerms: terms
    });

    // Scroll to the appropriate section
    if (section === 'pricing' && pricingCardsRef.current) {
      pricingCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'payment' && paymentFormRef.current) {
      paymentFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="w-full min-h-screen text-white p-4 flex items-center justify-center">
        <div className="w-full mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700 flex">
          <div className={`${
            isPremium
              ? "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500"
              : "bg-gray-600"
          } p-4`}>
            {isPremium && (
              <div className="flex justify-center mt-2 animate-bounce">
                <Crown className="w-10 h-10 text-yellow-400 transition-transform duration-500 hover:scale-125" />
              </div>
            )}
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
            <form className="space-y-4 w-full">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-300">
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
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">
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
                <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-300">
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

              <div className="flex items-center justify-between">
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
                  type="button"
                  onClick={() => handleNextClick('pricing')}
                  className="ml-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition"
                >
                  Next
                </button>
              </div>
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

      <div ref={pricingCardsRef} className="w-full min-h-screen text-white p-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mb-8">
          <PricingCards />
        </div>
        <button
          type="button"
          onClick={() => handleNextClick('payment')}
          className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition transform hover:scale-105"
        >
          Proceed to Payment
        </button>
      </div>

      <div ref={paymentFormRef} className="w-full min-h-screen text-white p-4 flex items-center justify-center">
        <PaymentForm />
      </div>
    </>
  );
};

export default PremiumRegisterPage;