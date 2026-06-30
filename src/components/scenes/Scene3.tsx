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
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase tracking-widest drop-shadow-sm mb-2">
              {ideathonData.scene3.title}
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-tight">
              {ideathonData.scene3.subtitle}
            </h3>
          </motion.div>

          {/* Mission */}
          <motion.div variants={itemSlideUp} className="mb-6">
            <h4 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
              {ideathonData.scene3.missionTitle}
            </h4>
            <div className="flex flex-col gap-3">
              {ideathonData.scene3.missionPoints.map((point, i) => (
                <motion.div 
                  key={i} 
                  variants={itemSlideRight} 
                  className="flex items-center gap-4 bg-white/60 backdrop-blur-md p-3 md:p-4 rounded-xl border border-gray-100 shadow-sm"
                >
                  <motion.div 
                    variants={checkmarkVariant}
                    className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-bold text-lg"
                  >
                    ✓
                  </motion.div>
                  <span className="text-base md:text-xl font-bold text-gray-800">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Remember */}
          <motion.div variants={itemSlideUp} className="mt-4 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 p-5 md:p-6 rounded-2xl border border-white/50 shadow-md">
            <h4 className="text-lg md:text-xl font-black text-brand-blue uppercase tracking-widest mb-2">
              {ideathonData.scene3.rememberTitle}
            </h4>
            <p className="text-base md:text-lg font-medium text-gray-700 leading-snug">
              {ideathonData.scene3.rememberLines[0]}
            </p>
            <p className="text-lg md:text-2xl font-black text-gray-900 mt-1 drop-shadow-sm">
              {ideathonData.scene3.rememberLines[1]}
            </p>
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
