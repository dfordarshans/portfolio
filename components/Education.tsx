"use client";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const education = [
  {
    degree: "Bachelor of Engineering (Computer Science Engineering)",
    institution: "Sri Eshwar College of Engineering",
    period: "2024 – 2028",
    score: "CGPA: 7.48",
    type: "BE",
    current: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "S.B.O.A Matric Hr. Sec. School",
    period: "Completed",
    score: "Percentage: 70.4%",
    type: "HSC",
    current: false,
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "S.B.O.A Matric Hr. Sec. School",
    period: "Completed",
    score: "Percentage: 90.8%",
    type: "SSLC",
    current: false,
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education" subtitle="Academic Journey">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600 via-purple-500 to-cyan-500 hidden sm:block" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative sm:pl-20"
            >
              <div className="hidden sm:flex absolute left-4 top-6 w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 items-center justify-center shadow-lg shadow-violet-500/30 z-10">
                <GraduationCap size={16} className="text-white" />
              </div>

              <div className={`p-6 rounded-2xl bg-white dark:bg-slate-800/50 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${edu.current ? "border-violet-300 dark:border-violet-600 shadow-lg shadow-violet-500/10" : "border-slate-200 dark:border-slate-700"}`}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded-full mb-2 ${edu.current ? "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}`}>
                      {edu.type} {edu.current && "• Current"}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">{edu.degree}</h3>
                    <p className="text-violet-600 dark:text-violet-400 font-medium mt-1">{edu.institution}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 justify-end">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1 justify-end">
                      <Award size={14} />
                      {edu.score}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
