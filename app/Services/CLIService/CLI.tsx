// components/CLIHero.tsx
'use client';

import { motion } from 'framer-motion';
import { FiTerminal, FiGithub, FiUsers, FiZap } from 'react-icons/fi';
import { useTypewriter } from './typewriter';

export default function CLI() {
  const commands = [
    'collab init my-project',
    'collab invite teammate@example.com',
    'collab live-share',
    'collab deploy --prod',
    'collab help'
  ];

  const typedCommand = useTypewriter(commands);

  return (
    <div className="min-h-screen text-gray-100 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal header */}
          <div className="bg-gray-700 px-4 py-3 flex items-center">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm font-mono flex items-center">
              <FiTerminal className="mr-2" />
              <span>codecollab --cli</span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono">
            <div className="mb-6">
              <p className="text-green-400 mb-2">$ Welcome to CodeCollab CLI v1.0.0</p>
              <p className="text-gray-400 mb-4">Type <span className="text-blue-400">collab help</span> to see available commands</p>
            </div>

            <div className="mb-8">
              <div className="flex items-start mb-4">
                <span className="text-purple-400 mr-2">$</span>
                <span className="text-blue-300 flex-1">{typedCommand}</span>
                <span className="animate-pulse">|</span>
              </div>

              <div className="bg-gray-700 rounded p-4 mb-4">
                <p className="text-green-400 mb-2"> Starting real-time collaboration session...</p>
                <p className="text-green-400 mb-2"> Connected to 3 peers</p>
                <p className="text-green-400"> Live coding session active (latency: 28ms)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <FeatureCard 
                icon={<FiGithub className="w-6 h-6" />}
                title="Git Integration"
                description="Seamless GitHub/GitLab/Bitbucket integration"
              />
              <FeatureCard 
                icon={<FiUsers className="w-6 h-6" />}
                title="Real-time Collab"
                description="Code together with minimal latency"
              />
              <FeatureCard 
                icon={<FiZap className="w-6 h-6" />}
                title="Instant Deployment"
                description="Deploy with a single command"
              />
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Documentation
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-gray-700 p-4 rounded-lg"
    >
      <div className="text-blue-400 mb-2">{icon}</div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}