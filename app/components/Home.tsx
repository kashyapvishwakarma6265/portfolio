// app/hero/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Alex_Brush } from "next/font/google";
import { MapPin, Building2 } from "lucide-react";
import banner from "../../public/assests/img/banner.png";
import Typewriter from "./TypewriterComponent";

const alex = Alex_Brush({ subsets: ["latin"], weight: "400", display: "swap" });

// Deterministic particle positions (no Math.random, so no hydration mismatch)
const particles = [
  { left: "6%", top: "18%", size: "w-1.5 h-1.5", duration: 7, delay: 0 },
  { left: "14%", top: "62%", size: "w-1 h-1", duration: 9, delay: 1 },
  { left: "22%", top: "35%", size: "w-2 h-2", duration: 8, delay: 2 },
  { left: "31%", top: "80%", size: "w-1.5 h-1.5", duration: 10, delay: 0.5 },
  { left: "42%", top: "12%", size: "w-1 h-1", duration: 6, delay: 1.5 },
  { left: "53%", top: "70%", size: "w-2 h-2", duration: 9, delay: 3 },
  { left: "61%", top: "28%", size: "w-1.5 h-1.5", duration: 8, delay: 2.5 },
  { left: "70%", top: "88%", size: "w-1 h-1", duration: 11, delay: 0.8 },
  { left: "78%", top: "45%", size: "w-1.5 h-1.5", duration: 7, delay: 1.8 },
  { left: "86%", top: "15%", size: "w-2 h-2", duration: 10, delay: 3.2 },
  { left: "92%", top: "66%", size: "w-1 h-1", duration: 8, delay: 0.3 },
  { left: "48%", top: "50%", size: "w-1 h-1", duration: 12, delay: 2.2 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden
                 bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f]
                 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20
                 pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-20"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className={`absolute ${p.size} bg-cyan-400/50 rounded-full blur-[1px]`}
            style={{ left: p.left, top: p.top }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background glow blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 -left-10 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 -right-10 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-5 sm:space-y-6 order-2 lg:order-1"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-cyan-300 font-light tracking-wider">
              Hi, I am
            </p>

            <h1
              className={`${alex.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
                leading-tight bg-gradient-to-r from-cyan-400 to-emerald-400
                bg-clip-text text-transparent`}
            >
              Kashyap <br className="sm:hidden" />
              Vishwakarma
            </h1>

            <p className="text-2xl sm:text-3xl md:text-4xl text-emerald-300 font-medium">
              Full Stack Developer
            </p>

            {/* Role chips from the CV */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm">
                <Building2 className="w-4 h-4" />
                Full Stack Developer at MAIDC
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm">
                <MapPin className="w-4 h-4" />
                Mumbai, India
              </span>
            </div>

            <div className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              <span className="inline-block">
                I&apos;m passionate about writing clean, efficient code and{" "}
                <span className="inline-block text-emerald-300">
                  <Typewriter />
                </span>
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 sm:pt-6">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-emerald-500 text-white font-bold rounded-full
                           overflow-hidden shadow-lg hover:shadow-emerald-500/60
                           transition-all duration-300 text-center"
              >
                <span className="relative z-10">View Projects</span>
                <span
                  className="absolute inset-0 bg-emerald-400 scale-0 group-hover:scale-110
                             transition-transform duration-300 rounded-full"
                />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full
                           hover:bg-cyan-400 hover:text-black transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Glow Background */}
            <div
              className="absolute inset-0 -m-4 sm:-m-8 rounded-3xl
                         bg-gradient-to-r from-cyan-400/20 to-emerald-400/20
                         blur-3xl animate-pulse pointer-events-none"
            />

            {/* Photo Frame */}
            <div className="relative p-2 rounded-2xl ">
              <Image
                src={banner}
                alt="Kashyap Vishwakarma"
                className="rounded-xl object-contain w-full h-auto shadow-2xl
                           max-w-[240px] min-[400px]:max-w-[300px]
                           sm:max-w-[360px] md:max-w-[420px]
                           lg:max-w-[480px] xl:max-w-[520px]"
                priority
                placeholder="blur"
                sizes="(max-width: 640px) 300px, (max-width: 768px) 360px, (max-width: 1024px) 420px, 520px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}