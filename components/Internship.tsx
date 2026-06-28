"use client";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const stack = ["MongoDB", "Express.js", "React.js", "Node.js"];

export default function Internship() {
  return (
    <SectionWrapper id="internship" title="Internship" subtitle="Work Experience" className="bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-violet-200 dark:border-violet-700 shadow-xl shadow-violet-500/10 overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-400/10 rounded-full blur-3xl -z-10" />

          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-lg shadow-violet-500/30">
              <Briefcase size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">MERN Stack Internship</h3>
              <p className="text-violet-600 dark:text-violet-400 font-medium mt-1">
                Mentored by Siddharth Sharma
              </p>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Completed a MERN Stack internship where I gained hands-on experience in full-stack web development. Worked with MongoDB, Express.js, React.js, and Node.js while developing production-level features and understanding real-world software development workflows.
          </p>

          <div>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">Technologies Used</p>
            <div className="flex flex-wrap gap-3">
              {stack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border border-violet-200 dark:border-violet-700"
                >
                  <CheckCircle2 size={14} className="text-violet-600 dark:text-violet-400" />
                  <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
