import Hero from "./heroSection";
import VersionControl from "./versionControl";
import VersionControlSection from "./description";
import GitCommands from "./Commands";
import BranchingDiagram from "./Branching";
import GitInfo from "./use";

export default function VersionControlServicePage() {
  return (
    <main className="w-full min-h-screen">
        <Hero />
        <VersionControl />
        <VersionControlSection/>
        <BranchingDiagram/>
        <GitInfo/>
        <GitCommands/>
    </main>
  );
}