import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  const categories = [
    { id: "all", name: "Featured Projects" },
    { id: "fullstack", name: "MERN Stack" },
    { id: "frontend", name: "Frontend & UI" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : selectedCategory === "fullstack"
      ? projects.filter(
          (p) =>
            p.technologies?.includes("Node.js") ||
            p.technologies?.includes("MongoDB") ||
            p.technologies?.includes("Express Js")
        )
      : projects.filter((p) => p.technologies?.includes("React JS"));

  return (
    <section id="projects" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <HiSparkles className="text-sm" />
            <span>Showcase of Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            Real-world web applications crafted with responsive UI, resilient backends, and secure database designs.
          </motion.p>

          {/* Category Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-surface-card/70 border border-white/[0.08] rounded-2xl w-fit mx-auto backdrop-blur-md"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Explorer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 rounded-3xl glass-card border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Looking for more repositories & experiments?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Explore open-source contributions, algorithms, and micro-projects on my GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Rubaeid-Sanjid"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-slate-800 hover:bg-slate-700 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-glass shrink-0"
          >
            <FaGithub className="text-lg" />
            <span>Visit GitHub Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

