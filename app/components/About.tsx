// app/about/page.tsx  (or components/About.tsx)
"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  GraduationCap,
  Briefcase,
  Award,
  Zap,
  Globe,
  Layers,
  Download,
  Mail,
} from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Reusable animation variant with proper typing
const fadeUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" } as const,
};

// Tech Stack
const techStack = {
  languages: [
    { name: "C#", icon: <Code2 className="w-5 h-5" /> },
    { name: "JavaScript", icon: <Code2 className="w-5 h-5" /> },
    { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
    { name: "Python", icon: <Code2 className="w-5 h-5" /> },
  ],
  frameworks: [
    { name: ".NET 8", icon: <Layers className="w-5 h-5" /> },
    { name: "React.js", icon: <Globe className="w-5 h-5" /> },
    { name: "Next.js 15", icon: <Zap className="w-5 h-5" /> },
    { name: "Node.js", icon: <Cpu className="w-5 h-5" /> },
  ],
  databases: [
    { name: "SQL Server", icon: <Database className="w-5 h-5" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
    { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
  ],
  devops: [
    { name: "Docker", icon: <Layers className="w-5 h-5" /> },
    { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
    { name: "Git", icon: <Code2 className="w-5 h-5" /> },
    { name: "CI/CD", icon: <Zap className="w-5 h-5" /> },
  ],
};

const stats = [
  { label: "Experience", value: "2+ Years", icon: <Briefcase /> },
  { label: "Projects", value: "15+", icon: <Award /> },
  { label: "Transactions", value: "1000+", icon: <Zap /> },
  { label: "Live Users", value: "500+", icon: <Globe /> },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-8xl mx-auto">

          {/* Title */}
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h2 className="text-6xl md:text-8xl font-bold">
              <span className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}>
                About
              </span>
              <span className="text-white"> </span>
              <span className={`${dancingScript.className} bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent`}>
                Me
              </span>
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Full-Stack Developer crafting pixel-perfect, high-performance apps with modern tech.
            </p>
          </motion.div>

          {/* Journey Card */}
          <motion.div
            className="rounded-3xl bg-black/40 backdrop-blur-xl border border-cyan-500/20 p-10 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className={`text-4xl md:text-5xl font-bold text-center mb-8 ${dancingScript.className}`}>
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                My Journey
              </span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8 text-gray-300 text-lg leading-relaxed">
              <p>
                Graduated with a <strong className="text-emerald-400">BCA</strong> from{" "}
                <strong className="text-cyan-400">Tilak Maharashtra Vidyapeeth, Pune</strong>.
                <br /><br />
                Built <strong className="text-white">15+ production apps</strong> serving{" "}
                <strong className="text-emerald-400">1000+ daily transactions</strong> and{" "}
                <strong className="text-cyan-400">500+ concurrent users</strong>.
              </p>
              <p>
                Based in <strong className="text-emerald-400">Mumbai</strong>, I thrive in agile teams,
                ship fast, and obsess over clean code, performance, and user delight.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 p-6 text-center backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-3 mx-auto w-12">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Education",
                subtitle: "BCA - Computer Applications",
                place: "Tilak Maharashtra Vidyapeeth, Pune",
                year: "2020 – 2021",
                skills: "C#, Java, SQL, Python",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Experience",
                subtitle: "Full-Stack Developer",
                place: "MAIDC • Penpay • iEveEra",
                year: "2+ Years",
                skills: "15+ Projects • 1000+ Transactions",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="rounded-2xl bg-gray-900/80 backdrop-blur-md border border-cyan-500/30 p-8 shadow-xl"
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl text-white">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                </div>
                <h4 className="text-xl font-semibold text-emerald-400">{card.subtitle}</h4>
                <p className="text-gray-400">{card.place}</p>
                <p className="text-cyan-400 font-medium">{card.year}</p>
                <p className="text-sm text-gray-500 mt-3">{card.skills}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <motion.div
            className="mt-16 rounded-3xl bg-black/40 backdrop-blur-xl border border-cyan-500/20 p-10 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-center text-4xl md:text-5xl font-bold mb-12">
              <span className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent`}>
                Technical Stack
              </span>
            </h3>

            <div className="grid gap-10">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category}>
                  <h4 className="flex items-center gap-3 text-xl font-bold text-cyan-400 mb-6 capitalize">
                    <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                    {category === "devops" ? "DevOps & Tools" : category}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {items.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        className="group flex flex-col items-center justify-center p-5 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ y: -6, scale: 1.05 }}
                      >
                        <div className="text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
                          {tech.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-16 flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold rounded-full overflow-hidden shadow-xl flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
                <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500" />
              </motion.button>
            </a>

            <a href="/resume.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}