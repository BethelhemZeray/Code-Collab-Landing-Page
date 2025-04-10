"use client";
import React from "react";
import { FaVideo, FaUsers, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaPhone size={50} className="text-green-400 mb-4" />,
    title: "Start a Live Code Session",
    desc: "Kickstart a real-time collaboration session with a single click.",
  },
  {
    icon: <FaUsers size={50} className="text-blue-400 mb-4" />,
    title: "Invite Team Members",
    desc: "Share a unique link to invite developers to your coding session.",
  },
  {
    icon: <FaVideo size={50} className="text-purple-400 mb-4" />,
    title: "Code & Communicate Seamlessly",
    desc: "Work together in real-time with high-quality video & audio chat.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full min-h-screen text-white flex flex-col items-center py-20 px-4">
      
      {/* Responsive Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center leading-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Video Call <span className="text-blue-400">Service</span>
      </motion.h2>

      {/* Responsive Description */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Collaborate with your team in real-time through  **video conferencing**. Experience seamless **team discussions**, **code reviews**, and **bug fixing**, all in one place!
      </motion.p>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 w-full max-w-6xl px-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-6 md:p-8 rounded-2xl shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex items-center justify-center w-14 h-14 bg-gray-600 rounded-full mb-4">
              <span className="text-2xl font-bold text-white">{index + 1}</span>
            </div>
            {step.icon}
            <h3 className="text-lg sm:text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-sm sm:text-base text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <motion.button
        className="mt-12 px-6 py-3 md:px-8 md:py-3 bg-blue-400 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-600 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Read More
      </motion.button>
    </section>
  );
};

export default HowItWorks;
