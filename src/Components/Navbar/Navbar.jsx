import { useState } from "react";
import resume from "../../assets/resume/Rubaeid_Sanjid_Resume.pdf";
import { HiDownload, HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#08090E]/80 backdrop-blur-xl border-b border-white/[0.06] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Availability Status */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2 group font-heading font-bold text-2xl tracking-tight text-white hover:text-cyan-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform duration-300">
                <span className="font-mono font-bold text-lg">&lt;RS/&gt;</span>
              </div>
              <span className="hidden sm:inline-block font-heading font-extrabold text-xl text-slate-100">
                Sheikh <span className="text-gradient">Rubaeid</span>
              </span>
            </a>

            {/* Available for Hire Pill */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse" />
              <span>Available for Hire</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface-card/60 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={resume}
              download="Sheikh_Rubaeid_Sanjid_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-cyan-400/30"
            >
              <HiDownload className="text-lg" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <HiX className="w-6 h-6 text-cyan-400" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.06] bg-[#0A0D14]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={resume}
              download="Sheikh_Rubaeid_Sanjid_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-glow"
            >
              <HiDownload className="text-lg" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


