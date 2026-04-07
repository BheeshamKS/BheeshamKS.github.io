import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "> Initializing environment...\n> Loading modules...\n> Establishing connection...\n> BheeshamKS.github.io is ready.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typingInterval);
        setTimeout(() => onComplete(), 800); // Wait a bit before completing
      }
    }, 40); // Typing speed

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 120);

    return () => {
      clearInterval(typingInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete, fullText]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[var(--color-background)] flex flex-col items-center justify-center font-mono"
    >
      <div className="w-full max-w-2xl px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        
        <div className="h-40 overflow-hidden text-sm md:text-base text-gray-300 whitespace-pre-wrap flex flex-col justify-end">
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 sm:w-3 h-4 sm:h-5 bg-[var(--color-accent)] ml-1 align-middle"
          />
        </div>

        <div className="mt-8 w-full h-1 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-accent)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        <div className="mt-2 text-right text-xs text-gray-500 font-mono">
          {Math.min(progress, 100)}%
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
