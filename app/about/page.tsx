import CountSection from "../components/CountSection";
import ExperianceCard from "../components/ExperianceCard";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center">About Me</h2>
        <p className="mt-4 text-lg text-center">
          I am a passionate developer with expertise in Next.js and Tailwind
          CSS.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-top justify-center lg:justify-between h-full space-y-10 lg:space-y-0 py-4">
        <div className="lg:w-1/2 text-left lg:p-6 mt-8 lg:mt-0 rounded-lg backdrop-blur-sm">
          <ExperianceCard />
        </div>
        <div className="lg:w-1/2 w-full flex justify-center lg:p-6 items-center ">
          <CountSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
