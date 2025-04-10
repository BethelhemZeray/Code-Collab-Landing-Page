import React from "react";

const InfoSection = () => {
  // Data for each item
  const items = [
    {
      title: "Real-Time Code Collaboration",
      description: "Collaborate with your team in real-time on the same codebase, with live updates and seamless integration.",
      bgColor: "from-pink-400 to-purple-400",
    },
    {
      title: "Integrated Chat System",
      description: "Communicate effortlessly with your team using our built-in chat system, designed for developers.",
      bgColor: "from-blue-400 to-indigo-400",
    },
    {
      title: "Secure Code Sharing",
      description: "Share your code securely with encryption and access control to protect your intellectual property.",
      bgColor: "from-pink-400 to-purple-400",
    },
  ];

  return (
    <section className="flex flex-col items-center min-h-screen w-full p-6 gap-10">

      {/* Section Title */}
      <div className="w-full text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Explore Our Code Collaboration Features
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-2">
          Discover how our platform enhances teamwork and productivity with real-time collaboration tools.
        </p>
      </div>

      {/* Items List */}
      <div className="w-full flex flex-col gap-12 px-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-6 w-full max-w-5xl mx-auto px-4">
            
            {/* Left - Item Description */}
            <div className="w-full md:w-1/3 text-center md:text-left px-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mt-2">{item.description}</p>
            </div>

            {/* Right - Image Container */}
            <div className={`w-full md:w-2/3 h-[40vh] sm:h-[50vh] bg-gradient-to-b ${item.bgColor} shadow-lg rounded-xl p-6 flex items-center justify-center px-4`}>
              <div className="w-[90%] sm:w-[80%] h-auto min-h-[30vh] bg-gray-200 px-8 py-6 rounded-lg shadow-md flex items-center justify-center">
                <p className="text-gray-700 text-base sm:text-lg font-medium">Image</p>
              </div>
            </div>

          </div>
        ))}
      </div>
      
    </section>
  );
};

export default InfoSection;
