// hooks/useTypewriter.ts
'use client';

import { useState, useEffect } from 'react';

export function useTypewriter(
  texts: string[],
  typingSpeed: number = 50,
  deletingSpeed: number = 30,
  delayBetweenTexts: number = 2000
) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[currentIndex % texts.length];

    if (isTyping) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenTexts);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isTyping, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return displayedText;
}