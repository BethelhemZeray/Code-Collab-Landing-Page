import DockerHero from "./heroSec";
import DockerSection from "./feature";
import DockerCollaborationBenefits from "./benefit";

export default function DockerServicePage() {
  return (
    <main className="w-full min-h-screen">
        <DockerHero/>
        <DockerSection/>
        <DockerCollaborationBenefits/>
    </main>
  );
}