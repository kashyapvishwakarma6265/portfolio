// app/experience/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import {
  Briefcase,
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  Award,
  Building2,
  ChevronRight,
} from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" },
};

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "iEveEra International",
    location: "Mumbai, India",
    period: "Jan 2024 – Present",
    type: "Full-Time",
    team: "8 Members",
    impact: "Led 3 enterprise apps",
    achievements: [
      "Built real-time analytics dashboard serving 500+ concurrent users",
      "Reduced API response time by 68% via .NET 8 optimization",
      "Implemented CI/CD pipeline with Jenkins & Docker",
    ],
    tech: ["C#", ".NET 8", "React", "PostgreSQL", "AWS"],
  },
  {
    title: "Backend Developer",
    company: "Penpay Solutions",
    location: "Pune, India",
    period: "Jun 2023 – Dec 2023",
    type: "Full-Time",
    team: "5 Members",
    impact: "Scaled payment gateway",
    achievements: [
      "Processed 1000+ daily transactions with zero downtime",
      "Designed microservices architecture using ASP.NET Core",
      "Integrated Razorpay & Stripe with 99.9% uptime",
    ],
    tech: ["C#", "ASP.NET", "SQL Server", "Redis", "Docker"],
  },
  {
    title: "Junior Developer",
    company: "MAIDC Pvt Ltd",
    location: "Mumbai, India",
    period: "May 2022 – May 2023",
    type: "Intern to Full-Time",
    team: "6 Members",
    impact: "Modernized legacy systems",
    achievements: [
      "Migrated 5 VB.NET apps to .NET 6",
      "Built internal CRM used by 200+ employees",
      "Automated report generation (saved 20 hrs/week)",
    ],
    tech: [".NET 6", "WinForms", "SQL", "Crystal Reports"],
  },
];

export default function Experience() {
  return (
    <>
      {/* Hero */}
      <section id="experience" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f] overflow-hidden">
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
            <span className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}>
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
            From intern to lead — building production apps that power real businesses
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="relative">
            {/* Mobile: Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-emerald-500/50 to-transparent md:hidden" />

            {/* Desktop: Center Line */}
            <div className="absolute hidden md:block left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-emerald-500 to-transparent" />

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative mb-12 sm:mb-16 md:mb-20 last:mb-0"
                {...fadeInUp}
                transition={{ delay: i * 0.15 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-black shadow-lg z-20 ring-4 ring-black/50" />

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
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10">
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                        <span className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 rounded-full text-xs sm:text-sm font-medium">
                          {exp.type}
                        </span>
                        <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5" /> {exp.team}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-emerald-400 mb-4">
                        <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="font-semibold text-base sm:text-lg">{exp.company}</span>
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

                      {/* Impact */}
                      <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/30">
                        <p className="text-emerald-300 font-medium flex items-center gap-2 text-sm sm:text-base">
                          <TrendingUp className="w-5 h-5" />
                          {exp.impact}
                        </p>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-3 mb-6">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm sm:text-base">
                            <ChevronRight className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 leading-relaxed">{ach}</span>
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
            {[
              { icon: <Briefcase className="w-8 h-8" />, value: "3", label: "Companies" },
              { icon: <Award className="w-8 h-8" />, value: "15+", label: "Projects" },
              { icon: <Users className="w-8 h-8" />, value: "19+", label: "Teammates" },
              { icon: <TrendingUp className="w-8 h-8" />, value: "1000+", label: "Transactions" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-cyan-500/20 hover:border-emerald-500/40 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-cyan-400 mb-3">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm sm:text-base mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}