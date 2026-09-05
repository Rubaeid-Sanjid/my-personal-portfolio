import { motion } from "framer-motion";
import { FaBriefcase, FaCheckCircle, FaShopify, FaReact } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { SiTailwindcss } from "react-icons/si";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Softvence Agency",
      location: "Dhaka, Bangladesh",
      period: "2 August 2025 – Present",
      isCurrent: true,
      description:
        "Leading frontend development and client-facing digital storefronts, specializing in Shopify (CMS) and React ecosystem applications with a focus on high-converting UI/UX.",
      responsibilities: [
        "Developing and maintaining high-performance, responsive web applications and e-commerce stores using Shopify (CMS).",
        "Collaborating with cross-functional design and engineering teams to implement modern, clean UI/UX designs and frontend functionalities.",
        "Communicating directly with international and local clients to gather requirements, present sprint progress, and ensure timely milestone deliveries.",
        "Participating actively in architectural discussions, codebase refactoring, debugging, and continuous feature optimizations.",
      ],
      skills: [
        { name: "Shopify (CMS)", icon: FaShopify, color: "#96BF48" },
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <HiSparkles className="text-sm" />
            <span>Career Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            Delivering production-grade frontend solutions, client coordination, and modern web applications.
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 overflow-hidden group"
            >
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-glow">
                    <FaBriefcase className="text-2xl" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 status-pulse" />
                          <span>Present</span>
                        </span>
                      )}
                    </div>
                    <div className="text-cyan-400 font-semibold text-base mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="inline-block px-3.5 py-1 rounded-xl bg-surface-card border border-white/10 text-xs font-mono font-medium text-slate-300">
                    {exp.period}
                  </span>
                  <div className="text-xs text-slate-400 mt-1">
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Description & Responsibilities */}
              <div className="pt-6 space-y-4">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  {exp.responsibilities.map((item, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                    >
                      <FaCheckCircle className="text-cyan-400 text-sm shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.06]">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mr-2">
                    Key Tech & Tools:
                  </span>
                  {exp.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-card border border-white/10 text-xs font-medium text-slate-200 hover:border-cyan-500/30 transition-colors"
                      >
                        <SkillIcon style={{ color: skill.color }} className="text-sm" />
                        <span>{skill.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
