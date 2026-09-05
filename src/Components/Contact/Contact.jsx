import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCheck, FaCopy, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "rubaeid.sanjid@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pre-fill mailto link
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Rubaeid,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
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
            <span>Initiate Collaboration</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Let's Build Something <span className="text-gradient">Exceptional</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            Have a project in mind, looking for a full-stack engineer, or just want to say hi? I'd love to hear from you.
          </motion.p>
        </div>

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Status Card */}
            <div className="glass-card rounded-3xl p-6 border border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 status-pulse" />
                <span className="font-heading font-bold text-white text-base">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Currently open for full-time engineering roles, freelance contracts, and impactful MERN stack web applications.
              </p>
            </div>

            {/* Email Contact Card with 1-Click Copy */}
            <div className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm sm:text-base font-medium text-white hover:text-cyan-300 transition-colors truncate block"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className={`p-3 rounded-xl transition-all duration-300 shrink-0 ${
                  copied
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    : "bg-surface-card hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 border border-white/10"
                }`}
                title={copied ? "Copied!" : "Copy Email"}
                aria-label="Copy Email Address"
              >
                {copied ? <FaCheck className="text-base" /> : <FaCopy className="text-base" />}
              </button>
            </div>

            {/* WhatsApp Contact Card */}
            <a
              href="https://wa.me/+8801680757025"
              target="_blank"
              rel="noreferrer"
              className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex items-center justify-between gap-4 group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <FaWhatsapp className="text-2xl" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Direct WhatsApp
                  </div>
                  <div className="text-sm sm:text-base font-medium text-white group-hover:text-emerald-300 transition-colors">
                    +880 1680 757025
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                Chat
              </span>
            </a>

            {/* Location Card */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Location & Timezone
                </div>
                <div className="text-sm sm:text-base font-medium text-white">
                  Uttara, Dhaka-1230, Bangladesh (GMT+6)
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative"
          >
            <h3 className="font-heading font-bold text-2xl text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Fill in your details below and I'll get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Full-Stack Project Inquiry / Job Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                  Your Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, timeline, or whatever you'd like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 border border-cyan-400/30 text-sm sm:text-base mt-2"
              >
                <FaPaperPlane className="text-sm" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs text-center animate-fadeIn">
                  ✓ Message drafted! Opening your email client to dispatch.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
