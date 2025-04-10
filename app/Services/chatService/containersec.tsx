import React from "react";

const ContainerSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full px-4 py-6">
      <section className="w-full max-w-5xl bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 flex flex-col md:flex-row justify-between gap-6">
        
        {/* Left Side: Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Welcome to Our Service
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300">
            We offer top-notch solutions to help you manage your work with ease. 
            Experience seamless communication and collaboration with our platform’s 
            powerful features designed to enhance productivity and streamline your tasks.
          </p>
        </div>

        {/* Right Side: Content (Image/Media Placeholder) */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md aspect-square sm:aspect-[4/3]">
          <p className="text-center text-lg sm:text-xl text-gray-700">
            Image
          </p>
        </div>

      </section>
    </div>
  );
};

export default ContainerSection;
