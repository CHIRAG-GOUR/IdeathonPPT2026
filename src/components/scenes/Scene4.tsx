"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      className="flex flex-col items-center p-4 md:p-6 glass-card rounded-2xl relative overflow-hidden group shadow-sm hover:border-brand-blue/30 transition-all bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="text-3xl md:text-5xl font-black text-brand-blue mb-2 drop-shadow-sm flex items-end">
        {count}
        <span className="text-xl md:text-3xl text-brand-gold ml-1">{suffix}</span>
      </div>
      <div className="text-xs md:text-sm text-gray-600 font-bold tracking-wide text-center uppercase leading-tight">
        {label}
      </div>
    </motion.div>
  );
}

export default function Scene4() {
  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center pt-2">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-brand-blue tracking-wide uppercase drop-shadow-sm text-center"
        >
          {ideathonData.scene4.title}
        </motion.h2>

        <motion.img 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
          src="/media/gif_1.gif"
          alt="Animation"
          className="w-48 md:w-64 lg:w-80 h-auto object-contain drop-shadow-md mb-6"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mb-10">
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
          className="text-lg md:text-xl lg:text-2xl font-light text-center text-gray-600"
        >
          {ideathonData.scene4.tagline.split('. ').map((part, i) => (
            <motion.span 
              key={i} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.3 }}
              className={i === 2 ? "text-brand-green font-black block mt-3 text-xl md:text-3xl tracking-tight drop-shadow-sm" : "block md:inline md:after:content-['.'] md:after:mx-2"}
            >
              {part.replace('.', '')}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </SceneWrapper>
  );
}
