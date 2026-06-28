"use client";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              DARSHAN S
            </p>
            <p className="text-xs mt-1">Computer Science Engineering Student</p>
          </div>

          <div className="flex items-center gap-2">
            {[
              { icon: GithubIcon, href: "#", label: "GitHub" },
              { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:darshan.s2024cse@sece.ac.in", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-violet-600 border border-slate-700 hover:border-violet-500 transition-all duration-300">
                <Icon size={16} className="text-slate-400 hover:text-white" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <button key={link} onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-violet-400 transition-colors">
                {link}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex items-center justify-between">
          <p className="text-xs">© {new Date().getFullYear()} Darshan S. All rights reserved.</p>
          <button onClick={scrollTop} aria-label="Back to top"
            className="p-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 transition-opacity shadow-lg">
            <ArrowUp size={16} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
