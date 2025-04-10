'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUserShield, FaKey } from 'react-icons/fa';

const AuthHero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center  px-4 sm:px-8 text-center overflow-hidden">
      <motion.div
        className="relative z-10 max-w-5xl"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-4 rounded-full shadow-xl">
            <FaLock className="text-4xl text-white animate-bounce" />
          </div>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text  text-blue-500 mb-6">
          Authentication You Can Trust
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 mt-12 px-4 leading-relaxed">
          Secure login, token-based sessions, and fine-grained access control to keep your codebase safe while enabling seamless collaboration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <FaLock />, label: 'End-to-End Encryption' },
            { icon: <FaUserShield />, label: 'Role-Based Access' },
            { icon: <FaKey />, label: 'Token Authentication' }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl border border-gray-700 flex items-center justify-center space-x-4 text-left"
            >
              <div className="text-blue-400 text-3xl">{item.icon}</div>
              <div className="text-lg sm:text-xl text-gray-200 font-semibold">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AuthHero;
