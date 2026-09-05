import { useEffect, useState } from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";

const AllProjects = () => {
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
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "MERN Stack" },
    { id: "frontend", name: "Frontend / React" },
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
          Browse through all web applications, full-stack systems, and client interfaces built with clean engineering.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-surface-card/70 border border-white/[0.08] rounded-2xl w-fit mx-auto backdrop-blur-md">
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
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;