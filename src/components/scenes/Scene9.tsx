"use client";

import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

export default function Scene9() {
  return (
    <SceneWrapper className="flex items-center justify-center relative overflow-hidden">
      
      {/* Spotlights Pointing towards center */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Left Spotlight */}
        <motion.div 
          initial={{ opacity: 0, rotate: -45, scaleY: 0 }}
          animate={{ opacity: 0.3, rotate: -25, scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-[10%] left-[10%] w-[40%] h-[120%] origin-top-left"
          style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)', filter: 'blur(40px)' }}
        />
        {/* Right Spotlight */}
        <motion.div 
          initial={{ opacity: 0, rotate: 45, scaleY: 0 }}
          animate={{ opacity: 0.3, rotate: 25, scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute -top-[10%] right-[10%] w-[40%] h-[120%] origin-top-right"
          style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)', filter: 'blur(40px)' }}
        />
      </div>

      {/* Premium Background Effects matching other slides */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ffd700]/10 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-12 md:mb-20 flex items-center justify-center gap-3 md:gap-5"
        >
          <span className="text-4xl md:text-6xl">🎤</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#FFD700] uppercase tracking-[0.1em] drop-shadow-lg"
              style={{ WebkitTextStroke: "2px black" }}>
            {ideathonData.scene9.title.replace("🎤", "").trim()}
          </h2>
        </motion.div>

        {/* Quote / Lines */}
        <div className="flex flex-col gap-8 md:gap-12 w-full items-center z-10 relative">
          {ideathonData.scene9.lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.5 + i * 1.5, duration: 1.2, ease: "easeOut" }}
              className="w-full flex flex-col md:flex-row items-center justify-start gap-4 md:gap-8 max-w-5xl mx-auto pl-0 md:pl-12"
            >
              {/* Line Image */}
              <motion.div 
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8 + i * 1.5, duration: 0.8, type: "spring" }}
                className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 border-4"
                style={{ borderColor: i === 2 ? '#FFD700' : 'rgba(255,255,255,0.6)' }}
              >
                <img src={`/media/scene9_line${i+1}.png`} alt="Illustration" className="w-full h-full object-cover" />
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 1.5, duration: 0.5, type: "spring" }}
                className="hidden md:flex items-center justify-center text-4xl md:text-5xl text-gray-400 flex-shrink-0"
              >
                ➔
              </motion.div>

              {/* Text */}
              <div className="flex-1">
                <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-center md:text-left ${
                  i === 2 
                    ? 'text-brand-blue drop-shadow-md uppercase md:scale-105 transform md:origin-left' 
                    : 'text-gray-900 drop-shadow-lg'
                }`}>
                  {line}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SceneWrapper>
  );
}
