import { motion } from "framer-motion";
import { BookOpen, Award } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* --- About Me Section --- */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-accent)] to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="glass p-8 md:p-12 text-lg text-gray-300 leading-relaxed rounded-3xl border border-[var(--color-border)] shadow-2xl relative overflow-hidden mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle Glow inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)] rounded-full blur-[100px] opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
          
          <p className="mb-6">
            I am a Full-Stack Web Developer, Automation Engineer, and Data Science student specializing in Python/Flask and React applications, API-driven systems, and workflow automation solutions. My focus is on investigating how technology and data can be combined to produce insightful, highly functional solutions.
          </p>
          <p className="mb-6">
            As a recent graduate of Harvard's CS50x, I have hands-on experience deploying complex full-stack projects—such as live streaming platforms and AI orchestration tools like Lumina AI. I thrive on solving complex technical problems, optimizing workflows, and delivering secure, end-to-end solutions.
          </p>
          <p className="mb-6">
            Beyond traditional software development, I have a strong creative foundation with over two years of experience in 3D VFX pipelines and animation using tools like Blender and the Adobe Creative Suite. This background equips me with a unique, design-oriented mindset, allowing me to approach backend system design and UI/UX with both logic and aesthetic precision.
          </p>
          <p>
            I am driven by a philosophy of continuous improvement and lifelong learning. Whether I am customizing Linux environments, scripting automated workflows, or studying system design, my ultimate goal is to build practical initiatives that bridge the gap between creative vision and intelligent computing.
          </p>
        </motion.div>


        {/* --- Education Section --- */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-accent)] to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Education Card 1 */}
          <motion.div variants={itemVariants} className="glass glass-hover p-8 md:p-10 rounded-3xl flex flex-col transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-light)] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="w-14 h-14 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center mb-6 text-[var(--color-accent-light)] shadow-lg">
              <BookOpen size={28} />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Dawood University of Engineering & Technology</h3>
            <p className="text-[var(--color-accent-light)] font-mono text-sm mb-4 tracking-wide uppercase">Sep 2025 - Present</p>
            
            <div className="border-t border-[var(--color-border)] pt-4 mt-auto">
              <p className="text-gray-400 font-medium mb-1"><span className="text-white">Degree:</span> Bachelor of Science in Data Science</p>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                Coursework includes Programming Fundamentals, Object-Oriented Programming, Linear Algebra, and Digital Logic Design.
              </p>
            </div>
          </motion.div>

          {/* Education Card 2 */}
          <motion.div variants={itemVariants} className="glass glass-hover p-8 md:p-10 rounded-3xl flex flex-col transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-light)] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="w-14 h-14 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center mb-6 text-[var(--color-accent-light)] shadow-lg">
              <Award size={28} />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Harvard University</h3>
            <p className="text-[var(--color-accent-light)] font-mono text-sm mb-4 tracking-wide uppercase">Nov 2025 - Feb 2026</p>
            
            <div className="border-t border-[var(--color-border)] pt-4 mt-auto">
              <p className="text-gray-400 font-medium mb-1"><span className="text-white">Certificate:</span> CS50x Introduction to Computer Science</p>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                Covered foundational computer science topics including C programming, Python, SQL, algorithms, and web development. Final Project: Built and deployed a full-stack web application with secure authentication and database integration.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
