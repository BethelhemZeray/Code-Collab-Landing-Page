
import HeroSection from "./heroSection";      
import Step from "./howworks";
import WhyChooseUs from "./choose";
import ImageCard from "./imageCard";
import VideoCall from "./videoSec";

export default function videoService() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <Step/>
      <WhyChooseUs/>
      <VideoCall/>
      <ImageCard/>
      
    </main>
  );
}