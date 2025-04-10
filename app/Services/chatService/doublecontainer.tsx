import React from "react";

const DobContainer = () => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full px-4 py-6">
      <div className="w-full max-w-4xl bg-gradient-to-b from-pink-400 to-purple-400 shadow-lg rounded-xl p-4 sm:p-6 flex flex-col justify-center">
        
        {/* Image Container */}
        <div className="w-full min-h-[40vh] bg-gray-100 px-6 py-6 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-gray-700 text-lg sm:text-xl">Image</p>
        </div>
      </div>
    </section>
  );
};

export default DobContainer;
