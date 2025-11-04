// app/skills/page.tsx
"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  Layers,
  Zap,
  Globe,
  Briefcase,
  Award,
  GraduationCap,
} from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Properly typed animation variant
const fadeInUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" } as const,
};

const stagger = {
  whileInView: { transition: { staggerChildren: 0.1 } },
};

// Tech Data
const languages = [
  { name: "C#", years: "2+ Years", projects: "8+ Projects", proficiency: 95, icon: <Code2 className="w-6 h-6" /> },
  { name: "JavaScript", years: "2+ Years", projects: "12+ Projects", proficiency: 92, icon: <Code2 className="w-6 h-6" /> },
  { name: "TypeScript", years: "2+ Years", projects: "10+ Projects", proficiency: 90, icon: <Code2 className="w-6 h-6" /> },
  { name: "Python", years: "2+ Years", projects: "6+ Projects", proficiency: 85, icon: <Code2 className="w-6 h-6" /> },
];

const frameworks = [
  { name: ".NET 8", icon: <Layers className="w-6 h-6" /> },
  { name: "React.js", icon: <Globe className="w-6 h-6" /> },
  { name: "Next.js 15", icon: <Zap className="w-6 h-6" /> },
  { name: "Node.js", icon: <Cpu className="w-6 h-6" /> },
];

const databases = [
  { name: "SQL Server", icon: <Database className="w-6 h-6" /> },
  { name: "PostgreSQL", icon: <Database className="w-6 h-6" /> },
  { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
];

const cloudDevOps = [
  { name: "Docker", icon: <Layers className="w-6 h-6" /> },
  { name: "AWS", icon: <Cloud className="w-6 h-6" /> },
  { name: "Git", icon: <Code2 className="w-6 h-6" /> },
  { name: "CI/CD", icon: <Zap className="w-6 h-6" /> },
];

const methodologies = [
  "Agile/Scrum",
  "Microservices",
  "Clean Architecture",
  "TDD",
  "RESTful APIs",
  "Design Patterns",
];

const stats = [
  { value: "25+", label: "Tech Mastered", icon: <Award className="w-10 h-10" /> },
  { value: "2+ Yrs", label: "Experience", icon: <Briefcase className="w-10 h-10" /> },
  { value: "15+", label: "Projects", icon: <GraduationCap className="w-10 h-10" /> },
];

export default function Skills() {
  return (
    <>
      {/* Hero */}
      <section id="skills" className="relative py-24 bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f] overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}>
              Skills &
            </span>{" "}
            <span className={`${dancingScript.className} bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent`}>
              Technologies
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full-Stack Engineer | .NET to React to Cloud | Building Scalable Systems
          </motion.p>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Languages", value: "4", gradient: "from-purple-500 to-purple-400" },
              { label: "Frameworks", value: "4", gradient: "from-blue-500 to-cyan-400" },
              { label: "Databases", value: "3", gradient: "from-emerald-500 to-teal-400" },
              { label: "DevOps", value: "4", gradient: "from-orange-500 to-amber-400" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-md border border-gray-800 p-8 text-center shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`} />
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-white">{item.value}</div>
                  <div className="mt-2 text-gray-400 font-medium">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages with Progress */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <motion.h3
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Programming Languages
            </span>
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {languages.map((lang, i) => (
              <motion.div
                key={i}
            
                className="group relative bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 shadow-xl overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl text-white">
                      {lang.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">{lang.name}</h4>
                      <p className="text-sm text-gray-400">{lang.years} • {lang.projects}</p>
                    </div>
                  </div>
                  <span className="text-3xl font-bold text-emerald-400">{lang.proficiency}%</span>
                </div>

                <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Frameworks, DBs, DevOps */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          {[
            { title: "Frameworks", items: frameworks, color: "from-blue-500 to-cyan-400" },
            { title: "Databases", items: databases, color: "from-emerald-500 to-teal-400" },
            { title: "Cloud & DevOps", items: cloudDevOps, color: "from-orange-500 to-amber-400" },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
            >
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${section.color} animate-pulse`} />
                <span className={`bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                  {section.title}
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {section.items.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    className="group flex flex-col items-center p-5 rounded-2xl bg-gray-900/70 backdrop-blur-md border border-gray-800 hover:border-current transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    <div className={`text-3xl mb-3 bg-gradient-to-r ${section.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <motion.h3
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Engineering Practices
            </span>
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {methodologies.map((item, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md border border-purple-500/30 rounded-xl px-6 py-4 text-center font-semibold text-white shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ scale: 1.08, rotate: 2 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Stats */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black p-10 text-center border border-cyan-500/20 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10" />
                <div className="relative z-10">
                  <div className="text-emerald-400 mb-4">{stat.icon}</div>
                  <div className="text-6xl font-bold text-white">{stat.value}</div>
                  <div className="mt-3 text-xl text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}