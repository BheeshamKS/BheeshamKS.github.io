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
          initial={{ opacity: 0, scale: 0.8, x: -40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 120, damping: 20 }}
          className="relative flex justify-center lg:justify-end order-1 lg:order-1"
        >
          {/* Intense Foggy Glow / Ring behind Profile */}
          <div className="absolute inset-0 rounded-full bg-[var(--color-accent)]/20 blur-[100px] transform scale-[1.3] animate-pulse"></div>
          
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-[rgba(255,255,255,0.05)] bg-[rgba(20,20,20,0.5)] flex items-center justify-center p-2 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#121215]">
              <img 
                src="/profile.jpg" 
                alt="Bheesham Profile" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Details & Typography */}
        <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">
          
          {/* Foggy Glow behind Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-accent)]/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
          >
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d6af0] to-[#8b88f5]">Bheesham</span>
          </motion.h1>

          <motion.div 
            className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-400 mb-6 h-[40px] md:h-[48px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
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
              className="text-gray-300 drop-shadow-md"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            className="text-base md:text-lg text-gray-400 max-w-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
          >
            Welcome to my portfolio! I build intelligent systems that bridge the gap between creativity, software, and intelligent computing.
          </motion.p>

          <motion.div 
            className="flex gap-4 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
          >
            <a 
              href="https://www.linkedin.com/in/bheeshamks/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-gray-400 flex items-center justify-center transition-all hover:bg-[rgba(255,255,255,0.08)] hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(109,106,240,0.3)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://github.com/BheeshamKS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-gray-400 flex items-center justify-center transition-all hover:bg-[rgba(255,255,255,0.08)] hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(109,106,240,0.3)]"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="mailto:bheesham505@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-gray-400 flex items-center justify-center transition-all hover:bg-[rgba(255,255,255,0.08)] hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(109,106,240,0.3)]"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>

          {/* Optional Terminal Element to match vibe */}
          <motion.div 
            className="w-full max-w-md bg-[#0d0d12] border border-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100, damping: 20 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="px-4 py-2 bg-[#15151a] flex items-center gap-2 border-b border-[rgba(255,255,255,0.02)]">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></div>
              <span className="ml-2 text-xs text-gray-500 font-mono">zsh - bheesham@portfolio</span>
            </div>
            <div className="p-4 font-mono text-sm group">
              <p className="text-gray-400 mb-2">~ % ./init_system.sh</p>
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1.5, duration: 0.5 }} 
                className="text-[#00ffcc] drop-shadow-[0_0_8px_rgba(0,255,204,0.4)] mb-1"
              >
                [OK] Dependencies Loaded
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 2, duration: 0.5 }} 
                className="text-[#00ffcc] drop-shadow-[0_0_8px_rgba(0,255,204,0.4)]"
              >
                [OK] Developer Mode Active
              </motion.p>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, type: "spring" }}
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
          className="text-gray-500 hover:text-[#6d6af0] transition-colors p-2"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
