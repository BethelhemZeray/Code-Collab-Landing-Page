'use client';
import React from 'react';

const HowToUseCLI = () => {
  return (
    <section className="w-full py-20 px-6 sm:px-12 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400">
          How to Use CLI
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-12">
          CLI is built directly into your code editor—no setup, no downloads. Just open your terminal and go.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Step 1: Open the Terminal</h3>
            <p className="text-gray-300">Launch your code editor and open the integrated terminal. CLI is ready to use out of the box.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Step 2: Run a Command</h3>
            <p className="text-gray-300">Start by running any CLI command like <code className="bg-gray-700 px-2 py-1 rounded text-white"> new</code> to scaffold a new project or <code className="bg-gray-700 px-2 py-1 rounded text-white">help</code> to see all options.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Step 3: Automate with Ease</h3>
            <p className="text-gray-300">Use simple, intuitive commands to build, preview, and deploy your projects—all without leaving your editor.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseCLI;
