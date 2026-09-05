import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/rubaeid-sanjid/",
      color: "hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/Rubaeid-Sanjid",
      color: "hover:text-white hover:border-white/40 hover:bg-white/10",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/+8801680757025",
      color: "hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:rubaeid.sanjid@gmail.com",
      color: "hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "https://www.facebook.com/Piyal.24/",
      color: "hover:text-blue-500 hover:border-blue-600/40 hover:bg-blue-600/10",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/p_for_piyal_/",
      color: "hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "https://www.x.com/SkPiyal",
      color: "hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10",
    },
  ];

  const quickNav = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/[0.06] bg-[#07080D]/90 backdrop-blur-2xl text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-8">
        {/* Brand & Subtitle */}
        <div className="text-center space-y-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 group font-heading font-extrabold text-2xl text-white hover:text-cyan-400 transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-glow">
              <span className="font-mono font-bold text-base">&lt;RS/&gt;</span>
            </div>
            <span>
              Rubaeid <span className="text-gradient">Sanjid</span>
            </span>
          </a>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Full-Stack Developer crafting clean, scalable, and delightful digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {quickNav.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Icons with Neon Glow Hover */}
        <div className="flex flex-wrap justify-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-2xl bg-surface-card border border-white/[0.06] text-slate-400 transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                aria-label={social.name}
              >
                <Icon className="text-lg" />
              </a>
            );
          })}
        </div>

        {/* Divider & Copyright */}
        <div className="w-full pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Rubaeid Sanjid. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with React & Tailwind CSS</span>
            <FaHeart className="text-rose-500 text-xs inline mx-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

