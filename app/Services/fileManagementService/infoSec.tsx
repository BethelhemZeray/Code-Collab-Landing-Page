import React from "react";

const InfoSection = () => {
  // Data for each feature
  const items = [
    {
      title: "Secure Cloud Storage",
      description: "Store your files safely with end-to-end encryption and easy access from any device.",
      bgColor: "from-blue-400 to-indigo-400",
    },
    {
      title: "Instant File Sharing",
      description: "Share files effortlessly with team members using secure links and access control settings.",
      bgColor: "from-green-400 to-teal-400",
    },
    {
      title: "Real-Time File Syncing",
      description: "Keep your files updated across multiple devices with real-time synchronization.",
      bgColor: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <section className="flex flex-col items-center min-h-screen w-full p-6 gap-10">

      {/* Section Title */}
      <div className="w-full text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Explore Our File Management Features
        </h2>
        <p className="text-white text-base sm:text-lg mt-2">
          Discover how our platform ensures secure, seamless, and efficient file storage and collaboration.
        </p>
      </div>

      {/* Features List */}
      <div className="w-full flex flex-col gap-12 px-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-6 w-full max-w-5xl mx-auto px-4">
            
            {/* Left - Feature Description */}
            <div className="w-full md:w-1/3 text-center md:text-left px-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">{item.title}</h3>
              <p className="text-white text-sm sm:text-base mt-2">{item.description}</p>
            </div>

            {/* Right - Image Container (Placeholder for File Management UI Preview) */}
            <div className={`w-full md:w-2/3 h-[40vh] sm:h-[50vh] bg-gradient-to-b ${item.bgColor} shadow-lg rounded-xl p-6 flex items-center justify-center px-4`}>
              <div className="w-[90%] sm:w-[80%] h-auto min-h-[30vh] bg-gray-200 px-8 py-6 rounded-lg shadow-md flex items-center justify-center">
                <p className="text-gray-900 text-base sm:text-lg font-medium">File Management UI Preview</p>
              </div>
            </div>

          </div>
        ))}
      </div>
      
    </section>
  );
};

export default InfoSection;
