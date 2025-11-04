// app/services/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import {
  Zap,
  Shield,
  Rocket,
  Code2,
  Globe,
  Cpu,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Full-Stack Web Apps",
    desc: "Blazing-fast React + .NET 8 apps with real-time dashboards",
    features: ["Next.js 15", "C# Backend", "PostgreSQL", "Docker Deploy"],
    price: { monthly: 899, yearly: 799 },
    popular: false,
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "E-Commerce Platforms",
    desc: "AI-powered stores with Stripe, inventory sync & analytics",
    features: ["Next.js + Stripe", "Prisma ORM", "AI Recommendations", "Admin Panel"],
    price: { monthly: 1299, yearly: 1099 },
    popular: true,
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Startup MVP Launch",
    desc: "From idea to production in 14 days — battle-tested",
    features: ["Rapid Prototyping", "CI/CD Pipeline", "AWS Hosting", "24/7 Support"],
    price: { monthly: 1999, yearly: 1699 },
    popular: false,
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise API Gateway",
    desc: "Secure, scalable microservices with auth & rate limiting",
    features: [".NET 8 gRPC", "JWT + OAuth", "Redis Cache", "99.99% Uptime"],
    price: { monthly: 1599, yearly: 1399 },
    popular: false,
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI + Automation",
    desc: "Python bots, data pipelines & predictive analytics",
    features: ["Python + FastAPI", "ML Models", "Auto Reports", "Slack Alerts"],
    price: { monthly: 999, yearly: 849 },
    popular: false,
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Portfolio Glow-Up",
    desc: "This exact site — animated, 3D, ready in 2 days",
    features: ["Next.js + Framer", "Glassmorphism", "Dark Mode", "SEO Ready"],
    price: { monthly: 499, yearly: 399 },
    popular: false,
  },
];

export default function Services() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      {/* Hero */}
      <section id="services" className="relative py-28 bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-32 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-32 w-80 h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-bold"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}>
              Services
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Premium development. Cinematic results. Delivered fast.
          </motion.p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-12 bg-black sticky top-0 z-40 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg font-medium ${!isYearly ? "text-white" : "text-gray-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-gray-800 rounded-full p-1 transition-all"
            >
              <motion.div
                className="absolute w-6 h-6 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full shadow-lg"
                animate={{ x: isYearly ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </button>
            <span className={`text-lg font-medium ${isYearly ? "text-white" : "text-gray-500"}`}>
              Yearly <span className="text-emerald-400 text-sm">(-15%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                {/* 3D Tilt Card */}
                <motion.div
                  className="h-full"
                  whileHover={{ rotateY: 10, rotateX: 10, scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Glow Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Card */}
                  <div
                    className={`relative h-full bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border ${
                      service.popular
                        ? "border-emerald-500 shadow-2xl shadow-emerald-500/30"
                        : "border-cyan-500/30"
                    } transition-all duration-500`}
                  >
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 bg-emerald-500 text-black text-sm font-bold rounded-full shadow-lg">
                          MOST POPULAR
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white mb-6 ${
                        service.popular ? "ring-4 ring-emerald-500/30" : ""
                      }`}
                    >
                      {service.icon}
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">{service.desc}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-end gap-2">
                        <span className="text-5xl font-bold text-white">
                          ${isYearly ? service.price.yearly : service.price.monthly}
                        </span>
                        <span className="text-gray-400 mb-2">/month</span>
                      </div>
                      {isYearly && (
                        <p className="text-emerald-400 text-sm mt-1">
                          Billed yearly • Save ${(service.price.monthly - service.price.yearly) * 12}
                        </p>
                      )}
                    </div>

                    {/* CTA */}
                    <button
                      className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
                        service.popular
                          ? "bg-emerald-500 text-black hover:bg-emerald-400 shadow-lg"
                          : "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black hover:shadow-cyan-500/50"
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-t from-black to-gray-950">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}>
                Ready to launch your next big thing?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Free 30-min consultation • No commitment • Let’s build something legendary
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-lg font-bold rounded-full shadow-2xl hover:shadow-emerald-500/60 transition-all"
                >
                  Book Free Call
                </motion.button>
              </a>
              <a href="mailto:hello@yourname.com">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 text-lg font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-all"
                >
                  Send Email
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}