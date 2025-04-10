"use client";

import Image from "next/image";

export default function ImageSection() {
  return (
    <div className="relative py-2 mx-auto w-full max-w-[800px] h-auto px-4">
      <Image
        src="/images/CE.jpg"
        alt="Background"
        width={800} 
        height={500} 
        className="rounded-3xl shadow-2xl shadow-gray-300 w-full h-auto"
      />
    </div>
  );
}
   