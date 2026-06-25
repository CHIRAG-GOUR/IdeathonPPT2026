"use client";

import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";
import { Rocket, MapPin } from "lucide-react";

export default function Scene5() {
  const timeline = ideathonData.scene5.timeline;

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green tracking-widest uppercase text-center drop-shadow-md relative z-30"
        >
          {ideathonData.scene5.title}
        </motion.h2>

        <div className="relative w-full max-w-5xl flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 md:gap-0 mt-20 md:mt-40">
          
          {/* Background Track line - vertical on mobile, horizontal on desktop */}
          <div className="absolute left-1/2 md:left-0 top-0 md:top-1/2 w-1 h-full md:w-full md:h-1 bg-white/10 -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2 rounded-full" />
          
          {/* Animated fill track */}
          <motion.div 
            initial={{ scaleY: 0, scaleX: 0 }}
            animate={{ scaleY: 1, scaleX: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute left-1/2 md:left-0 top-0 md:top-1/2 w-1 h-full md:w-full md:h-1 bg-gradient-to-b md:bg-gradient-to-r from-brand-blue to-brand-purple -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2 rounded-full origin-top md:origin-left"
          />

          {timeline.map((point, i) => (
            <div key={i} className="flex flex-col items-center relative w-full md:w-40 group">
              
              {/* Responsive Card Content */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * (3 / timeline.length), duration: 0.5, type: "spring" }}
                className={`glass-card-colorful p-4 rounded-2xl text-center w-64 md:w-48 absolute md:relative 
                  left-1/2 md:left-auto -translate-x-1/2 md:-translate-x-0
                  ${i % 2 === 0 ? "md:-translate-y-[120%]" : "md:translate-y-[120%]"}
                  top-0 md:top-auto z-10 hidden md:block
                `}
              >
                <div className="text-brand-gold font-black text-xl mb-2 drop-shadow-md">{point.date}</div>
                <div className="text-sm text-white font-bold uppercase">{point.event}</div>
              </motion.div>

              {/* Mobile View Card */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * (3 / timeline.length), duration: 0.5 }}
                className={`glass-card-colorful p-4 rounded-2xl text-center w-[calc(50%-2rem)] absolute top-0 z-10 md:hidden
                  ${i % 2 === 0 ? "right-[calc(50%+1.5rem)]" : "left-[calc(50%+1.5rem)]"}
                `}
              >
                <div className="text-brand-gold font-black text-lg mb-1">{point.date}</div>
                <div className="text-xs text-white font-bold uppercase leading-tight">{point.event}</div>
              </motion.div>

              {/* Node Indicator */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * (3 / timeline.length), duration: 0.3 }}
                className="w-10 h-10 rounded-full bg-bg-dark border-4 border-brand-blue flex items-center justify-center shadow-[0_0_20px_#00F0FF] z-20 relative my-6 md:my-0 group-hover:scale-125 transition-transform"
              >
                <MapPin size={16} className="text-brand-blue" />
              </motion.div>
              
            </div>
          ))}
        </div>

      </div>
    </SceneWrapper>
  );
}
