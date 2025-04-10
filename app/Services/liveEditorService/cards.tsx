import React from 'react';
import { editordata } from '../../constants/editor';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaCode } from 'react-icons/fa';

const LiveEditor = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-12 bg-gradient-to-b bg-[length:400%] animate-gradient-bg">
      
      <div className="flex flex-col sm:absolute sm:inset-4 md:inset-10 sm:flex-wrap sm:justify-between sm:items-center">
        {/* Icons for Mobile */}
        <div className="flex justify-center space-x-4 sm:hidden mb-8 "> 
          <div className="group relative flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-lg">
            <FaHtml5 className="text-orange-600 text-sm" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              HTML5
            </span>
          </div>
          <div className="group relative flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-lg">
            <FaCss3Alt className="text-blue-600 text-sm" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              CSS3
            </span>
          </div>
          <div className="group relative flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-lg">
            <FaJs className="text-yellow-500 text-sm" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              JavaScript
            </span>
          </div>
          <div className="group relative flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-lg">
            <FaReact className="text-blue-400 text-sm" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              React
            </span>
          </div>
          <div className="group relative flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-lg">
            <FaNodeJs className="text-green-600 text-sm" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Node.js
            </span>
          </div>
          <div className="group relative flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-lg">
            <FaCode className="text-purple-600 text-sm" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Code
            </span>
          </div>
        </div>

        <div className="hidden sm:flex">
          <div className="group absolute top-2 left-2 sm:top-6 sm:left-6 md:top-12 md:left-12 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg">
            <FaHtml5 className="text-orange-600 text-sm sm:text-xl md:text-3xl" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              HTML5
            </span>
          </div>
          <div className="group absolute top-2 right-2 sm:top-6 sm:right-6 md:top-12 md:right-12 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg">
            <FaCss3Alt className="text-blue-600 text-sm sm:text-xl md:text-3xl" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              CSS3
            </span>
          </div>
          <div className="group absolute bottom-2 left-2 sm:bottom-6 sm:left-6 md:bottom-12 md:left-12 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg">
            <FaJs className="text-yellow-500 text-sm sm:text-xl md:text-3xl" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              JavaScript
            </span>
          </div>
          <div className="group absolute bottom-2 right-2 sm:bottom-6 sm:right-6 md:bottom-12 md:right-12 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg">
            <FaReact className="text-blue-400 text-sm sm:text-xl md:text-3xl" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              React
            </span>
          </div>
          <div className="group absolute top-1/2 left-2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg">
            <FaNodeJs className="text-green-600 text-sm sm:text-xl md:text-3xl" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Node.js
            </span>
          </div>
          <div className="group absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg">
            <FaCode className="text-purple-600 text-sm sm:text-xl md:text-3xl" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Code
            </span>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="w-full max-w-4xl text-center mt-2 sm:mt-6 px-2 sm:px-4"> {/* Reduced mt for mobile */}
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight">
          {editordata?.[0]?.title}  
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 md:gap-10 w-full max-w-lg sm:max-w-2xl px-2 sm:px-4 mt-4 sm:mt-12"> {/* Reduced gap and mt for mobile */}
        
        {/* Card 1 */}
        <div className="w-full p-3 sm:p-6 md:p-8 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-gray-500 text-center transition-transform transform hover:scale-105 hover:opacity-90 hover:shadow-2xl duration-500">
          <h2 className="text-base sm:text-xl md:text-2xl font-semibold">Build Faster</h2>
          <p className="text-xs sm:text-base md:text-lg mt-2 sm:mt-3">Create projects quickly with our easy-to-use tools.</p>
          
          {/* Rectangular Box Inside */}
          <div className="mt-2 sm:mt-6 md:mt-8 bg-white text-gray-800 p-2 sm:p-4 rounded-lg shadow-lg border border-gray-300 mx-auto max-w-xs">
            <p className="text-xs sm:text-sm md:text-md font-bold">Speed up your development with modern UI/UX components.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full p-3 sm:p-6 md:p-8 rounded-xl shadow-lg bg-gradient-to-r from-gray-500 to-blue-500 text-center transition-transform transform hover:scale-105 hover:opacity-90 hover:shadow-2xl duration-500">
          <h2 className="text-base sm:text-xl md:text-2xl font-semibold">Optimized Performance</h2>
          <p className="text-xs sm:text-base md:text-lg mt-2 sm:mt-3">Experience smooth and fast performance.</p>
          
          {/* Rectangular Box Inside */}
          <div className="mt-2 sm:mt-6 md:mt-8 bg-white text-gray-800 p-2 sm:p-4 rounded-lg shadow-lg border border-gray-300 mx-auto max-w-xs">
            <p className="text-xs sm:text-sm md:text-md font-bold">Deliver faster, optimized user experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveEditor;