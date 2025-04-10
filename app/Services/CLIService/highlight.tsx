'use client';
import React from 'react';
import { TerminalSquare, Rocket, Settings2 } from 'lucide-react';

const features = [
  {
    icon: <TerminalSquare className="h-8 w-8 text-blue-500 mx-auto md:mx-0" />,
    title: 'One-Command Deploy',
    description:
      'Push your entire app to production with a single command. No configs, no hassle.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-blue-500 mx-auto md:mx-0" />,
    title: 'Lightning Fast',
    description:
      'Built with performance in mind. Experience instant feedback and blazing-fast execution.',
  },
  {
    icon: <Settings2 className="h-8 w-8 text-blue-500 mx-auto md:mx-0" />,
    title: 'Customizable Workflows',
    description:
      'Define scripts, hooks, and templates to fit your exact development workflow.',
  },
];

const CLIHighlights = () => {
  return (
    <section className="w-full py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl text-blue-400 font-bold mb-4">Why CLI?</h2>
        <p className="text-white text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          Discover the key features that make CLI Titan the go-to tool for modern developers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 text-center md:text-left hover:shadow-md hover:shadow-blue-500/10 transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-blue-400 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CLIHighlights;
