// components/CareersSection.tsx
import Link from "next/link";
import { FaCode, FaUsers, FaServer, FaRegLightbulb } from "react-icons/fa";

export function Careers() {
  const openPositions = [
    {
      title: "Frontend Engineer",
      type: "Full-time · Remote",
      icon: <FaCode className="text-blue-400" />,
      department: "Engineering",
      description: "Build the core CodeCollab editor and collaboration features using React/TypeScript"
    },
    {
      title: "DevOps Engineer",
      type: "Full-time · Hybrid",
      icon: <FaServer className="text-green-400" />,
      department: "Infrastructure",
      description: "Maintain and scale our real-time collaboration infrastructure"
    },
    {
      title: "Developer Advocate",
      type: "Full-time · Remote",
      icon: <FaUsers className="text-purple-400" />,
      department: "Community",
      description: "Help developers get the most out of CodeCollab through tutorials and docs"
    },
    {
      title: "Product Designer",
      type: "Contract · Remote",
      icon: <FaRegLightbulb className="text-yellow-400" />,
      department: "Design",
      description: "Design intuitive collaboration workflows for developers"
    }
  ];

  return (
    <section id="careers" className="py-16 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Join Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Help us build the future of collaborative development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {openPositions.map((position, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gray-700">
                  {position.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                  <p className="text-gray-400 mb-2">{position.type} · {position.department}</p>
                  <p className="text-gray-300">{position.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/careers"
            className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400/10 transition-colors"
          >
            View All Open Positions
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}