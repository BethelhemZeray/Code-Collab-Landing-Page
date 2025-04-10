"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaSync, FaCode } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket size={50} className="text-blue-400 mb-4" />,
    title: "Ultra-Low Latency",
    description: "Experience real-time collaboration with near-instant video and code synchronization.",
  },
  {
    icon: <FaSync size={50} className="text-purple-400 mb-4" />,
    title: "Seamless Screen & Code Sharing",
    description: "Share your screen or live code effortlessly for a smooth collaboration experience.",
  },
  {
    icon: <FaCode size={50} className="text-yellow-400 mb-4" />,
    title: "Built for Developers",
    description: "Enhance team productivity with real-time coding, debugging, and pair programming.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full min-h-screen py-20 text-white text-center px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Title with Mobile Responsiveness */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-blue-400">
        The Feature of Video Call Service
      </h2>

      {/* Description with Mobile Responsiveness */}
      <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
        Our platform redefines **remote coding and video collaboration**, making it effortless for developers, teams, and tech professionals to work together in real time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-14 px-4 sm:px-6 md:px-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white w-90 h-80 text-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            {feature.icon}
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 mt-6">{feature.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
