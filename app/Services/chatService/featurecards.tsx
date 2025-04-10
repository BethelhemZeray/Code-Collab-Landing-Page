import React from "react";
import { FaComments, FaShareAlt, FaClock, FaVideo, FaMicrophone } from "react-icons/fa"; // Import relevant icons

const ChatFeatureCards = () => {
  const features = [
    {
      icon: <FaComments className="text-6xl text-blue-500" />,
      title: "Instant Messaging",
      description: "Send and receive messages in real-time without delays.",
    },
    {
      icon: <FaShareAlt className="text-6xl text-green-500" />,
      title: "File & Code Sharing",
      description: "Share files, code snippets, and media seamlessly in chat.",
    },
    {
      icon: <FaClock className="text-6xl text-purple-500" />,
      title: "Live Collaboration",
      description: "Work together on projects with real-time updates.",
    },
    {
      icon: <FaVideo className="text-6xl text-red-500" />,  // New icon for Voice & Video Calls
      title: "Voice & Video Calls",
      description: "Start real-time voice and video calls for more effective communication.",
    },
    {
      icon: <FaMicrophone className="text-6xl text-yellow-500" />,  // New icon for Audio Features
      title: "Audio Messages",
      description: "Send quick voice messages to convey ideas without typing.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center min-h-screen p-6 gap-8 mb-10 !pb-20">
      <div className="flex flex-col items-center min-h-screen p-10">
        {/* Description */}
        <p className="text-3xl text-gray-700 text-center max-w-2xl mb-14">
          Experience real-time collaboration with instant messaging, seamless file sharing, live project updates, and more.
        </p>
        
        {/* Flexbox to arrange cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-6 rounded-xl shadow-xl w-full sm:w-[300px] md:w-[400px] h-auto flex flex-col items-center"
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">{feature.title}</h3>
              <p className="text-gray-600 text-lg text-center mt-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChatFeatureCards;
