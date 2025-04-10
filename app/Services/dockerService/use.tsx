"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaDownload } from "react-icons/fa";
import React from "react";

const techStacks = ["Node.js", "Python", "Go", "Java"];
const dockerCommands = {
  "Node.js": [
    "FROM node:latest",
    "WORKDIR /app",
    "COPY . .",
    "RUN npm install",
    "CMD [\"node\", \"index.js\"]"
  ],
  "Python": [
    "FROM python:latest",
    "WORKDIR /app",
    "COPY . .",
    "RUN pip install -r requirements.txt",
    "CMD [\"python\", \"app.py\"]"
  ],
  "Go": [
    "FROM golang:latest",
    "WORKDIR /app",
    "COPY . .",
    "RUN go build -o app",
    "CMD [\"./app\"]"
  ],
  "Java": [
    "FROM openjdk:latest",
    "WORKDIR /app",
    "COPY . .",
    "RUN javac Main.java",
    "CMD [\"java\", \"Main\"]"
  ]
};

export default function DockerSimulator() {
  const [selectedTech, setSelectedTech] = useState<keyof typeof dockerCommands>("Node.js");
  const [executedSteps, setExecutedSteps] = useState<string[]>([]);

  const handleRun = () => {
    if (executedSteps.length < dockerCommands[selectedTech].length) {
      setExecutedSteps(prev => [...prev, dockerCommands[selectedTech][prev.length]]);
    }
  };

  const allCommandsExecuted = executedSteps.length === dockerCommands[selectedTech].length;

  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6 flex flex-col items-center text-center">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl font-bold mb-6 text-blue-400">
        Build Your First Docker Container
      </motion.h1>
      
      {/* Tech Selection */}
      <label htmlFor="tech-select" className="sr-only">Select a technology stack</label>
      <select id="tech-select" onChange={(e) => { setSelectedTech(e.target.value as keyof typeof dockerCommands); setExecutedSteps([]); }} className="p-3 mb-4 bg-gray-800 border border-gray-600 rounded-md text-white">
        {techStacks.map((tech) => <option key={tech} value={tech}>{tech}</option>)}
      </select>
      
      {/* Command Execution */}
      <div className="bg-gray-800 w-full max-w-lg p-6 rounded-lg shadow-lg text-left text-sm font-mono">
        {dockerCommands[selectedTech].map((cmd, index) => (
          <p key={index} className={`${executedSteps.includes(cmd) ? "text-green-400" : "text-gray-500"}`}>{cmd}</p>
        ))}
      </div>
      
      {/* Run Button */}
      <motion.button 
        onClick={handleRun} 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        className={`mt-6 px-6 py-3 bg-blue-600 rounded-lg flex items-center gap-2 text-white font-medium ${allCommandsExecuted ? "opacity-50 cursor-not-allowed" : ""}`} 
        disabled={allCommandsExecuted}
      >
        <FaPlay /> {allCommandsExecuted ? "All Commands Executed" : "Run Next Command"}
      </motion.button>
      
      {/* Download Starter Project */}
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        className="mt-4 px-6 py-3 bg-green-600 rounded-lg flex items-center gap-2 text-white font-medium"
      >
        <FaDownload /> Download Starter Project
      </motion.button>
    </section>
  );
}
