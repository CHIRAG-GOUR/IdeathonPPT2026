"use client";

import { motion, Variants } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";
import { Lightbulb, Rocket, Trophy, Eye, Star } from "lucide-react";

export default function Scene2() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: "spring", bounce: 0.4 } }
  };

  const icons = [Lightbulb, Rocket, Trophy];

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green uppercase tracking-wide text-center mb-12 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]"
        >
          {ideathonData.scene2.title}
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 md:gap-8 w-full max-w-4xl"
        >
          {/* First 3 lines as colorful glass cards */}
          {ideathonData.scene2.lines.slice(0, 3).map((line, i) => {
            const Icon = icons[i];
            return (
              <motion.div 
                key={i} 
                variants={item} 
                whileHover={{ scale: 1.02 }}
                className="glass-card-colorful p-6 md:p-8 flex items-center gap-6 group hover:border-brand-blue transition-all duration-300 w-full"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-black/30 flex items-center justify-center border border-white/10 group-hover:bg-brand-blue/20 group-hover:text-brand-blue transition-all">
                  <Icon size={32} className="text-white md:w-[40px] md:h-[40px]" />
                </div>
                <p className="text-lg md:text-2xl lg:text-3xl font-medium text-white/90 leading-relaxed">
                  {line}
                </p>
              </motion.div>
            )
          })}

          {/* The final dramatic lines */}
          <div className="mt-8 flex flex-col items-center text-center gap-4">
            <motion.p variants={item} className="text-xl md:text-3xl text-gray-400 font-light italic">
              {ideathonData.scene2.lines[3]}
            </motion.p>
            
            <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center mt-6">
              <motion.div variants={item} className="glass-card px-8 py-6 flex items-center gap-4 w-full md:w-auto opacity-70">
                <Eye className="text-gray-400" />
                <span className="text-lg md:text-xl text-gray-300">{ideathonData.scene2.lines[4]}</span>
              </motion.div>
              
              <motion.span variants={item} className="text-2xl font-black text-brand-gold">OR</motion.span>
              
              <motion.div 
                variants={item} 
                whileHover={{ scale: 1.05 }}
                className="px-8 py-6 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-purple border border-white/30 shadow-[0_0_30px_rgba(176,38,255,0.4)] flex items-center gap-4 w-full md:w-auto cursor-pointer"
              >
                <Star className="text-white fill-white" />
                <span className="text-xl md:text-2xl font-bold text-white tracking-wide">{ideathonData.scene2.lines[5]}</span>
              </motion.div>
            </div>

            {/* Fun GIF added for kids */}
            <motion.img 
               variants={item}
               src="https://media.giphy.com/media/l0HlHFRbmaZtBRhXG/giphy.gif"
               alt="Spotlight hype"
               className="mt-8 rounded-3xl w-48 md:w-64 border-2 border-white/20 shadow-[0_0_30px_rgba(0,240,255,0.2)]"
            />
          </div>

        </motion.div>
        
      </div>
    </SceneWrapper>
  );
}
