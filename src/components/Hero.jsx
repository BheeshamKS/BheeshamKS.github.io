import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      <div className="z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end order-1 lg:order-1"
        >
          {/* Subtle Outer Glow / Ring */}
          <div className="absolute inset-0 rounded-full bg-[var(--color-accent)]/10 blur-3xl transform scale-110"></div>
          
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-[rgba(255,255,255,0.05)] bg-[rgba(20,20,20,0.5)] flex items-center justify-center p-2 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#121215]">
              <img 
                src="/profile.jpg" 
                alt="Bheesham Profile" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Details & Typography */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello, I'm <span className="text-[#6d6af0]">Bheesham</span>
          </motion.h1>

          <motion.div 
            className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-400 mb-6 h-[40px] md:h-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Tech Enthusiast",
                2000,
                "Lifelong Learner",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-gray-300"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            className="text-base md:text-lg text-gray-500 max-w-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Welcome to my portfolio! I build intelligent systems that bridge the gap between creativity, software, and intelligent computing.
          </motion.p>

          <motion.div 
            className="flex gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a 
              href="https://www.linkedin.com/in/bheeshamks/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-gray-400 flex items-center justify-center transition-all hover:bg-[rgba(255,255,255,0.08)] hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://github.com/BheeshamKS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-gray-400 flex items-center justify-center transition-all hover:bg-[rgba(255,255,255,0.08)] hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="mailto:bheesham505@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-gray-400 flex items-center justify-center transition-all hover:bg-[rgba(255,255,255,0.08)] hover:text-white"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>

          {/* Optional Terminal Element to match vibe */}
          <motion.div 
            className="w-full max-w-md bg-[#0d0d12] border border-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="px-4 py-2 bg-[#15151a] flex items-center gap-2 border-b border-[rgba(255,255,255,0.02)]">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-2 text-xs text-gray-500 font-mono">zsh - bheesham@portfolio</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <p className="text-gray-400 mb-2">~ % ./init_system.sh</p>
              <p className="text-[#00ffcc] drop-shadow-[0_0_8px_rgba(0,255,204,0.4)] mb-1">[OK] Dependencies Loaded</p>
              <p className="text-[#00ffcc] drop-shadow-[0_0_8px_rgba(0,255,204,0.4)]">[OK] Developer Mode Active</p>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-gray-500 hover:text-white transition-colors p-2"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
