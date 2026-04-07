import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-10 py-12 px-4 border-t border-[var(--color-border)] bg-[rgba(5,5,5,0.8)] backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold tracking-tight text-white mb-1">Bheesham</p>
          <p className="text-sm text-gray-400">Bridging the gap between creativity and intelligent computing.</p>
        </div>

        <div className="flex gap-6">
          <a 
            href="mailto:bheesham505@gmail.com" 
            className="text-gray-400 hover:text-[var(--color-accent-light)] transition-colors"
            aria-label="Email Me"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://github.com/BheeshamKS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/bheeshamks/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0a66c2] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-8 text-center md:text-left">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Bheesham. All rights reserved. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
