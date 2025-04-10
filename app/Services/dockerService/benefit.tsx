'use client';
import { motion } from 'framer-motion';
import { FaUsers, FaClock, FaBug, FaServer, FaCodeBranch, FaShieldAlt, FaDocker } from 'react-icons/fa';
import { GiProcessor } from 'react-icons/gi';

export default function DockerCollaborationBenefits() {
  const benefits = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Onboarding in Minutes",
      description: "New developers can clone, build and run projects immediately with pre-configured Docker environments",
      stat: "80% faster onboarding",
      color: "bg-blue-500"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "No More Setup Headaches",
      description: "Eliminate days wasted configuring local environments with ready-to-code containers",
      stat: "Reduce setup time by 90%",
      color: "bg-blue-600"
    },
    {
      icon: <FaBug className="text-3xl" />,
      title: "Consistent Debugging",
      description: "Reproduce issues exactly as teammates experience them with identical environments",
      stat: "60% fewer 'works on my machine' issues",
      color: "bg-gray-500"
    },
    {
      icon: <GiProcessor className="text-3xl" />,
      title: "Resource Efficiency",
      description: "Run multiple isolated environments simultaneously without VM overhead",
      stat: "70% less resource usage than VMs",
      color: "bg-gray-600"
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: "Production Parity",
      description: "Develop in environments that match production, reducing deployment surprises",
      stat: "5x fewer production issues",
      color: "bg-blue-700"
    },
    {
      icon: <FaCodeBranch className="text-3xl" />,
      title: "Branch-Specific Environments",
      description: "Automatically spin up isolated containers for each feature branch",
      stat: "Enable parallel development",
      color: "bg-blue-500"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Secure Collaboration",
      description: "Built-in vulnerability scanning for shared container images",
      stat: "Catch vulnerabilities early",
      color: "bg-gray-500"
    }
  ];

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
            Why Docker for <span className="text-blue-600">Team Collaboration</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
            Transform how your team builds software with containerized development environments
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Main Feature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:row-span-2 bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between border border-gray-200"
          >
            <div>
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaDocker className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Collaboration Multiplier
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Docker eliminates environment inconsistencies that plague team development, enabling seamless collaboration regardless of local machine setups.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <p className="text-blue-800 font-medium">Teams using Docker report:</p>
              <ul className="mt-2 space-y-2 text-blue-700">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                  3x faster onboarding for new developers
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                  50% less time spent debugging environment issues
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                  75% reduction in &quot;works on my machine&quot; problems
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Other Benefits */}
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${benefit.color} rounded-xl p-6 hover:shadow-md transition-all text-white`}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/90 mb-4">{benefit.description}</p>
              <p className="text-white/80 text-sm font-medium">{benefit.stat}</p>
            </motion.div>
          ))}
        </div>

        

   
      </div>
    </section>
  );
}