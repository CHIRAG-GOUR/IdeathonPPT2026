"use client";

import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

export default function Scene6() {
  const levels = [...ideathonData.scene6.levels].reverse();
  const images = ["/media/level_3.png", "/media/level_2.png", "/media/level_1.png"];

  const renderImageNode = (index: number, side: "left" | "right") => {
    const isGold = index === 0;
    const isSilver = index === 1;
    
    const borderColor = isGold ? "#ffd700" : isSilver ? "#e0e0e0" : "#c4a484";
    const glowColor = isGold ? "rgba(255,215,0,0.8)" : isSilver ? "rgba(200,200,200,0.8)" : "rgba(139,69,19,0.8)";
    const yPos = isGold ? "10%" : isSilver ? "40%" : "70%";
    const image = images[index];

    return (
      <motion.div 
        key={`image-${index}`}
        initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 + index * 0.3 }}
        className={`absolute flex items-center gap-2 md:gap-4 z-20 ${side === "left" ? "flex-row-reverse" : "flex-row"}`}
        style={{ top: yPos, [side]: "2%" }} 
      >
        <div className="hidden md:flex text-3xl md:text-5xl font-black drop-shadow-md animate-pulse" style={{ color: borderColor }}>
          {side === "left" ? "←" : "→"}
        </div>
        
        <div className="w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-xl md:rounded-2xl border-4 bg-black/10 backdrop-blur-md flex items-center justify-center p-1"
             style={{ borderColor, boxShadow: `0 0 40px ${glowColor}` }}>
           <img src={image} alt={`Level ${3 - index}`} className="w-full h-full object-cover rounded-lg opacity-95" />
        </div>
      </motion.div>
    );
  };

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center justify-center min-h-[85vh]">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-2xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-6 text-brand-blue uppercase tracking-wide text-center drop-shadow-sm"
        >
          {ideathonData.scene6.title}
        </motion.h2>

        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center py-4">
          
          {/* Side Images */}
          {renderImageNode(0, "left")}  {/* Level 3 - Gold */}
          {renderImageNode(1, "right")} {/* Level 2 - Silver */}
          {renderImageNode(2, "left")}  {/* Level 1 - Bronze */}

          {/* 3D Isometric Pyramid SVG */}
          <div className="relative w-full max-w-xs md:max-w-xl lg:max-w-2xl aspect-[4/3] mx-auto z-10">
            <motion.svg 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              viewBox="0 0 800 600" 
              className="w-full h-full drop-shadow-2xl overflow-visible absolute inset-0 z-0"
            >
              {/* LEVEL 1 (BOTTOM - BRONZE) */}
              <motion.g initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                <path d="M 100,550 L 700,550 L 600,400 L 200,400 Z" fill="#c4a484" />
                <path d="M 700,550 L 600,400 L 650,350 L 750,500 Z" fill="#a0785a" />
                <path d="M 200,400 L 600,400 L 650,350 L 250,350 Z" fill="#d9b897" />
              </motion.g>

              {/* LEVEL 2 (MIDDLE - SILVER) */}
              <motion.g initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
                <path d="M 220,330 L 580,330 L 480,180 L 320,180 Z" fill="#e0e0e0" />
                <path d="M 580,330 L 480,180 L 530,130 L 630,280 Z" fill="#b0b0b0" />
                <path d="M 320,180 L 480,180 L 530,130 L 370,130 Z" fill="#f5f5f5" />
              </motion.g>

              {/* LEVEL 3 (TOP - GOLD) */}
              <motion.g initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}>
                <path d="M 330,110 L 470,110 L 400,10 Z" fill="#ffd700" />
                <path d="M 470,110 L 400,10 L 520,60 Z" fill="#d4af37" />
              </motion.g>
            </motion.svg>

            {/* HTML Overlay for Text (No Images) */}
            <div className="absolute inset-0 z-10 font-sans pointer-events-none">
              
              {/* LEVEL 3 OVERLAY (TOP) */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                className="absolute flex flex-col items-center justify-end text-center pb-2 md:pb-4"
                style={{ top: "0%", left: "35%", width: "30%", height: "20%" }}
              >
                <div className="text-[10px] md:text-sm font-black text-black uppercase tracking-widest">{levels[0].level}</div>
                <h3 className="text-xs md:text-xl lg:text-2xl font-black text-black leading-none drop-shadow-sm">{levels[0].name}</h3>
              </motion.div>

              {/* LEVEL 2 OVERLAY (MIDDLE) */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
                className="absolute flex flex-col items-center justify-center text-center px-4 md:px-8"
                style={{ top: "30%", left: "25%", width: "50%", height: "25%" }}
              >
                <div className="text-[10px] md:text-sm font-black text-gray-800 uppercase tracking-widest">{levels[1].level}</div>
                <h3 className="text-sm md:text-2xl lg:text-3xl font-black text-gray-900 leading-tight mb-1 drop-shadow-sm">{levels[1].name}</h3>
                <p className="text-[9px] md:text-sm text-gray-800 leading-snug hidden sm:block font-medium max-w-[80%]">{levels[1].desc}</p>
              </motion.div>

              {/* LEVEL 1 OVERLAY (BOTTOM) */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                className="absolute flex flex-col items-center justify-center text-center px-4 md:px-10"
                style={{ top: "66%", left: "15%", width: "70%", height: "25%" }}
              >
                <div className="text-[10px] md:text-sm font-black text-gray-900 uppercase tracking-widest drop-shadow-sm">{levels[2].level}</div>
                <h3 className="text-base md:text-2xl lg:text-4xl font-black text-gray-900 leading-tight mb-2 drop-shadow-sm">{levels[2].name}</h3>
                <p className="text-[10px] md:text-base text-gray-900 leading-snug hidden sm:block font-medium max-w-[85%]">{levels[2].desc}</p>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-2 md:mt-4 flex gap-2 md:gap-6 text-lg md:text-2xl lg:text-3xl font-black tracking-widest text-gray-800 z-20"
        >
          {ideathonData.scene6.tagline.map((word, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, y: 10 }}
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
