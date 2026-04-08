import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section id="contact" className="relative py-20 px-4 min-h-[50vh] flex flex-col justify-center items-center overflow-hidden border-t border-[var(--color-border)] bg-[rgba(5,5,5,0.8)] backdrop-blur-md z-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl w-full mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let's connect and build something amazing together.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="mb-16"
        >
          <a 
            href="mailto:bheesham505@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300"
          >
            <Mail size={20} />
            Say Hello
          </a>
        </motion.div>

        {/* Socials & Copyright (Acting as footer replacement) */}
        <motion.div 
          className="flex flex-col items-center gap-6 pt-10 border-t border-[rgba(255,255,255,0.05)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex gap-6">
            <a 
              href="https://github.com/BheeshamKS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/bheeshamks/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0a66c2] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Bheesham. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
