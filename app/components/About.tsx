// app/about/page.tsx  (or components/About.tsx)
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import {
  Code2,
  Database,
  GraduationCap,
  Briefcase,
  Zap,
  Globe,
  Layers,
  Download,
  Mail,
  Building2,
  Languages,
  Shield,
  Wrench,
  MapPin,
} from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Everything below comes from the CV

const stats = [
  { label: "Years Experience", value: "3+", icon: <Briefcase className="w-8 h-8" /> },
  { label: "Companies", value: "3", icon: <Building2 className="w-8 h-8" /> },
  { label: "Live Projects", value: "6", icon: <Globe className="w-8 h-8" /> },
  { label: "Languages Spoken", value: "3", icon: <Languages className="w-8 h-8" /> },
];

const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    place: "Tilak Maharashtra Vidyapeeth, Pune University",
    year: "2020",
  },
  {
    title: "HSC – Science",
    place: "Maharashtra Board University",
    year: "2016",
  },
  {
    title: "SSC – Science",
    place: "Maharashtra Board University",
    year: "2014",
  },
];

const experience = [
  {
    title: "Full Stack Developer",
    place: "Maharashtra Agro Industries Development Corporation (MAIDC)",
    year: "Dec 2024 – Present",
  },
  {
    title: "Full Stack Developer",
    place: "Penpay Technologies Pvt. Ltd.",
    year: "Apr 2024 – Sep 2024",
  },
  {
    title: "Frontend Developer",
    place: "iEveEra Int Ltd",
    year: "Aug 2022 – Aug 2023",
  },
];

const techStack = [
  {
    label: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    items: ["C#", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    label: "Backend",
    icon: <Layers className="w-5 h-5" />,
    items: ["ASP.NET Core", "Web API", "Entity Framework Core", "REST APIs"],
  },
  {
    label: "Frontend & Styling",
    icon: <Zap className="w-5 h-5" />,
    items: ["React.js", "Next.js", "AngularJS", "Redux", "Tailwind CSS"],
  },
  {
    label: "Auth & Database",
    icon: <Database className="w-5 h-5" />,
    items: ["JWT", "OAuth 2.0", "RBAC", "SQL Server", "PostgreSQL"],
  },
  {
    label: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5" />,
    items: ["Git", "GitHub", "Postman", "Firebase", "npm / yarn"],
  },
];

const spokenLanguages = ["English", "Hindi", "Marathi"];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-4 sm:right-32 w-56 h-56 sm:w-80 sm:h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold">
              <span
                className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}
              >
                About
              </span>{" "}
              <span
                className={`${dancingScript.className} bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent`}
              >
                Me
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Kashyap Vishwakarma, a Full Stack Developer building fast,
              SEO-friendly interfaces and the ASP.NET Core backends behind them.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm sm:text-base text-emerald-400">
              <MapPin className="w-4 h-4" />
              Mumbai, India
            </p>
          </motion.div>

          {/* Journey Card */}
          <motion.div
            className="rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-xl border border-cyan-500/20 p-6 sm:p-8 md:p-10 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 ${dancingScript.className}`}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                My Journey
              </span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                I have <strong className="text-emerald-400">3+ years</strong> of
                hands-on experience building fast, responsive interfaces with{" "}
                <strong className="text-white">React.js, Next.js, and TypeScript</strong>,
                paired with{" "}
                <strong className="text-cyan-400">ASP.NET Core Web APIs</strong>{" "}
                and SQL / PostgreSQL data models. I also have experience with
                AngularJS for enterprise-grade SPAs.
              </p>
              <p>
                I am comfortable owning a feature end to end, from schema and
                API design through component-driven UI, and working closely with
                cross-functional teams to ship polished, production-ready
                products. I hold a{" "}
                <strong className="text-emerald-400">BCA</strong> from{" "}
                <strong className="text-cyan-400">
                  Tilak Maharashtra Vidyapeeth, Pune
                </strong>
                .
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 p-5 sm:p-6 text-center backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="text-cyan-400 mb-3">{stat.icon}</div>
                  <div className="text-3xl sm:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 mt-1">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Education",
                entries: education,
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Experience",
                entries: experience,
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="rounded-2xl bg-gray-900/80 backdrop-blur-md border border-cyan-500/30 hover:border-emerald-500/50 p-6 sm:p-8 shadow-xl transition-colors"
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl text-white">
                    {card.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {card.title}
                  </h3>
                </div>

                <div className="relative space-y-6 pl-6 border-l border-cyan-500/30">
                  {card.entries.map((entry) => (
                    <div key={entry.title + entry.place} className="relative">
                      <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-gray-900" />
                      <h4 className="text-base sm:text-lg font-semibold text-emerald-400">
                        {entry.title}
                      </h4>
                      <p className="text-gray-400 text-sm sm:text-base">
                        {entry.place}
                      </p>
                      <p className="text-cyan-400 text-sm font-medium mt-1">
                        {entry.year}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <motion.div
            className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-xl border border-cyan-500/20 p-6 sm:p-8 md:p-10 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12">
              <span
                className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent`}
              >
                Technical Stack
              </span>
            </h3>

            <div className="grid gap-8 sm:gap-10">
              {techStack.map((group) => (
                <div key={group.label}>
                  <h4 className="flex items-center gap-3 text-lg sm:text-xl font-bold text-cyan-400 mb-4 sm:mb-6">
                    <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((tech, idx) => (
                      <motion.div
                        key={tech}
                        className="group flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ y: -4, scale: 1.05 }}
                      >
                        <span className="text-emerald-400 group-hover:scale-110 transition-transform">
                          {group.icon}
                        </span>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Spoken languages */}
              <div>
                <h4 className="flex items-center gap-3 text-lg sm:text-xl font-bold text-cyan-400 mb-4 sm:mb-6">
                  <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  Languages Spoken
                </h4>
                <div className="flex flex-wrap gap-3">
                  {spokenLanguages.map((lang) => (
                    <span
                      key={lang}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-emerald-500 transition-colors text-sm font-medium text-gray-300"
                    >
                      <Languages className="w-5 h-5 text-emerald-400" />
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold rounded-full overflow-hidden shadow-xl flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-500" />
              </motion.span>
            </a>

            {/* Put your CV at /public/resume.pdf */}
<a
  href="/assests/img/resume.pdf"
  download="Kashyap_Vishwakarma_CV.pdf"
>              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}