import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Vite"]
    },
    {
      title: "Backend",
      skills: ["Flask", "Node.js"]
    },
    {
      title: "Databases",
      skills: ["Supabase", "SQLite", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Creative",
      skills: ["Git", "GitHub", "Blender 3D", "Adobe Photoshop", "Adobe Premiere Pro"]
    },
    {
      title: "AI & Automation",
      skills: ["Claude API", "Claude Code", "OpenRouter", "Groq", "Ollama", "n8n", "OpenClaw"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15 
      } 
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        type: "spring", stiffness: 100, damping: 10 
      } 
    },
  };

  return (
    <section id="skills" className="py-24 px-4 relative z-10 bg-gradient-to-b from-transparent to-[var(--color-surface)]">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-accent)] to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl border border-[var(--color-border)] shadow-xl relative overflow-hidden">
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)] rounded-full blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-[var(--color-border)] pb-3">{category.title}</h3>
              
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {category.skills.map((skill, badgeIdx) => (
                  <motion.div 
                    key={badgeIdx} 
                    variants={badgeVariants}
                    className="px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-sm font-medium text-gray-300 hover:text-white hover:border-[var(--color-accent-light)] hover:bg-[rgba(139,92,246,0.1)] transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
