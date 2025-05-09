"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchServices } from "@/redux/slices/serviceSlice";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  CheckCircle,
  ArrowRight,
  Rocket,
  Gift,
} from "lucide-react";

const FreePlanPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const services = useSelector((state: RootState) => state.service.services);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState(1);
  const [isHovering, setIsHovering] = useState({
    next: false,
    prev: false,
    skip: false,
  });

  const freeServices = services.filter((service) => service.type === "free");

  useEffect(() => {
    const loadServices = async () => {
      try {
        await dispatch(fetchServices());
        await new Promise((resolve) => setTimeout(resolve, 1200));
      } finally {
        setIsLoading(false);
      }
    };
    loadServices();
  }, [dispatch]);

  const handleNext = () => {
    setDirection(1);
    if (currentIndex < freeServices.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/auth/register?plan=free");
    }
  };

  const handlePrevious = () => {
    setDirection(-1);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSkipAll = () => {
    router.push("/auth/register?plan=free");
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center h-screen"
      >
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.3, 1],
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="mb-6"
          >
            <Rocket size={64} className="text-green-400" />
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2
              animate={{
                backgroundPositionX: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              Preparing Your Free Plan
            </motion.h2>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            className="w-72 h-3 bg-gray-700 rounded-full mt-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  if (freeServices.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      >
        <motion.div
          className="text-center p-10 max-w-md bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 shadow-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Gift size={72} className="mx-auto text-green-400 mb-6" />
          </motion.div>

          <motion.h2
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            No Free Services Found
          </motion.h2>

          <motion.p
            className="text-gray-300 mb-8 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We couldn&apos;t find any free services available right now. Check back
            later or register to explore our premium offerings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(74, 222, 128, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/auth/register")}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg flex items-center gap-2 text-lg font-medium"
            >
              Get Started
              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-6 overflow-hidden text-white relative"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `linear-gradient(45deg, 
            rgba(74, 222, 128, 0.2), 
            rgba(52, 211, 153, 0.2), 
            rgba(34, 197, 94, 0.2),
            rgba(74, 222, 128, 0.2))`,
          backgroundSize: "300% 300%",
        }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 8 + 2,
            height: Math.random() * 8 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 200 - 100],
            x: [0, Math.random() * 200 - 100],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="w-full text-center mb-10 relative z-10"
      >
        <motion.div whileHover={{ scale: 1.02 }} className="inline-block mb-2">
          <h1 className="text-5xl font-bold mt-20 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            Free Plan Features
          </h1>
        </motion.div>

        <motion.div
          className="flex justify-center items-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[...Array(freeServices.length)].map((_, i) => (
            <motion.button
              key={i}
              className={`relative h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-10 bg-gradient-to-r from-green-500 to-emerald-500"
                  : "w-6 bg-gray-600"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
            >
              {i === currentIndex && (
                <motion.span
                  className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-xs font-bold shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  {i + 1}
                </motion.span>
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.p
          className="text-gray-300 text-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          Discovering amazing feature {currentIndex + 1} of{" "}
          {freeServices.length}
        </motion.p>
      </motion.div>

      <div className="w-full relative z-10">
        {/* Previous Button */}
        <motion.button
          onClick={handlePrevious}
          className={`absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full transition-all ${
            currentIndex === 0
              ? "bg-gray-700/30 cursor-not-allowed"
              : "bg-gradient-to-br from-green-600/20 to-emerald-600/20 hover:from-green-600/30 hover:to-emerald-600/30 cursor-pointer"
          } border border-gray-600/50 shadow-lg`}
          aria-label="Previous"
          disabled={currentIndex === 0}
          onHoverStart={() =>
            setIsHovering((prev) => ({ ...prev, prev: true }))
          }
          onHoverEnd={() => setIsHovering((prev) => ({ ...prev, prev: false }))}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{
              x: isHovering.prev ? [-3, 3, -3] : 0,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronLeft className="w-12 h-12" />
          </motion.div>
        </motion.button>

        {/* Next Button */}
        <motion.button
          onClick={handleNext}
          className={`absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full transition-all ${
            currentIndex === freeServices.length - 1
              ? "bg-gradient-to-br from-green-600/20 to-emerald-600/20 hover:from-green-600/30 hover:to-emerald-600/30"
              : "bg-gradient-to-br from-green-600/20 to-emerald-600/20 hover:from-green-600/30 hover:to-emerald-600/30"
          } border border-gray-600/50 shadow-lg`}
          aria-label="Next"
          onHoverStart={() =>
            setIsHovering((prev) => ({ ...prev, next: true }))
          }
          onHoverEnd={() => setIsHovering((prev) => ({ ...prev, next: false }))}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{
              x: isHovering.next ? [3, -3, 3] : 0,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronRight className="w-12 h-12" />
          </motion.div>
        </motion.button>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{
              x: direction > 0 ? 500 : -500,
              opacity: 0,
              rotateY: direction > 0 ? 30 : -30,
            }}
            animate={{
              x: 0,
              opacity: 1,
              rotateY: 0,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            exit={{
              x: direction > 0 ? -500 : 500,
              opacity: 0,
              rotateY: direction > 0 ? -30 : 30,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              mass: 0.5,
            }}
            className="w-full max-w-3xl mx-auto text-center bg-gray-800/70 backdrop-blur-lg rounded-3xl p-10 border border-gray-700/50 shadow-2xl overflow-hidden"
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-block mb-8"
              >
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                  {freeServices[currentIndex].name}
                </h2>
              </motion.div>

              <motion.p
                className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {freeServices[currentIndex].description}
              </motion.p>

              {freeServices[currentIndex].features &&
                freeServices[currentIndex].features.length > 0 && (
                  <motion.div
                    className="text-left mx-auto w-full max-w-2xl mb-8 bg-gray-900/50 p-8 rounded-xl border border-gray-700/50 relative overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {/* Feature list background pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-10">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={`pattern-${i}`}
                          className="absolute border-l border-gray-500"
                          style={{
                            left: `${(i * 5) % 100}%`,
                            top: 0,
                            height: "100%",
                          }}
                        />
                      ))}
                    </div>

                    <h3 className="text-2xl text-white font-semibold mb-6 flex items-center gap-3">
                      <motion.span
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <Zap className="text-green-400" size={24} />
                      </motion.span>
                      Included Features
                    </h3>

                    <ul className="space-y-4 relative z-10">
                      {freeServices[currentIndex].features.map(
                        (feature: string, index: number) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-3 text-gray-300 text-lg"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                              delay: 0.6 + index * 0.1,
                              type: "spring",
                              stiffness: 500,
                            }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.span
                              className="flex-shrink-0 mt-1"
                              animate={{
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 0.5,
                                delay: 0.6 + index * 0.1,
                              }}
                            >
                              <CheckCircle
                                className="text-green-400"
                                size={20}
                              />
                            </motion.span>
                            <span>{feature}</span>
                          </motion.li>
                        )
                      )}
                    </ul>
                  </motion.div>
                )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="mt-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(74, 222, 128, 0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSkipAll}
          onHoverStart={() =>
            setIsHovering((prev) => ({ ...prev, skip: true }))
          }
          onHoverEnd={() => setIsHovering((prev) => ({ ...prev, skip: false }))}
          className="px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-xl text-lg font-medium flex items-center gap-3 relative overflow-hidden"
        >
          {/* Button shine effect */}
          {isHovering.skip && (
            <motion.span
              className="absolute -inset-1 bg-white/20"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "linear" }}
              style={{
                transform: "skewX(-20deg)",
              }}
            />
          )}

          <span>Skip All & Register Now</span>
          <motion.span
            animate={{
              x: isHovering.skip ? [0, 5, 0] : 0,
              rotate: isHovering.skip ? [0, 15, 0] : 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <ArrowRight size={22} />
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FreePlanPage;