"use client";
import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/data";

const titles = [
  "Computer Science Engineering Student",
  "Full Stack Developer",
  "AI & ML Enthusiast",
];

export default function Hero() {
  const typed = useTypingEffect(titles);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent leading-tight"
        >
          DARSHAN S
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 mb-6"
        >
          <p className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-300">
            {typed}
            <span className="animate-pulse text-violet-600">|</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate Computer Science Engineering student with experience in full-stack web development and AI-based applications. Interested in building scalable applications, solving real-world problems, and continuously improving programming skills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 transition-all duration-300">
            View Projects
          </a>
          <a href="/DARSHAN_RESUME.pdf" download="DARSHAN_RESUME.pdf"
            className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 hover:border-violet-400 hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
            Download Resume
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 transition-all duration-300">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            { icon: GithubIcon, href: GITHUB_URL, label: "GitHub" },
            { icon: LinkedinIcon, href: LINKEDIN_URL, label: "LinkedIn" },
            { icon: Mail, href: "mailto:darshan.s2024cse@sece.ac.in", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur border border-white/40 dark:border-slate-700 hover:border-violet-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <Icon size={20} className="text-slate-600 dark:text-slate-300" />
            </a>
          ))}
        </motion.div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={24} className="mx-auto text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
}
