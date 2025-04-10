"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

// Define the type for background elements
interface BackgroundElement {
  left: string;
  top: string;
  fontSize: string;
  duration: number;
}

export default function Hero() {
  const [backgroundElements, setBackgroundElements] = useState<BackgroundElement[]>([]);

  useEffect(() => {
    setBackgroundElements(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 30 + 10}px`,
        duration: Math.random() * 20 + 10,
      }))
    );
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-1 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden"
      >
        {backgroundElements.map((item, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-white opacity-100"
            style={{
              left: item.left,
              top: item.top,
              fontSize: item.fontSize,
            }}
          >
            {Math.random() > 0.5 ? "</>" : "{}"}
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
        >
          Revolutionize Your Development Workflow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto"
        >
          The next-generation version control system that brings your team together with powerful collaboration tools and unparalleled visibility.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-gray-600 rounded-full text-base sm:text-lg font-medium hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center mx-auto gap-2">
            Learn More
            <FaArrowRight />
          </button>
        </motion.div>
      </div>

      {/* Fixed Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-sm mb-2">Explore Features</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-gray-400 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
