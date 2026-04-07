import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-[rgba(5,5,5,0.7)] backdrop-blur-lg border-[var(--color-border)] py-3 shadow-lg" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-24 flex justify-between items-center">
        <a href="#hero" className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-[var(--color-accent-light)] transition-colors">
          Bheesham Kumar Sajnani
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white hover:text-[var(--color-accent-light)] transition-colors"
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
            className="md:hidden bg-[rgba(10,10,10,0.95)] backdrop-blur-xl border-b border-[var(--color-border)] overflow-hidden"
          >
            <nav className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
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
