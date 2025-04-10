'use client';
import { motion } from 'framer-motion';
import { FiBarChart2, FiCalendar, FiCheckCircle, FiClock, FiUsers } from 'react-icons/fi';

const HighLight = () => {
  const stats = [
    { value: "87%", label: "On-time completion", icon: <FiCheckCircle /> },
    { value: "3.5x", label: "Faster delivery", icon: <FiClock /> },
    { value: "64%", label: "Team efficiency", icon: <FiUsers /> }
  ];

  return (
    <section className="w-full min-h-screen  py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6"
          >
            <FiBarChart2 className="mr-2" />
            <span className="text-sm font-medium">Data-driven project success</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-blue-400 mb-6"
          >
            Work Smarter, <span className="text-blue-500">Deliver Faster</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto"
          >
            The complete platform that helps teams plan, track, and deliver projects 
            with unprecedented clarity and efficiency.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl text-center"
            >
              <div className="text-3xl text-blue-500 mb-2 mx-auto w-fit">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Feature List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            {[
              "Visual project timelines with drag-and-drop planning",
              "Real-time team collaboration and messaging",
              "Automated progress tracking and reporting",
              "Resource allocation and workload balancing",
              "Customizable dashboards for every role"
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <p className="ml-4 text-lg text-gray-100">{feature}</p>
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
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
              {/* Dashboard Header */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <FiCalendar className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Project Timeline</h3>
                  <p className="text-sm text-gray-500">Updated in real-time</p>
                </div>
              </div>

              {/* Timeline Visualization */}
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded-full w-full">
                  <div 
                    className="h-4 bg-blue-500 rounded-full" 
                    style={{ width: '75%' }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Q1 Planning</span>
                  <span>75% complete</span>
                </div>

                {/* Milestones */}
                <div className="mt-8 space-y-6">
                  {[
                    { name: "Research Phase", date: "Jan 15", status: "complete" },
                    { name: "Prototype", date: "Feb 28", status: "in-progress" },
                    { name: "User Testing", date: "Mar 15", status: "pending" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`mt-1 flex-shrink-0 w-3 h-3 rounded-full ${
                        item.status === 'complete' ? 'bg-green-500' : 
                        item.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-400'
                      }`}></div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Team Activity */}
            <motion.div
              animate={{
                y: [0, -5, 0],
                opacity: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                    ></div>
                  ))}
                </div>
                <span className="ml-3 text-sm text-gray-900 font-medium">Team active</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HighLight;