'use client';
import React from 'react';

const CLIHero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-20 font-sans">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-500 mb-4">
          Supercharge Your Workflow with CLI
        </h1>
        <h2 className="text-lg sm:text-xl text-white mb-6">
          Built for speed. Designed for developers. Ready to deploy.
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
          A blazing-fast command-line tool for developers who want to automate tasks, scaffold apps, and deploy with a single command. No fluff, just power.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <a
            href="#docs"
            className="border border-blue-500 text-blue-400 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Read the Docs
          </a>
        </div>
      </div>
    </section>
  );
};

export default CLIHero;
