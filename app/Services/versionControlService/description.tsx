"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCodeBranch, FaUsers, FaHistory, FaLock, FaArrowRight } from "react-icons/fa";

const VersionControlSection = () => {
  const features = [
    { 
      title: "Real-time Collaboration", 
      desc: "Work together with your team instantly, no conflicts or delays. See changes as they happen and communicate seamlessly within your workflow.",
      icon: <FaUsers className="text-4xl mb-4 text-blue-400" />,
      color: "bg-gradient-to-br from-blue-900 to-blue-700"
    },
    { 
      title: "Branch Management", 
      desc: "Easily create, merge, and manage branches without hassle. Our intuitive interface makes complex workflows simple and visual.",
      icon: <FaCodeBranch className="text-4xl mb-4 text-gray-400" />,
      color: "bg-gradient-to-br from-gray-900 to-gray-700"
    },
    { 
      title: "Seamless Code History", 
      desc: "Track every change, revert updates, and maintain a full history of your code. Never lose work and always know who changed what and when.",
      icon: <FaHistory className="text-4xl mb-4 text-gray-400" />,
      color: "bg-gradient-to-br from-gray-900 to-gray-700"
    },
    { 
      title: "Secure & Reliable", 
      desc: "Your code is safe with encrypted storage and reliable backups. Enterprise-grade security with fine-grained permission controls.",
      icon: <FaLock className="text-4xl mb-4 text-blue-400" />,
      color: "bg-gradient-to-br from-blue-900 to-blue-700"
    }
  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-white">
            Powerful Version Control Features
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Collaborate efficiently with our comprehensive version control system designed for modern development teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className={`h-full p-6 rounded-xl ${feature.color} shadow-lg transform transition-all duration-300 group-hover:scale-[1.02]`}>
                <div className="flex flex-col h-full">
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-200 mb-6 flex-grow">{feature.desc}</p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-end text-white cursor-pointer"
                  >
                    <span className="mr-2">Learn more</span>
                    <FaArrowRight />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default VersionControlSection;