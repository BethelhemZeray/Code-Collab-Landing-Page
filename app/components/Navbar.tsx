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
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-40">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo (Prevents Breaking into Two Lines) */}
          <Link href="/" className="text-2xl font-bold text-white whitespace-nowrap">
            Code Collab
          </Link>

          {/* Navigation Links (Desktop Only - Aligned Right) */}
          <ul className="hidden lg:flex space-x-8 ml-auto">
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

          {/* Toggle Button (Visible only on Mobile) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white bg-gray-800 p-2 rounded-md focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar Navigation (Mobile Only) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-64"
        } lg:hidden`} // Sidebar is hidden on desktop
      >
        {/* Logo or Brand Name */}
        <Link href="/" className="text-2xl font-bold text-white mb-8 block p-4">
          Code Collab
        </Link>

        {/* Navigation Links (Mobile Only) */}
        <ul className="space-y-6 p-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-6"
                onClick={toggleMenu} // Close menu on link click
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay to Close Sidebar when Clicking Outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
