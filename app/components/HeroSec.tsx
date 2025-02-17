"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

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
  const router = useRouter(); // Initialize the router

  // Function to navigate to the "Get Started" page
  const handleGetStarted = () => {
    router.push("/getstarted/"); 
  };

  const handleSignIn = () => {
    router.push("/signin/"); 
  };

  return (
    <section className="w-full bg-cover bg-black bg-center min-h-screen flex flex-col justify-center items-center text-white px-6 md:px-12">
      {/* Search Bar - Centered at the Top */}
      <div className="absolute top-24 w-full max-w-md">
        <div className="flex items-center bg-gray-900 px-4 py-3 w-full">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white px-2 py-2 w-full focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="text-gray-400 hover:text-white transition">
            🔍
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {hero.title}
        </h1>

        <p className="mt-10 text-lg md:text-xl text-gray-300">
          {hero.description}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          {/* Get Started Button */}
          <button
            type="button"
            onClick={handleGetStarted}
            className="group bg-white text-black font-bold px-8 py-3 rounded-md text-lg hover:bg-gray-200 transition duration-300 shadow-md flex items-center gap-2"
          >
            {hero.getStartedText}
            <span className="group-hover:hidden">&gt;</span>
            <span className="hidden group-hover:inline transition-all duration-300">→</span>
          </button>

          {/* Sign In Button */}
          <button 
            type="button"
            onClick={handleSignIn}
            className="group bg-gray-700 hover:bg-gray-800 text-white font-bold px-8 py-3 rounded-md text-lg transition duration-300 shadow-md flex items-center gap-2"
          >
            {hero.signInText}
            <span className="group-hover:hidden"> &gt; </span> 
          <span className="hidden group-hover:inline transition-all duration-300">
            →
          </span> 
        
          </button>
        </div>
      </div>
    </section>
  );
}
