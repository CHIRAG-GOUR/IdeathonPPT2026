import { motion } from "framer-motion";

interface NavigationProps {
  activeScene: number;
  totalScenes: number;
  onNavigate: (index: number) => void;
}

export default function Navigation({ activeScene, totalScenes, onNavigate }: NavigationProps) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {Array.from({ length: totalScenes }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className="relative group p-2 outline-none"
          aria-label={`Go to scene ${i + 1}`}
        >
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeScene === i ? "bg-brand-blue scale-150" : "bg-white/30 group-hover:bg-white/70"
            }`}
          />
          {activeScene === i && (
            <motion.div
              layoutId="nav-indicator"
              className="absolute inset-0 rounded-full border border-brand-blue"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
