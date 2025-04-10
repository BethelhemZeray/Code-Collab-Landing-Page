"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTerminal, FaGithub } from "react-icons/fa";

const GitCommands = () => {
  const [command, setCommand] = useState("");
  const gitCommands = [
    { name: "git init", description: "Initialize a new Git repository" },
    { name: "git clone <repo>", description: "Clone a remote repository" },
    { name: "git status", description: "Check the status of your files" },
    { name: "git add .", description: "Stage all changes for commit" },
    { name: "git commit -m 'message'", description: "Commit your changes with a message" },
    { name: "git push", description: "Push changes to the remote repository" },
    { name: "git pull", description: "Pull the latest changes from the remote repository" },
    { name: "git branch", description: "List, create, or delete branches" },
    { name: "git merge <branch>", description: "Merge changes from a branch into the current branch" },
  ];

  const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-white">
      {/* Animated Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-center"
      >
        Master Git Commands
      </motion.h1>
      
      {/* Search Bar */}
      <div className="w-full max-w-md mb-6">
        <input 
          type="text" 
          value={command}
          onChange={handleCommandChange}
          className="p-3 w-full rounded-md text-center bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          placeholder="Search Git Commands"
        />
      </div>

      {/* Commands List */}
      <div className="w-full max-w-lg md:max-w-3xl">
        {gitCommands
          .filter((gitCommand) => gitCommand.name.includes(command.toLowerCase()))
          .map((gitCommand, index) => (
            <motion.div
              key={index}
              className="flex flex-wrap items-center justify-between p-4 mb-4 bg-gray-800 rounded-md"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4">
                <FaTerminal className="text-2xl text-green-500" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">{gitCommand.name}</h3>
                  <p className="text-gray-400 text-sm">{gitCommand.description}</p>
                </div>
              </div>
              <button
                className="flex items-center text-blue-500 hover:text-blue-400 mt-2 sm:mt-0"
                onClick={() => navigator.clipboard.writeText(gitCommand.name)}
              >
                <FaGithub className="mr-2" />
                Copy
              </button>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default GitCommands;
