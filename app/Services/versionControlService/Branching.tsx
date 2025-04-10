"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCodeBranch } from "react-icons/fa";

const BranchingDiagram = () => {
  return (
    <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center px-6 py-12 text-white">
      {/* Git Branching Diagram on the Left */}
      <div className="flex flex-col items-center text-center md:text-left space-y-6 w-full md:w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-8 text-center md:text-left"
        >
          Visualize Git Branches
        </motion.h1>
        
        {/* Main Branch */}
        <div className="relative">
          <div className="w-20 h-2 bg-blue-600 rounded-md absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white"
          >
            <FaCodeBranch />
          </motion.div>
          <p className="mt-2 text-center text-gray-400">Main Branch</p>
        </div>

        {/* Branches */}
        <div className="flex justify-between w-3/4">
          <div className="relative">
            <div className="w-20 h-2 bg-green-500 rounded-md absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"
            >
              <FaCodeBranch />
            </motion.div>
            <p className="mt-2 text-center text-gray-400">Feature Branch 1</p>
          </div>
          <div className="relative">
            <div className="w-20 h-2 bg-red-500 rounded-md absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white"
            >
              <FaCodeBranch />
            </motion.div>
            <p className="mt-2 text-center text-gray-400">Feature Branch 2</p>
          </div>
        </div>
      </div>

      {/* Description Section on the Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 text-center md:text-left px-6"
      >
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          Git branching is an essential concept in version control systems like Git.
          It allows you to create separate lines of development, work on features independently,
          and then merge them back together seamlessly. Visualizing the branches helps understand
          the flow of changes and how they integrate.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default BranchingDiagram;
