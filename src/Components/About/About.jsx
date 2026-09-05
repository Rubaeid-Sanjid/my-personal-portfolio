import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLightbulb,
  FaGamepad,
  FaPlane,
  FaExternalLinkAlt,
  FaArrowRight,
  FaAward,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <HiSparkles className="text-sm" />
            <span>Get to Know Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Engineering Rigor & <span className="text-gradient">Modern Web Craft</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            A look into my background, agency experience, academic foundation, and technical philosophy.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {/* Card 1: Main Story & Background (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <FaCode className="text-xl" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                Frontend Developer & Computer Science Graduate
              </h3>
              <p className="text-slate-300 leading-relaxed text-base mb-4">
                Hello! I'm <span className="text-white font-semibold">Sheikh Rubaeid Sanjid</span>, an energetic frontend engineer with practical agency experience developing production-grade web applications and Shopify digital storefronts at <span className="text-cyan-400 font-semibold">Softvence IT</span>.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Passionate about frontend architectures, clean UI/UX implementation, and continuous learning. I specialize in turning complex specifications into seamless, accessible, and high-performance digital products.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/[0.06]">
              {["Frontend Architecture", "Shopify CMS", "React.js & Next.js", "REST APIs", "Clean UI/UX"].map(
                (tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-lg bg-surface-card border border-white/10 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Card 2: Academic Background & University (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Background subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                <FaGraduationCap className="text-2xl" />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                  CGPA: 3.60 / 4.00
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold">
                  MSc Data Science (In Progress)
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mt-3 mb-2">
                BSc in Computer Science & Engineering
              </h3>
              <a
                href="https://www.aiub.edu/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
              >
                <span>American International University-Bangladesh (AIUB)</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                Graduated with distinction and Dean's Award honor. Strong foundation in Algorithms, Data Structures, Software Engineering, and Database Systems.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-amber-400 flex items-center gap-1 font-semibold">
                <FaAward /> Dean's Award Honor
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                Graduated Jan 2026
              </span>
            </div>
          </motion.div>

          {/* Card 3: Philosophy & Technical Focus (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 glass-card glass-card-hover rounded-3xl p-6 sm:p-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
              <FaLightbulb className="text-xl" />
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-3">
              Engineering Mindset & Standards
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              I emphasize writing modular, clean, and maintainable code with strict attention to performance, client satisfaction, and responsive UX design.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-surface-card/60 border border-white/[0.06]">
                <div className="font-semibold text-white text-sm">Frontend & CMS</div>
                <div className="text-xs text-slate-400 mt-0.5">React, Next.js & Shopify</div>
              </div>
              <div className="p-3 rounded-xl bg-surface-card/60 border border-white/[0.06]">
                <div className="font-semibold text-white text-sm">Full-Stack MERN</div>
                <div className="text-xs text-slate-400 mt-0.5">Express, Node & MongoDB</div>
              </div>
              <div className="p-3 rounded-xl bg-surface-card/60 border border-white/[0.06]">
                <div className="font-semibold text-white text-sm">Client Coordination</div>
                <div className="text-xs text-slate-400 mt-0.5">Requirement sprint delivery</div>
              </div>
              <div className="p-3 rounded-xl bg-surface-card/60 border border-white/[0.06]">
                <div className="font-semibold text-white text-sm">Data Science</div>
                <div className="text-xs text-slate-400 mt-0.5">Analytics & ML Foundations</div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Beyond Code & Hobbies (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-6 glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <FaPlane className="text-xl" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <FaGamepad className="text-xl" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-3">
                Beyond the Terminal
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                When I'm not developing apps or experimenting with new libraries, I love exploring travel destinations, spending quality time with friends & family, and playing tactical games. These keep my mind creative and energized.
              </p>
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.06]">
              <span className="text-xs text-slate-400">Interested in working together?</span>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>View Career Experience</span>
                <FaArrowRight />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

