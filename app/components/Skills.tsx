// app/skills/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import {
  Code2,
  Database,
  Layers,
  Globe,
  Palette,
  Shield,
  Wrench,
  Lightbulb,
  Server,
  Briefcase,
  Building2,
  Award,
  Filter,
} from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

type Category = {
  id: string;
  title: string;
  icon: React.ReactNode;
  accent: string; // gradient used for title text and dot
  iconBg: string; // gradient used for the icon tile
  items: string[];
};

// All data below comes directly from the Skills Summary in the CV
const categories: Category[] = [
  {
    id: "languages",
    title: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    accent: "from-cyan-400 to-emerald-400",
    iconBg: "from-cyan-500 to-emerald-500",
    items: ["C#", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    accent: "from-emerald-400 to-teal-400",
    iconBg: "from-emerald-500 to-teal-500",
    items: [
      "ASP.NET Core",
      "Web API",
      "Entity Framework Core",
      "RESTful API Design",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    accent: "from-sky-400 to-cyan-400",
    iconBg: "from-sky-500 to-cyan-500",
    items: ["React.js", "Next.js", "AngularJS", "Redux"],
  },
  {
    id: "styling",
    title: "Styling",
    icon: <Palette className="w-6 h-6" />,
    accent: "from-teal-400 to-cyan-400",
    iconBg: "from-teal-500 to-cyan-500",
    items: ["Tailwind CSS", "Responsive Design", "Cross-Browser Compatibility"],
  },
  {
    id: "auth",
    title: "Auth & Security",
    icon: <Shield className="w-6 h-6" />,
    accent: "from-cyan-400 to-sky-400",
    iconBg: "from-cyan-500 to-sky-500",
    items: ["JWT", "OAuth 2.0", "Role-Based Access Control (RBAC)"],
  },
  {
    id: "database",
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    accent: "from-emerald-400 to-cyan-400",
    iconBg: "from-emerald-500 to-cyan-500",
    items: ["SQL Server", "PostgreSQL", "Query Optimization", "Data Modeling"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6" />,
    accent: "from-teal-400 to-emerald-400",
    iconBg: "from-teal-500 to-emerald-500",
    items: ["Git", "GitHub", "Postman", "Firebase", "npm / yarn"],
  },
  {
    id: "concepts",
    title: "Core Concepts",
    icon: <Lightbulb className="w-6 h-6" />,
    accent: "from-cyan-400 to-teal-400",
    iconBg: "from-cyan-500 to-teal-500",
    items: [
      "Full Stack Architecture",
      "State Management",
      "Performance Optimization",
      "SEO-Friendly Rendering (SSR/SSG)",
      "Accessibility",
    ],
  },
];

const totalSkills = categories.reduce((sum, c) => sum + c.items.length, 0);

const stats = [
  { value: "3+", label: "Years Experience", icon: <Briefcase className="w-10 h-10" /> },
  { value: "3", label: "Companies", icon: <Building2 className="w-10 h-10" /> },
  { value: String(categories.length), label: "Skill Areas", icon: <Layers className="w-10 h-10" /> },
  { value: `${totalSkills}`, label: "Skills & Tools", icon: <Award className="w-10 h-10" /> },
];

export default function Skills() {
  const [filter, setFilter] = useState<string>("all");

  const visible =
    filter === "all" ? categories : categories.filter((c) => c.id === filter);

  return (
    <>
      {/* Hero */}
      <section
        id="skills"
        className="relative py-16 md:py-24 bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-16 left-4 sm:top-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-16 right-4 sm:bottom-20 sm:right-20 w-56 h-56 sm:w-80 sm:h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span
              className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}
            >
              Skills &
            </span>{" "}
            <span
              className={`${dancingScript.className} bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent`}
            >
              Technologies
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            React.js | Next.js | ASP.NET Core | TypeScript | SQL
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 text-center border border-cyan-500/20 hover:border-emerald-500/40 shadow-2xl transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="text-emerald-400 mb-3">{stat.icon}</div>
                  <div className="text-4xl sm:text-5xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm sm:text-lg text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-5 sm:py-6 bg-black/90 sticky top-0 z-40 backdrop-blur-xl border-y border-cyan-500/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[{ id: "all", title: "All", count: totalSkills }].concat(
              categories.map((c) => ({
                id: c.id,
                title: c.title,
                count: c.items.length,
              }))
            ).map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                  filter === cat.id
                    ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black shadow-lg"
                    : "bg-gray-900 text-gray-300 border border-gray-700 hover:border-cyan-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.id === "all" && <Filter className="w-4 h-4" />}
                {cat.title}
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    filter === cat.id
                      ? "bg-black/20 text-black"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {cat.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Skill categories */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div key={filter} className="space-y-14 sm:space-y-16">
            {visible.map((section, i) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
                  <span
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${section.accent} animate-pulse`}
                  />
                  <span
                    className={`bg-gradient-to-r ${section.accent} bg-clip-text text-transparent`}
                  >
                    {section.title}
                  </span>
                  <span className="text-sm font-normal text-gray-500">
                    {section.items.length}
                  </span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                  {section.items.map((item, idx) => (
                    <motion.div
                      key={item}
                      className="group flex flex-col items-center text-center p-5 rounded-2xl bg-gray-900/70 backdrop-blur-md border border-gray-800 hover:border-cyan-500/50 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, ease: "easeOut" }}
                      whileHover={{ y: -8, scale: 1.05 }}
                    >
                      <div
                        className={`p-3 mb-3 rounded-xl bg-gradient-to-br ${section.iconBg} text-white group-hover:scale-110 transition-transform`}
                      >
                        {section.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white leading-snug">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}