import { Typewriter } from "react-simple-typewriter";
import profileImg from "../../assets/images/Portfolio_Profile.jpg";
import resume from "../../assets/resume/Rubaeid_Sanjid_Resume.pdf";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { HiDownload, HiSparkles } from "react-icons/hi";

const Banner = () => {
  const stats = [
    { label: "Active Role", value: "Frontend Dev" },
    { label: "Agency", value: "Softvence" },
    { label: "CGPA (AIUB)", value: "3.60 / 4.0" },
    { label: "Post-Grad", value: "MSc Data Science" },
  ];

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
            {/* Top Status Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card/80 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium w-fit mx-auto lg:mx-0 backdrop-blur-md shadow-glow"
            >
              <HiSparkles className="text-cyan-400 text-base" />
              <span>Frontend Developer @ Softvence Agency</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm{" "}
                <span className="text-gradient inline-block">
                  Sheikh Rubaeid Sanjid
                </span>
              </h1>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-slate-300 flex items-center justify-center lg:justify-start gap-2 h-12">
                <span className="text-slate-400">A Passionate</span>
                <span className="text-cyan-400 font-mono underline decoration-cyan-500/40 decoration-wavy">
                  <Typewriter
                    words={[
                      "Frontend Developer",
                      "React.js & Next.js Specialist",
                      "Shopify CMS Developer",
                      "Full-Stack MERN Engineer",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    cursorColor="#00D2FF"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </div>
            </motion.div>

            {/* Short Bio / Value Prop */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Computer Science graduate & Frontend Developer experienced in building responsive, production-grade web applications using{" "}
              <span className="text-white font-medium border-b border-cyan-400/40">
                React.js, Next.js, Shopify (CMS), Tailwind CSS, Node.js, and MongoDB
              </span>
              . Dedicated to clean UI/UX implementation, seamless client collaboration, and scalable code.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-cyan-400/30"
              >
                <span>Explore Projects</span>
                <FaArrowRight className="text-sm" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-surface-card/80 hover:bg-white/10 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md"
              >
                <span>View Experience</span>
              </a>

              <a
                href={resume}
                download="Rubaeid_Sanjid_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-cyan-400 hover:text-white bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all duration-300"
              >
                <HiDownload className="text-lg" />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Social Connectivity Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-400"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Connect With Me:
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Rubaeid-Sanjid"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-surface-card/60 hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/[0.06] hover:border-cyan-500/30 transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rubaeid-sanjid/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-surface-card/60 hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/[0.06] hover:border-cyan-500/30 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="mailto:rubaeid.sanjid@gmail.com"
                  className="p-2.5 rounded-lg bg-surface-card/60 hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/[0.06] hover:border-cyan-500/30 transition-all"
                  aria-label="Email Me"
                >
                  <FaEnvelope className="text-lg" />
                </a>
                <a
                  href="https://wa.me/+8801680757025"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-surface-card/60 hover:bg-emerald-500/20 hover:text-emerald-400 border border-white/[0.06] hover:border-emerald-500/30 transition-all"
                  aria-label="WhatsApp Contact"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Profile Visual Card */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Ambient Background Glow for Image */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-purple-600/30 rounded-full blur-[70px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Outer Decorative Gradient Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />

              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden bg-surface-card border border-white/10 p-2 shadow-2xl max-w-xs sm:max-w-sm">
                <img
                  src={profileImg}
                  alt="Sheikh Rubaeid Sanjid - Frontend & Full-Stack Developer"
                  className="w-full h-auto object-cover rounded-xl grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Sheikh Rubaeid Sanjid
                    </h4>
                    <p className="text-xs text-cyan-400 font-mono">
                      Frontend Dev @ Softvence
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Open to Work</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badge 1 */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/30 shadow-glow backdrop-blur-md"
              >
                <span className="text-xl">🛍️</span>
                <span className="text-xs font-semibold text-white">Shopify & CMS</span>
              </motion.div>

              {/* Floating Tech Badge 2 */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-indigo-500/30 shadow-glow backdrop-blur-md"
              >
                <span className="text-xl">⚛️</span>
                <span className="text-xs font-semibold text-white">React & Next.js</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Quick Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/[0.06]"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-surface-card/40 border border-white/[0.05] backdrop-blur-md text-center hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="font-heading font-extrabold text-xl sm:text-2xl text-gradient">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;


