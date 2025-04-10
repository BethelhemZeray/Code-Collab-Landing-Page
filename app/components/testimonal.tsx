"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Bethelhem Zeray",
    position: "Product Manager, Developer",
    testimonial:
      "This platform has completely transformed the way we communicate and collaborate on projects. The real-time messaging and video call features are top-notch!",
    image: "/images/avatar.jpg",
  },
  {
    id: 2,
    name: "Amanuel Daniel",
    position: "Lead Developer, Developer",
    testimonial:
      "The ease of sharing files and collaborating with my team members has never been more seamless. I can’t imagine working without this tool.",
    image: "/images/avatar.jpg",
  },
];

const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-semibold text-white mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          What Developers Are Saying
        </motion.h2>

        {/* Testimonials Container */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-900 p-6 rounded-xl shadow-lg w-full sm:w-[500px] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                {/* Quote mark */}
                <span className="absolute top-[-30px] left-[-20px] text-6xl text-blue-400 p-4">
                  “
                </span>
                <p className="text-lg text-white mb-6 p-6">
                  &quot;{testimonial.testimonial}&quot;
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full border border-gray-300"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-white">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
