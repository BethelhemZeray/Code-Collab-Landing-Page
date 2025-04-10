'use client';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiPieChart, FiClock, FiSettings} from 'react-icons/fi';

const ProjectHero = () => {
  const features = [
    {
      icon: <FiCheckCircle className="text-blue-500" />,
      title: "Task Management",
      description: "Organize work with customizable boards"
    },
    {
      icon: <FiUsers className="text-purple-500" />,
      title: "Team Collaboration",
      description: "Real-time updates and comments"
    },
    {
      icon: <FiPieChart className="text-green-500" />,
      title: "Progress Tracking",
      description: "Visualize project health"
    },
    {
      icon: <FiClock className="text-yellow-500" />,
      title: "Time Management",
      description: "Track hours and deadlines"
    }
  ];

  return (
    <section className="w-full min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6"
          >
            <FiClock className="mr-2" />
            <span className="text-sm font-medium">Automated Time Tracking</span>
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-blue-500 mb-6"
          >
            Project Management <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-gray-400">
              Without the Chaos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto"
          >
            The complete platform to plan, track, and deliver projects on time.
            Designed for teams that value clarity and results.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
              {/* Dashboard Header */}
              <div className="bg-gray-800 text-white px-6 py-4 flex items-center">
                <FiSettings className="mr-3 text-blue-300" />
                <span className="font-medium">Project Dashboard</span>
                <div className="ml-auto flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="h-3 bg-gray-300 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="h-8 bg-blue-200 rounded-lg w-24"></div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-100 rounded-lg h-24"></div>
                  <div className="bg-purple-100 rounded-lg h-24"></div>
                  <div className="bg-green-100 rounded-lg h-24"></div>
                </div>

                <div className="bg-gray-100 rounded-lg h-48 p-4">
                  <div className="flex justify-between mb-4">
                    <div className="h-3 bg-gray-300 rounded w-24"></div>
                    <div className="h-3 bg-gray-300 rounded w-16"></div>
                  </div>
                  <div className="bg-white rounded h-32"></div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-md border border-gray-200 z-10"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                <span className="text-sm text-gray-900 font-medium">3 teammates online</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
            >
              Learn More
            </motion.button>
          </div>
          <p className="text-gray-500 mt-4 text-sm">
            No credit card required • Try free trial
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;