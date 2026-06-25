"use client";

import { motion, AnimatePresence } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

export default function Scene1({ step = 0 }: { step?: number }) {
  const phase = step < 3 ? "countdown" : step < 8 ? "words" : "reveal";
  const count = 3 - step; 
  const wordIndex = step - 3; 

  return (
    <SceneWrapper>
      <div className="relative flex items-center justify-center w-full h-full">
        <AnimatePresence mode="wait">
          {phase === "countdown" && (
            <motion.div
              key={`count-${count}`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              exit={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500"
            >
              {count}
            </motion.div>
          )}

          {phase === "words" && (
            <motion.div
              key={`word-${wordIndex}`}
              initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -50, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.3 }}
              className="absolute text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple tracking-tighter"
            >
              {ideathonData.scene1.words[wordIndex]}
            </motion.div>
          )}

          {phase === "reveal" && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]">
                {ideathonData.scene1.title}
              </h1>
              <h2 className="text-2xl md:text-4xl font-medium text-gray-300">
                {ideathonData.scene1.subtitle}
              </h2>
              <div className="mt-8 px-6 py-3 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green tracking-widest text-sm uppercase">
                {ideathonData.scene1.tagline}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SceneWrapper>
  );
}
