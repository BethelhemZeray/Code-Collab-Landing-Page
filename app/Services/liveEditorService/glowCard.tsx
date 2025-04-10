"use client";
import React from 'react';
import { useEffect, useRef } from "react";

interface CountProps {
  id: number;
  count: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const GlowCard = ({ count, icon }: { count: CountProps; icon: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top; 
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="text-center space-y-6 p-4 rounded-2xl stransition-transform transform hover:scale-105 hover:opacity-100 hover:shadow-2xl bg-gray-900 overflow-hidden group transition-all duration-300 w-full max-w-sm mx-auto sm:max-w-none"
    >
      <div className="flex justify-center items-center mb-6 text-3xl text-blue-400">
        {icon} {/* Render the icon */}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{count.count}</h3>
      <p className="text-sm sm:text-base text-gray-300 mb-4">{count.description}</p>
      <a
        href="#"
        className="text-blue-400 pt-4 flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base"
      >
        {count.link}
        <span className="group-hover:hidden"> &gt; </span> {/* Default: ">" */}
        <span className="hidden group-hover:inline transition-all duration-300">
          →
        </span> {/* On card hover: "→" */}
      </a>
    </div>
  );
};

export default GlowCard;