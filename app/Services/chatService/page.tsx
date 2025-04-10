import ChatLayout from "./chatLayout";
import ChatBox from "./chatbox";
import ContainerSection from "./containersec";
import DobContainer from "./doublecontainer";
import InfoSection from "./InfoSection";
import FeatureCards from "./featurecards";

export default function chatService() {
    return (
      <main className="w-full bg-white min-h-screen ">
        <ChatLayout/>
        <FeatureCards/>
        <ChatBox/>
        <ContainerSection/>
        <DobContainer/> 
        <InfoSection/>
      </main>
    );
  }