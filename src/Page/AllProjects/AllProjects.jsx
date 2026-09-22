import { useEffect, useState } from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import HomepagePreviewModal from "../../Components/Projects/HomepagePreviewModal";
import { shopifyProjects } from "../../data/shopifyProjects";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaShopify } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { HiSparkles } from "react-icons/hi";

const AllProjects = () => {
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
    { id: "all", name: "All Projects" },
    { id: "shopify", name: "Shopify (CMS)", icon: FaShopify, count: shopifyProjects.length },
    { id: "fullstack", name: "MERN Stack" },
    { id: "frontend", name: "Frontend / React" },
  ];

  const allCombined = [...shopifyProjects, ...webProjects];

  const filteredProjects =
    selectedCategory === "all"
      ? allCombined
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
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh]">
      {/* Top Navigation Back */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-card border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 text-sm transition-all"
        >
          <FaArrowLeft className="text-xs" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <HiSparkles className="text-sm" />
          <span>Full Portfolio Showcase</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          All Built <span className="text-gradient">Projects</span>
        </h1>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Browse through all web applications, Shopify e-commerce digital storefronts, and client interfaces built with clean engineering.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-surface-card/70 border border-white/[0.08] rounded-2xl w-fit mx-auto backdrop-blur-md">
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
        </div>
      </div>

      {/* Selected Category Info Banner for Shopify */}
      {selectedCategory === "shopify" && (
        <div className="mb-8 p-4 rounded-2xl bg-[#96BF48]/10 border border-[#96BF48]/25 text-slate-300 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left max-w-4xl mx-auto">
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
        </div>
      )}

      {/* Grid */}
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

      {/* Fullscreen Homepage UI Modal */}
      <HomepagePreviewModal
        project={previewProject}
        isOpen={Boolean(previewProject)}
        onClose={() => setPreviewProject(null)}
      />
    </div>
  );
};

export default AllProjects;