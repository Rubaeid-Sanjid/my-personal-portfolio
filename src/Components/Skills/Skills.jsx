import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaShopify,
  FaComments,
  FaUsers,
  FaBrain,
  FaShieldAlt,
  FaSyncAlt,
  FaLanguage,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVite,
  SiVercel,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiJsonwebtokens,
  SiNextdotjs,
  SiReactrouter,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import { HiSparkles } from "react-icons/hi";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories = [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend & CMS" },
    { id: "backend", name: "Backend & APIs" },
    { id: "tools", name: "Database & Tools" },
  ];

  const allSkills = [
    // Frontend & CMS
    {
      name: "React.js",
      category: "frontend",
      icon: FaReact,
      color: "#61DAFB",
      level: "Advanced",
      desc: "Hooks, Context, State & Component Architecture",
    },
    {
      name: "Shopify (CMS)",
      category: "frontend",
      icon: FaShopify,
      color: "#96BF48",
      level: "Proficient",
      desc: "E-Commerce, Storefront Customization & CMS",
    },
    {
      name: "Next.js",
      category: "frontend",
      icon: SiNextdotjs,
      color: "#FFFFFF",
      level: "Proficient",
      desc: "SSR, Modern Full-Stack & App Router",
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      icon: SiJavascript,
      color: "#F7DF1E",
      level: "Advanced",
      desc: "Async/Await, DOM Manipulation, Modern JS",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: SiTailwindcss,
      color: "#38BDF8",
      level: "Advanced",
      desc: "Responsive Systems, Glassmorphism, Theme Design",
    },
    {
      name: "React Router",
      category: "frontend",
      icon: SiReactrouter,
      color: "#CA4245",
      level: "Advanced",
      desc: "Dynamic Routing, Loaders & Protected Routes",
    },
    {
      name: "HTML5",
      category: "frontend",
      icon: FaHtml5,
      color: "#E34F26",
      level: "Advanced",
      desc: "Semantic Layouts, SEO & Accessibility (a11y)",
    },
    {
      name: "CSS3",
      category: "frontend",
      icon: FaCss3Alt,
      color: "#1572B6",
      level: "Advanced",
      desc: "Flexbox, CSS Grid, Transitions & Animations",
    },
    {
      name: "Framer Motion",
      category: "frontend",
      icon: TbBrandFramerMotion,
      color: "#EA4C89",
      level: "Proficient",
      desc: "Fluid Micro-interactions & Scroll Animation",
    },

    // Backend
    {
      name: "Node.js",
      category: "backend",
      icon: FaNode,
      color: "#68A063",
      level: "Proficient",
      desc: "Server Runtime, Asynchronous Workflows, NPM",
    },
    {
      name: "Express.js",
      category: "backend",
      icon: SiExpress,
      color: "#FFFFFF",
      level: "Proficient",
      desc: "REST APIs, Custom Middleware, Controllers",
    },
    {
      name: "Firebase",
      category: "backend",
      icon: SiFirebase,
      color: "#FFCA28",
      level: "Proficient",
      desc: "Authentication, Firestore, Storage & Hosting",
    },
    {
      name: "JWT Authentication",
      category: "backend",
      icon: SiJsonwebtokens,
      color: "#D63AFF",
      level: "Proficient",
      desc: "Secure Token Generation & Route Protection",
    },

    // Database & Tools
    {
      name: "MongoDB",
      category: "tools",
      icon: SiMongodb,
      color: "#47A248",
      level: "Proficient",
      desc: "NoSQL Schemas, Aggregation, Mongoose ORM",
    },
    {
      name: "MySQL",
      category: "tools",
      icon: SiMysql,
      color: "#00758F",
      level: "Proficient",
      desc: "Relational Queries, Joins & Normalized Schemas",
    },
    {
      name: "Git & GitHub",
      category: "tools",
      icon: FaGitAlt,
      color: "#F05032",
      level: "Advanced",
      desc: "Version Control, Branching, PRs & Workflows",
    },
    {
      name: "Postman",
      category: "tools",
      icon: SiPostman,
      color: "#FF6C37",
      level: "Proficient",
      desc: "Endpoint Testing, Mocking & API Documentation",
    },
    {
      name: "Vite",
      category: "tools",
      icon: SiVite,
      color: "#646CFF",
      level: "Advanced",
      desc: "Blazing Fast Dev Servers & Production Builds",
    },
    {
      name: "Vercel",
      category: "tools",
      icon: SiVercel,
      color: "#FFFFFF",
      level: "Proficient",
      desc: "Automated CI/CD & Cloud Deployment",
    },
  ];

  const softSkills = [
    { name: "Client Communication", icon: FaComments, desc: "Requirement gathering & sprint demos" },
    { name: "Teamwork & Collaboration", icon: FaUsers, desc: "Cross-functional pair programming" },
    { name: "Problem Solving", icon: FaBrain, desc: "Algorithmic thinking & debugging" },
    { name: "Responsibility & Ownership", icon: FaShieldAlt, desc: "On-time delivery & quality assurance" },
    { name: "Adaptability & Learning", icon: FaSyncAlt, desc: "Quick adoption of emerging frameworks" },
  ];

  const languages = [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Bangla", level: "Native / Bilingual" },
    { name: "Hindi", level: "Conversational" },
  ];

  const filteredSkills =
    activeTab === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
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
            <span>Technical Arsenal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            A comprehensive toolset combining frontend excellence, Shopify CMS, backend APIs, and collaborative engineering skills.
          </motion.p>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-surface-card/70 border border-white/[0.08] rounded-2xl w-fit mx-auto backdrop-blur-md"
          >
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 mt-8"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  className="group relative glass-card glass-card-hover rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center justify-between overflow-hidden"
                >
                  {/* Subtle top brand color accent line */}
                  <div
                    className="absolute top-0 inset-x-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: skill.color }}
                  />

                  {/* Icon Container with Glow */}
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 bg-slate-900/80 border border-white/10"
                    style={{
                      boxShadow: `0 0 20px -5px ${skill.color}25`,
                    }}
                  >
                    <IconComponent
                      className="text-3xl sm:text-4xl transition-colors duration-300"
                      style={{ color: skill.color }}
                    />
                  </div>

                  {/* Skill Name & Level */}
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1 mb-3">
                    {skill.desc}
                  </p>

                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                    {skill.level}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Interpersonal & Languages Bento Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12">
          {/* Interpersonal Skills */}
          <div className="lg:col-span-8 glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
            <h3 className="font-heading font-bold text-xl text-white mb-2 flex items-center gap-2">
              <span>🌟 Interpersonal & Professional Strengths</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Core soft skills cultivated through agency teamwork and client coordination.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {softSkills.map((item, idx) => {
                const SoftIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-surface-card border border-white/10 hover:border-cyan-500/30 transition-all"
                  >
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                      <SoftIcon className="text-base" />
                      <span>{item.name}</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Spoken Languages */}
          <div className="lg:col-span-4 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-xl text-white mb-2 flex items-center gap-2">
                <FaLanguage className="text-cyan-400 text-2xl" />
                <span>Languages</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Multilingual communication for diverse teams.
              </p>
              <div className="space-y-3">
                {languages.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    className="flex items-center justify-between p-3 rounded-2xl bg-surface-card border border-white/10"
                  >
                    <span className="font-semibold text-white text-sm">
                      {lang.name}
                    </span>
                    <span className="text-xs text-cyan-400 font-mono">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Ticker of Tech Logos */}
        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <div className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
            Continuous Full-Stack & CMS Toolset
          </div>
          <Marquee speed={40} pauseOnHover gradient={false}>
            <div className="flex items-center gap-10 py-2 px-4">
              {allSkills.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-surface-card/40 border border-white/[0.05] text-slate-300 hover:text-white transition-colors"
                  >
                    <Icon style={{ color: s.color }} className="text-xl" />
                    <span className="text-sm font-medium">{s.name}</span>
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;


