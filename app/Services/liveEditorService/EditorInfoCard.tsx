"use client";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { items, items2 } from "../../constants/editorinfo";

const InfoCard = () => {

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-white px-4 py-6 md:px-12 bg-gradient-to-b bg-[length:400%] animate-gradient-bg">
      
      <div className="flex items-center justify-center w-full px-4 py-4">
      <div className="max-w-4xl w-full flex flex-col-reverse md:flex-col items-center justify-between md:space-x-24 space-y-8 md:space-y-14">
        
          {/* ✅ Left Side: Title & Description */}
          <div className="w-full md:w-1/3 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
              Live Editor
            </h2>
            <p className="text-white mt-4">
              Here is some important information about our services and features.
            </p>
          </div>

          {/* ✅ Right Side: Card Container */}
          <div className="w-full md:w-[55%] bg-blue-400 text-white shadow-2xl p-6 md:p-14 min-h-[300px] rounded-2xl">
            {/* ✅ List of Items */}
            <div className="space-y-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-800 p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* ✅ Icon */}
                  <div className="flex-shrink-0 mr-4">
                    <CheckCircleIcon className="w-6 h-6 text-blue-400" />
                  </div>

                  {/* ✅ Text */}
                  <div>
                    <p className="text-white">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Live Editor
          </h2>
          <p className="text-white mt-4">
            Here is some important information about our services and features.
          </p>
        </div>

        {/* ✅ Right Side: Second Card Container */}
        <div className="w-full md:w-[55%] bg-blue-400 text-white shadow-2xl p-6 md:p-14 min-h-[300px] rounded-2xl">
          {/* ✅ List of Items */}
          <div className="space-y-6">
            {items2.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800 p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                {/* ✅ Icon */}
                <div className="flex-shrink-0 mr-4">
                  <CheckCircleIcon className="w-6 h-6 text-blue-400" />
                </div>

                {/* ✅ Text */}
                <div>
                  <p className="text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
