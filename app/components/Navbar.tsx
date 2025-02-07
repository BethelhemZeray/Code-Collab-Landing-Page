"use client"; // Mark this as a Client Component

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../constants/navLinks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-2xl font-bold text-white">
          My Portfolio
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/s"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Navigation Links (Mobile) */}
        {isMenuOpen && (
          <ul className="lg:hidden absolute top-16 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={toggleMenu} // Close menu on link click
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}