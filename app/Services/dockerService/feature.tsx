'use client';
import { motion } from 'framer-motion';
import { FaDocker, FaCodeBranch, FaShieldAlt, FaRocket, FaServer, FaSyncAlt, FaUsers } from 'react-icons/fa';

export default function DockerServiceSection() {
  const features = [
    {
      icon: <FaServer className="text-xl md:text-2xl" />,
      title: "Consistent Environments",
      description: "Eliminate 'works on my machine' issues with identical Docker environments for all team members",
      color: "blue"
    },
    {
      icon: <FaCodeBranch className="text-xl md:text-2xl" />,
      title: "Branch Isolation",
      description: "Automatically create isolated Docker environments for each Git branch",
      color: "green"
    },
    {
      icon: <FaUsers className="text-xl md:text-2xl" />,
      title: "Team Containers",
      description: "Share running containers with teammates for real-time collaboration",
      color: "purple"
    },
    {
      icon: <FaShieldAlt className="text-xl md:text-2xl" />,
      title: "Secure Sharing",
      description: "Built-in vulnerability scanning for shared container images",
      color: "orange"
    },
    {
      icon: <FaSyncAlt className="text-xl md:text-2xl" />,
      title: "Live Updates",
      description: "See teammates' code changes instantly with hot-reload in shared containers",
      color: "indigo"
    },
    {
      icon: <FaRocket className="text-xl md:text-2xl" />,
      title: "Instant Deployment",
      description: "One-click deployment of containerized environments for testing and review",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue':
        return {
          bg: 'bg-blue-100',
          border: 'border-blue-200',
          text: 'text-blue-500',
          dash: 'bg-blue-500'
        };
      case 'green':
        return {
          bg: 'bg-green-100',
          border: 'border-green-200',
          text: 'text-green-500',
          dash: 'bg-green-500'
        };
      case 'purple':
        return {
          bg: 'bg-purple-100',
          border: 'border-purple-200',
          text: 'text-purple-500',
          dash: 'bg-purple-500'
        };
      case 'orange':
        return {
          bg: 'bg-orange-100',
          border: 'border-orange-200',
          text: 'text-orange-500',
          dash: 'bg-orange-500'
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-100',
          border: 'border-indigo-200',
          text: 'text-indigo-500',
          dash: 'bg-indigo-500'
        };
      case 'teal':
        return {
          bg: 'bg-teal-100',
          border: 'border-teal-200',
          text: 'text-teal-500',
          dash: 'bg-teal-500'
        };
      default:
        return {
          bg: 'bg-blue-100',
          border: 'border-blue-200',
          text: 'text-blue-500',
          dash: 'bg-blue-500'
        };
     }
  };

  return (
    <section id="docker-service" className="w-full py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute -inset-3 bg-blue-500 rounded-xl blur opacity-20"></div>
              <div className="relative bg-blue-600 text-white p-4 rounded-lg inline-flex">
                <FaDocker className="text-4xl md:text-5xl" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Docker for Team Development
            </h2>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Collaborate seamlessly with containerized development environments
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white hover:bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all flex flex-col items-center text-center h-full min-h-[300px] hover:shadow-lg"
              >
                <div className={`w-16 h-16 rounded-full ${colors.bg} ${colors.border} ${colors.text} flex items-center justify-center mb-6 border-2 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative pb-6 w-full">
                  {feature.title}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1.5 w-16 ${colors.dash} rounded-full group-hover:w-20 transition-all`}></div>
                </h3>
                
                <p className="text-gray-600 mt-auto">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}