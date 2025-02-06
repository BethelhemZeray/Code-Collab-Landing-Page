// components/SvgIcon.tsx
import React from "react";

interface SvgIconProps {
  fillPercentage: number; // Percentage of liquid fill (0 to 100)
}

const SvgIcon = ({ fillPercentage }: SvgIconProps) => {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Arrow Icon */}
      <path
        d="M12 4L12 20M12 20L18 14M12 20L6 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Liquid Fill */}
      <rect
        x="0"
        y={24 - (24 * fillPercentage) / 100} // Adjust Y position based on fill percentage
        width="24"
        height={(24 * fillPercentage) / 100} // Adjust height based on fill percentage
        fill="red"
      />
    </svg>
  );
};

export default SvgIcon;