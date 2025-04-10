import React from "react";

interface CountProps {
  id: number;
  count: string;
  description: string;
  link: string;
}

const GlowCard = ({ count }: { count: CountProps }) => {
  return (
    <div className="group text-center p-12 rounded-2xl shadow-lg bg-gray-900 transition-transform transform hover:scale-105 hover:shadow-2xl hover:border hover:border-blue-400">
      <h3 className="text-3xl font-bold text-white mb-2">{count.count}</h3>
      <p className="text-gray-300">{count.description}</p>
      <a
        href="#"
        className="text-blue-400 mt-4 flex items-center justify-center gap-2 transition-all duration-300"
      >
        {count.link}
        <span className="group-hover:hidden"> &gt; </span>
        <span className="hidden group-hover:inline transition-all duration-300">
          →
        </span>
      </a>
    </div>
  );
};

export default GlowCard;
