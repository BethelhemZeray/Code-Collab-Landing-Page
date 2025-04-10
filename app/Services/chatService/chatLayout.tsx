"use client";

import { chat } from "@/app/constants/chat";
import { motion } from "framer-motion";

export default function ChatLanding() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-black px-6 sm:px-10 md:px-16 lg:px-24 pt-24 sm:pt-26 md:pt-32 lg:pt-36 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
      {/* Animated Chat Intro */}
      <motion.div
        className="w-full max-w-4xl text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {chat.map((item, index) => (
          <motion.div
            key={index}
            className="px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {item.title}
            </h1>
            <p className="mt-3 sm:mt-5 md:mt-6 text-lg sm:text-xl md:text-2xl text-gray-600">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Extra spacing between sections */}
      <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32"></div>

      {/* Title on Left - Description on Right */}
      <motion.div
        className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title on Left */}
        <h2 className="text-2xl text-purple-500 sm:text-3xl font-bold text-center md:text-left md:w-1/2">
          Seamless Communication for Teams
        </h2>

        {/* Description on Right */}
        <p className="text-base sm:text-lg text-purple-600 text-center md:text-left md:w-1/2">
          Experience real-time collaboration with instant messaging, voice, and video chats. 
          Stay connected and work efficiently with your team, no matter where you are.
        </p>
      </motion.div>
    </section>
  );
}
