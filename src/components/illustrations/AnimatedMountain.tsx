"use client";
import { motion } from "framer-motion";

export default function AnimatedMountain() {
  return (
    <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[4/3] mx-auto flex items-center justify-center">
      <svg viewBox="0 0 400 350" className="w-full h-full overflow-visible drop-shadow-xl">
        
        {/* Animated Background Clouds */}
        <motion.g
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        >
          <path d="M 60 180 Q 90 140 140 160 Q 180 120 230 170" fill="none" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
          <path d="M 250 140 Q 290 110 330 150" fill="none" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 10" />
        </motion.g>

        {/* Hand Base (Properly detailed hand holding the mountain) */}
        <motion.path
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          d="M 0 330 Q 150 370 280 310 L 375 250 C 395 230, 375 210, 355 230 L 260 290 Q 180 340 110 280 L 70 230 C 50 200, 20 220, 40 250 L 80 300 Q 50 320 0 320 Z"
          fill="#cbd5e1"
          opacity="0.3"
        />
        
        {/* Main Hand */}
        <motion.path
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          d="M -10 320 Q 150 360 280 300 L 370 240 C 390 220, 370 200, 350 220 L 260 280 Q 180 330 110 270 L 70 220 C 50 190, 20 210, 40 240 L 80 290 Q 50 310 -10 310 Z"
          fill="#f8fafc"
          stroke="#475569"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Finger Details */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1 }}
          d="M 335 235 L 275 280 M 320 245 L 265 285"
          stroke="#475569"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* The Mountain */}
        <motion.g
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.2 }}
        >
          {/* Mountain Back */}
          <path d="M 70 280 L 200 90 L 330 260 Z" fill="url(#mountainGrad)" />
          
          {/* Mountain Shadow Side */}
          <path d="M 200 90 L 250 180 L 210 240 L 330 260 Z" fill="#000000" opacity="0.15" />
          
          {/* Mountain Front/Highlight */}
          <path d="M 120 280 L 200 90 L 270 270 Z" fill="url(#mountainHighlight)" opacity="0.5" />
          
          {/* Snow Peak */}
          <motion.path
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            d="M 160 148 L 200 90 L 240 150 L 220 170 L 200 135 L 185 160 Z"
            fill="#FFFFFF"
            className="drop-shadow-sm"
          />
        </motion.g>

        {/* The Person Rising on Top */}
        <motion.g
          initial={{ y: 30, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2, type: "spring", bounce: 0.5 }}
        >
          {/* Body */}
          <line x1="200" y1="80" x2="200" y2="60" stroke="#0F172A" strokeWidth="4.5" strokeLinecap="round" />
          
          {/* Head */}
          <circle cx="200" cy="50" r="5.5" fill="#0F172A" />
          
          {/* Arms (Animates upwards) */}
          <motion.path
            initial={{ d: "M 190 70 L 200 65 L 210 70" }}
            animate={{ d: "M 185 45 L 200 65 L 215 45" }}
            transition={{ duration: 0.6, delay: 2.5, type: "spring", bounce: 0.6 }}
            fill="none"
            stroke="#0F172A"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Legs */}
          <line x1="200" y1="80" x2="192" y2="92" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
          <line x1="200" y1="80" x2="208" y2="92" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
        </motion.g>

        {/* Abstract Sparkles/Success indicators */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.8, type: "spring" }}
        >
          <circle cx="160" cy="40" r="3" fill="#F59E0B" />
          <circle cx="240" cy="30" r="4" fill="#3B82F6" />
          <circle cx="180" cy="20" r="2" fill="#EC4899" />
        </motion.g>

        <defs>
          <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="mountainHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
