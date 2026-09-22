import { useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes, FaShopify, FaCheckCircle, FaLock } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const HomepagePreviewModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-slate-900/95 border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Top Browser Bar */}
          <div className="px-4 py-3 bg-slate-950/90 border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            {/* Address Bar */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/90 px-4 py-1.5 rounded-full border border-white/10 max-w-md w-full mx-4 justify-center">
              <FaLock className="text-[10px] text-emerald-400 shrink-0" />
              <span className="truncate">
                {project.projectLink ? project.projectLink.replace(/^https?:\/\//, "") : `${project.name.toLowerCase().replace(/\s+/g, "")}.myshopify.com`}
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 font-semibold uppercase">
                Shopify OS 2.0
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Close (Esc)"
            >
              <FaTimes className="text-base" />
            </button>
          </div>

          {/* Modal Content: Split Screen or Scroll View */}
          <div className="flex flex-col lg:flex-row overflow-hidden flex-1">
            {/* Left: Scrollable Full Homepage Image View */}
            <div className="lg:w-3/5 bg-slate-950/70 overflow-y-auto max-h-[50vh] lg:max-h-full border-b lg:border-b-0 lg:border-r border-white/10 relative group">
              <div className="sticky top-0 z-10 px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm border-b border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Scroll down to view full homepage sections
                </span>
                <span className="text-xs font-mono text-cyan-300">100% Responsive UI</span>
              </div>
              <img
                src={project.image}
                alt={`${project.name} Full Homepage UI`}
                className="w-full h-auto object-top block"
                loading="eager"
              />
            </div>

            {/* Right: Project Details & Deliverables */}
            <div className="lg:w-2/5 p-6 overflow-y-auto flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#96BF48]/15 border border-[#96BF48]/30 text-[#96BF48]">
                    <FaShopify className="text-sm" />
                    <span>Shopify CMS</span>
                  </span>
                  {project.niche && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                      {project.niche}
                    </span>
                  )}
                  {project.agency && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-slate-400">
                      Client @ {project.agency}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                    {project.name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Built Features & Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <HiSparkles className="text-cyan-400 text-sm" />
                      <span>Key Sections & Deliverables:</span>
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <FaCheckCircle className="text-emerald-400 text-xs shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Technologies & Architecture:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 border border-white/10 text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                {project.projectLink ? (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-glow transition-all duration-300 border border-cyan-400/30"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Visit Live Store</span>
                  </a>
                ) : (
                  <div className="w-full text-center py-2.5 px-4 rounded-xl bg-surface-card border border-white/10 text-xs text-slate-400">
                    Client Production Storefront &middot; Softvence IT
                  </div>
                )}
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-medium text-slate-300 bg-surface-card hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

HomepagePreviewModal.propTypes = {
  project: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default HomepagePreviewModal;
