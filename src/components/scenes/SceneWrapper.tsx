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
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/60 via-gray-300/50 to-pink-200/50 blur-xl rounded-[2.5rem] transform scale-[1.02] z-0"></div>
          
          <div className="relative z-10 w-full bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2.5rem] p-6 md:p-10 flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
