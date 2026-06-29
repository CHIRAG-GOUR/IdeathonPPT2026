import { motion } from "framer-motion";

export default function SceneWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden ${className}`}
    >
      <div className="min-h-full w-full max-w-7xl mx-auto p-4 md:p-8 flex flex-col items-center">
        <div className="relative w-full my-auto">
          {/* Glowing border effect - Optimized for performance */}
          <motion.div 
            animate={{ opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-blue-300/70 via-pink-200/70 to-blue-300/70 blur-xl rounded-[2.5rem] transform scale-[1.02] z-0"
            style={{ willChange: "opacity" }}
          ></motion.div>
          
          <div className="relative z-10 w-full bg-transparent rounded-[2.5rem] p-6 md:p-10 flex flex-col items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
