"use client";
import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

const issuerColors: Record<string, string> = {
  SoloLearn: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  NPTEL: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
  Udemy: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  HackerRank: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
};

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" title="Certifications" subtitle="Achievements">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 hover:shadow-xl transition-all duration-300 flex items-start gap-4"
          >
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 shrink-0">
              <Award size={18} className="text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <BadgeCheck size={13} className="text-violet-600 dark:text-violet-400 shrink-0" />
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${issuerColors[cert.issuer] || "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}`}>
                  {cert.issuer}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-snug">{cert.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
