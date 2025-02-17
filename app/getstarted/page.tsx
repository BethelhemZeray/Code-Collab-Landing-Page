"use client";

import { useState } from "react";

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-black px-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Let&apos;s Get Started</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-blue text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Sign In Link */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </section>
  );
}
