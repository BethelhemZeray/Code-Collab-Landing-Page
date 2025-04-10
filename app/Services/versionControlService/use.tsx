"use client";
import React from "react";
import { motion } from "framer-motion";

const gitFeatures = [
  { title: "🌍 Distributed Version Control", description: "Every developer has a full copy of the repository, ensuring no single point of failure." },
  { title: "🌿 Branching & Merging", description: "Work on new features without affecting the main code, and merge changes easily." },
  { title: "📌 Staging Area", description: "Prepare commits carefully before finalizing them to keep changes organized." },
  { title: "⚡ Lightweight & Fast", description: "Designed for speed, Git handles large projects efficiently." },
  { title: "🔗 Remote Collaboration", description: "Work together with teams using GitHub, GitLab, or Bitbucket." },
];

const GitInfo = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-white px-6 sm:px-10 py-12">
   
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700"
      >
        Why Use Git? 🚀
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl py-6">
        {gitFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
          >
            <h2 className="text-lg sm:text-2xl font-bold text-blue-300">{feature.title}</h2>
            <p className="text-gray-300 text-sm sm:text-md mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-8 sm:mt-10 bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg text-md sm:text-lg transition-all duration-300"
      >
        Learn More About Git
      </motion.button>
    </section>
  );
};

export default GitInfo;
