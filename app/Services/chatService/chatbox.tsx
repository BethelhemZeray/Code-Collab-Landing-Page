import React from "react";
import Image from "next/image";

const ChatBox = () => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full space-y-10 gap-4 p-6">
      <div className="w-[70%] h-[60vh] bg-gray-100 shadow-lg rounded-xl p-4 sm:p-6 flex flex-col justify-center shadow-t-2xl">
        {/* New Wrapper Container for Messages */}
        <div className="w-full flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md">
          {/* Inner Message Container */}
          <div className="w-full flex flex-col gap-4 p-4 bg-gray-50 rounded-lg shadow-md">
            {/* Message Row 1 */}
            <div className="flex items-center w-full gap-3">
              {/* Left: User Image */}
              <Image
                src="/images/avatar.jpg" 
                alt="User Avatar"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-300"
              />
              {/* Right: Text Message */}
              <p className="text-gray-800 text-sm sm:text-base bg-gray-200 px-3 py-2 rounded-lg max-w-xs">
                Hello!
              </p>
            </div>

            {/* Message Row 2 */}
            <div className="flex items-center w-full gap-3">
              {/* Left: User Image */}
              <Image
                src="/images/avatar.jpg" 
                alt="User Avatar"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-300"
              />
              {/* Right: Text Message */}
              <p className="text-gray-800 text-sm sm:text-base bg-gray-200 px-3 py-2 rounded-lg max-w-xs">
                I need assistance with my account. Can you help me with that?
              </p>
            </div>

            {/* Response Row 1 (New Response Message) */}
            <div className="flex items-center w-full gap-3 justify-end">
              {/* Right: User Image */}
              <Image
                src="/images/2-avatar.jpg" 
                alt="User Avatar"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-300"
              />
              {/* Left: Response Text */}
              <p className="text-gray-800 text-sm sm:text-base bg-blue-200 px-3 py-2 rounded-lg max-w-xs">
                Sure! Please let me know the issue you&apos;re facing, and I&apos;ll assist you.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
