"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

export default function Scene10() {
  const [phase, setPhase] = useState<"lines" | "finale">("lines");
  const [currentLine, setCurrentLine] = useState(0);

  const lines = ideathonData.scene10.lines;

  useEffect(() => {
    if (phase === "lines") {
      if (currentLine < lines.length) {
        const timer = setTimeout(() => setCurrentLine(currentLine + 1), currentLine === 0 ? 2000 : 1500);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setPhase("finale"), 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [phase, currentLine, lines.length]);

  return (
    <SceneWrapper>
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        
        <AnimatePresence mode="wait">
          {phase === "lines" && (
            <motion.div 
              key="lines"
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 1.5 }}
              className="flex flex-col items-center justify-center gap-4 text-center max-w-4xl"
            >
              <h2 className="text-3xl md:text-5xl font-black mb-12 text-brand-blue tracking-widest uppercase opacity-50">
                {ideathonData.scene10.title}
              </h2>
              
              {lines.slice(0, currentLine).map((line, i) => (
                <motion.p 
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                  animate={{ opacity: i % 2 === 0 ? 0.6 : 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`text-xl md:text-4xl font-light ${i % 2 !== 0 ? 'text-white font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'text-gray-400'}`}
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          )}

          {phase === "finale" && <motion.div 
                key="finale"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="flex flex-col items-center justify-center relative z-10 w-full"
              >
                {/* Massive Spotlight from above */}
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 0.8, height: "200vh" }}
                  transition={{ duration: 2 }}
                  className="absolute top-[-100vh] left-1/2 -translate-x-1/2 w-96 bg-gradient-to-b from-white/40 via-brand-blue/20 to-transparent blur-[50px] pointer-events-none -z-10"
                  style={{ clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0% 100%)" }}
                />

                <h1 className="text-7xl md:text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 tracking-tighter drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                  {ideathonData.scene10.finale.title}
                </h1>
                
                <h2 className="text-4xl md:text-6xl font-bold text-brand-green mt-4 mb-16 tracking-widest drop-shadow-[0_0_20px_rgba(0,255,102,0.5)] uppercase text-center">
                  {ideathonData.scene10.finale.subtitle}
                </h2>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 240, 255, 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full text-white font-black text-2xl md:text-3xl tracking-widest uppercase transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10">{ideathonData.scene10.buttonText}</span>
                </motion.button>
              </motion.div>}
        </AnimatePresence>
        
      </div>
    </SceneWrapper>
  );
}
