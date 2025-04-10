
import HeroSection from "./hero/page";
import FeatureSection from "./overview/page";
import ImageSection from "./imagecontainer/image";
import InfoCard from "./components/InfoCard";
import CoreValues from "./Services/liveEditorService/corevalueCard";
import Faq from "./components/frequently";
import TestimonialSection from "./components/testimonal";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <ImageSection />
      <InfoCard />
      <CoreValues />
      <FeatureSection />
      <TestimonialSection/>
      <Faq/>
      
      
  
    </main>
  );
}