// textDisplay.tsx
"use client";
import { useEffect, useState } from "react";

interface TextDisplayProps {
  text: string;
}

const TextDisplay = ({ text }: TextDisplayProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // When the text changes, start the closing animation
    if (text !== displayText) {
      setIsClosing(true); // Start closing the current text

      // Wait for the closing animation to finish (0.5s), then update the text and start the opening animation
      setTimeout(() => {
        setDisplayText(text); // Update the text
        setIsClosing(false); // Start opening the new text
      }, 600); // Match the duration of the closing animation
    }
  }, [text, displayText]);

  return (
    <div className="overflow-hidden inline-block">
      <p
        className={`text-lg md:text-xl whitespace-nowrap border-r-2 border-r-black ${
          isClosing ? "animate-close" : "animate-typing"
        }`}
      >
        {displayText}
      </p>
    </div>
  );
};

export default TextDisplay;