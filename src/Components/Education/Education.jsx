import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaUniversity, FaSchool } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Education = () => {
  const educationData = [
    {
      degree: "Masters in Data Science",
      institution: "Graduate Studies",
      period: "In Progress",
      status: "In Progress",
      grade: "Active Student",
      icon: FaUniversity,
      color: "#8B5CF6",
      description:
        "Pursuing advanced specialization in data science, predictive modeling, big data frameworks, and modern analytical algorithms.",
    },
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "American International University-Bangladesh (AIUB), Dhaka",
      period: "Graduation: January 2026",
      status: "Graduated",
      grade: "CGPA: 3.60 / 4.00",
      award: "Dean’s Award for Academic Distinction",
      icon: FaGraduationCap,
      color: "#00D2FF",
      description:
        "Comprehensive coursework in Algorithms, Data Structures, Database Management Systems, Software Engineering, Object-Oriented Programming, and Web Engineering.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Uttara High School and College, Dhaka",
      period: "Passing Year: 2020",
      status: "Completed",
      grade: "GPA: 5.00 / 5.00",
      group: "Science",
      icon: FaSchool,
      color: "#3B82F6",
      description:
        "Achieved a perfect 5.00 GPA with a concentration in Science disciplines (Physics, Chemistry, Higher Mathematics, and ICT).",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Milestone School and College, Dhaka",
      period: "Passing Year: 2018",
      status: "Completed",
      grade: "GPA: 4.89 / 5.00",
      group: "Science",
      icon: FaSchool,
      color: "#10B981",
      description:
        "Completed secondary education in Science with academic distinction in Mathematics, Physics, and Computer Studies.",
    },
  ];

  return (
    <section id="education" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
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
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Education & <span className="text-gradient">Qualifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            My formal engineering training, computer science foundation, and academic milestones.
          </motion.p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group"
              >
                {/* Subtle Left Accent Line */}
                <div
                  className="absolute left-0 inset-y-0 w-1.5 transition-all duration-300 group-hover:w-2"
                  style={{ backgroundColor: item.color }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 bg-slate-900/80"
                      style={{
                        boxShadow: `0 0 20px -5px ${item.color}30`,
                      }}
                    >
                      <IconComponent
                        className="text-2xl sm:text-3xl"
                        style={{ color: item.color }}
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                          {item.degree}
                        </h3>
                      </div>

                      <div className="text-slate-300 font-medium text-sm sm:text-base mt-1">
                        {item.institution}
                      </div>

                      {item.award && (
                        <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                          <FaAward className="text-sm" />
                          <span>{item.award}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                    <span className="px-3.5 py-1 rounded-xl bg-surface-card border border-white/10 text-xs font-mono font-medium text-slate-300">
                      {item.period}
                    </span>

                    <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                      {item.grade}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mt-4 leading-relaxed pl-0 sm:pl-[72px]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
