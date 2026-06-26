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
      <div className="min-h-full w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </motion.div>
  );
}
