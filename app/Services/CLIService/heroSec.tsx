"use client";
import React from "react";

const CLIHero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4  sm:px-6 lg:px-8 font-sans ">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <div className="space-y-6">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 leading-tight">
            Supercharge Your Workflow with CLI
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Built for speed. Designed for developers. Ready to deploy.
          </h2>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            A blazing-fast command-line tool for developers who want to automate
            tasks, scaffold apps, and deploy with a single command. No fluff,
            just power.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
            <a
              href="#docs"
              className="w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Read the Docs
            </a>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default CLIHero;
