"use client";

import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

const pointColors = [
  "bg-blue-50 border-blue-200 text-blue-900 shadow-blue-100",
  "bg-green-50 border-green-200 text-green-900 shadow-green-100",
  "bg-purple-50 border-purple-200 text-purple-900 shadow-purple-100",
  "bg-yellow-50 border-yellow-200 text-yellow-900 shadow-yellow-100",
  "bg-pink-50 border-pink-200 text-pink-900 shadow-pink-100"
];

export default function Scene3() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, type: "spring" as const, bounce: 0.4 } }
  };

  return (
    <SceneWrapper>
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-left p-4 md:p-8">
        
        {/* Left Side: Points */}
        <div className="flex-1 w-full text-left flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-brand-blue uppercase tracking-wider drop-shadow-sm"
          >
            {ideathonData.scene3.title}
          </motion.h2>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-3 w-full max-w-xl"
          >
            {ideathonData.scene3.points.map((point, i) => (
              <motion.div 
                key={i} 
                variants={item} 
                className={`p-3 md:p-4 rounded-xl border flex items-center shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 ${pointColors[i % pointColors.length]}`}
              >
                <div className="text-sm md:text-base font-bold leading-snug">
                  {point}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 text-xl md:text-2xl font-black text-brand-blue flex flex-wrap gap-3"
          >
            {ideathonData.scene3.tagline.map((word, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + (i * 0.15) }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Iframe Video Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1 w-full flex justify-center items-center mt-8 md:mt-0"
        >
          <div className="w-full max-w-2xl aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative">
            <iframe 
              className="w-full h-full absolute inset-0"
              src="about:blank" 
              title="Video Placeholder"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            {/* Visual placeholder content since iframe is empty */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-gray-400">
              <span className="text-5xl mb-4 opacity-50">▶</span>
              <span className="text-sm font-bold uppercase tracking-widest">Video Frame</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SceneWrapper>
  );
}
