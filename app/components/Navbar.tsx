"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../constants/navLinks";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-40">
        <div className="w-full mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white whitespace-nowrap"
          >
            <Logo />
          </Link>

          {/* Navigation Links (Desktop) */}
          <ul className="hidden lg:flex space-x-8 ml-auto">
            {navLinks.map((link) => (
              <li key={link.title} className="relative group">
                {link.dropdown ? (
                  <div>
                    <button
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none"
                      onClick={() => toggleDropdown(link.title)}
                    >
                      {link.title}
                      {activeDropdown === link.title ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                    <ul
                      className={`absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-lg transition-all duration-500 ease-in-out overflow-hidden opacity-0 group-hover:opacity-100 group-hover:max-h-96 max-h-0 p-4`}
                    >
                      {link.dropdown.map((service) => (
                        <li key={service.title}>
                          <Link
                            href={service.href}
                            className="block px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    href={link.href || `#${link.title}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Toggle Button (Mobile) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white bg-gray-900 p-2 rounded-md focus:outline-none"
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
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 transform transition-transform duration-300 lg:hidden">
          <Link
            href="/"
            className="text-2xl font-bold text-white mb-2 block p-4"
          >
            <Logo />
          </Link>

          <ul className="space-y-2 p-2">
            {navLinks.map((link) => (
              <li key={link.title} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.title)}
                      className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-colors duration-500 px-3 py-2"
                    >
                      {link.title}
                      {activeDropdown === link.title ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                    <ul
                      className={`mt-2 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
                        activeDropdown === link.title
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {link.dropdown.map((service) => (
                        <li key={service.title}>
                          <Link
                            href={service.href}
                            className="block px-4 py-2 text-gray-900 hover:bg-gray-700 hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2"
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    href={link.href || `#${link.title}`}
                    className="block text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2"
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}