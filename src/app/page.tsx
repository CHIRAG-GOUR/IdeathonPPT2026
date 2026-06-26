"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import PresentationCanvas from "@/components/PresentationCanvas";
import { Maximize, Minimize } from "lucide-react";

import Scene1 from "@/components/scenes/Scene1";
import Scene2 from "@/components/scenes/Scene2";
import Scene3 from "@/components/scenes/Scene3";
import Scene4 from "@/components/scenes/Scene4";
import Scene5 from "@/components/scenes/Scene5";
import Scene6 from "@/components/scenes/Scene6";
import Scene7 from "@/components/scenes/Scene7";
import Scene8 from "@/components/scenes/Scene8";
import Scene9 from "@/components/scenes/Scene9";
import Scene10 from "@/components/scenes/Scene10";
import { playWhooshSound, playStartupSound } from "@/utils/audio";

// Define the number of steps per scene for arrow navigation
const SCENE_STEPS = [9, 1, 1, 1, 1, 4, 1, 1, 1, 1];
const TOTAL_SCENES = 10;

export default function Presentation() {
  const [hasStarted, setHasStarted] = useState(false);
  const [activeScene, setActiveScene] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isScrolling = useRef(false);

  // Play sound when activeScene changes (only if it has started)
  useEffect(() => {
    if (hasStarted) {
      playWhooshSound();
    }
  }, [activeScene, hasStarted]);

  const handleStart = () => {
    setHasStarted(true);
    playStartupSound();
    
    // Optional: Auto enter fullscreen on start for true cinematic experience
    // if (!document.fullscreenElement) {
    //   document.documentElement.requestFullscreen().catch(err => console.log(err));
    //   setIsFullscreen(true);
    // }
  };

  const nextAction = useCallback(() => {
    if (activeStep < SCENE_STEPS[activeScene] - 1) {
      setActiveStep((prev) => prev + 1);
    } else if (activeScene < TOTAL_SCENES - 1) {
      setActiveScene((prev) => prev + 1);
      setActiveStep(0);
    }
  }, [activeScene, activeStep]);

  const prevAction = useCallback(() => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    } else if (activeScene > 0) {
      setActiveScene((prev) => prev - 1);
      setActiveStep(SCENE_STEPS[activeScene - 1] - 1);
    }
  }, [activeScene, activeStep]);

  // Handle Wheel Events
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      isScrolling.current = true;
      if (e.deltaY > 50) {
        nextAction();
      } else if (e.deltaY < -50) {
        prevAction();
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800); // Debounce
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [nextAction, prevAction]);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        nextAction();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        prevAction();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextAction, prevAction]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.log(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const renderScene = () => {
    switch (activeScene) {
      case 0: return <Scene1 key="scene1" step={activeStep} />;
      case 1: return <Scene2 key="scene2" />;
      case 2: return <Scene3 key="scene3" />;
      case 3: return <Scene4 key="scene4" />;
      case 4: return <Scene5 key="scene5" />;
      case 5: return <Scene6 key="scene6" step={activeStep} />;
      case 6: return <Scene7 key="scene7" />;
      case 7: return <Scene8 key="scene8" />;
      case 8: return <Scene9 key="scene9" />;
      case 9: return <Scene10 key="scene10" />;
      default: return null;
    }
  };

  if (!hasStarted) {
    return (
      <main 
        className="relative w-full h-screen bg-bg-dark text-white flex items-center justify-center cursor-pointer overflow-hidden" 
        onClick={handleStart}
      >
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <PresentationCanvas activeScene={0} />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="text-2xl md:text-4xl text-brand-blue tracking-[0.4em] uppercase mb-6 opacity-90 animate-pulse font-black drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            INITIALIZE
          </div>
          <div className="text-sm text-gray-400 uppercase tracking-[0.2em]">
            Click anywhere to begin experience
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative w-full h-screen overflow-hidden bg-bg-dark text-white font-sans">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PresentationCanvas activeScene={activeScene} />
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {renderScene()}
        </AnimatePresence>
      </div>

      <Navigation 
        activeScene={activeScene} 
        totalScenes={TOTAL_SCENES} 
        onNavigate={(idx) => {
          setActiveScene(idx);
          setActiveStep(0);
        }} 
      />
      
      {/* Fullscreen Toggle */}
      <button 
        onClick={toggleFullscreen}
        className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-brand-blue/30 text-white rounded-full transition-colors backdrop-blur-md border border-white/20"
      >
        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </button>

    </main>
  );
}
