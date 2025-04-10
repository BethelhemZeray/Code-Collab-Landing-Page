"use client";
import React from "react";
import { values } from "../constants/coreval";


const ValueCards = () => {
  return (
    <section className="w-full flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">3 Things We Value</h2>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {values.map((value) => (
          <div
            key={value.id}
            className="w-32 h-96 md:w-[300px] md:h-40 lg:w-[600px] lg:h-44 bg-gray-900 text-white p-6 flex flex-col items-center justify-center text-center rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-1"
          >
            <h3 className="text-xl font-semibold">{value.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueCards;
