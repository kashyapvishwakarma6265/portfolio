// app/services/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import {
  Shield,
  Code2,
  Globe,
  Check,
  ArrowRight,
  Layers,
  Database,
  Gauge,
  ShoppingCart,
  Mail,
  Phone,
  Filter,
} from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const EMAIL = "kashyapvishwakarma6526@gmail.com";
const PHONE = "+91 8169498017";

const categories = ["All", "Full-Stack", "Frontend", "Backend"] as const;
type Category = (typeof categories)[number];

type Service = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  tech: string[];
  categories: Exclude<Category, "All">[];
  featured: boolean;
};

const services: Service[] = [
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Full-Stack Web Apps",
    desc: "End-to-end ownership of a feature, from schema and API design through component-driven UI.",
    features: [
      "Next.js / React frontend",
      "ASP.NET Core Web API",
      "SQL schema & data modeling",
      "Production-ready delivery",
    ],
    tech: ["Next.js", "React.js", "ASP.NET Core", "TypeScript", "SQL"],
    categories: ["Full-Stack"],
    featured: true,
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-Commerce Platforms",
    desc: "Fast, SEO-friendly storefronts with product, cart, checkout, order, and inventory management.",
    features: [
      "Product listings, cart & checkout",
      "Order & inventory APIs",
      "Server-side rendering for SEO",
      "Admin-ready role access",
    ],
    tech: ["Next.js", "ASP.NET Core", "Tailwind CSS", "SQL"],
    categories: ["Full-Stack"],
    featured: false,
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Frontend Development",
    desc: "Responsive, accessible interfaces built from reusable components that work across browsers.",
    features: [
      "React.js & Next.js UIs",
      "Redux state management",
      "Tailwind CSS styling",
      "Cross-browser & accessible",
    ],
    tech: ["React.js", "Next.js", "Redux", "Tailwind CSS", "TypeScript"],
    categories: ["Frontend"],
    featured: false,
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web API Development",
    desc: "Clean RESTful APIs with ASP.NET Core and Entity Framework Core that frontends can rely on.",
    features: [
      "RESTful API design",
      "Entity Framework Core",
      "Postman-validated contracts",
      "Frontend/backend integration",
    ],
    tech: ["C#", "ASP.NET Core", "Web API", "Entity Framework Core"],
    categories: ["Backend"],
    featured: false,
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Auth & Access Control",
    desc: "Secure sign-in and permissions that work consistently across frontend and backend.",
    features: [
      "JWT authentication",
      "OAuth 2.0 flows",
      "Role-Based Access Control",
      "Protected routes & endpoints",
    ],
    tech: ["JWT", "OAuth 2.0", "RBAC", "ASP.NET Core"],
    categories: ["Backend", "Full-Stack"],
    featured: false,
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database & Performance",
    desc: "Well-modeled data and tuned queries, plus page-speed work that improves Core Web Vitals.",
    features: [
      "SQL Server & PostgreSQL",
      "Query optimization",
      "Core Web Vitals tuning",
      "SSR / SSG rendering",
    ],
    tech: ["SQL Server", "PostgreSQL", "Next.js", "SSR / SSG"],
    categories: ["Backend", "Frontend"],
    featured: false,
  },
];

export default function Services() {
  const [filter, setFilter] = useState<Category>("All");

  const filtered =
    filter === "All"
      ? services
      : services.filter((s) => s.categories.includes(filter));

  const countFor = (cat: Category) =>
    cat === "All"
      ? services.length
      : services.filter((s) => s.categories.includes(cat)).length;

  return (
    <>
      {/* Hero */}
      <section
        id="services"
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
            transition={{ duration: 1 }}
          >
            <span
              className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}
            >
              Services
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Fast, SEO-friendly interfaces and the ASP.NET Core backends that
            power them
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

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          >
            {filtered.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="group relative"
              >
                <motion.div
                  className="h-full relative"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Card */}
                  <div
                    className={`relative h-full flex flex-col bg-gray-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border ${
                      service.featured
                        ? "border-emerald-500 shadow-2xl shadow-emerald-500/30"
                        : "border-cyan-500/30 group-hover:border-emerald-500/60"
                    } transition-all duration-500`}
                  >
                    {service.featured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 bg-emerald-500 text-black text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
                          Core Strength
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white mb-6 ${
                        service.featured ? "ring-4 ring-emerald-500/30" : ""
                      }`}
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-cyan-500/50 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                        service.title
                      )}%20inquiry`}
                      className={`mt-auto w-full py-3 sm:py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
                        service.featured
                          ? "bg-emerald-500 text-black hover:bg-emerald-400 shadow-lg"
                          : "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black hover:shadow-lg hover:shadow-cyan-500/50"
                      }`}
                    >
                      Discuss This
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-10 sm:py-12 bg-black border-t border-cyan-500/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: <Gauge className="w-6 h-6" />, text: "Core Web Vitals focused" },
              { icon: <Shield className="w-6 h-6" />, text: "JWT, OAuth 2.0 & RBAC" },
              { icon: <Database className="w-6 h-6" />, text: "SQL Server & PostgreSQL" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-gray-900/60 border border-cyan-500/20 hover:border-emerald-500/40 transition-all"
              >
                <span className="text-cyan-400">{item.icon}</span>
                <span className="text-gray-300 text-sm sm:text-base">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-t from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              <span
                className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}
              >
                Ready to launch your next big thing?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-10">
              Tell me about your project and let’s build it end to end.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a href={`mailto:${EMAIL}`}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-base sm:text-lg font-bold rounded-full shadow-2xl hover:shadow-emerald-500/60 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </motion.span>
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-cyan-400 text-cyan-400 text-base sm:text-lg font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Me
                </motion.span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}