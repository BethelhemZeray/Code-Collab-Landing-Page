'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUserShield, FaSignInAlt, FaKey } from 'react-icons/fa';

const SecuritySection = () => {
  const features = [
    {
      icon: <FaLock />,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted both in transit and at rest using industry standards.',
    },
    {
      icon: <FaUserShield />,
      title: 'Zero Trust Architecture',
      description: 'Every access is verified with identity before granting permission.',
    },
    {
      icon: <FaSignInAlt />,
      title: 'OAuth 2.0 Integration',
      description: 'Seamless login with Google, GitHub, and other providers using OAuth 2.0 standards.',
    },
    {
      icon: <FaLock />,
      title: 'Multi-Factor Authentication',
      description: 'Add an extra layer of protection with secure 2FA and OTP login flows.',
    },
    {
      icon: <FaKey />,
      title: 'Token-Based Access',
      description: 'We use JWT and refresh tokens to ensure safe and time-bound access.',
    },
  ];

  return (
    <section className="relative w-full min-h-screen py-20 px-6 sm:px-12 text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-500 bg-clip-text tracking-wide shadow-lg"
        >
          Why Security First?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl border border-transparent hover:border-blue-500 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-3xl text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Security Impact
          </h3>
          <p className="text-gray-400 text-lg mb-4">
            Protecting over <span className="text-blue-400 font-semibold">1 hundred users</span> worldwide and blocking <span className="text-blue-400 font-semibold">99.99%</span> of security threats.
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-xl font-semibold text-gray-300">
              <p>Uptime</p>
              <p className="text-3xl text-blue-400">99.99%</p>
            </div>
            <div className="text-xl font-semibold text-gray-300">
              <p>Attacks Blocked</p>
              <p className="text-3xl text-blue-400">1.2 thousand</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-xl italic text-gray-300 mb-6">
            &quot;The security of this platform is unmatched. We feel confident knowing our data is always protected.&quot;
          </blockquote>
          <p className="font-semibold text-gray-400">- Bethelhem Zeray, CTO of SecureTech</p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#get-started"
            className="px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Learn More About Our Security Features
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SecuritySection;
