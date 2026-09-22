import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaServer, FaShopify, FaEye } from "react-icons/fa";

const ProjectCard = ({ project, onPreview }) => {
  const isShopify = project.category === "shopify" || project.technologies?.includes("Shopify") || project.technologies?.includes("Shopify OS 2.0");

  const domainDisplay = project.projectLink
    ? project.projectLink.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : isShopify
    ? `${project.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.myshopify.com`
    : `${project.name.toLowerCase().replace(/\s+/g, "")}.app`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col justify-between glass-card rounded-3xl overflow-hidden border border-white/[0.08] hover:border-cyan-500/40 hover:shadow-glow transition-all duration-300"
    >
      <div>
        {/* Browser Mockup Header */}
        <div className="px-4 py-3 bg-slate-900/90 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="text-[11px] font-mono text-slate-400 truncate max-w-[170px] sm:max-w-[200px] bg-slate-950/60 px-3 py-0.5 rounded-md border border-white/5">
            {domainDisplay}
          </div>
          <div className="flex items-center gap-1.5">
            {isShopify ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase text-[#96BF48] bg-[#96BF48]/10 px-2 py-0.5 rounded border border-[#96BF48]/20">
                <FaShopify className="text-xs" />
                <span>Shopify</span>
              </span>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse" />
                <span className="text-[10px] font-semibold uppercase text-emerald-400">Live</span>
              </>
            )}
          </div>
        </div>

        {/* Project Thumbnail Image with Zoom */}
        <div
          onClick={() => {
            if (isShopify && onPreview) onPreview(project);
          }}
          className={`relative overflow-hidden aspect-video bg-slate-950/60 ${
            isShopify ? "cursor-pointer" : ""
          }`}
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Hover Overlay for Shopify Homepage Preview */}
          {isShopify && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/50 backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-500/90 hover:bg-cyan-500 text-white text-xs font-semibold shadow-lg shadow-cyan-500/30 transform translate-y-2 group-hover:translate-y-0 transition-all">
                <FaEye className="text-sm" />
                <span>Preview Homepage UI</span>
              </span>
            </div>
          )}

          {/* Niche Badge for Shopify */}
          {project.niche && (
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-950/80 border border-white/15 text-cyan-300 backdrop-blur-md">
                {project.niche}
              </span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
              {project.name}
            </h3>
          </div>

          {project.tagline && (
            <p className="text-xs text-cyan-400/90 font-medium mt-1 truncate">
              {project.tagline}
            </p>
          )}

          <p className="text-slate-300 text-sm mt-2.5 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mt-5">
            {project.technologies?.map((tech, index) => (
              <span
                key={index}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium ${
                  tech.includes("Shopify")
                    ? "bg-[#96BF48]/15 border border-[#96BF48]/30 text-[#96BF48]"
                    : "bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-6 pt-0 mt-4 flex flex-wrap items-center gap-2.5">
        {/* If Shopify Project, show "Preview UI" and "Live Store" if link exists */}
        {isShopify ? (
          <>
            <button
              onClick={() => onPreview && onPreview(project)}
              type="button"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300"
            >
              <FaEye className="text-xs" />
              <span>Preview UI</span>
            </button>

            {project.projectLink ? (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-emerald-400/30"
              >
                <FaExternalLinkAlt className="text-xs" />
                <span>Live Store</span>
              </a>
            ) : (
              <span className="flex-1 inline-flex items-center justify-center px-3 py-2.5 rounded-xl text-[11px] font-mono text-slate-400 bg-surface-card border border-white/5">
                Softvence IT &middot; Client
              </span>
            )}
          </>
        ) : (
          <>
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-cyan-400/30"
              >
                <FaExternalLinkAlt className="text-xs" />
                <span>Live Demo</span>
              </a>
            )}

            {project.repositoryLink && (
              <a
                href={project.repositoryLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-200 bg-surface-card hover:bg-white/10 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
                title="Client Repository"
              >
                <FaGithub className="text-base" />
                <span>Client</span>
              </a>
            )}

            {project.serverRepositoryLink && (
              <a
                href={project.serverRepositoryLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-200 bg-surface-card hover:bg-white/10 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
                title="Server Repository"
              >
                <FaServer className="text-sm text-slate-400" />
                <span>Server</span>
              </a>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    category: PropTypes.string,
    niche: PropTypes.string,
    tagline: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    projectLink: PropTypes.string,
    repositoryLink: PropTypes.string,
    serverRepositoryLink: PropTypes.string,
  }),
  onPreview: PropTypes.func,
};

export default ProjectCard;
