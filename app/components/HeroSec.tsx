"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface HeroProps {
  hero: {
    title: string;
    description: string;
    getStartedText: string;
    signInText: string;
  };
}
  
export default function Hero({ hero }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/getstarted/");
  };

  const handleSignIn = () => {
    router.push("/signin/");
  };

  return (
    <section className="w-full bg-center min-h-screen flex flex-col justify-center items-center text-white px-4 md:px-12">
      {/* Responsive Search Bar */}
      <div className="absolute top-24 w-full px-4">
        <div className="mx-auto w-full max-w-xs sm:max-w-md flex items-center bg-gray-700 px-4 py-2 sm:py-3 rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white px-2 py-2 w-full focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="text-blue-300 hover:text-white transition">🔍</button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-serif leading-tight">
          {hero.title}
        </h1>

        <p className="mt-10 text-lg md:text-xl font-sans text-gray-300">{hero.description}</p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5 w-full">
          {/* Get Started Button */}
          <button
            type="button"
            onClick={handleGetStarted}
            className="group w-full sm:w-auto bg-white text-black font-bold px-8 py-3 rounded-md text-lg hover:bg-gray-200 transition duration-300 shadow-md flex items-center justify-center gap-3"
          >
            <span>{hero.getStartedText}</span>
            <span className="relative w-5 flex items-center justify-center">
              <span className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                &gt;
              </span>
              <span className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                →
              </span>
            </span>
          </button>

          {/* Sign In Button */}
          <button
            type="button"
            onClick={handleSignIn}
            className="group w-full sm:w-auto bg-gray-700 hover:bg-gray-800 text-white font-bold px-8 py-3 rounded-md text-lg transition duration-300 shadow-md flex items-center justify-center gap-3"
          >
            <span>{hero.signInText}</span>
            <span className="relative w-5 flex items-center justify-center">
              <span className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                &gt;
              </span>
              <span className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                →
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
