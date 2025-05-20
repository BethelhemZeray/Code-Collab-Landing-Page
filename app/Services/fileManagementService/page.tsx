import HeroSection from "./heroSection";
import FeatureSection from "./featureSec";
// import ImageCard from "./imageCon";
import ExpCard from "./expCard";
import InfoSection from "./infoSec";

export default function fileManagementService() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      {/* <ImageCard/> */}
      <ExpCard/>
      <InfoSection/>
      <FeatureSection/>
    </main>
  );
}