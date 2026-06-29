"use client";

import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";

const MedalSVG = ({ color }: { color: string }) => (
  <svg className="w-16 h-16 drop-shadow-xl" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="7" fill={color} stroke="#FFFFFF" strokeWidth="2" />
    <circle cx="12" cy="9" r="4" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" />
    <circle cx="12" cy="9" r="1.5" fill="#FFFFFF" fillOpacity="0.8" />
  </svg>
);

const TrophySVG = () => (
  <svg className="w-24 h-24 drop-shadow-2xl" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20V8C20 11.3137 17.3137 14 14 14H10C6.68629 14 4 11.3137 4 8V6Z" fill="#FFD700" />
    <path d="M9 14V19H15V14" fill="#D4AF37" />
    <rect x="7" y="19" width="10" height="3" fill="#B8860B" />
    <path d="M4 6H20V4H4V6Z" fill="#FFF200" />
    <path d="M4 8C2.89543 8 2 8.89543 2 10C2 11.1046 2.89543 12 4 12C4.3807 12 4.73656 11.8931 5.0487 11.7107C4.69741 11.2185 4.43632 10.6425 4.28314 10.0076C4.10116 10.0216 3.91428 10.027 3.72266 10.027L3.71966 9.77196C3.91266 9.77196 4.10103 9.76569 4.28421 9.7496C4.46914 9.0768 4.7925 8.46337 5.22177 7.94639C4.84883 7.98394 4.4759 8.00397 4.10297 8.00397L4 8Z" fill="#FFD700" />
    <path d="M20 8C21.1046 8 22 8.89543 22 10C22 11.1046 21.1046 12 20 12C19.6193 12 19.2634 11.8931 18.9513 11.7107C19.3026 11.2185 19.5637 10.6425 19.7169 10.0076C19.8988 10.0216 20.0857 10.027 20.2773 10.027L20.2803 9.77196C20.0873 9.77196 19.899 9.76569 19.7158 9.7496C19.5309 9.0768 19.2075 8.46337 18.7782 7.94639C19.1512 7.98394 19.5241 8.00397 19.897 8.00397L20 8Z" fill="#FFD700" />
    <circle cx="12" cy="9" r="2" fill="#FFF200" />
  </svg>
);

export default function Scene8() {
  const rewards = ideathonData.scene8.rewards;

  return (
    <SceneWrapper>
      {/* Background Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 1000 - 500, 
              y: -100,
              rotate: 0,
            }}
            animate={{ 
              y: "110%", 
              rotate: Math.random() * 720,
            }}
            transition={{ 
              duration: Math.random() * 3 + 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute w-3 h-3 ${['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400'][Math.floor(Math.random() * 5)]}`}
            style={{ 
              left: `${Math.random() * 100}%`,
              borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            }}
          />
        ))}
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center relative z-10 py-8">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black mb-12 text-[#D4AF37] uppercase tracking-widest text-center drop-shadow-sm"
        >
          {ideathonData.scene8.title}
        </motion.h2>

        {/* Connected CSS Podium */}
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto flex-1 justify-center">
          
          <div className="flex items-end justify-center w-full px-4 mb-2">
            
            {/* 2nd Place */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center flex-1 max-w-[280px] z-10"
            >
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="mb-4">
                <MedalSVG color="#C0C0C0" />
              </motion.div>
              <div className="w-full h-[180px] bg-gradient-to-b from-gray-100 to-gray-300 border-2 border-[#C0C0C0] border-r-0 rounded-tl-3xl shadow-[-10px_0_20px_rgba(192,192,192,0.3)] relative overflow-hidden flex flex-col items-center justify-start pt-6">
                <span className="text-8xl font-black text-gray-400 opacity-20 absolute bottom-2">2</span>
                <h3 className="text-xl md:text-2xl font-black text-gray-700 uppercase tracking-wider relative z-10 mb-2">2nd Place</h3>
                <ul className="text-sm text-gray-800 font-bold space-y-1 relative z-10 text-center">
                  {rewards.second.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
            </motion.div>

            {/* 1st Place */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center flex-[1.2] max-w-[320px] z-20 -mx-4"
            >
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="mb-6">
                <TrophySVG />
              </motion.div>
              <div className="w-full h-[260px] bg-gradient-to-b from-yellow-100 to-yellow-400 border-2 border-[#FFD700] rounded-t-3xl shadow-[0_-10px_30px_rgba(255,215,0,0.5)] relative overflow-hidden flex flex-col items-center justify-start pt-8">
                <span className="text-9xl font-black text-yellow-600 opacity-20 absolute bottom-2">1</span>
                <h3 className="text-2xl md:text-3xl font-black text-yellow-800 uppercase tracking-wider relative z-10 mb-3 drop-shadow-md">1st Place</h3>
                <ul className="text-sm md:text-base text-yellow-900 font-black space-y-1 relative z-10 text-center px-4">
                  {rewards.first.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
            </motion.div>

            {/* 3rd Place */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col items-center flex-1 max-w-[280px] z-10"
            >
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="mb-4">
                <MedalSVG color="#CD7F32" />
              </motion.div>
              <div className="w-full h-[140px] bg-gradient-to-b from-orange-100 to-orange-300 border-2 border-[#CD7F32] border-l-0 rounded-tr-3xl shadow-[10px_0_20px_rgba(205,127,50,0.3)] relative overflow-hidden flex flex-col items-center justify-start pt-4">
                <span className="text-7xl font-black text-orange-500 opacity-20 absolute bottom-2">3</span>
                <h3 className="text-lg md:text-xl font-black text-orange-800 uppercase tracking-wider relative z-10 mb-2">3rd Place</h3>
                <ul className="text-xs md:text-sm text-orange-900 font-bold space-y-1 relative z-10 text-center">
                  {rewards.third.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
            </motion.div>

          </div>

          {/* Solid Podium Base Line */}
          <div className="w-full max-w-4xl h-4 bg-gradient-to-r from-gray-400 via-yellow-500 to-orange-500 rounded-b-2xl shadow-xl z-20" />

          {/* For Everyone Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="w-full max-w-3xl mt-8 glass-card bg-white/70 relative rounded-2xl overflow-hidden px-4 py-5 md:px-8 md:py-6"
            style={{ border: '3px solid #10B981' }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-3 shrink-0">
                <div className="p-2 bg-brand-green/20 rounded-full">
                  <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-brand-green drop-shadow-sm">For Everyone</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {rewards.everyone.map((item, i) => (
                  <span
                    key={i}
                    className="bg-brand-green/10 text-brand-green font-bold text-xs md:text-sm px-4 py-2 rounded-full border border-brand-green/30"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SceneWrapper>
  );
}
