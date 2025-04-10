"use client";

import { 
  CheckCircleIcon,
  LockClosedIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  CommandLineIcon,
  ClipboardDocumentCheckIcon,
  CubeIcon,
  CodeBracketSquareIcon,
  PencilSquareIcon,
  FolderIcon
} from "@heroicons/react/24/solid";

const features = [
  {
    category: "Authentication",
    icon: <LockClosedIcon className="h-6 w-6 text-blue-600" />,
    items: [
      "Secure user login with OAuth 2.0",
      "JWT token management",
      "Multi-factor authentication"
    ]
  },
  {
    category: "Chat",
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-600" />,
    items: [
      "Real-time messaging",
      "Group chat channels",
      "Message history"
    ]
  },
  {
    category: "Video Call",
    icon: <VideoCameraIcon className="h-6 w-6 text-purple-600" />,
    items: [
      "HD video conferencing",
      "Screen sharing",
      "Recording capability"
    ]
  },
  {
    category: "CLI",
    icon: <CommandLineIcon className="h-6 w-6 text-amber-600" />,
    items: [
      "Command line interface",
      "Automation scripts",
      "Plugin system"
    ]
  },
  {
    category: "Project Management",
    icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-red-600" />,
    items: [
      "Task tracking",
      "Team collaboration",
      "Progress analytics"
    ]
  },
  {
    category: "Docker",
    icon: <CubeIcon className="h-6 w-6 text-indigo-600" />,
    items: [
      "Container management",
      "Image building",
      "Docker compose"
    ]
  },
  {
    category: "Version Control",
    icon: <CodeBracketSquareIcon className="h-6 w-6 text-emerald-600" />,
    items: [
      "Git integration",
      "Branch visualization",
      "Code review"
    ]
  },
  {
    category: "Live Editor",
    icon: <PencilSquareIcon className="h-6 w-6 text-rose-600" />,
    items: [
      "Collaborative editing",
      "Syntax highlighting",
      "Real-time preview"
    ]
  },
  {
    category: "File Management",
    icon: <FolderIcon className="h-6 w-6 text-cyan-600" />,
    items: [
      "Cloud storage",
      "Version history",
      "Access control"
    ]
  }
];

const InfoCard = () => {
  return (
    <section className="w-full min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Development Platform Features
          </h1>
          <p className="text-xl text-gray-50 max-w-2xl mx-auto">
            Comprehensive tools for modern development workflows
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-opacity-20 mr-4" 
                       style={{ backgroundColor: `${feature.icon.props.className.match(/text-(.*?)-600/)[1]}20` }}>
                    {feature.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {feature.category}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-start bg-gray-200 p-3 rounded-lg group hover:bg-gray-100 transition-colors"
                    >
                      <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-3 group-hover:text-green-600 transition-colors" />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCard;