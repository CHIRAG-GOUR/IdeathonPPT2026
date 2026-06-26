"use client";

import { motion, Variants } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

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

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-blue uppercase tracking-wide text-center mb-6 drop-shadow-sm"
        >
          {ideathonData.scene2.title}
        </motion.h2>

        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          src="/media/Gif 5.gif"
          alt="You got what it takes"
          className="mb-10 rounded-2xl shadow-lg w-72 md:w-96 h-auto drop-shadow-md border-4 border-white/50"
        />

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl"
        >
          {/* First 3 lines as clean glass cards */}
          {ideathonData.scene2.lines.slice(0, 3).map((line, i) => {
            return (
              <motion.div 
                key={i} 
                variants={item} 
                whileHover={{ scale: 1.05 }}
                className="glass-card p-4 md:p-6 flex flex-col items-center justify-center text-center group hover:border-brand-blue transition-all duration-300 w-full"
              >
                <p className="text-sm md:text-base font-semibold text-gray-700 leading-snug">
                  {line}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* The final dramatic lines */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-center text-center gap-4"
        >
          <motion.p variants={item} className="text-lg md:text-2xl text-gray-600 font-medium italic">
            {ideathonData.scene2.lines[3]}
          </motion.p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center mt-4">
            <motion.div variants={item} className="glass-card px-5 py-3 flex items-center gap-3 w-full md:w-auto opacity-80 border-gray-200">
              <span className="text-sm md:text-base text-gray-700 font-semibold">{ideathonData.scene2.lines[4]}</span>
            </motion.div>
            
            <motion.span variants={item} className="text-lg font-black text-gray-400">OR</motion.span>
            
            <motion.div 
              variants={item} 
              whileHover={{ scale: 1.05 }}
              className="px-5 py-3 rounded-2xl bg-brand-blue border border-brand-blue/30 shadow-md flex items-center gap-3 w-full md:w-auto cursor-pointer"
            >
              <span className="text-sm md:text-base font-black text-white tracking-wide uppercase">{ideathonData.scene2.lines[5]}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SceneWrapper>
  );
}
