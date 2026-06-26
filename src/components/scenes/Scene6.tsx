"use client";

import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

const getBoxStyles = (index: number) => {
  switch(index) {
    case 0:
      return "bg-[#c4a484] border-[#8b4513] shadow-[0_0_40px_rgba(139,69,19,0.7)] text-white";
    case 1:
      return "bg-[#e0e0e0] border-[#a0a0a0] shadow-[0_0_40px_rgba(100,100,100,0.6)] text-gray-900";
    case 2:
      return "bg-[#ffd700] border-[#b8860b] shadow-[0_0_50px_rgba(255,215,0,0.9)] text-black";
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

export default function Scene6() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.4 } }
  };

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center pt-2">
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-brand-blue uppercase tracking-wide flex items-center gap-4 drop-shadow-sm text-center"
        >
          {ideathonData.scene6.title}
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {ideathonData.scene6.levels.map((level, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className={`p-4 md:p-6 flex flex-col items-center justify-center text-center gap-3 group hover:scale-[1.05] transition-all duration-300 w-full relative overflow-hidden rounded-2xl border-2 ${getBoxStyles(i)}`}
            >
              {/* Generated Image */}
              <div className="w-full h-32 md:h-40 rounded-xl overflow-hidden shadow-inner mb-2 border border-black/10">
                <img src={getImage(i)} alt={level.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/40 shadow-sm">
                <span className="text-xl font-black">{i + 1}</span>
              </div>

              <div className="font-bold tracking-widest text-[10px] md:text-xs uppercase opacity-80">{level.level}</div>
              <h3 className="text-lg md:text-xl font-black mb-1 leading-tight">{level.name}</h3>
              <p className="text-sm opacity-90">{level.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <div className="flex gap-4 md:gap-8 text-xl md:text-3xl font-black tracking-widest text-gray-700">
            {ideathonData.scene6.tagline.map((word, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.4, type: "spring", stiffness: 200 }}
                className={i === 2 ? "text-brand-green" : ""}
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          <motion.img 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            src="/media/Gif 6.gif"
            alt="Champion"
            className="w-32 md:w-48 h-auto rounded-xl shadow-md"
          />
        </motion.div>

      </div>
    </SceneWrapper>
  );
}
