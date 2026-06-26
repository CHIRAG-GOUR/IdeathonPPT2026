"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { ideathonData } from "@/content/ideathon-data";
import * as THREE from "three";
import { Float, Environment, Text } from "@react-three/drei";

function Trophy3D() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  // Create points for LatheGeometry to form a cup shape
  const points = [];
  for (let i = 0; i <= 10; i++) {
    const x = 0.5 + Math.sin(i * 0.15) * 0.8;
    const y = i * 0.3;
    points.push(new THREE.Vector2(x, y));
  }

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} scale={1.2} position={[0, -1, 0]}>
        {/* Cup */}
        <mesh position={[0, 1.2, 0]}>
          <latheGeometry args={[points, 32]} />
          <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Stem */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.2, 0.4, 1.2, 32]} />
          <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Base */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 0.4, 2]} />
          <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.8, 1, 0.4, 32]} />
          <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Better Handles */}
        <mesh position={[0.7, 2.2, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <torusGeometry args={[0.5, 0.08, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-0.7, 2.2, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.5, 0.08, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Text on Base - All 4 Sides */}
        {/* Front */}
        <Text position={[0, 0, 1.01]} fontSize={0.15} color="#FFD700" anchorX="center" anchorY="middle" outlineWidth={0.01} outlineColor="#000000">
          Ideathon Winner 2026
        </Text>
        {/* Back */}
        <Text position={[0, 0, -1.01]} rotation={[0, Math.PI, 0]} fontSize={0.15} color="#FFD700" anchorX="center" anchorY="middle" outlineWidth={0.01} outlineColor="#000000">
          Ideathon Winner 2026
        </Text>
        {/* Right */}
        <Text position={[1.01, 0, 0]} rotation={[0, Math.PI / 2, 0]} fontSize={0.15} color="#FFD700" anchorX="center" anchorY="middle" outlineWidth={0.01} outlineColor="#000000">
          Ideathon Winner 2026
        </Text>
        {/* Left */}
        <Text position={[-1.01, 0, 0]} rotation={[0, -Math.PI / 2, 0]} fontSize={0.15} color="#FFD700" anchorX="center" anchorY="middle" outlineWidth={0.01} outlineColor="#000000">
          Ideathon Winner 2026
        </Text>
        
        {/* Floating Stars around Trophy */}
        <Float speed={4} rotationIntensity={2} floatIntensity={2}>
          <mesh position={[0, 4.5, 0]}>
            <octahedronGeometry args={[0.4, 0]} />
            <meshStandardMaterial color="#FFFFFF" emissive="#FFD700" emissiveIntensity={0.5} />
          </mesh>
        </Float>
      </group>
    </Float>
  );
}

export default function Scene8() {
  const { rewards } = ideathonData.scene8;

  return (
    <SceneWrapper>
      {/* Custom Framer Motion Confetti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={`confetti-${i}`}
            initial={{ 
              top: "-10%", 
              left: `${Math.random() * 100}%`,
              opacity: 1,
              scale: Math.random() * 0.5 + 0.5,
              rotate: Math.random() * 360 
            }}
            animate={{ 
              top: "110%", 
              rotate: Math.random() * 720,
              opacity: [1, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 2 + 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute w-3 h-3 ${['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400'][Math.floor(Math.random() * 5)]}`}
            style={{ borderRadius: Math.random() > 0.5 ? '50%' : '0%' }}
          />
        ))}
      </div>

      <div className="w-full flex flex-col items-center pb-12 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="text-3xl md:text-5xl font-black mb-8 text-[#D4AF37] uppercase tracking-widest text-center shrink-0 drop-shadow-sm"
        >
          {ideathonData.scene8.title}
        </motion.h2>

        {/* Responsive Grid Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8 pb-12">
          
          {/* Left: 1st Place */}
          <div className="flex flex-col gap-6 w-full md:w-1/3 z-10 order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -100, rotateY: -30 }} 
              animate={{ opacity: 1, x: 0, rotateY: 0 }} 
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="glass-card p-6 md:p-8 rounded-2xl border-t-4 border-t-[#FFD700] md:scale-110 shadow-lg bg-white/70 backdrop-blur-xl"
            >
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <div className="p-2 bg-[#FFD700]/10 rounded-full">
                  <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#D4AF37] drop-shadow-sm">1st Place</h3>
              </div>
              <ul className="text-base md:text-lg text-gray-800 font-bold space-y-2 text-center md:text-left">
                {rewards.first.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </motion.div>
          </div>

          {/* Center: 3D Trophy */}
          <div className="w-full md:w-1/3 h-[300px] md:h-[400px] z-0 flex flex-col items-center justify-center order-1 md:order-2 shrink-0">
            <div className="w-full h-full relative">
              <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} color="#FFFFFF" />
                <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#FFD700" />
                <Trophy3D />
                <Environment preset="city" />
              </Canvas>
            </div>
          </div>

          {/* Right: 2nd, 3rd, and Everyone */}
          <div className="flex flex-col gap-6 w-full md:w-1/3 z-10 order-3 md:order-3">
            <motion.div 
              initial={{ opacity: 0, x: 100, rotateX: 30 }} 
              animate={{ opacity: 1, x: 0, rotateX: 0 }} 
              transition={{ delay: 0.6, duration: 0.8, type: "spring" }} 
              className="glass-card bg-white/70 backdrop-blur-xl p-6 rounded-2xl border-l-4 border-l-[#A0A0A0] shadow-sm text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <svg className="w-6 h-6 text-[#A0A0A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                <h3 className="text-xl font-bold text-[#808080] drop-shadow-sm">2nd Place</h3>
              </div>
              <ul className="text-sm md:text-base text-gray-600 space-y-2 font-medium">
                {rewards.second.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 100, scale: 0.8 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              transition={{ delay: 0.9, duration: 0.8, type: "spring" }} 
              className="glass-card bg-white/70 backdrop-blur-xl p-6 rounded-2xl border-l-4 border-l-[#CD7F32] shadow-sm text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <svg className="w-6 h-6 text-[#CD7F32]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 className="text-xl font-bold text-[#CD7F32] drop-shadow-sm">3rd Place</h3>
              </div>
              <ul className="text-sm md:text-base text-gray-600 space-y-2 font-medium">
                {rewards.third.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </motion.div>
          </div>
          
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1.2, duration: 0.8, type: "spring" }} 
          className="glass-card bg-white/70 backdrop-blur-xl p-6 rounded-2xl w-full max-w-2xl border-b-4 border-b-brand-green shadow-sm mt-0 md:-mt-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
            <h3 className="text-xl font-bold text-brand-green drop-shadow-sm">For Everyone</h3>
          </div>
          <ul className="text-sm md:text-base text-gray-600 font-medium grid grid-cols-1 md:grid-cols-2 gap-2">
            {rewards.everyone.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </motion.div>
      </div>
    </SceneWrapper>
  );
}
