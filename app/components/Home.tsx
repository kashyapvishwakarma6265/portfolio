// app/hero/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Alex_Brush } from "next/font/google";
import banner from "../../public/assests/img/banner.png";
import Typewriter from "./TypewriterComponent";

const alex = Alex_Brush({ subsets: ["latin"], weight: "400" });

// Animation Variants
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

const floatParticle = (delay: number) => ({
  x: ["-100vw", "100vw"],
  y: ["-100vh", "100vh"],
  transition: {
    duration: 25 + delay * 3,
    repeat: Infinity,
    ease: "linear",
    delay,
  },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[950px] flex flex-col justify-center overflow-hidden
                 bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f]
                 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20
                 pt-24 sm:pt-28 md:pt-32" // ← ADDED SPACE FROM HEADER
      style={{ scrollMarginTop: "80px" }} // ← For smooth scroll with fixed header
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400/40 rounded-full blur-[1px]"
            initial={{ x: -200, y: -200 }}

          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* TEXT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center lg:text-left space-y-6 order-2 lg:order-1"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-cyan-300 font-light tracking-wider">
              Hi, I am
            </p>

            <h1
              className={`${alex.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
                leading-tight bg-gradient-to-r from-cyan-400 to-emerald-400 
                bg-clip-text text-transparent font-bold`}
            >
              Kashyap <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>
              Vishwakarma
            </h1>

            <p className="text-2xl sm:text-3xl md:text-4xl text-emerald-300 font-medium">
              FullStack Developer
            </p>
            <div className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              <span className="inline-block">
                I’m passionate about writing clean, efficient code and {" "}
                <span className="inline-block text-emerald-300">
                  <Typewriter />
                </span>
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-emerald-500 text-white font-bold rounded-full 
                         overflow-hidden shadow-lg hover:shadow-emerald-500/60 
                         transition-all duration-300"
              >
                <span className="relative z-10">Show Profile</span>
                <span className="absolute inset-0 bg-emerald-400 scale-0 group-hover:scale-110 
                               transition-transform duration-300 rounded-full" />
              </a>

              <a
                href="#about"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full 
                         hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Know More
              </a>
            </div>
          </motion.div>

          {/* PHOTO - Improved Responsiveness */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 -m-8 rounded-3xl 
                          bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 
                          blur-3xl animate-pulse" />

            {/* Photo Frame */}
            <div className="relative p-4 bg-gradient-to-r from-cyan-400 to-emerald-400 
                          rounded-3xl shadow-2xl">
              <div className="bg-black/90 p-3 rounded-2xl">
                <Image
                  src={banner}
                  alt="Kashyap Vishwakarma"

                  className="rounded-2xl object-contain w-full h-auto 
                             shadow-2xl
                             max-w-[260px] xs:max-w-[300px] 
                             sm:max-w-[360px] md:max-w-[420px] 
                             lg:max-w-[480px] xl:max-w-[520px]"
                  priority
                  placeholder="blur"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, (max-width: 1024px) 420px, 520px"
                  style={{ aspectRatio: "1 / 1" }}
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-full 
                               text-sm sm:text-base shadow-2xl border-4 border-black/30">
                  ✨ Crafting Digital Dreams
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}