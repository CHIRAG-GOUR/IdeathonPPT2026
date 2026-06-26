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
        <mesh position={[1.0, 2.0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <torusGeometry args={[0.6, 0.08, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-1.0, 2.0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.6, 0.08, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Text on Base */}
        <Text
          position={[0, 0, 1.01]}
          fontSize={0.15}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#000000"
        >
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

export default function Scene8({ step = 0 }: { step?: number }) {
  const { rewards } = ideathonData.scene8;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <SceneWrapper>
      <div className="w-full flex flex-col items-center pb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black mb-8 text-gradient-gold uppercase tracking-widest text-center shrink-0"
        >
          {ideathonData.scene8.title}
        </motion.h2>

        {/* Responsive Grid Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8 pb-12">
          
          {/* Left: 1st Place */}
          <div className="flex flex-col gap-6 w-full md:w-1/3 z-10 order-2 md:order-1">
            <motion.div 
              initial="hidden" 
              animate="show" 
              variants={cardVariants}
              className="glass-card-colorful p-6 md:p-8 rounded-2xl border-t-4 border-t-[#FFD700] md:scale-110 shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            >
              <h3 className="text-2xl md:text-3xl font-black text-[#FFD700] mb-3 drop-shadow-md">1st Place</h3>
              <ul className="text-base md:text-lg text-white font-bold space-y-2">
                {rewards.first.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </motion.div>
          </div>

          {/* Center: 3D Trophy */}
          <div className="w-full md:w-1/3 h-[300px] md:h-[400px] z-0 flex flex-col items-center justify-center order-1 md:order-2 shrink-0">
            <div className="w-full h-full relative">
              <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
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
            {step >= 1 && (
              <motion.div initial="hidden" animate="show" variants={cardVariants} className="glass-card-colorful p-6 rounded-2xl border-l-4 border-l-[#C0C0C0]">
                <h3 className="text-xl font-bold text-[#C0C0C0] mb-3 drop-shadow-md">2nd Place</h3>
                <ul className="text-sm md:text-base text-gray-200 space-y-2">
                  {rewards.second.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </motion.div>
            )}
            
            {step >= 2 && (
              <motion.div initial="hidden" animate="show" variants={cardVariants} className="glass-card-colorful p-6 rounded-2xl border-l-4 border-l-[#CD7F32]">
                <h3 className="text-xl font-bold text-[#CD7F32] mb-3 drop-shadow-md">3rd Place</h3>
                <ul className="text-sm md:text-base text-gray-200 space-y-2">
                  {rewards.third.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </motion.div>
            )}

            {step >= 3 && (
              <motion.div initial="hidden" animate="show" variants={cardVariants} className="glass-card-colorful p-6 rounded-2xl border-l-4 border-l-brand-green">
                <h3 className="text-xl font-bold text-brand-green mb-3 drop-shadow-md">For Everyone</h3>
                <ul className="text-sm md:text-base text-gray-200 space-y-2">
                  {rewards.everyone.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </SceneWrapper>
  );
}
