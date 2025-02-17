"use client";
import { useEffect, useRef } from "react";

interface CountProps {
  id: number;
  count: string;
  description: string;
  link:string;
}

const GlowCard = ({ count }: { count: CountProps }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Cursor X position relative to the card
        const y = e.clientY - rect.top; // Cursor Y position relative to the card
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
       className="text-left p-0.5 rounded-2xl shadow-lg hover-card bg-dark overflow-hidden group transition-all duration-300"
    >
      <div className="bg-dark h-full min-h-60 rounded-2xl p-8 space-y-4 opacity-98 transition-transform transform group-hover:scale-105">
        <h3 className="text-3xl font-bold text-white mb-2">{count.count}</h3>
        <p className="text-gray-300">{count.description}</p>

        {/* Default: "Learn more >", On Hover: "Learn more →" */}
        <a
          href="#"
          className="text-blue-400 pt-8 flex items-center gap-2 transition-all duration-300"
        >
          {count.link}
          <span className="group-hover:hidden"> &gt; </span> {/* Default: ">" */}
          <span className="hidden group-hover:inline transition-all duration-300">
            →
          </span> {/* On card hover: "→" */}
        </a>
    </div>
    </div>
  );
};

export default GlowCard;
