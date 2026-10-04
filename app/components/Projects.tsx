// app/projects/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import {
  ExternalLink,
  Code2,
  Database,
  Globe,
  Zap,
  Layers,
  Filter,
  ShoppingCart,
  Bot,
  Newspaper,
  Search,
  Building2,
  Palette,
  Shield,
  Flame,
  Server,
} from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const categories = ["All", "Full-Stack", "Frontend", "E-Commerce"] as const;
type Category = (typeof categories)[number];

type Project = {
  id: number;
  title: string;
  desc: string;
  categories: Exclude<Category, "All">[];
  company: string;
  period: string;
  tech: string[];
  live: string;
  domain: string;
  highlights: string;
  icon: React.ReactNode;
  gradient: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Mahaagromart E-Commerce Platform",
    desc: "Large-scale e-commerce platform for MAIDC with server-rendered Next.js storefront and ASP.NET Core APIs for product, order, and inventory management.",
    categories: ["Full-Stack", "E-Commerce"],
    company: "MAIDC",
    period: "Dec 2024 – Present",
    tech: [
      "Next.js",
      "React.js",
      "ASP.NET Core",
      "TypeScript",
      "SQL",
      "Tailwind CSS",
      "REST APIs",
    ],
    live: "https://www.mahaagromart.com",
    domain: "www.mahaagromart.com",
    highlights: "SSR • RBAC • JWT / OAuth 2.0 • Core Web Vitals",
    icon: <ShoppingCart className="w-20 h-20" />,
    gradient: "from-emerald-600/40 via-cyan-700/30 to-gray-900",
  },
  {
    id: 2,
    title: "Autometa Bot",
    desc: "React frontend wired to Firebase for real-time data operations and live updates, with API contracts validated through Postman.",
    categories: ["Frontend", "Full-Stack"],
    company: "Penpay Technologies",
    period: "Apr 2024 – Sep 2024",
    tech: ["React.js", "JavaScript (ES6+)", "Firebase", "REST APIs"],
    live: "https://autometa-bot.web.app",
    domain: "autometa-bot.web.app",
    highlights: "Real-time updates • Fetch API • Firebase",
    icon: <Bot className="w-20 h-20" />,
    gradient: "from-cyan-600/40 via-emerald-700/30 to-gray-900",
  },
  {
    id: 3,
    title: "iEveEra",
    desc: "Responsive, high-performance corporate website built with React and a strong focus on cross-browser compatibility and accessibility.",
    categories: ["Frontend"],
    company: "iEveEra Int Ltd",
    period: "Aug 2022 – Aug 2023",
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "AJAX"],
    live: "https://ieveera.com",
    domain: "ieveera.com",
    highlights: "Responsive • Cross-browser • Accessible",
    icon: <Building2 className="w-20 h-20" />,
    gradient: "from-sky-600/40 via-cyan-700/30 to-gray-900",
  },
  {
    id: 4,
    title: "iEveEra Times",
    desc: "Live news property consuming RESTful APIs for dynamic content, built as a scalable, interactive production site.",
    categories: ["Frontend"],
    company: "iEveEra Int Ltd",
    period: "Aug 2022 – Aug 2023",
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "AJAX"],
    live: "https://ieveeratimes.com",
    domain: "ieveeratimes.com",
    highlights: "REST APIs • Dynamic content • Production site",
    icon: <Newspaper className="w-20 h-20" />,
    gradient: "from-teal-600/40 via-emerald-700/30 to-gray-900",
  },
  {
    id: 5,
    title: "iEveEra SEO",
    desc: "SEO-driven web property with fast, responsive UI and API-backed dynamic content, built in close collaboration with backend teams.",
    categories: ["Frontend"],
    company: "iEveEra Int Ltd",
    period: "Aug 2022 – Aug 2023",
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "AJAX"],
    live: "https://ieveeraseo.com",
    domain: "ieveeraseo.com",
    highlights: "SEO-driven • Responsive • REST APIs",
    icon: <Search className="w-20 h-20" />,
    gradient: "from-cyan-600/40 via-teal-700/30 to-gray-900",
  },
  {
    id: 6,
    title: "iEveEra News",
    desc: "Live news website with interactive UI and RESTful API integration, tuned for cross-browser compatibility and accessibility.",
    categories: ["Frontend"],
    company: "iEveEra Int Ltd",
    period: "Aug 2022 – Aug 2023",
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "AJAX"],
    live: "https://ieveeranews.com",
    domain: "ieveeranews.com",
    highlights: "News platform • AJAX • Accessible",
    icon: <Globe className="w-20 h-20" />,
    gradient: "from-emerald-600/40 via-sky-700/30 to-gray-900",
  },
];

const techIcons: Record<string, React.ReactNode> = {
  "Next.js": <Zap className="w-3.5 h-3.5" />,
  "React.js": <Globe className="w-3.5 h-3.5" />,
  "ASP.NET Core": <Layers className="w-3.5 h-3.5" />,
  TypeScript: <Code2 className="w-3.5 h-3.5" />,
  "JavaScript (ES6+)": <Code2 className="w-3.5 h-3.5" />,
  SQL: <Database className="w-3.5 h-3.5" />,
  "Tailwind CSS": <Palette className="w-3.5 h-3.5" />,
  "REST APIs": <Server className="w-3.5 h-3.5" />,
  Firebase: <Flame className="w-3.5 h-3.5" />,
  HTML5: <Code2 className="w-3.5 h-3.5" />,
  CSS3: <Palette className="w-3.5 h-3.5" />,
  AJAX: <Shield className="w-3.5 h-3.5" />,
};

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  const countFor = (cat: Category) =>
    cat === "All"
      ? projects.length
      : projects.filter((p) => p.categories.includes(cat)).length;

  return (
    <>
      {/* Hero */}
      <section
        id="projects"
        className="relative py-16 md:py-24 lg:py-28 bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-16 left-4 sm:top-32 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-16 right-4 sm:bottom-20 sm:right-32 w-56 h-56 sm:w-80 sm:h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-bold"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span
              className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}
            >
              Projects
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Live production sites I have built across e-commerce, news, and
            real-time apps
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 sm:py-8 bg-black/90 sticky top-0 z-40 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all flex items-center gap-2 ${
                  filter === cat
                    ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black shadow-lg"
                    : "bg-gray-900 text-gray-300 border border-gray-700 hover:border-cyan-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4" />
                {cat}
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    filter === cat
                      ? "bg-black/20 text-black"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {countFor(cat)}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="group relative"
              >
                <motion.div
                  className="relative h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative h-full flex flex-col bg-gray-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/30 group-hover:border-emerald-500/60 shadow-2xl transition-colors duration-500">
                    {/* Banner */}
                    <div
                      className={`relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br ${project.gradient}`}
                    >
                      <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl" />
                      <div className="absolute -bottom-12 -left-8 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl" />
                      <div className="absolute inset-0 flex items-center justify-center text-white/80 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-6">
                        {project.icon}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
                        {project.categories.map((c) => (
                          <span
                            key={c}
                            className="px-3 py-1.5 bg-emerald-500/20 backdrop-blur-md text-emerald-300 rounded-full text-xs sm:text-sm font-medium border border-emerald-500/40"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">
                        {project.company} • {project.period}
                      </p>
                      <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                        {project.desc}
                      </p>

                      <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-xl border border-cyan-500/30">
                        <p className="text-cyan-300 font-medium flex items-center gap-2 text-sm sm:text-base">
                          <Zap className="w-5 h-5 flex-shrink-0" />
                          {project.highlights}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-cyan-500/50 transition-colors"
                          >
                            {techIcons[t] || <Code2 className="w-3.5 h-3.5" />}
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap items-center gap-4">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-emerald-500/50 transition-all text-sm sm:text-base"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Site
                        </a>
                        <span className="text-xs sm:text-sm text-gray-500 break-all">
                          {project.domain}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-t from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span
                className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}
              >
                Want to build something amazing?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Let’s turn your idea into a fast, scalable, polished product.
            </p>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold rounded-full shadow-xl hover:shadow-emerald-500/60 transition-all"
              >
                Start a Project
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}