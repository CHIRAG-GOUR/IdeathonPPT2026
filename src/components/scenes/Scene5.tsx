"use client";

import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

export default function Scene5() {
  const timeline = ideathonData.scene5.timeline;

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center pt-2">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black mb-16 text-brand-blue tracking-widest uppercase text-center drop-shadow-sm relative z-30"
        >
          {ideathonData.scene5.title}
        </motion.h2>

        {/* Desktop Timeline */}
        <div className="hidden md:flex relative w-full max-w-6xl items-center justify-between mt-12 h-64">
          {/* Background Track line */}
          <div className="absolute left-12 right-12 top-1/2 h-2 bg-gray-200 -translate-y-1/2 rounded-full" />
          
          {/* Animated fill track */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 4, ease: "linear" }}
            className="absolute left-12 right-12 top-1/2 h-2 bg-brand-blue -translate-y-1/2 rounded-full origin-left"
          />

          {/* Moving Car Emoji */}
          <div className="absolute left-12 right-12 top-1/2 -translate-y-1/2 pointer-events-none z-40 h-10 overflow-visible">
            <motion.div
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
              className="absolute top-1/2 -translate-y-1/2 -mt-6 -ml-6"
            >
              <span className="text-5xl drop-shadow-md inline-block -scale-x-100">🏎️</span>
            </motion.div>
          </div>

          {timeline.map((point, i) => (
            <div key={i} className="flex flex-col items-center justify-center relative w-48 group">
              
              <motion.div 
                initial={{ opacity: 0, y: i % 2 === 0 ? 30 : -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * (4 / timeline.length), duration: 0.5, type: "spring" }}
                className={`glass-card bg-white p-4 rounded-2xl text-center w-full absolute
                  ${i % 2 === 0 ? "bottom-16" : "top-16"}
                  z-10 group-hover:-translate-y-2 transition-transform shadow-md border-t-4 border-t-brand-blue
                `}
              >
                <div className="text-brand-blue font-black text-xl mb-1">{point.date}</div>
                <div className="text-sm text-gray-700 font-bold uppercase">{point.event}</div>
              </motion.div>

              {/* Node Indicator */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * (4 / timeline.length), duration: 0.3 }}
                className="w-8 h-8 rounded-full bg-white border-4 border-brand-blue flex items-center justify-center shadow-md z-20 group-hover:scale-110 transition-transform shrink-0 relative"
              />
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="flex md:hidden relative w-full max-w-sm flex-col items-center py-8">
          {/* Background Track line */}
          <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-gray-200 -translate-x-1/2 rounded-full" />
          
          {/* Animated fill track */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 4, ease: "linear" }}
            className="absolute left-1/2 top-8 bottom-8 w-1 bg-brand-blue -translate-x-1/2 rounded-full origin-top"
          />

          {timeline.map((point, i) => (
            <div key={i} className="flex items-center w-full my-6 relative group">
              
              {/* Card - alternate left and right */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * (4 / timeline.length), duration: 0.5 }}
                className={`glass-card bg-white p-3 rounded-xl text-center w-[calc(50%-1.5rem)] absolute z-10 shadow-sm border-t-2 border-t-brand-blue
                  ${i % 2 === 0 ? "right-[calc(50%+1.5rem)]" : "left-[calc(50%+1.5rem)]"}
                `}
              >
                <div className="text-brand-blue font-black text-sm mb-1">{point.date}</div>
                <div className="text-xs text-gray-700 font-bold uppercase leading-tight">{point.event}</div>
              </motion.div>

              {/* Node Indicator */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * (4 / timeline.length), duration: 0.3 }}
                className="w-6 h-6 rounded-full bg-white border-4 border-brand-blue flex items-center justify-center shadow-md z-20 absolute left-1/2 -translate-x-1/2"
              />
              
            </div>
          ))}
        </div>

      </div>
    </SceneWrapper>
  );
}
