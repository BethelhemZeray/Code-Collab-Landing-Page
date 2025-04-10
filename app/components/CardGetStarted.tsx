"use client";

const Cards = () => {
  return (
    <section className="w-full py-12 flex justify-center px-4 sm:px-10">
      <div className="w-full max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-gray-500 rounded-xl shadow-2xl p-6 sm:p-12 text-center">
        {/* Card Title */}
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
          Start Coding in Seconds
        </h2>
        <span className="text-2xl sm:text-4xl font-bold text-white mb-6 block">
          With CodeCollab
        </span>

        {/* Subtitle */}
        <h3 className="text-lg sm:text-2xl text-white mb-8">
          Collaborate in real-time with ease
        </h3>

        {/* Card Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-4 sm:space-y-0">
          <button className="bg-white text-blue-500 py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 text-lg font-semibold">
            Get Started
          </button>
          <button className="bg-white text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 text-lg font-semibold">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
