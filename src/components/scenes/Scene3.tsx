"use client";

import { motion, Variants } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

export default function Scene3() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemSlideUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
  };

  const itemSlideRight: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
  };

  const imageVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    show: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }
  };

  const checkmarkVariant: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.4, type: "spring", bounce: 0.6 } }
  };

  return (
    <SceneWrapper>
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 p-4 md:p-8 overflow-hidden max-w-[1400px] mx-auto">
        
        {/* Left Side: Text Content */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 w-full flex flex-col justify-center max-w-2xl"
        >
          {/* Header */}
          <motion.div variants={itemSlideUp} className="mb-8">
            <h2 className="text-3xl md:text-5xl font-black text-brand-blue uppercase tracking-widest drop-shadow-sm mb-2">
              {ideathonData.scene3.title}
            </h2>
          </motion.div>

          {/* Mission */}
          <motion.div variants={itemSlideUp} className="mb-6">
            <div className="flex flex-col gap-5">
              {ideathonData.scene3.missionPoints.map((point, i) => {
                const icons = ["💡", "🤝", "🚀"];
                return (
                  <motion.div 
                    key={i} 
                    variants={itemSlideRight} 
                    className="flex items-center gap-4 bg-white/60 backdrop-blur-md p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm"
                  >
                    <motion.div 
                      variants={checkmarkVariant}
                      className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-2xl md:text-3xl"
                    >
                      {icons[i] || "✓"}
                    </motion.div>
                    <span className="text-lg md:text-2xl font-bold text-gray-800">
                      {point}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Hyper-realistic Image */}
        <motion.div 
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 w-full flex justify-center items-center mt-8 md:mt-0"
        >
          <div className="relative w-full max-w-2xl aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent mix-blend-overlay z-10 pointer-events-none" />
            <img 
              src="/images/scene3/indian_students.png" 
              alt="Bright diverse Indian school students brainstorming around a high-tech project table"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>

      </div>
    </SceneWrapper>
  );
}
