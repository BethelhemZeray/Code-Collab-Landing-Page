import Hero from "../components/Hero";
import { hero } from "../constants/hero";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="container mx-auto">
        <Hero hero={hero[0]} />
      </div>
    </section>
  );
}
