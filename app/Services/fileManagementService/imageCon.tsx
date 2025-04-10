import React from "react";
import Image from "next/image";

const ImageCard = () => {
  return (
    <section className="flex justify-center items-center w-full px-4 py-6">

      <div className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl bg-gradient-to-b from-pink-400 to-purple-400 shadow-lg rounded-xl p-4 sm:p-6 md:p-8 flex flex-col justify-center">
        

        <div className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] bg-gray-100 rounded-lg shadow-md relative overflow-hidden">
          <Image
            src="/images/file.jpg" 
            alt="File Organization"
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageCard;