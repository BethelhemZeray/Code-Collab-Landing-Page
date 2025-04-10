'use client';
import { motion } from 'framer-motion';
import { FaDocker, FaServer, FaCode, FaShieldAlt, FaSyncAlt } from 'react-icons/fa';

export default function DockerSection() {
  const features = [
    {
      icon: <FaServer className="text-xl md:text-2xl" />,
      title: "Containerized Workflows",
      description: "Package applications with all dependencies into standardized containers for consistent deployment across all environments",
      color: "blue"
    },
    {
      icon: <FaCode className="text-xl md:text-2xl" />,
      title: "CI/CD Ready",
      description: "Seamless integration with automated build pipelines for continuous integration and delivery workflows",
      color: "green"
    },
    {
      icon: <FaShieldAlt className="text-xl md:text-2xl" />,
      title: "Secure Isolation",
      description: "Process isolation with built-in security scanning and vulnerability detection for safer deployments",
      color: "purple"
    },
    {
      icon: <FaSyncAlt className="text-xl md:text-2xl" />,
      title: "Effortless Scaling",
      description: "Horizontal scaling with container orchestration to handle varying workloads efficiently",
      color: "orange"
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
    <section id="docker" className="w-full py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <FaDocker className="text-4xl md:text-6xl text-blue-500 mr-3 md:mr-4" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              Docker Integration
            </h2>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl md:max-w-4xl mx-auto px-2">
            Streamline development with powerful containerized environments
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 hover:shadow-lg md:hover:shadow-xl transition-all flex flex-col items-center text-center h-full min-h-[300px] md:min-h-[350px] lg:min-h-[400px]"
              >
                {/* Circular Icon - Responsive */}
                <div className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full ${colors.bg} ${colors.border} ${colors.text} flex items-center justify-center mb-4 md:mb-6 lg:mb-8 border-2`}>
                  {feature.icon}
                </div>
                
                {/* Title with Colored Dash - Responsive */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 lg:mb-6 relative pb-4 md:pb-6 w-full">
                  {feature.title}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 md:h-1.5 w-12 md:w-16 ${colors.dash} rounded-full`}></div>
                </h3>
                
                {/* Description - Responsive */}
                <p className="text-sm md:text-base lg:text-lg text-gray-300 mt-2 md:mt-4">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}