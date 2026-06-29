"use client";

import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

const get3DBoxStyles = (index: number) => {
  switch(index) {
    case 0: // Level 1 (Bronze - Bottom)
      return "bg-gradient-to-br from-[#d9b897] to-[#c4a484] border-t-2 border-l-2 border-white/40 border-b-[12px] border-r-[12px] border-[#8b4513] shadow-2xl text-white";
    case 1: // Level 2 (Silver - Middle)
      return "bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] border-t-2 border-l-2 border-white/80 border-b-[12px] border-r-[12px] border-[#a0a0a0] shadow-2xl text-gray-900";
    case 2: // Level 3 (Gold - Top)
      return "bg-gradient-to-br from-[#ffe540] to-[#ffd700] border-t-2 border-l-2 border-white/60 border-b-[12px] border-r-[12px] border-[#b8860b] shadow-2xl text-black";
    default:
      return "";
  }
};

const getImage = (index: number) => {
  switch(index) {
    case 0: return "/media/level_1.png";
    case 1: return "/media/level_2.png";
    case 2: return "/media/level_3.png";
    default: return "";
  }
};

const getWidth = (index: number) => {
  switch(index) {
    case 0: return "w-[95%] md:w-[85%]";
    case 1: return "w-[75%] md:w-[60%]";
    case 2: return "w-[55%] md:w-[35%]";
    default: return "w-full";
  }
};

export default function Scene6() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.5, duration: 0.8 } }
  };

  // We reverse the array so Level 3 renders on top visually, 
  // but we map over the original indexes to keep data intact.
  const levelsReversed = [...ideathonData.scene6.levels].map((level, i) => ({ ...level, originalIndex: i })).reverse();

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center pt-2 h-full justify-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 text-brand-blue uppercase tracking-wide flex items-center gap-4 drop-shadow-sm text-center"
        >
          {ideathonData.scene6.title}
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-5xl flex flex-col items-center gap-4 md:gap-6 relative"
        >
          {levelsReversed.map((level) => {
            const i = level.originalIndex;
            return (
              <motion.div 
                key={i} 
                variants={item}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`flex ${i === 2 ? 'flex-col text-center' : 'flex-col md:flex-row text-center md:text-left'} items-center gap-4 p-4 md:p-6 rounded-2xl transition-transform duration-300 relative ${getWidth(i)} ${get3DBoxStyles(i)}`}
                style={{ zIndex: i }}
              >
                {/* Level Image */}
                <div className={`${i === 2 ? 'w-24 h-24 md:w-32 md:h-32' : 'w-20 h-20 md:w-28 md:h-28'} flex-shrink-0 rounded-xl overflow-hidden shadow-inner border-2 border-black/10`}>
                  <img src={getImage(i)} alt={level.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                
                {/* Level Content */}
                <div className="flex flex-col justify-center flex-grow">
                  <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
                    <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-black/10 flex items-center justify-center border border-black/20 shadow-sm">
                      <span className="text-sm md:text-base font-black">{i + 1}</span>
                    </div>
                    <span className="font-bold tracking-widest text-[10px] md:text-xs uppercase opacity-80">{level.level}</span>
                  </div>
                  
                  <h3 className={`font-black mb-1 leading-tight ${i === 2 ? 'text-xl md:text-3xl' : 'text-lg md:text-xl'}`}>
                    {level.name}
                  </h3>
                  <p className={`opacity-90 ${i === 2 ? 'text-sm md:text-base font-medium' : 'text-xs md:text-sm'}`}>
                    {level.desc}
                  </p>
                </div>

                {/* Crown Icon for Level 3 */}
                {i === 2 && (
                  <div className="absolute -top-6 -right-4 md:-top-8 md:-right-6 text-4xl md:text-6xl drop-shadow-xl animate-bounce">
                    👑
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 md:mt-12 flex gap-3 md:gap-6 text-xl md:text-3xl font-black tracking-widest text-gray-800"
        >
          {ideathonData.scene6.tagline.map((word, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + i * 0.3, type: "spring", stiffness: 200 }}
              className={i === 2 ? "text-brand-blue drop-shadow-md scale-110 origin-bottom" : ""}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </SceneWrapper>
  );
}
