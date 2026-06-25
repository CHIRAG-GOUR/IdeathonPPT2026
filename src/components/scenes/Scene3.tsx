"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";
import { Play, X } from "lucide-react";

export default function Scene3() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.4 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Points */}
        <div className="flex-1 text-left">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-12"
          >
            {ideathonData.scene3.title}
          </motion.h2>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {ideathonData.scene3.points.map((point, i) => (
              <motion.div key={i} variants={item} className="flex items-center gap-4 text-xl md:text-2xl text-gray-300">
                <div className="w-3 h-3 rounded-full bg-brand-green shadow-[0_0_10px_#00FF66]" />
                {point}
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="mt-16 text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green flex gap-4"
          >
            {ideathonData.scene3.tagline.map((word, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 + (i * 0.2) }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Glowing Hub / Video Trigger */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
            {/* Glowing Rings */}
            <div className="absolute inset-0 bg-brand-purple/20 blur-[60px] rounded-full group-hover:bg-brand-blue/30 transition-colors duration-700" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-dashed border-brand-purple/50 absolute"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 md:w-60 md:h-60 rounded-full border border-brand-blue/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            
            {/* Play Button Center */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex flex-col items-center justify-center gap-2 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <Play size={40} className="text-white ml-2" />
              <span className="text-xs uppercase tracking-widest text-gray-400">Play Video</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 md:p-12"
          >
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl flex items-center justify-center overflow-hidden border border-white/20 shadow-2xl shadow-brand-blue/20">
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-6 right-6 p-3 bg-black/50 hover:bg-brand-blue/50 rounded-full text-white transition-colors z-20 backdrop-blur-md"
              >
                <X size={24} />
              </button>
              
              <img 
                src="https://media.giphy.com/media/26n6WvwCRGQjfBBhC/giphy.gif" 
                alt="Students learning and innovating" 
                className="w-full h-full object-cover opacity-90"
              />
              
              {/* Fake Video Playing Effect overlay */}
              <motion.div 
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-purple/10 pointer-events-none mix-blend-overlay"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SceneWrapper>
  );
}
