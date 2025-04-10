"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaVideo, FaLock, FaUsers } from "react-icons/fa";

const messages = [
  "Collaborate in real-time with seamless video integration.",
  "Code, share, and discuss with your team effortlessly.",
  "Experience lag-free collaboration with crystal-clear video and audio.",
];

const HeroSection = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen text-white flex flex-col items-center">
      {/* Hero Content */}
      <header className="w-full text-center pt-28 px-6">
        <h1 className="text-5xl font-bold mb-12">Seamless Video Calling, Anytime, Anywhere</h1>
        {/* <p className="text-lg text-gray-200 max-w-2xl mx-auto mt-6">
          Experience high-quality, secure, and real-time video calling with just one click. No downloads, no hassle.
        </p> */}

        {/* Additional Animated Text Below Header */}
        <motion.p
          key={currentMessageIndex}
          className="text-3xl text-blue-400 font-semibold max-w-2xl mx-auto mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
        >
          {messages[currentMessageIndex]}
        </motion.p>
      </header>

      {/* Key Features Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 px-6">
        {[
          { icon: <FaVideo size={50} className="text-blue-400 mb-4" />, title: "Crystal-Clear Video", desc: "Enjoy HD video quality with optimized bandwidth usage." },
          { icon: <FaLock size={50} className="text-green-400 mb-4" />, title: "End-to-End Encryption", desc: "Your calls are fully secured with advanced encryption." },
          { icon: <FaUsers size={50} className="text-purple-400 mb-4" />, title: "Group Collaboration", desc: "Share your screen and code with your team in real-time." }
        ].map((feature, index) => (
          <div key={index} className="bg-gray-100 text-gray-800 p-6 rounded-3xl shadow-md flex flex-col items-center text-center">
            {feature.icon}
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
