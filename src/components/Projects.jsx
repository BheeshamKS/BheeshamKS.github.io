import { motion } from "framer-motion";
import { ExternalLink, Cpu, Film } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Lumina AI",
      description: "A Full-Stack AI Orchestration Platform engineered with a secure BYOK architecture supporting multiple LLM providers and sub-second inference latency.",
      tags: ["React", "Supabase", "Vercel"],
      icon: <Cpu size={24} />,
      githubLink: "https://github.com/BheeshamKS/lumina-ai",
      demoLink: "https://lumina-ai-bheeshamks.vercel.app"
    },
    {
      title: "Netflix Clone",
      description: "A responsive streaming app that dynamically renders 13,000+ movie records via TMDb API, optimized to reduce page load times by 40%.",
      tags: ["Python (Flask)", "SQLite3", "TMDb API"],
      icon: <Film size={24} />,
      githubLink: "https://github.com/BheeshamKS/Netflix-Clone",
      demoLink: "https://bheeshamks.pythonanywhere.com"
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    },
  };

  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-accent)] to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group relative rounded-3xl p-1 glass hover:bg-[var(--color-surface-hover)] transition-all duration-500 overflow-hidden"
              whileHover={{ y: -10 }}
            >
              {/* Subtle hover background sweep */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-bg)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative h-full bg-[#0a0a0a] rounded-[22px] p-8 flex flex-col border border-[rgba(255,255,255,0.05)] shadow-2xl">
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent-light)] shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.githubLink} className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub Repository">
                      <FaGithub size={22} />
                    </a>
                    <a href={project.demoLink} className="text-gray-400 hover:text-[var(--color-accent-light)] transition-colors" aria-label="Live Demo">
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--color-accent-light)] transition-colors">{project.title}</h3>
                
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs font-mono font-medium px-3 py-1 bg-[rgba(255,255,255,0.05)] text-gray-300 rounded-full border border-[rgba(255,255,255,0.1)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
