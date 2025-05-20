import React from "react";
import Image from "next/image";

const ExpCard = () => {
  return (
    <section className="w-full min-h-screen py-32 md:py-24 lg:py-48 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Image Container (Left Side) */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/FileOrganization.jpg" 
                alt="Feature Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Text Content (Right Side) */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Simplify Your Workflow
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Our file management service is designed to help you organize, secure, and access your files effortlessly. Whether youre working remotely or in the office, our tools will streamline your workflow.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Effortless file organization",
                "Secure cloud storage",
                "Access files from any device",
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-6 h-6 text-purple-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpCard;