// app/experience/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import {
  Briefcase,
  Calendar,
  MapPin,
  Layers,
  TrendingUp,
  Award,
  Building2,
  ChevronRight,
  ExternalLink,
  Globe,
  Code2,
} from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

type Project = {
  name: string;
  links: { label: string; href: string }[];
};

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  stack: string;
  impact: string;
  project: Project;
  achievements: string[];
  tech: string[];
};

// Order: MAIDC -> Penpay -> iEveEra (latest first, as per CV)
const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Maharashtra Agro Industries Development Corporation (MAIDC)",
    location: "Goregaon East, Mumbai",
    period: "Dec 2024 – Present",
    type: "Full-Time",
    stack: "Next.js + ASP.NET Core",
    impact: "Mahaagromart E-Commerce Platform",
    project: {
      name: "Mahaagromart E-Commerce Platform",
      links: [
        { label: "www.mahaagromart.com", href: "https://www.mahaagromart.com" },
      ],
    },
    achievements: [
      "Built fast, responsive, and SEO-friendly user interfaces using Next.js with server-side rendering",
      "Designed and developed ASP.NET Core Web APIs and SQL data models for product, order, and inventory management",
      "Designed reusable, component-driven UI with React.js and Tailwind CSS for product listings, cart, and checkout flows",
      "Implemented authentication and Role-Based Access Control (RBAC) across frontend and backend using JWT / OAuth 2.0",
      "Optimized page load performance, Core Web Vitals, and SQL query performance for a large-scale e-commerce catalog",
    ],
    tech: [
      "Next.js",
      "React.js",
      "ASP.NET Core",
      "TypeScript",
      "SQL",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Penpay Technologies Pvt. Ltd.",
    location: "Sakinaka, Mumbai",
    period: "Apr 2024 – Sep 2024",
    type: "Full-Time",
    stack: "React + Firebase",
    impact: "Autometa Bot",
    project: {
      name: "Autometa Bot",
      links: [
        { label: "autometa-bot.web.app", href: "https://autometa-bot.web.app" },
      ],
    },
    achievements: [
      "Built the React frontend and integrated it with backend services using the Fetch API for network requests",
      "Connected the UI to Firebase for real-time data operations and live updates",
      "Used Postman to validate API contracts during frontend/backend integration, ensuring smooth end-to-end data flow",
    ],
    tech: ["React.js", "JavaScript (ES6+)", "Firebase", "REST APIs"],
  },
  {
    title: "Frontend Developer",
    company: "iEveEra Int Ltd",
    location: "Andheri West, Mumbai",
    period: "Aug 2022 – Aug 2023",
    type: "Full-Time",
    stack: "React + JavaScript",
    impact: "Multiple Live Web Projects",
    project: {
      name: "Multiple Live Web Projects",
      links: [
        { label: "ieveera.com", href: "https://ieveera.com" },
        { label: "ieveeratimes.com", href: "https://ieveeratimes.com" },
        { label: "ieveeraseo.com", href: "https://ieveeraseo.com" },
        { label: "ieveeranews.com", href: "https://ieveeranews.com" },
      ],
    },
    achievements: [
      "Delivered scalable, high-performance web applications across multiple live production sites using HTML5, CSS3, JavaScript (ES6+), AJAX, and React",
      "Built responsive and interactive UIs with strong attention to cross-browser compatibility and accessibility",
      "Collaborated with backend teams to consume RESTful APIs for dynamic content across multiple news and SEO-driven properties",
    ],
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "AJAX"],
  },
];

const stats = [
  { icon: <Briefcase className="w-8 h-8" />, value: "3+", label: "Years Experience" },
  { icon: <Building2 className="w-8 h-8" />, value: "3", label: "Companies" },
  { icon: <Globe className="w-8 h-8" />, value: "6", label: "Live Projects" },
  { icon: <Code2 className="w-8 h-8" />, value: "15+", label: "Technologies" },
];

export default function Experience() {
  return (
    <>
      {/* Hero */}
      <section
        id="experience"
        className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-16 left-4 sm:top-32 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-16 right-4 sm:bottom-20 sm:right-32 w-56 h-56 sm:w-80 sm:h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span
              className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}
            >
              Experience
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            3+ years building fast, SEO-friendly interfaces and the ASP.NET Core
            backends behind them
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="relative">
            {/* Mobile: Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-emerald-500/50 to-transparent md:hidden" />

            {/* Desktop: Center Line */}
            <div className="absolute hidden md:block left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-emerald-500 to-transparent" />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative mb-12 sm:mb-16 md:mb-20 last:mb-0 pl-10 md:pl-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-8 md:top-10 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-black shadow-lg z-20 ring-4 ring-black/50" />

                {/* Card */}
                <div
                  className={`w-full md:w-11/12 lg:w-10/12 xl:w-9/12 ${
                    i % 2 === 0
                      ? "md:ml-0 md:mr-auto md:pr-8 lg:pr-12"
                      : "md:ml-auto md:pl-8 lg:pl-12"
                  }`}
                >
                  <div className="group relative bg-gray-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-cyan-500/30 shadow-2xl hover:border-emerald-500/60 transition-all duration-500">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative z-10">
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                        <span className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 rounded-full text-xs sm:text-sm font-medium">
                          {exp.type}
                        </span>
                        <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" /> {exp.stack}
                        </span>
                        {i === 0 && (
                          <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-white rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 border border-emerald-500/40">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                            </span>
                            Current
                          </span>
                        )}
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-start gap-2 text-emerald-400 mb-4">
                        <Building2 className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" />
                        <span className="font-semibold text-base sm:text-lg leading-snug">
                          {exp.company}
                        </span>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Project */}
                      <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/30">
                        <p className="text-emerald-300 font-medium flex items-center gap-2 text-sm sm:text-base">
                          <TrendingUp className="w-5 h-5 flex-shrink-0" />
                          {exp.project.name}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {exp.project.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm hover:border-emerald-400 hover:text-emerald-300 transition-colors"
                            >
                              {link.label}
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-3 mb-6">
                        {exp.achievements.map((ach, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm sm:text-base"
                          >
                            <ChevronRight className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 leading-relaxed">
                              {ach}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 bg-gray-800/80 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-700 hover:border-cyan-500/50 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Scroll Hint */}
          <div className="text-center mt-8 md:hidden">
            <p className="text-xs text-gray-600">Scroll down to explore</p>
          </div>
        </div>
      </section>

      {/* Stats Footer */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-t from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-5 sm:p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-cyan-500/20 hover:border-emerald-500/40 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-cyan-400 mb-3">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm sm:text-base mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}