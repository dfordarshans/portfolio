"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

const categoryColors: Record<string, string> = {
  "Programming Languages": "from-violet-500 to-purple-500",
  "Web Technologies": "from-orange-500 to-pink-500",
  "Database": "from-emerald-500 to-teal-500",
  "Tools": "from-cyan-500 to-blue-500",
};

const skillColors: Record<string, string> = {
  C: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700",
  "C++": "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700",
  Python: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700",
  Java: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700",
  HTML: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700",
  CSS: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700",
  JavaScript: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700",
  MySQL: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700",
  MongoDB: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700",
};

const defaultSkillColor = "bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600";

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills" subtitle="Technical Expertise" className="bg-slate-50/50 dark:bg-slate-900/50">
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {SKILLS.map((category, i) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${categoryColors[category.category] || "from-violet-500 to-cyan-500"}`} />
              <h3 className="font-bold text-slate-800 dark:text-white text-lg">{category.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-xl border cursor-default transition-all duration-200 ${skillColors[skill] || defaultSkillColor}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
