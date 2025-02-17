import GlowCard from "../components/GlowCard";

const counts = [
  { id: 1, count: "Real-Time Collaboration", description: " Work on the same codebase simultaneously.", link: "Learn more"},
  { id: 2, count: "Version Control Integration", description: " Seamless Git-based project management.", link: "Learn more"},
  { id: 3, count: "Secure Code Execution", description: "Run and test code in Dockerized environments.", link: "Learn more" },
  { id: 4, count: "Task Management", description: "Assign tasks and track progress efficiently.", link: "Learn more" },
  { id: 5, count: "Integrated Chat & Video Calls", description: "Communicate in real time.", link: "Learn more" },
];

const FeatureSection = () => {
  return (
    <div id="features" className="py-20 bg-black text-white rounded-lg p-10">
      {/* Feature Header Inside the Container */}
      <h2 className="text-6xl font-bold text-center mb-12">Features</h2>

      {/* Feature Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {counts.map((count) => (
          <GlowCard key={count.id} count={count} link={count.link} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
