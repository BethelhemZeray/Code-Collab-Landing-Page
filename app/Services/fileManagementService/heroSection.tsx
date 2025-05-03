import {  FaLock, FaCloudUploadAlt, FaCode, FaUsers} from "react-icons/fa";

export default function FileManagementHero() {
  return (
    <section className="py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block bg-blue-600 text-white text-sm px-4 py-1 rounded-full font-semibold shadow-md mb-6">
            New: Intelligent File Tools
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Advanced File Management
            </span> for Developer Teams
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Enterprise-grade file organization with real-time collaboration, version history, and military-grade security built for technical teams.
          </p>
        </div>

        {/* Expanded Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature Card 1 */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-colors">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 bg-blue-900/20 rounded-lg">
                <FaCloudUploadAlt className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Smart File Sync</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>Real-time cloud synchronization</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>Selective sync for large repos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>Conflict-free merging</span>
              </li>
            </ul>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-colors">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 bg-blue-900/20 rounded-lg">
                <FaCode className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Developer-Centric</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>.gitignore aware filtering</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>Binary file diffing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>IDE-style keyboard shortcuts</span>
              </li>
            </ul>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-colors">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 bg-blue-900/20 rounded-lg">
                <FaUsers className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Team Collaboration</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>Multiplayer file editing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>Granular permission controls</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>@mention commenting</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Security & CTA Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gray-800/20 p-8 rounded-xl border border-gray-700">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 bg-blue-900/20 rounded-full">
                  <FaLock className="text-blue-400 text-3xl" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Enterprise Security</h3>
                <p className="text-gray-300 mb-4">
                  All files encrypted at rest and in transit with zero-knowledge architecture. SOC 2 Type II compliant with audit logging for all actions.
                </p>
                <div className="flex flex-wrap gap-4">
                  
                  <button className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-medium py-2 px-6 rounded-lg transition-colors">
                    View Compliance Docs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}