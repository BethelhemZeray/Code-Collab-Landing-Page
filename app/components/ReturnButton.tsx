"use client";
import { GoArrowUp } from "react-icons/go"; // Import an icon for the button
import { useEffect, useState } from "react";

const ReturnButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the hero section is in view, hide the button
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.5, // Adjust this value to control when the button hides/shows
      }
    );

    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  if (!isVisible) return null; // Hide the button if the hero section is in view

  return (
    <button
      onClick={scrollToHero}
      className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 button-return"
      aria-label="Return to top"
    >
      <GoArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ReturnButton;