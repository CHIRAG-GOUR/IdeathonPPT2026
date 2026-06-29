"use client";

import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

export default function Scene6() {
  const levels = [...ideathonData.scene6.levels].reverse();
  
  // Custom images mapping
  const images = ["/media/level_3.png", "/media/level_2.png", "/media/level_1.png"];

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center justify-center min-h-[80vh]">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-8 text-brand-blue uppercase tracking-wide text-center drop-shadow-sm"
        >
          {ideathonData.scene6.title}
        </motion.h2>

        <div className="relative w-full max-w-3xl aspect-[4/3] mx-auto">
          {/* 3D Isometric Pyramid SVG */}
          <motion.svg 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            viewBox="0 0 800 600" 
            className="w-full h-full drop-shadow-2xl overflow-visible absolute inset-0 z-0"
          >
            {/* LEVEL 1 (BOTTOM) */}
            <motion.g initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              <path d="M 100,550 L 700,550 L 600,400 L 200,400 Z" fill="#00bcf2" />
              <path d="M 700,550 L 600,400 L 650,350 L 750,500 Z" fill="#00a2d1" />
              <path d="M 200,400 L 600,400 L 650,350 L 250,350 Z" fill="#33ccff" />
            </motion.g>

            {/* LEVEL 2 (MIDDLE) */}
            <motion.g initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
              <path d="M 220,330 L 580,330 L 480,180 L 320,180 Z" fill="#78c6fa" />
              <path d="M 580,330 L 480,180 L 530,130 L 630,280 Z" fill="#56aef2" />
              <path d="M 320,180 L 480,180 L 530,130 L 370,130 Z" fill="#9bdaff" />
            </motion.g>

            {/* LEVEL 3 (TOP) */}
            <motion.g initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}>
              <path d="M 330,110 L 470,110 L 400,10 Z" fill="#a3d8e8" />
              <path d="M 470,110 L 400,10 L 520,60 Z" fill="#8bc9dd" />
            </motion.g>
          </motion.svg>

          {/* HTML Overlay for Text & Images */}
          <div className="absolute inset-0 z-10 font-sans pointer-events-none">
            
            {/* LEVEL 3 OVERLAY (TOP) */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
              className="absolute flex flex-col items-center justify-center text-center"
              style={{ top: "4%", left: "35%", width: "30%", height: "15%" }}
            >
              <img src={images[0]} alt="Level 3" className="w-8 h-8 md:w-12 md:h-12 object-contain drop-shadow-md mb-1" />
              <div className="text-[8px] md:text-[10px] font-black text-gray-800 uppercase tracking-widest">{levels[0].level}</div>
              <h3 className="text-[10px] md:text-sm font-black text-gray-900 leading-none">{levels[0].name}</h3>
            </motion.div>

            {/* LEVEL 2 OVERLAY (MIDDLE) */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
              className="absolute flex flex-col items-center justify-center text-center px-2"
              style={{ top: "30%", left: "30%", width: "40%", height: "25%" }}
            >
              <img src={images[1]} alt="Level 2" className="w-10 h-10 md:w-16 md:h-16 object-contain drop-shadow-md mb-1" />
              <div className="text-[9px] md:text-xs font-black text-gray-800 uppercase tracking-widest">{levels[1].level}</div>
              <h3 className="text-xs md:text-base font-black text-gray-900 leading-tight mb-1">{levels[1].name}</h3>
              <p className="text-[8px] md:text-xs text-gray-800 leading-tight hidden sm:block">{levels[1].desc}</p>
            </motion.div>

            {/* LEVEL 1 OVERLAY (BOTTOM) */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="absolute flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2 sm:gap-4 px-4"
              style={{ top: "66%", left: "20%", width: "60%", height: "25%" }}
            >
              <img src={images[2]} alt="Level 1" className="w-12 h-12 md:w-20 md:h-20 object-contain drop-shadow-md" />
              <div className="flex flex-col justify-center">
                <div className="text-[10px] md:text-sm font-black text-gray-800 uppercase tracking-widest">{levels[2].level}</div>
                <h3 className="text-sm md:text-lg font-black text-gray-900 leading-tight mb-1">{levels[2].name}</h3>
                <p className="text-[9px] md:text-sm text-gray-800 leading-tight hidden md:block max-w-[250px]">{levels[2].desc}</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-2 md:mt-4 flex gap-2 md:gap-6 text-lg md:text-2xl lg:text-3xl font-black tracking-widest text-gray-800"
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
