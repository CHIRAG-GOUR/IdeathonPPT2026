"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";
import { Clock, AlertTriangle, CalendarCheck } from "lucide-react";

export default function Scene9() {
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    const targetDate = new Date("2026-08-05T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
          minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
          seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0')
        };
      }
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    };

    // Initial set
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center">
        
        {/* Pulsing Urgency Background */}
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/30 via-transparent to-transparent pointer-events-none"
        />

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col md:flex-row items-center gap-4 mb-10 text-center"
        >
          <div className="p-4 bg-red-500/20 rounded-full border border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
            <Clock size={48} className="text-red-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 tracking-widest uppercase drop-shadow-lg">
            {ideathonData.scene9.title}
          </h2>
        </motion.div>

        {/* Digital Clock */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="flex gap-4 md:gap-8 mb-12"
        >
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="glass-card px-4 md:px-8 py-4 md:py-8 rounded-3xl text-4xl md:text-[100px] font-mono font-black text-white shadow-[0_0_30px_rgba(239,68,68,0.2)] border border-red-500/30">
                {item.value}
              </div>
              <div className="text-red-500 font-bold tracking-widest mt-4 text-sm md:text-xl">{item.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-12 relative z-10">
          {ideathonData.scene9.deadlines.map((deadline, i) => (
            <motion.div 
              key={i}
              initial={{ x: i === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 + i * 0.2, type: "spring" }}
              className="glass-card-colorful p-6 md:p-8 rounded-2xl border-t-4 border-t-red-500 hover:scale-105 transition-transform flex items-start gap-4"
            >
              <div className="bg-red-500/20 p-3 rounded-xl text-red-400 shrink-0">
                <CalendarCheck size={32} />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1 drop-shadow-md">{deadline.date}</div>
                <div className="text-sm md:text-base text-gray-200 font-bold uppercase tracking-wider">{deadline.event}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notes */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl"
        >
          {ideathonData.scene9.notes.map((note, i) => (
            <div key={i} className="flex items-center gap-2 text-xs md:text-sm font-medium text-white glass-card px-4 py-2 rounded-full border border-brand-gold/30">
              <AlertTriangle size={14} className="text-brand-gold" />
              {note}
            </div>
          ))}
        </motion.div>

      </div>
    </SceneWrapper>
  );
}
