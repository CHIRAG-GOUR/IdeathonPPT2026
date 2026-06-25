"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

function Counter({ value, suffix, label, delay }: { value: number, suffix: string, label: string, delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * value));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const timer = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="flex flex-col items-center p-8 glass-card rounded-2xl relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-end">
        {count}
        <span className="text-3xl md:text-5xl text-brand-gold ml-1">{suffix}</span>
      </div>
      <div className="text-lg md:text-xl text-gray-300 font-medium tracking-wide text-center uppercase">
        {label}
      </div>
    </motion.div>
  );
}

export default function Scene4() {
  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center pt-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-bold mb-16 text-gradient"
        >
          {ideathonData.scene4.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-16">
          {ideathonData.scene4.metrics.map((metric, i) => (
            <Counter 
              key={i}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              delay={0.5 + i * 0.2}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-2xl md:text-4xl font-light text-center"
        >
          {ideathonData.scene4.tagline.split('. ').map((part, i) => (
            <span key={i} className={i === 2 ? "text-brand-green font-bold block mt-4" : "block md:inline md:after:content-['.'] md:after:mx-2"}>
              {part.replace('.', '')}
            </span>
          ))}
        </motion.div>

        {/* Fun GIF added for kids */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1, type: "spring" }}
          src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif"
          alt="Kids amazed"
          className="mt-12 rounded-3xl w-48 md:w-64 border-2 border-white/20 shadow-[0_0_30px_rgba(0,240,255,0.2)]"
        />
      </div>
    </SceneWrapper>
  );
}
