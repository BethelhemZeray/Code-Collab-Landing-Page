
import { FaCode, FaSyncAlt, FaShieldAlt, FaUsers, FaCommentDots, FaTerminal, FaCloud, FaVideo } from 'react-icons/fa'; // Import icons
import GlowCard from './glowCard';

const counts = [
  { 
    id: 1, 
    count: "Live Code Editing", 
    description: "Edit code in real-time with instant updates.", 
    link: "Read more", 
    icon: <FaCode /> 
  },
  { 
    id: 2, 
    count: "Real-Time Collaboration", 
    description: "Collaborate with teammates on the same codebase simultaneously.", 
    link: "Read more", 
    icon: <FaSyncAlt /> 
  },
  { 
    id: 3, 
    count: "Secure Code Execution", 
    description: "Run and test code in isolated, Dockerized environments.", 
    link: "Read more", 
    icon: <FaShieldAlt /> 
  },
  { 
    id: 4, 
    count: "Integrated Communication", 
    description: "Chat and make video calls directly within the editor.", 
    link: "Read more", 
    icon: <FaCommentDots /> 
  },
  { 
    id: 5, 
    count: "Multi-User Support", 
    description: "Support for multiple users working on the same project.", 
    link: "Read more", 
    icon: <FaUsers /> 
  },
  { 
    id: 6, 
    count: "Terminal Access", 
    description: "Access a built-in terminal for advanced operations.", 
    link: "Read more", 
    icon: <FaTerminal /> 
  },
  { 
    id: 7, 
    count: "Cloud Integration", 
    description: "Seamlessly integrate with cloud services.", 
    link: "Read more", 
    icon: <FaCloud /> 
  },
  { 
    id: 8, 
    count: "Video Tutorials", 
    description: "Access video tutorials directly within the editor.", 
    link: "Read more", 
    icon: <FaVideo /> 
  },
];

const CountSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-white px-4 py-6 md:px-12 bg-gradient-to-b bg-[length:400%] animate-gradient-bg">
      
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-8 rounded-lg">
      {counts.map((count) => (
        <GlowCard key={count.id} count={count} link={count.link} icon={count.icon} />
      ))}
    </div>
    </section>
  );
};

export default CountSection;