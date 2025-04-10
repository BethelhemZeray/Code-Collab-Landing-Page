'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaDocker, FaArrowDown, FaServer, FaCode, FaShieldAlt, FaRocket, FaChevronRight } from 'react-icons/fa';

const DockerHero = () => {
  const features = [
    { icon: <FaServer />, text: "Consistency" },
    { icon: <FaCode />, text: "Speed" },
    { icon: <FaShieldAlt />, text: "Security" },
    { icon: <FaRocket />, text: "Deployment" },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      {/* Docker Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-600 text-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg mb-6"
      >
        <FaDocker className="text-4xl sm:text-5xl md:text-6xl" />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
      >
        Revolutionize Development with Docker
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 text-sm sm:text-base md:text-lg text-center text-gray-300 max-w-xl"
      >
        Build, ship, and run distributed applications faster with container technology.
      </motion.p>

      {/* Features Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
        className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl w-full"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-gray-800 rounded-lg p-4 sm:p-5 md:p-6 text-center border border-gray-700 hover:border-blue-400 transition-all"
          >
            <div className="text-blue-400 text-xl sm:text-2xl md:text-3xl mb-2">
              {feature.icon}
            </div>
            <p className="text-white text-sm sm:text-base">{feature.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10"
      >
        <button className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
          Learn More <FaChevronRight className="text-sm" />
        </button>
      </motion.div>

      {/* Down Arrow */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-10 text-gray-400 text-sm flex flex-col items-center"
      >
        <span>Explore More</span>
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default DockerHero;
