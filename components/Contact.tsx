"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contacts = [
    { icon: Phone, label: "Phone", value: "+91 9342850382", href: "tel:+919342850382" },
    { icon: Mail, label: "Email", value: "darshan.s2024cse@sece.ac.in", href: "mailto:darshan.s2024cse@sece.ac.in" },
    { icon: GithubIcon, label: "GitHub", value: "github.com/darshan", href: "#" },
    { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/darshan", href: "#" },
  ];

  return (
    <SectionWrapper id="contact" title="Contact" subtitle="Get In Touch" className="bg-slate-50/50 dark:bg-slate-900/50">
      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Let&apos;s work together!</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
            Feel free to reach out for internship opportunities, collaborations, or just a friendly chat about technology.
          </p>
          <div className="space-y-4">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 hover:shadow-lg transition-all duration-300 group">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-md group-hover:shadow-violet-500/30 transition-shadow">
                  <Icon size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">{label}</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Name</label>
              <input
                type="text" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Email</label>
              <input
                type="email" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Subject</label>
            <input
              type="text" required value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="What's this about?"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Message</label>
            <textarea
              rows={4} required value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your message..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            {sent ? "Message Sent! ✓" : (<><Send size={16} /> Send Message</>)}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
