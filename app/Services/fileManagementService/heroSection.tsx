"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 md:px-12 py-8 md:py-16 text-white">
      
      {/* Animated Heading */}
      <motion.h1 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold mb-6 md:mb-8"
      >
        Secure & Smart File Management
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="text-xl md:text-2xl max-w-3xl text-gray-200 px-6 md:px-8"
      >
        Store, organize, and share files effortlessly with top-tier security and cloud access anywhere.
      </motion.p>

    </section>
  );
};

export default HeroSection;
