"use client";

import { useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign In Submitted:", formData);
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-black px-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Sign In</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Forgot Password & Sign Up Links */}
        <p className="mt-4 text-center text-gray-600">
          <a href="/authentication/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </p>
        <p className="mt-2 text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/getstarted" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
}
