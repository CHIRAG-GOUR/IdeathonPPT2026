"use client";

import { motion } from "framer-motion";

export default function AnimatedIdea() {
  return (
    <div className="w-full max-w-sm mx-auto aspect-square relative flex items-center justify-center p-4">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
        
        {/* Background Abstract Shapes (Storyset style) */}
        <motion.circle 
          cx="250" cy="250" r="180" 
          fill="#0052CC" fillOpacity="0.05"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.path 
          d="M380 150 C 450 200, 420 320, 350 380 C 250 450, 120 400, 100 300 C 80 180, 180 100, 280 120 Z" 
          fill="#38A169" fillOpacity="0.08"
          animate={{ 
            d: [
              "M380 150 C 450 200, 420 320, 350 380 C 250 450, 120 400, 100 300 C 80 180, 180 100, 280 120 Z",
              "M360 160 C 460 210, 400 340, 330 390 C 230 460, 140 380, 110 280 C 90 190, 190 90, 290 130 Z",
              "M380 150 C 450 200, 420 320, 350 380 C 250 450, 120 400, 100 300 C 80 180, 180 100, 280 120 Z"
            ] 
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Plants/Leaves (Common in Storyset) */}
        <motion.path 
          d="M400 350 Q 420 320 440 340 Q 420 360 400 350 Z" 
          fill="#38A169"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.path 
          d="M80 200 Q 60 180 50 210 Q 70 220 80 200 Z" 
          fill="#38A169"
          animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* The Giant Lightbulb (Idea) */}
        {/* Bulb Glass */}
        <motion.path 
          d="M250 120 C 180 120, 150 180, 150 230 C 150 280, 190 310, 210 340 L 290 340 C 310 310, 350 280, 350 230 C 350 180, 320 120, 250 120 Z" 
          fill="#FEF08A" fillOpacity="0.4"
          stroke="#D69E2E" strokeWidth="6" strokeLinejoin="round"
          animate={{ opacity: [0.6, 1, 0.6], filter: ["blur(0px)", "blur(2px)", "blur(0px)"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Base of Bulb */}
        <path d="M210 340 L 290 340 L 280 390 L 220 390 Z" fill="#E2E8F0" stroke="#475569" strokeWidth="6" strokeLinejoin="round" />
        <path d="M220 390 L 280 390 L 270 410 L 230 410 Z" fill="#CBD5E1" stroke="#475569" strokeWidth="6" strokeLinejoin="round" />
        <path d="M240 410 L 260 410 L 255 425 L 245 425 Z" fill="#475569" />
        
        {/* Inner Filament */}
        <motion.path 
          d="M220 340 L 230 250 L 250 230 L 270 250 L 280 340" 
          stroke="#D69E2E" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.circle 
          cx="250" cy="230" r="12" fill="#D69E2E"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Sparks/Stars */}
        <motion.path d="M120 120 L 130 100 L 140 120 L 160 130 L 140 140 L 130 160 L 120 140 L 100 130 Z" fill="#D69E2E"
          animate={{ scale: [0, 1, 0], rotate: [0, 90, 180] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.path d="M380 180 L 385 170 L 390 180 L 400 185 L 390 190 L 385 200 L 380 190 L 370 185 Z" fill="#D69E2E"
          animate={{ scale: [0, 0.8, 0], rotate: [0, -90, -180] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
        <motion.path d="M320 80 L 323 72 L 326 80 L 334 83 L 326 86 L 323 94 L 320 86 L 312 83 Z" fill="#38A169"
          animate={{ scale: [0, 1.2, 0], y: [0, -20, -40], opacity: [1, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
        />

        {/* Character Silhouette (Bro styling) pointing at bulb */}
        <g transform="translate(40, 240)">
          {/* Head */}
          <circle cx="50" cy="20" r="18" fill="#1E293B" />
          {/* Body */}
          <path d="M30 40 C 30 40, 50 30, 70 40 C 80 60, 70 120, 70 120 L 30 120 Z" fill="#0052CC" />
          {/* Arm pointing up */}
          <motion.path 
            d="M60 45 Q 80 40 110 20" 
            stroke="#1E293B" strokeWidth="12" strokeLinecap="round" fill="none"
            animate={{ d: ["M60 45 Q 80 40 110 20", "M60 45 Q 85 30 115 15", "M60 45 Q 80 40 110 20"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Legs */}
          <path d="M40 120 L 35 180" stroke="#1E293B" strokeWidth="14" strokeLinecap="round" />
          <path d="M60 120 L 65 180" stroke="#1E293B" strokeWidth="14" strokeLinecap="round" />
          {/* Laptop in other hand */}
          <path d="M20 70 L 40 70 L 35 100 L 15 100 Z" fill="#CBD5E1" />
          <path d="M10 100 L 40 100 L 40 105 L 10 105 Z" fill="#94A3B8" />
        </g>
        
      </svg>
    </div>
  );
}
