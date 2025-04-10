"use client";
import { motion } from "framer-motion";
import React from "react";  
import { FaCodeBranch, FaUsers, FaHistory, FaLock, FaArrowRight } from "react-icons/fa";
     
       const features = [
         { 
           title: "Real-time Collaboration", 
           desc: "Work together with your team instantly with live updates and conflict-free merging. See changes as they happen with our synchronized editing environment.",
           icon: <FaUsers className="text-5xl" />,
           color: "from-blue-600 to-blue-800"
         },
         { 
           title: "Branch Management", 
           desc: "Visualize and manage branches with our intuitive graph interface. Create, merge, and compare branches with just a few clicks.",
           icon: <FaCodeBranch className="text-5xl" />,
           color: "from-purple-600 to-purple-800"
         },
         { 
           title: "Code History", 
           desc: "Travel through time with our detailed version history. See who changed what and when, with powerful diff visualization tools.",
           icon: <FaHistory className="text-5xl" />,
           color: "from-green-600 to-green-800"
         },
         { 
           title: "Enterprise Security", 
           desc: "Military-grade encryption with fine-grained permissions. Sleep well knowing your code is protected with automatic backups and version snapshots.",
           icon: <FaLock className="text-5xl" />,
           color: "from-red-600 to-red-800"
         }
       ];{/* Features Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-gray-950">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Powerful Version Control Features
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`bg-gradient-to-br ${feature.color} rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className="bg-gray-900 rounded-xl p-8 h-full flex flex-col">
                  <div className="flex justify-center mb-6">
                    <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-full`}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-center mb-6 flex-grow">{feature.desc}</p>
                  <button className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    Learn more <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>