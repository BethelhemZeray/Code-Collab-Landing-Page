'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface FeatureProps {
  icon: IconType;
  title: string;
  description: string;
  delay?: number;
}

const Feature: React.FC<FeatureProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay,
      }
    }
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="relative group p-[2px] rounded-xl text-blue-500 transition-all duration-500"
    >
      <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center space-y-4 group-hover:bg-gray-800 transition-all duration-300">
        <div className="text-4xl text-blue-500">
          <Icon />
        </div>
        <h4 className="text-lg sm:text-xl font-semibold text-white">{title}</h4>
        <p className="text-sm sm:text-base text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default Feature;
