import Image from "next/image";
import { THero } from "../constants/type";
import TextLoop from "./TextLoop";

type HeroProps = {
  hero: THero;
};

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white pt-10 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Container for Text and Image */}
      <div className="relative container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full space-y-10 lg:space-y-0 py-4">
        {/* Text Content (Left Side) */}
        <div className="lg:w-3/4 text-left bg-black bg-opacity-30 p-6 mt-8 lg:mt-0 rounded-lg shadow-lg backdrop-blur-sm order-2 lg:order-1">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            {hero.name}
          </h1>

          <div className="space-y-4">
            <TextLoop skills={hero.skills}/>
          </div>
          <p className="text-lg md:text-xl drop-shadow-md mt-4">
            {hero.description}
          </p>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center items-center sm:px-4 lg:px-4 rder-1 lg:order-2">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded-xl overflow-hidden shadow-xl border-2 border-white">
            <Image
              src={hero.profileImage.src}
              alt={hero.profileImage.alt}
              width={500} // Decreased width
              height={0} // Keeps aspect ratio
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
