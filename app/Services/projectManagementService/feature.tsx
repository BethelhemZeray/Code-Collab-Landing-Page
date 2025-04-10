'use client';
import { motion } from 'framer-motion';
import { FiCode, FiZap, FiLayers, FiGitBranch } from 'react-icons/fi';

const Features = () => {
  const codeLines = [
    'function ProjectDashboard() {',
    '  const [tasks, setTasks] = useState([]);',
    '  const [team, setTeam] = useState([]);',
    '',
    '  return (',
    '    <div className="project-container">',
    '      <TaskBoard tasks={tasks} />',
    '      <TeamView members={team} />',
    '      <AnalyticsChart />',
    '    </div>',
    '  );',
    '}'
  ];

  const features = [
    {
      icon: <FiCode className="text-blue-400" />,
      title: "Real-time Collaboration",
      description: "Code together with your team instantly"
    },
    {
      icon: <FiZap className="text-purple-400" />,
      title: "Instant Deployment",
      description: "One-click deploy to production"
    },
    {
      icon: <FiLayers className="text-green-400" />,
      title: "Integrated Tooling",
      description: "Everything you need in one platform"
    },
    {
      icon: <FiGitBranch className="text-yellow-400" />,
      title: "Version Control",
      description: "Built-in Git integration"
    }
  ];

  return (
    <section className="w-full min-h-screen  text-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row">
        {/* Left side - Code editor */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 py-12 lg:py-24"
        >
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
            <div className="bg-gray-700 px-4 py-3 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm font-mono text-gray-300">
                dashboard.jsx • 2 collaborators
              </div>
            </div>
            <div className="p-6 font-mono text-sm md:text-base">
              {codeLines.map((line, i) => (
                <div 
                  key={i} 
                  className={`mb-1 ${line.includes('function') ? 'text-blue-400' : ''} ${line.includes('return') ? 'text-purple-400' : ''} ${line.includes('<') ? 'text-red-400' : ''}`}
                >
                  {line || <br />}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-700 text-blue-400">
                {/* Current user typing indicator */}
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                  <span className="text-xs">You&apos;re editing</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2 py-12 lg:py-24 lg:pl-12 flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-blue-400">
              Developer-First
            </span>
            <br />
            Project Management
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            The only platform that combines project tracking with your actual codebase. 
            See changes in real-time and deploy faster than ever.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 hover:bg-gray-800/70 p-4 rounded-lg border border-gray-700 transition-all"
              >
                <div className="flex items-center mb-2">
                  <div className="mr-3 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium">{feature.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
        
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-gray-800 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              View Documentation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;