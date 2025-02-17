// import CounterCard from "./CounterCard";
import GlowCard from "./GlowCard";
const counts = [
  { id: 1, count: "Real-Time Collaboration", description: " Work on the same codebase simultaneously.", link: "Learn more"},
  { id: 2, count: "Version Control Integration", description: " Seamless Git-based project management.", link: "Learn more"},
  { id: 3, count: "Secure Code Execution", description: "Run and test code in Dockerized environments.", link: "Learn more" },
  { id: 4, count: "Task Management", description: "Assign tasks and track progress efficiently.", link: "Learn more" },
  { id: 5, count: "Integrated Chat & Video Calls ", description: "Communicate in real time.", link: "Learn more" },
];

const CountSection = () => {
  return (
    <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg p-6">
      {counts.map((count) => (
        //<CounterCard key={count.id} count={count} />
        <GlowCard key={count.id} count={count} link={count.link}/>
      ))}
    </div>
  );
};

export default CountSection;