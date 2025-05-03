import Link from "next/link";
import { FaCodeBranch, FaUsersCog, FaRobot, FaChartLine, FaLock } from "react-icons/fa";

export function ExploreFeatures() {
  const featureHighlights = [
    {
      title: "Real-time Collaboration",
      icon: <FaUsersCog className="w-8 h-8 text-blue-400" />,
      description: "See changes as teammates type with sub-second latency",
      link: "/features/real-time",
      stats: "95% faster than traditional tools"
    },
    {
      title: "AI-Powered Assistance",
      icon: <FaRobot className="w-8 h-8 text-purple-400" />,
      description: "Get smart suggestions and auto-complete as you code",
      link: "/features/ai",
      stats: "Reduces boilerplate by 40%"
    },
    {
      title: "Version Control",
      icon: <FaCodeBranch className="w-8 h-8 text-green-400" />,
      description: "Built-in Git with visual diff tools and conflict resolution",
      link: "/features/version-control",
      stats: "3x faster merges"
    },
    {
      title: "Performance Metrics",
      icon: <FaChartLine className="w-8 h-8 text-yellow-400" />,
      description: "Track team velocity and code quality in real-time",
      link: "/features/metrics",
      stats: "Improves productivity by 35%"
    },
    {
      title: "Enterprise Security",
      icon: <FaLock className="w-8 h-8 text-red-400" />,
      description: "End-to-end encryption and compliance certifications",
      link: "/security",
      stats: "SOC 2 Type II certified"
    }
  ];

  return (
    <section className="py-16 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-blue-400">
              Why Developers Love
            </span> CodeCollab
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The most comprehensive toolkit for collaborative software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {featureHighlights.map((feature, index) => (
            <Link 
              key={index}
              href={feature.link}
              className="group bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-blue-400/30 rounded-xl p-6 transition-all"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {feature.description}
                </p>
                <div className="text-xs font-mono text-blue-400">
                  {feature.stats}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/docs"
              className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              Read Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}