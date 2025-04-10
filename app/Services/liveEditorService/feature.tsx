'use client';
import React from 'react';
import Image from 'next/image';

const FeatureSection = () => {
  return (
    <section className="w-full py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-center">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center px-4 mb-8 md:mb-0">
        <Image
          src="/images/codeE.jpg"
          alt="Feature Illustration"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
      
      {/* Text & Features Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Choose Us?</h2>
        <p className="text-lg text-white mb-6">
          We provide the best tools and services to help you build, optimize, and scale your projects efficiently.
        </p>
        <ul className="text-white space-y-3">
          <li className="flex items-center"><span className="text-blue-500 text-xl mr-2">✔</span> High Performance</li>
          <li className="flex items-center"><span className="text-blue-500 text-xl mr-2">✔</span> Scalable Solutions</li>
          <li className="flex items-center"><span className="text-blue-500 text-xl mr-2">✔</span> User-Friendly Interface</li>
          <li className="flex items-center"><span className="text-blue-500 text-xl mr-2">✔</span> Reliable Support</li>
        </ul>
      </div>
    </section>
  );
};
export default FeatureSection;
