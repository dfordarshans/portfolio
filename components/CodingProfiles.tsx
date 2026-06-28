"use client";
import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";
import { CODING_PROFILES } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function CodingProfiles() {
  return (
    <SectionWrapper id="coding-profiles" title="Coding Profiles" subtitle="Competitive Programming" className="bg-slate-50/50 dark:bg-slate-900/50">
      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {CODING_PROFILES.map((profile, i) => (
          <motion.a
            key={profile.platform}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 hover:shadow-2xl transition-all duration-300 text-center group overflow-hidden cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
              <Trophy size={24} className="text-white" />
            </div>
            <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-1">{profile.platform}</h3>
            <p className="text-3xl font-black bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {profile.solved}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3">Problems Solved</p>
            <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-violet-600 dark:text-violet-400 group-hover:gap-2.5 transition-all">
              View Profile <ExternalLink size={12} />
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
