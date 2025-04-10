import React from 'react'
import { FaVideo, FaLock, FaUsers} from "react-icons/fa";

const Feature = () => {
  return (
    <section className="w-full min-h-screen py-20 grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-6">
        
        {/* Feature 1 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaVideo size={50} className="text-blue-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">High-Quality Video</h3>
          <p className="text-gray-600">Enjoy crystal-clear video calls with optimized streaming.</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaLock size={50} className="text-blue-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">End-to-End Encryption</h3>
          <p className="text-gray-600">Your calls are secure and private with industry-leading encryption.</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaUsers size={50} className="text-blue-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Group Calls</h3>
          <p className="text-gray-600">Connect with multiple people in a single call, hassle-free.</p>
        </div>
      </section>

  )
}

export default Feature