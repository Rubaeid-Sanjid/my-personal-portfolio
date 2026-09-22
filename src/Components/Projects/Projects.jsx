import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import HomepagePreviewModal from "./HomepagePreviewModal";
import { shopifyProjects } from "../../data/shopifyProjects";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaShopify } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Projects = () => {
  const [webProjects, setWebProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [previewProject, setPreviewProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setWebProjects(data);
      })
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  const categories = [
    { id: "all", name: "Featured Projects" },
    { id: "shopify", name: "Shopify (CMS)", icon: FaShopify, count: shopifyProjects.length },
    { id: "fullstack", name: "MERN Stack" },
    { id: "frontend", name: "Frontend & UI" },
  ];

  // Combined projects list
  const allProjectsList = [...shopifyProjects, ...webProjects];

  const filteredProjects =
    selectedCategory === "all"
      ? [
          shopifyProjects[0], // HL Store UAE
          webProjects[0],      // ClassNet
          shopifyProjects[1], // Ketodeck
          webProjects[1],      // EduScholar
          shopifyProjects[2], // Barkbubba
          shopifyProjects[3], // Necknine
        ].filter(Boolean)
      : selectedCategory === "shopify"
      ? shopifyProjects
      : selectedCategory === "fullstack"
      ? webProjects.filter(
          (p) =>
            p.technologies?.includes("Node.js") ||
            p.technologies?.includes("MongoDB") ||
            p.technologies?.includes("Express Js") ||
            p.technologies?.includes("Express JS")
        )
      : webProjects.filter((p) => p.technologies?.includes("React JS"));

  return (
    <section id="projects" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
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
            Production-grade Shopify e-commerce storefronts and full-stack web applications crafted with high conversion, responsive UI, and resilient architectures.
          </motion.p>

          {/* Category Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-surface-card/70 border border-white/[0.08] rounded-2xl w-fit mx-auto backdrop-blur-md"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {Icon && <Icon className={selectedCategory === cat.id ? "text-white" : "text-[#96BF48]"} />}
                  <span>{cat.name}</span>
                  {cat.count && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                        selectedCategory === cat.id
                          ? "bg-white/20 text-white"
                          : "bg-white/10 text-slate-300"
                      }`}
                    >
                      {cat.count}
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Selected Category Info Banner for Shopify */}
        {selectedCategory === "shopify" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 rounded-2xl bg-[#96BF48]/10 border border-[#96BF48]/25 text-slate-300 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#96BF48]/20 flex items-center justify-center text-[#96BF48] shrink-0 text-lg">
                <FaShopify />
              </div>
              <div>
                <span className="font-semibold text-white">Client Shopify Storefronts:</span>{" "}
                Custom Theme OS 2.0, Liquid Sections, Mobile PageSpeed Optimization, and High-Converting UX developed at{" "}
                <span className="text-[#96BF48] font-medium">Softvence IT</span>.
              </div>
            </div>
            <span className="px-3 py-1 rounded-lg bg-black/40 text-[11px] font-mono text-cyan-300 border border-white/10 shrink-0">
              Click &apos;Preview UI&apos; to view full Homepage
            </span>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onPreview={(proj) => setPreviewProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

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

      {/* Fullscreen Homepage UI Modal */}
      <HomepagePreviewModal
        project={previewProject}
        isOpen={Boolean(previewProject)}
        onClose={() => setPreviewProject(null)}
      />
    </section>
  );
};

export default Projects;
