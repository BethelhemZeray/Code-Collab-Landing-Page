import React from "react";
import Free from "../../components/freeplan";
import Premium from "../../components/premium";

const GetStartedCard = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-white px-4 md:px-12 py-32">  
      {/* ✅ Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center">Get Started</h2>
      <p className="text-lg sm:text-xl text-gray-300 mt-2 text-center">
        Choose the best plan and start your journey today!
      </p>

      {/* ✅ Plan Cards Container */}
      <div className="flex flex-col md:flex-row gap-6 mt-6 w-full max-w-4xl">
        <Free />
        <Premium />
      </div>

    </section>
  );
};

export default GetStartedCard;
