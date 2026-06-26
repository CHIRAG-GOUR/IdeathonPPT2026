"use client";

import { motion, Variants } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

export default function Scene7() {
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
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black mb-12 text-brand-blue uppercase tracking-wider text-center drop-shadow-sm"
        >
          {ideathonData.scene7.title}
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-7xl mb-16 relative z-10"
        >
          {ideathonData.scene7.categories.map((category, i) => {
            const kidImages = [
              "tech_kids.png",
              "env_kids.png",
              "edu_kids.png",
              "health_kids.png",
              "community_kids.png",
              "future_kids.png"
            ];
            
            return (
              <motion.div 
                key={i}
                variants={item}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-3xl flex flex-col items-center text-center gap-4 group hover:border-brand-blue/30 transition-all shadow-sm"
              >
                {/* Generated Illustration for Kids */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  className="w-24 h-24 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-100 mb-2 shadow-sm"
                >
                  <img src={`/media/${kidImages[i]}`} alt={category} className="w-full h-full object-cover" />
                </motion.div>

                <h3 className="text-sm md:text-base font-bold text-gray-700">{category}</h3>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Activities Section */}
        <motion.h3
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 1 }}
           className="text-2xl font-black text-brand-gold mb-8 uppercase tracking-widest drop-shadow-sm"
        >
          FUN ACTIVITIES
        </motion.h3>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-6 w-full max-w-5xl mb-12 relative z-10"
        >
          {ideathonData.scene7.activities.map((activity, i) => {
            return (
              <motion.div 
                key={i}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="glass-card px-6 py-4 rounded-2xl flex items-center gap-4 group shadow-sm bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center border border-brand-green/20">
                  <span className="font-black text-brand-green">{i + 1}</span>
                </div>
                <span className="font-bold text-gray-700">{activity}</span>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-lg md:text-xl text-gray-500 font-medium tracking-wide text-center max-w-3xl"
        >
          {ideathonData.scene7.statement}
        </motion.p>
      </div>
    </SceneWrapper>
  );
}
