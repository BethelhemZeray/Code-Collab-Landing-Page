// textLoop.tsx
"use client";
import React, { useState, useEffect } from "react";
import TextDisplay from "./textDisplay";

interface TextLoopProps {
    skills: string[];
}

const TextLoop = ({ skills }: TextLoopProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length); // Loop through texts
    }, 2000); // Change text every 2 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return <TextDisplay text={skills[currentIndex]} />;
};

export default TextLoop;
