"use client";
import React from 'react';
import Feature from './feaComp';
import { FaCodeBranch, FaShieldAlt, FaUsers } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="w-full min-h-screen py-16 px-6 sm:px-12 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-500 bg-clip-text">
          Why Choose Our Platform?
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          Designed for secure, collaborative, and streamlined development.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        <Feature
          icon={FaCodeBranch}
          title="Real-Time Collaboration"
          description="Work with your team on codebases in real-time without conflicts."
        />
        <Feature
          icon={FaShieldAlt}
          title="Security First"
          description="All operations are encrypted and securely managed end-to-end."
          delay={0.2}
        />
        <Feature
          icon={FaUsers}
          title="Team Management"
          description="Manage team roles, permissions, and workflows with ease."
          delay={0.4}
        />
      </div>

      {/* Attractive Description Below Cards */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-4">
          Empowering Developers, Teams & Enterprises
        </h3>
        <p className="text-gray-300 text-md sm:text-lg leading-relaxed">
          Our platform isn&apos;t just about authentication—it&apos;s about transforming the way teams collaborate securely.
          With lightning-fast sync, role-based permissions, and a commitment to privacy, we provide a foundation
          that developers and organizations can trust. <span className="text-blue-400 font-medium">Ship faster. Collaborate better. Stay secure.</span>
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
