// app/projects/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import {
  Github,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Zap,
  Layers,
  Filter,
} from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const categories = ["All", "Full-Stack", "Backend", "Frontend", "E-Commerce"] as const;

const projects = [
  {
    id: 1,
    title: "PayPulse Pro",
    desc: "Real-time payment gateway with fraud detection & analytics",
    category: "Full-Stack",
    tech: ["C#", ".NET 8", "React", "PostgreSQL", "Redis", "AWS"],
    live: "https://paypulse.example.com",
    github: "https://github.com/yourusername/paypulse",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    stats: "1000+ tx/day • 99.9% uptime",
  },
  {
    id: 2,
    title: "DashForge Analytics",
    desc: "Live business intelligence dashboard for 500+ concurrent users",
    category: "Full-Stack",
    tech: ["React", "Next.js 15", "Node.js", "MongoDB", "Docker"],
    live: "https://dashforge.example.com",
    github: "https://github.com/yourusername/dashforge",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    stats: "500+ users • 50+ charts",
  },
  {
    id: 3,
    title: "ShopNest E-Commerce",
    desc: "Scalable online store with AI recommendations & inventory sync",
    category: "E-Commerce",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Tailwind"],
    live: "https://shopnest.example.com",
    github: "https://github.com/yourusername/shopnest",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    stats: "₹50L+ revenue • 10k+ orders",
  },
  {
    id: 4,
    title: "MicroAPI Gateway",
    desc: "High-performance API gateway with rate limiting & auth",
    category: "Backend",
    tech: [".NET 8", "gRPC", "Redis", "Docker", "nginx"],
    live: null,
    github: "https://github.com/yourusername/microapi",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop",
    stats: "10M+ requests • <10ms latency",
  },
];

// CORRECT: Use React.ReactNode (no JSX namespace needed)
const techIcons: Record<string, React.ReactNode> = {
  "C#": <Code2 className="w-4 h-4" />,
  ".NET 8": <Layers className="w-4 h-4" />,
  React: <Globe className="w-4 h-4" />,
  "Next.js 15": <Zap className="w-4 h-4" />,
  Node: <Globe className="w-4 h-4" />,
  PostgreSQL: <Database className="w-4 h-4" />,
  MongoDB: <Database className="w-4 h-4" />,
  Docker: <Layers className="w-4 h-4" />,
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      {/* Hero */}
      <section id="projects"  className="relative py-28 bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f] overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-32 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-32 w-80 h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-bold"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}>
              Projects
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Real apps. Real impact. Built from scratch.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-black sticky top-0 z-40 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === cat
                    ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black shadow-lg"
                    : "bg-gray-900 text-gray-300 border border-gray-700 hover:border-cyan-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, ease: "easeOut" }}
                className="group relative"
              >
                <motion.div
                  className="relative h-full"
                  whileHover={{ rotateX: 8, rotateY: -8, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-4 py-2 bg-emerald-500/20 backdrop-blur-md text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/40">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.desc}
                      </p>

                      <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-xl border border-cyan-500/30">
                        <p className="text-cyan-300 font-medium flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          {project.stats}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                          >
                            {techIcons[t] || <Code2 className="w-3 h-3" />}
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-all"
                        >
                          <Github className="w-4 h-4" />
                          Source
                        </a>
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
      <section className="py-20 bg-gradient-to-t from-black to-gray-950">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}>
                Want to build something amazing?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let’s turn your idea into a scalable, beautiful product.
            </p>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold rounded-full shadow-xl hover:shadow-emerald-500/60 transition-all"
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