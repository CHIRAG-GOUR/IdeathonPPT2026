"use client";

import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";
import { Trophy, Swords, Crown, ArrowRight } from "lucide-react";

export default function Scene6({ step = 3 }: { step?: number }) {
  const icons = [Swords, Crown, Trophy];

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center pt-12">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] mb-16 uppercase tracking-widest drop-shadow-lg"
        >
          {ideathonData.scene6.title}
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-6xl relative z-10">
          
          {ideathonData.scene6.levels.map((level, i) => {
            const Icon = icons[i];
            const isLast = i === ideathonData.scene6.levels.length - 1;
            const isVisible = step >= i;
            
            return (
              <div key={i} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <motion.div 
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, scale: isVisible ? (isLast ? 1.1 : 1) : 0.8 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className={`relative flex flex-col items-center text-center p-8 glass-card-colorful rounded-2xl w-full md:w-80 border-t-4 ${
                    i === 0 ? "border-t-brand-blue" : 
                    i === 1 ? "border-t-brand-purple" : 
                    "border-t-brand-gold shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                  }`}
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg ${
                    i === 0 ? "bg-brand-blue/20 text-brand-blue shadow-brand-blue/30" : 
                    i === 1 ? "bg-brand-purple/20 text-brand-purple shadow-brand-purple/30" : 
                    "bg-brand-gold/20 text-brand-gold shadow-brand-gold/30"
                  }`}>
                    <Icon size={40} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-400 mb-2">{level.level}</h3>
                  <h4 className={`text-2xl font-black mb-4 ${isLast ? 'text-brand-gold' : 'text-white'}`}>{level.name}</h4>
                  <p className="text-gray-400 text-sm">{level.desc}</p>
                </motion.div>

                {/* Arrow pointing to next level, instead of line */}
                {i < ideathonData.scene6.levels.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: step >= i + 1 ? 1 : 0, x: step >= i + 1 ? 0 : -20 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:block text-gray-500"
                  >
                    <ArrowRight size={40} />
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 3 ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mt-12 flex gap-8 text-2xl md:text-4xl font-black tracking-widest text-white/80"
        >
          {ideathonData.scene6.tagline.map((word, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 1.5 }}
              transition={{ delay: step >= 3 ? i * 0.4 : 0, type: "spring", stiffness: 200 }}
              className={i === 2 ? "text-brand-green drop-shadow-lg" : ""}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>


      </div>
    </SceneWrapper>
  );
}
