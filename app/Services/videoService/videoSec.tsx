import React from "react";
import { 
  FaWifi, 
  FaExpand, 
  FaMicrophone, 
  FaUserPlus, 
  FaCopy, 
  FaPhoneSlash, 
  FaVideo, 
  FaMicrophoneSlash, 
  FaVideoSlash,
  FaShareSquare,
  FaHandPaper,
  FaCommentAlt
} from "react-icons/fa";

const participants = [
  { name: "John Doe", image: "/images/videop.jpg", signal: "strong", muted: false, videoOff: false },
  { name: "Jane Smith", image: "/images/videop.jpg", signal: "medium", muted: true, videoOff: false },
  { name: "Mike Johnson", image: "/images/videop.jpg", signal: "weak", muted: false, videoOff: true },
  { name: "Sarah Lee", image: "/images/videop.jpg", signal: "strong", muted: false, videoOff: false },
];

const getSignalColor = (signal: string) => {
  switch (signal) {
    case "strong":
      return "text-green-500";
    case "medium":
      return "text-yellow-500";
    case "weak":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

export default function VideoCall() {
  return (
    <section className="w-full max-w-5xl mx-auto p-4 md:p-6 bg-gray-900 rounded-lg shadow-xl flex flex-col md:flex-row gap-4 relative pb-24">
      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
        {/* Video Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {participants.map((user, index) => (
            <div
              key={index}
              className="relative w-full h-64 sm:h-80 bg-gray-800  overflow-hidden  "
            >
              {/* Profile Image */}
              <img
                src={user.image}
                alt={user.name}
                className="absolute top-0 left-0 w-full h-full object-cover "
              />

              {/* Bottom Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-2 flex items-center bg-black bg-opacity-50 rounded-b-full">
                {/* Name & Signal Strength */}
                <div className="flex items-center px-3 py-1 border-2 border-blue-500 rounded-md">
                  <FaWifi className={`text-lg ${getSignalColor(user.signal)} mr-2`} />
                  <span className="text-white font-semibold">{user.name}</span>
                </div>

                <div className="flex-grow"></div>

                {/* Icons */}
                <FaExpand className="text-white text-lg cursor-pointer hover:text-blue-400 mx-2" />
                {user.muted ? (
                  <FaMicrophoneSlash className="text-white text-lg cursor-pointer hover:text-green-400 mx-2 " />
                ) : (
                  <FaMicrophone className="text-white text-lg cursor-pointer hover:text-green-400" />
                )}
                {user.videoOff ? (
                  <FaVideoSlash className="text-white text-lg cursor-pointer hover:text-blue-400 mx-2" />
                ) : (
                  <FaVideo className="text-white text-lg cursor-pointer hover:text-blue-400 mx-2" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="w-full bg-gray-800 p-3 rounded-lg shadow-md mt-auto">
          <div className="flex justify-center">
            <div className="flex space-x-8"> {/* Reduced spacing between icons */}
              <div className="flex flex-col items-center">
                <FaMicrophone className="text-white text-2xl cursor-pointer hover:text-green-400" />
              </div>
              <div className="flex flex-col items-center">
                <FaVideo className="text-white text-2xl cursor-pointer hover:text-blue-400" />
              </div>
              <div className="flex flex-col items-center">
                <FaShareSquare className="text-white text-2xl cursor-pointer hover:text-purple-400" />
              </div>
              <div className="flex flex-col items-center">
                <FaHandPaper className="text-white text-2xl cursor-pointer hover:text-yellow-400" />
              </div>
              <div className="flex flex-col items-center">
                <FaCommentAlt className="text-white text-2xl cursor-pointer hover:text-blue-300" />
              </div>
              <div className="flex flex-col items-center">
                <FaPhoneSlash className="text-red-500 text-2xl cursor-pointer hover:text-red-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Info Panel */}
      <div className="w-full md:w-80 bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-black underline">People On Call</h3>
          <p className="text-gray-400 mt-4 text-sm">Show this link to invite people</p>
          <p className="text-blue-500 mt-2 text-sm break-all">https://liveProject/call/vas-fsf-tes</p>

          {/* Copy Link Section */}
          <div className="flex items-center text-gray-600 text-sm cursor-pointer hover:text-gray-900 mt-2">
            <FaCopy className="mr-2" /> Copy Link
          </div>

          <p className="text-gray-400 mt-2 text-sm">Network Status: Stable</p>
        </div>

        {/* Attendees List */}
        <div className="mt-4 space-y-4">
          {participants.map((user, index) => (
            <div key={index} className="flex items-center justify-between p-2 border-2 rounded-lg border-gray-300">
              <div className="flex items-center">
                <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
                <span className="text-black font-medium">{user.name}</span>
              </div>
              <div className="flex items-center">
                {user.videoOff ? (
                  <FaVideoSlash className="text-gray-600 text-lg mx-2 cursor-pointer hover:text-blue-500" />
                ) : (
                  <FaVideo className="text-gray-600 text-lg mx-2 cursor-pointer hover:text-blue-500" />
                )}
                {user.muted ? (
                  <FaMicrophoneSlash className="text-gray-600 text-lg cursor-pointer hover:text-green-500" />
                ) : (
                  <FaMicrophone className="text-gray-600 text-lg cursor-pointer hover:text-green-500" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add People Button */}
        <div className="flex items-center justify-center text-white bg-pink-500 text-lg cursor-pointer py-2 rounded-lg mt-4 md:mt-auto">
          <FaUserPlus className="mr-2" /> Add People
        </div>
      </div>
    </section>
  );
}