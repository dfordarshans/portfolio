"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FolderKanban, Briefcase, Code2, Award, Brain, GraduationCap } from "lucide-react";
import { STATS } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

const iconMap: Record<string, React.ElementType> = {
  FolderKanban, Briefcase, Code2, Award, Brain, GraduationCap,
};

function AnimatedCount({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const inc = numericValue / steps;
    const timer = setInterval(() => {
      start += inc;
      if (start >= numericValue) { setCount(numericValue); clearInterval(timer); }
      else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, numericValue]);

  const display = Number.isInteger(numericValue)
    ? Math.round(count).toString()
    : count.toFixed(2);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Dashboard() {
  return (
    <SectionWrapper id="dashboard" title="Dashboard" subtitle="Quick Stats">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {STATS.map((stat, i) => {
          const Icon = iconMap[stat.icon] || Award;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center mx-auto mb-3">
                <Icon size={18} className="text-white" />
              </div>
              <p className="text-2xl font-black bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                <AnimatedCount value={stat.value} />
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium leading-tight">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
