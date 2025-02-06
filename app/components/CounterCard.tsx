"use client";
import { useEffect, useRef } from "react";

interface CountProps {
  id: number;
  count: string;
  description: string;
}

const CounterCard = ({ count }: { count: CountProps }) => {
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
    <div className="">
      <div
        key={count.id}
        ref={cardRef}
        className="text-center p-6 rounded-2xl shadow-lg hover-glow bg-dark"
      >
        <h3 className="text-3xl font-bold text-white mb-2">{count.count}</h3>
        <p className="text-gray-300">{count.description}</p>
      </div>
    </div>
  );
};

export default CounterCard;
