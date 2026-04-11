import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT", href: "#about" },
    { name: "EDUCATION", href: "#education" },
    { name: "AWARDS", href: "#awards" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const triggerPoint = window.innerHeight / 3;
      
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "hero";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the trigger point is inside the section's bounding box
          if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial active section
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300 pt-4 px-4`}
    >
      <div className={`flex justify-between items-center transition-all duration-500 w-full max-w-6xl bg-[rgba(15,15,20,0.85)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] shadow-[0_10px_30px_rgba(0,0,0,0.4)] rounded-full px-6 py-3`}>
        <a href="#hero" className="text-xl md:text-2xl font-extrabold tracking-tight flex items-center group">
          <span className="text-white transition-colors duration-300 group-hover:text-gray-200">Bheesham</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d6af0] to-[#8b88f5] ml-1.5 opacity-90 group-hover:opacity-100 transition-opacity">Kumar Sajnani</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeSection === link.href.substring(1) 
                  ? "text-[#8b88f5] drop-shadow-[0_0_8px_rgba(139,136,245,0.5)]" 
                  : "text-gray-400 hover:text-white hover:text-[var(--color-accent-light)]"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:bheesham505@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-[var(--color-border)] text-sm font-medium hover:bg-[var(--color-surface)] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden w-full transition-all duration-300 max-w-6xl rounded-3xl mt-2 bg-[rgba(15,15,20,0.95)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] shadow-2xl`}
          >
            <nav className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "text-[#8b88f5]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="mailto:bheesham505@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-8 py-3 mt-2 rounded-full bg-[var(--color-accent)] text-white font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                Get In Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
