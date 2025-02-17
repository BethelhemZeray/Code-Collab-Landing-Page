import ProjectsSection from "./projects/page";
import Blog from "./blog/page";
import HeroSection from "./hero/page";
import FeatureSection from "./Feature/page";
//import CountSection from "./components/CountSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <HeroSection />
      <FeatureSection />
      <ProjectsSection />
      <Blog />
    </main>
  );
}