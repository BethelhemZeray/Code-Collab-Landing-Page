import Link from "next/link";
import { 
  FaGitAlt,
  FaTerminal,
  FaServer,
  FaCode,
  FaShieldAlt,
  FaEye,
  FaUsers,
  FaCheck,
  FaCloud
} from "react-icons/fa";
import { SiJupyter } from "react-icons/si";

export default function Features() {
  const featureCategories = [
    {
      title: "Collaboration Features",
      icon: <FaUsers className="text-blue-500 text-2xl" />,
      color: "blue",
      features: [
        {
          name: "Live Pair Programming",
          description: "Real-time collaborative coding with shared cursors and simultaneous editing",
          icon: <FaCode className="text-blue-400" />,
          url: "/features/pair-programming",
          highlights: [
            "See teammates' cursors in real-time",
            "Voice chat integration",
            "Permission controls"
          ]
        },
        {
          name: "Multiplayer Editing",
          description: "Work simultaneously on the same files with conflict-free merging",
          icon: <FaUsers className="text-blue-400" />,
          url: "/features/multiplayer",
          highlights: [
            "Up to 50 concurrent editors",
            "Change synchronization <100ms",
            "Conflict resolution tools"
          ]
        },
        {
          name: "Code Review Tools",
          description: "Built-in review workflow with comments and suggestions",
          icon: <FaEye className="text-blue-400" />,
          url: "/features/reviews",
          highlights: [
            "Inline comments",
            "Suggested changes",
            "Approval workflows"
          ]
        }
      ]
    },
    {
      title: "Development Tools",
      icon: <FaTerminal className="text-purple-500 text-2xl" />,
      color: "purple",
      features: [
        {
          name: "VS Code Integration",
          description: "Full IDE experience with our VS Code extension",
          icon: <SiJupyter className="text-purple-400" />,
          url: "/integrations/vscode",
          highlights: [
            "All features in your favorite IDE",
            "One-click session start",
            "Custom keybindings"
          ]
        },
        {
          name: "Jupyter Notebooks",
          description: "Collaborative data science workflows",
          icon: <SiJupyter className="text-purple-400" />,
          url: "/integrations/jupyter",
          highlights: [
            "Real-time cell execution",
            "Shared kernel access",
            "Visual diffing"
          ]
        },
        {
          name: "CLI Access",
          description: "Full control from your terminal",
          icon: <FaTerminal className="text-purple-400" />,
          url: "/features/cli",
          highlights: [
            "Session management",
            "Project configuration",
            "Automation ready"
          ]
        }
      ]
    },
    {
      title: "Infrastructure",
      icon: <FaServer className="text-green-500 text-2xl" />,
      color: "green",
      features: [
        {
          name: "Cloud Workspaces",
          description: "Pre-configured dev environments in the cloud",
          icon: <FaCloud className="text-green-400" />,
          url: "/features/cloud",
          highlights: [
            "Instant environment spin-up",
            "Customizable specs",
            "Persistent storage"
          ]
        },
        {
          name: "Git Integration",
          description: "Seamless version control workflow",
          icon: <FaGitAlt className="text-green-400" />,
          url: "/features/git",
          highlights: [
            "Visual branch management",
            "Conflict resolution",
            "CI/CD pipelines"
          ]
        },
        {
          name: "Enterprise Security",
          description: "Military-grade protection for your code",
          icon: <FaShieldAlt className="text-green-400" />,
          url: "/security",
          highlights: [
            "End-to-end encryption",
            "SOC 2 compliant",
            "RBAC controls"
          ]
        }
      ]
    }
  ];

  const colorClasses = {
    blue: {
      text: "text-blue-400",
      hover: "hover:text-blue-300",
      bg: "bg-blue-900/20",
      border: "border-blue-800"
    },
    purple: {
      text: "text-purple-400",
      hover: "hover:text-purple-300",
      bg: "bg-purple-900/20",
      border: "border-purple-800"
    },
    green: {
      text: "text-green-400",
      hover: "hover:text-green-300",
      bg: "bg-green-900/20",
      border: "border-green-800"
    }
  };

  return (
    <div className="text-gray-300 py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Powerful Features
            </span> for Modern Development Teams
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to collaborate on code without friction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featureCategories.map((category, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 ${colorClasses[category.color as keyof typeof colorClasses].bg} border ${colorClasses[category.color as keyof typeof colorClasses].border}`}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.features.map((feature, fIndex) => (
                  <div key={fIndex} className="group">
                    <Link href={feature.url} className="block">
                      <div className="flex items-start">
                        <div className="mt-1 mr-4">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className={`font-medium text-lg mb-1 group-hover:${colorClasses[category.color as keyof typeof colorClasses].hover}`}>
                            {feature.name}
                          </h4>
                          <p className="text-gray-400 text-sm mb-2">
                            {feature.description}
                          </p>
                          <ul className="space-y-1">
                            {feature.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-start text-sm text-gray-400">
                                <FaCheck className={`mr-2 mt-1 ${colorClasses[category.color as keyof typeof colorClasses].text}`} />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/features"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Explore All Features
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}