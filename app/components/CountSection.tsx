import CounterCard from "./CounterCard";
import GlowCard from "./GlowCard";
const counts = [
  { id: 1, count: "100+", description: "client review" },
  { id: 2, count: "200+", description: "projects completed" },
  { id: 3, count: "300+", description: "awards won" },
  { id: 4, count: "400+", description: "happy clients" },
  { id: 5, count: "500+", description: "years of experience" },
];

const CountSection = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg">
      {counts.map((count) => (
        // <CounterCard key={count.id} count={count} />
        <GlowCard key={count.id} count={count} />
      ))}
    </div>
  );
};

export default CountSection;