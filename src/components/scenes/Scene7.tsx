"use client";

import { motion, Variants } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";
import { Cpu, Leaf, GraduationCap, HeartPulse, Users, Lightbulb, Bot, Code, Puzzle, PenTool, Rocket, Star, Zap } from "lucide-react";

export default function Scene7() {
  const icons = [Cpu, Leaf, GraduationCap, HeartPulse, Users, Lightbulb];
  const activityIcons = [Bot, Code, Puzzle, PenTool];
  
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
  };

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center justify-center pt-4 pb-12 relative">
        
        {/* Playful Floating Illustrations for Kids */}
        <motion.div 
          animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 text-brand-blue opacity-50 hidden md:block"
        >
          <Rocket size={80} />
        </motion.div>
        <motion.div 
          animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 text-brand-gold opacity-50 hidden md:block"
        >
          <Star size={70} />
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-20 text-brand-purple opacity-50 hidden md:block"
        >
          <Zap size={60} />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00FF66] uppercase tracking-wider text-center"
        >
          {ideathonData.scene7.title}
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-6xl mb-12 relative z-10"
        >
          {ideathonData.scene7.categories.map((category, i) => {
            const Icon = icons[i];
            return (
              <motion.div 
                key={i}
                variants={item}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card-colorful p-6 md:p-8 rounded-3xl flex flex-col items-center text-center gap-6 group hover:border-white/40 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-bg-dark transition-all duration-300">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">{category}</h3>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Activities Section */}
        <motion.h3
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 1 }}
           className="text-2xl font-black text-brand-gold mb-6 uppercase tracking-widest"
        >
          FUN ACTIVITIES
        </motion.h3>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-6 w-full max-w-4xl mb-12 relative z-10"
        >
          {ideathonData.scene7.activities.map((activity, i) => {
            const ActIcon = activityIcons[i];
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                className="flex items-center gap-4 bg-white/5 border border-white/20 px-6 py-4 rounded-full backdrop-blur-md cursor-pointer hover:bg-brand-purple/20 hover:border-brand-purple transition-all"
              >
                <div className="text-brand-purple">
                  <ActIcon size={24} />
                </div>
                <span className="text-lg font-bold text-white">{activity}</span>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl md:text-2xl font-light text-white italic text-center bg-black/40 px-8 py-4 rounded-full border border-white/10 backdrop-blur-md"
        >
          &quot;{ideathonData.scene7.statement}&quot;
        </motion.div>
      </div>
    </SceneWrapper>
  );
}
