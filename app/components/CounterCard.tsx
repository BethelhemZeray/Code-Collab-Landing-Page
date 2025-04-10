import GlowCard from "../components/GlowCard";

const counts = [
  { id: 1, count: "Access Anywhere", description: "Code from any device, anytime, anywhere.", link: "Learn more" },
  { id: 2, count: "Seamless Collaboration", description: "Work together in real time with teammates.", link: "Learn more" },
  { id: 3, count: "High Security", description: "Ensure data protection with top-tier encryption.", link: "Learn more" },
  { id: 4, count: "Optimized Performance", description: "Fast and reliable execution for all projects.", link: "Learn more" },
  { id: 5, count: "Multi-Language Support", description: "Write code in your favorite programming languages.", link: "Learn more" },
];

const FeatureSection = () => {
  return (
    <div id="features" className="py-22 text-white rounded-lg px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12  md:gap-10 gap-8">
        {counts.map((count) => (
          <GlowCard key={count.id} count={count} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
