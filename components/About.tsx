"use client";
import { motion } from "framer-motion";
import { Code2, Globe, Lightbulb, Rocket } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const points = [
  { icon: Code2, text: "Computer Science Engineering student passionate about problem-solving and software engineering." },
  { icon: Globe, text: "Passionate about Full Stack Development and Artificial Intelligence, building impactful applications." },
  { icon: Lightbulb, text: "Enjoy building web applications and solving programming challenges on competitive platforms." },
  { icon: Rocket, text: "Interested in learning modern technologies and contributing to innovative software solutions." },
];

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="Who I Am" className="bg-slate-50/50 dark:bg-slate-900/50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative w-64 h-64 mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 blur-xl opacity-30" />
            <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-100 dark:from-violet-900/30 dark:to-cyan-900/30 border border-violet-200 dark:border-violet-700 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="text-6xl font-black bg-gradient-to-br from-violet-600 to-cyan-500 bg-clip-text text-transparent">DS</div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">Darshan S</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
            Building the Future with <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Code</span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            I&apos;m a dedicated Computer Science Engineering student at Sri Eshwar College of Engineering, driven by a passion for technology and innovation.
          </p>
          <div className="space-y-3 mt-4">
            {points.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-violet-100 dark:bg-violet-900/30 shrink-0">
                  <Icon size={16} className="text-violet-600 dark:text-violet-400" />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
