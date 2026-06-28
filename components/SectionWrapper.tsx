"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, title, subtitle, children, className }: Props) {
  return (
    <section id={id} className={cn("py-20 px-4 sm:px-6", className)}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-violet-600 dark:text-violet-400 tracking-widest uppercase">{subtitle || "Portfolio"}</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-1 text-slate-800 dark:text-white">{title}</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
