import { motion } from "framer-motion";

export default function SceneWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`w-full max-w-7xl mx-auto px-4 md:px-6 h-full overflow-y-auto overflow-x-hidden text-center flex flex-col items-center ${className}`}
    >
      <div className="my-auto w-full py-12 md:py-24 flex flex-col items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}
