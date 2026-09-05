import { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaAward, FaTimes } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const achievements = [
    {
      title: "Complete Web Development Course",
      issuer: "Programming Hero",
      category: "Full-Stack Development",
      image:
        "https://i.postimg.cc/D0JJrhKb/Certificate-of-Complete-Web-Development-Course-With-Jhankar-Mahbub.jpg",
      link: "#",
    },
    {
      title: "MySQL Database Tutorial",
      issuer: "Great Learning",
      category: "Database & SQL",
      image: "https://i.postimg.cc/dVLS6XXD/My-SQL-Tutorial.jpg",
      link: "https://www.mygreatlearning.com/certificate/YOSSLYNA",
    },
    {
      title: "Presentation & Public Speaking",
      issuer: "10 Minute School",
      category: "Communication Skills",
      image:
        "https://i.postimg.cc/R0Dy9GzN/Certificate-of-Presentation-Public-Speaking.jpg",
      link: "https://10minuteschool.com/certificate/671e4995149b7/",
    },
    {
      title: "Dean’s Award for Academic Excellence",
      issuer: "AIUB",
      category: "Academic Distinction",
      image: "https://i.postimg.cc/4yjbzmCt/Deans-Award.jpg",
      link: "#",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      issuer: "Education Board",
      category: "Science",
      image: "https://i.postimg.cc/mDgNrGBw/HSC-Certificate.jpg",
      link: "#",
    },
    {
      title: "Secondary School Certificate (SSC)",
      issuer: "Education Board",
      category: "Science",
      image: "https://i.postimg.cc/WpynRfD3/SSC-Certification.jpg",
      link: "#",
    },
  ];

  return (
    <section id="certifications" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
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
            <span>Verified Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Certifications & <span className="text-gradient">Honors</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            Milestones and verified achievements highlighting continuous learning and academic excellence.
          </motion.p>
        </div>

        {/* Marquee Carousel */}
        <div className="py-4">
          <Marquee pauseOnHover speed={35} gradient={false}>
            <div className="flex gap-6 py-4 px-3">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCert(item)}
                  className="cursor-pointer group w-72 sm:w-80 glass-card glass-card-hover rounded-3xl overflow-hidden p-4 flex flex-col justify-between flex-shrink-0"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950/80 mb-4 border border-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-xs font-medium text-cyan-300 flex items-center gap-1.5">
                        <FaAward /> Click to inspect certificate
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                        {item.issuer}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>

                  {item.link && item.link !== "#" && (
                    <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                      <span>Online Verification</span>
                      <FaExternalLinkAlt className="text-cyan-400 text-xs" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      {/* Modal Dialog for Certificate Preview */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full glass-panel rounded-3xl p-6 overflow-hidden border border-white/20 shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-surface-card text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10"
              >
                <FaTimes className="text-lg" />
              </button>

              <div className="mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  {selectedCert.issuer}
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mt-2">
                  {selectedCert.title}
                </h3>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/50 mb-6">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                />
              </div>

              <div className="flex items-center justify-between">
                {selectedCert.link && selectedCert.link !== "#" ? (
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-glow"
                  >
                    <span>Verify Credential Online</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400">
                    Official Award / Academic Certificate
                  </span>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-surface-card hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;

