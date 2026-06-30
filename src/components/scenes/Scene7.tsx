"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

export default function Scene7() {
  const [activeActivity, setActiveActivity] = useState<string | null>(null);

  const activityExamples: Record<string, { title: string, example: string }> = {
    "Robot Building": { title: "🤖 Robot Building", example: "Example: Build a simple Arduino-powered line-following robot using basic sensors and motors." },
    "Coding Challenges": { title: "💻 Coding Challenges", example: "Example: Create an interactive Scratch game or solve algorithmic logic puzzles to save a digital character." },
    "Science Puzzles": { title: "🧪 Science Puzzles", example: "Example: Design and engineer a safe egg-drop container using only limited everyday materials." },
    "Design Workshops": { title: "🎨 Design Workshops", example: "Example: Wireframe and prototype a mobile app interface using paper, pens, and sticky notes." }
  };

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
      <div className="w-full h-full flex flex-col items-center justify-center relative">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black mb-8 text-brand-blue uppercase tracking-wider text-center drop-shadow-sm"
        >
          {ideathonData.scene7.title}
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 w-[95%] max-w-[1400px] mx-auto mb-12 relative z-10"
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
                className="glass-card p-2 rounded-[28px] flex flex-col items-center justify-between text-center gap-2 group hover:border-brand-blue/30 transition-all shadow-xl h-full bg-white/40"
              >
                {/* Generated Illustration for Kids */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  className="w-full aspect-square rounded-[22px] flex items-center justify-center overflow-hidden border-2 border-white/60 mb-2 shadow-lg shrink-0 bg-white/50"
                >
                  <img src={`/media/${kidImages[i]}`} alt={category} className="w-full h-full object-cover" />
                </motion.div>

                <h3 className="text-xs md:text-sm lg:text-lg font-bold text-gray-800 leading-tight drop-shadow-sm px-1 mb-2">{category}</h3>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Activities Section */}
        <motion.h3
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="text-2xl md:text-4xl lg:text-4xl font-black text-[#d97706] mb-8 uppercase tracking-[0.2em] drop-shadow-sm"
        >
          FUN ACTIVITIES
        </motion.h3>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-row justify-center items-stretch gap-3 md:gap-6 w-full max-w-6xl mx-auto mb-10 relative z-10 px-4"
        >
          {ideathonData.scene7.activities.map((activity, i) => {
            const actImages = [
              "act_robot.png",
              "act_coding.png",
              "act_science.png",
              "act_design.png"
            ];
            const gradients = [
              "from-[#00bcf2] to-[#00d4ff]",
              "from-[#d946ef] to-[#f472b6]",
              "from-[#f59e0b] to-[#fbbf24]",
              "from-[#10b981] to-[#34d399]"
            ];
            const shadowColors = [
              "shadow-[#00bcf2]/40",
              "shadow-[#d946ef]/40",
              "shadow-[#f59e0b]/40",
              "shadow-[#10b981]/40"
            ];

            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveActivity(activity)}
                className={`flex-1 rounded-[32px] p-1 bg-gradient-to-br ${gradients[i]} shadow-2xl ${shadowColors[i]} cursor-pointer group`}
              >
                <div className="bg-white h-full w-full rounded-[28px] overflow-hidden flex flex-col p-1.5 md:p-2 text-center gap-2 md:gap-3">
                  <div className="w-full aspect-[4/3] rounded-[22px] overflow-hidden relative shadow-sm">
                    <img src={`/media/${actImages[i]}`} alt={activity} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>

                  <div className="flex-1 flex items-center justify-center px-1 pb-1">
                    <span className="font-black text-gray-800 text-[10px] md:text-xs lg:text-[14px] uppercase tracking-wider leading-tight">
                      {activity}
                    </span>
                  </div>
                </div>
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

      {/* Activity Modal */}
      <AnimatePresence>
        {activeActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveActivity(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative glass-card shadow-2xl rounded-3xl p-8 max-w-md w-full z-10"
            >
              <button
                onClick={() => setActiveActivity(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
              >
                ✕
              </button>
              <h3 className="text-2xl font-black text-brand-blue mb-4">
                {activityExamples[activeActivity]?.title || activeActivity}
              </h3>
              <p className="text-lg text-gray-700 font-medium">
                {activityExamples[activeActivity]?.example}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SceneWrapper>
  );
}
