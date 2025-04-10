
import LiveEditor from "./cards";
import CountSection from "./countSec";
import InfoCard from "./EditorInfoCard";
import FeatureSection from "./feature";


export default function LiveEditorSection() {
    return (
      <main className="w-full min-h-screen text-white ">
        <LiveEditor />
        <FeatureSection />
        <InfoCard/>
        <CountSection/>
        
    
      </main>
    );
  }