import Hero from "../components/HeroSec";
import { heroData } from "../constants/herosec";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="container mx-auto">
        <Hero hero={heroData[0]} />
      </div>
    </section>
  );
}
