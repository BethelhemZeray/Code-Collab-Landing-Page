'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCodeBranch, FaFileAlt, FaUser, FaClock, FaChevronRight } from "react-icons/fa";

type Commit = {
  id: string;
  author: string;
  message: string;
  timestamp: string;
  filesChanged?: number;
  additions?: number;
  deletions?: number;
};

const commits: Commit[] = [
  { 
    id: "1a2b3c", 
    author: "Aman", 
    message: "Initial project setup", 
    timestamp: "2024-03-22 10:00 AM",
    filesChanged: 5,
    additions: 120,
    deletions: 0
  },
  { 
    id: "4d5e6f", 
    author: "Betty", 
    message: "Added new feature component", 
    timestamp: "2024-03-23 2:30 PM",
    filesChanged: 8,
    additions: 320,
    deletions: 45
  },
  { 
    id: "7g8h9i", 
    author: "betty", 
    message: "Fixed authentication bug", 
    timestamp: "2024-03-24 9:15 AM",
    filesChanged: 3,
    additions: 95,
    deletions: 28
  },
];

export default function VersionControl() {
  const [selectedCommit, setSelectedCommit] = useState<Commit | null>(null);
  const [activeBranch, setActiveBranch] = useState("main");

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl flex flex-col lg:flex-row min-h-[70vh] bg-white rounded-xl shadow-xl overflow-hidden"
      >
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-gray-50 p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Repository</h2>
            <p className="text-gray-900 font-semibold text-blue-600">CodeCollab</p>
          </div>

          <div>
            <h3 className="text-md font-semibold text-gray-900 mb-3">Branches</h3>
            <ul className="space-y-2">
              {["main", "feature-x", "bugfix/login"].map((branch) => (
                <motion.li 
                  key={branch}
                  whileHover={{ x: 5 }}
                  className={`flex items-center cursor-pointer p-2 rounded-md transition-colors ${activeBranch === branch ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setActiveBranch(branch)}
                >
                  <FaCodeBranch className="mr-3" />
                  <span>{branch}</span>
                  {activeBranch === branch && (
                    <FaChevronRight className="ml-auto text-sm text-blue-500" />
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content (Commit History) */}
        <main className="w-full lg:w-2/4 p-6 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Commit History</h2>
          <ul className="space-y-3">
            {commits.map((commit) => (
              <motion.li
                key={commit.id}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`p-4 rounded-lg cursor-pointer transition-all ${selectedCommit?.id === commit.id ? 'bg-blue-50 ring-2 ring-blue-200' : 'bg-gray-50 hover:bg-gray-100'}`}
                onClick={() => setSelectedCommit(commit)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{commit.message}</h3>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <FaUser className="mr-2" />
                      <span>{commit.author}</span>
                      <span className="mx-2">•</span>
                      <FaClock className="mr-2" />
                      <span>{commit.timestamp}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      +{commit.additions}
                    </span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">
                      -{commit.deletions}
                    </span>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </main>

        {/* Right Panel (Commit Details) */}
        <aside className="w-full lg:w-1/4 bg-gray-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Commit Details</h2>
          
          <AnimatePresence>
            {selectedCommit ? (
              <motion.div
                key="commit-details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500">Commit Message</h3>
                  <p className="mt-1 font-semibold text-gray-900">{selectedCommit.message}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Author</h3>
                    <p className="mt-1 text-gray-900 flex items-center">
                      <FaUser className="mr-2 text-gray-400" />
                      {selectedCommit.author}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Date</h3>
                    <p className="mt-1 text-gray-900 flex items-center">
                      <FaClock className="mr-2 text-gray-400" />
                      {selectedCommit.timestamp}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Files</div>
                    <div className="font-bold">{selectedCommit.filesChanged}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Additions</div>
                    <div className="font-bold text-green-600">+{selectedCommit.additions}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Deletions</div>
                    <div className="font-bold text-red-600">-{selectedCommit.deletions}</div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center justify-center transition-colors">
                  <FaFileAlt className="mr-2" />
                  View Changes
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 text-center"
              >
                <div className="text-gray-400 mb-3">
                  <FaFileAlt className="mx-auto text-3xl" />
                </div>
                <p className="text-gray-500">Select a commit to view details</p>
              </motion.div>
            )}
          </AnimatePresence>
        </aside>
      </motion.div>
    </div>
  );
}