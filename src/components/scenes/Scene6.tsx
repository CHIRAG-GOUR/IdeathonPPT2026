"use client";

import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

interface PodiumColumnProps {
  level: any;
  image: string;
  height: string;
  mainColor: string;
  darkColor: string;
  topColor: string;
  textColor: string;
  rank: number;
  delay: number;
}

const PodiumColumn = ({ level, image, height, mainColor, darkColor, topColor, textColor, rank, delay }: PodiumColumnProps) => {
  return (
    <motion.div 
      initial={{ y: 150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, type: "spring", bounce: 0.3, duration: 0.8 }}
      className="flex flex-col items-center justify-end w-1/3 flex-shrink-0 relative"
    >
      {/* Mario Coin Hovering Image */}
      <motion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: delay * 0.5 }}
        className="mb-4 md:mb-8 z-20"
      >
        <div className="w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full border-[4px] md:border-[6px] shadow-[0_15px_30px_rgba(0,0,0,0.3)] overflow-hidden bg-white" 
             style={{ borderColor: topColor }}>
          <img src={image} alt={level.name} className="w-full h-full object-cover p-1 md:p-2 rounded-full" />
        </div>
      </motion.div>

      {/* Podium Block */}
      <div className="w-full relative flex flex-col items-center">
        {/* Top Cap */}
        <div className="h-6 md:h-12 w-[106%] rounded-t-lg shadow-sm z-10" style={{ backgroundColor: topColor }} />
        
        {/* Main Body */}
        <div className={`w-full flex flex-col items-center justify-start p-3 md:p-6 text-center shadow-2xl relative overflow-hidden ${height}`} 
             style={{ 
               background: `linear-gradient(135deg, ${mainColor} 50%, ${darkColor} 50%)`,
               color: textColor 
             }}>
          
          <div className="relative z-10 w-full">
            <div className="font-black text-[9px] md:text-sm uppercase tracking-widest opacity-90 mb-1 drop-shadow-sm">{level.level}</div>
            <h3 className="text-xs md:text-xl lg:text-3xl font-black leading-tight mb-2 drop-shadow-sm">{level.name}</h3>
            <p className="text-[9px] md:text-sm lg:text-base font-bold opacity-90 hidden md:block drop-shadow-sm leading-snug">{level.desc}</p>
          </div>
          
          {/* Big Background Number */}
          <div className="absolute bottom-2 md:bottom-4 left-0 right-0 text-[100px] md:text-[200px] font-black text-white/30 leading-none pointer-events-none select-none">
            {rank}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Scene6() {
  const levels = ideathonData.scene6.levels; // [Level 1, Level 2, Level 3]
  
  // Custom images mapping corresponding to [Level 1, Level 2, Level 3]
  const images = ["/media/level_1.png", "/media/level_2.png", "/media/level_3.png"];

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center justify-center min-h-[85vh] pt-4">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-2xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-10 text-brand-blue uppercase tracking-wide text-center drop-shadow-sm"
        >
          {ideathonData.scene6.title}
        </motion.h2>

        {/* Podium Container */}
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center mt-auto">
          
          <div className="flex items-end justify-center w-full px-2 md:px-8 z-10 gap-1 md:gap-2">
            
            {/* LEFT: Level 2 (Silver) - Rank 2 */}
            <PodiumColumn 
              level={levels[1]} 
              image={images[1]}
              height="h-[180px] md:h-[280px]" 
              mainColor="#cbd5e1" // slate-300
              darkColor="#94a3b8" // slate-400
              topColor="#f8fafc" // slate-50
              textColor="#0f172a"
              rank={2}
              delay={0.6}
            />
            
            {/* CENTER: Level 3 (Gold) - Rank 1 */}
            <PodiumColumn 
              level={levels[2]} 
              image={images[2]}
              height="h-[250px] md:h-[380px]" 
              mainColor="#facc15" // yellow-400
              darkColor="#eab308" // yellow-500
              topColor="#fef08a" // yellow-200
              textColor="#422006"
              rank={1}
              delay={0.8}
            />
            
            {/* RIGHT: Level 1 (Bronze) - Rank 3 */}
            <PodiumColumn 
              level={levels[0]} 
              image={images[0]}
              height="h-[120px] md:h-[200px]" 
              mainColor="#d97706" // amber-600
              darkColor="#b45309" // amber-700
              topColor="#fcd34d" // amber-300
              textColor="#ffffff"
              rank={3}
              delay={0.4}
            />

          </div>

          {/* Podium Base Floor */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-[105%] h-6 md:h-10 bg-brand-blue rounded-sm shadow-2xl z-20"
          />
        </div>

        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-6 md:mt-10 flex gap-2 md:gap-6 text-lg md:text-2xl lg:text-3xl font-black tracking-widest text-gray-800 z-20 mb-4"
        >
          {ideathonData.scene6.tagline.map((word, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.3, type: "spring", stiffness: 200 }}
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
