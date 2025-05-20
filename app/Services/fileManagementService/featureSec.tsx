"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const FeatureSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 }); // Triggers when 30% of the section is visible

  return (
    <section ref={sectionRef} className="w-full min-h-screen py-52 text-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Feature Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Key Features of Our File Management Service
        </motion.h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Smart File Organization",
              description:
                "Automatically categorize and organize your code files for better structure and faster access.",
              image: "/images/FileOrganization.jpg",
            },
            {
              title: "Version Control for Files",
              description:
                "Track and manage every version of your code files to ensure collaboration without confusion.",
              image: "/images/VersionControl.jpg",
            },
            {
              title: "Secure File Sharing",
              description:
                "Share your code files with your team securely, ensuring only authorized users have access.",
              image: "/images/SecureFolder.jpg",
            },
            {
              title: "Collaboration Tools for Teams",
              description:
                "Collaborate with your team on files in real-time, making it easier to review and edit code together.",
              image: "/images/Collab.jpg",
            },
            {
              title: "File Backup & Recovery",
              description:
                "Ensure your code files are always backed up and easily recoverable in case of any data loss.",
              image: "/images/Recovery.jpg",
            },
            {
              title: "Cloud File Integration",
              description:
                "Seamlessly integrate your file management with the cloud for access from anywhere, anytime.",
              image: "/images/CloudIntegration.jpg",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <div className="mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              <a href="#" className="text-blue-400 hover:underline mt-4 block">
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
