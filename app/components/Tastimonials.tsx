// app/testimonials/page.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
  Briefcase,
  MessageSquareQuote,
} from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

type Slide = {
  kind: "testimonial" | "highlight";
  name: string; // person name (testimonial) or project name (highlight)
  role: string;
  content: string;
  rating?: number;
};

/**
 * Add REAL client / colleague feedback here. It will automatically show first,
 * with a star rating and a "Client Feedback" badge. Example:
 *
 * {
 *   kind: "testimonial",
 *   name: "Full Name",
 *   role: "Role, Company",
 *   content: "Their actual words.",
 *   rating: 5,
 * },
 */
const testimonials: Slide[] = [];

// Highlights taken directly from the CV
const highlights: Slide[] = [
  {
    kind: "highlight",
    name: "Mahaagromart E-Commerce Platform",
    role: "Full Stack Developer, MAIDC",
    content:
      "Built fast, responsive, SEO-friendly interfaces with server-side rendered Next.js, backed by ASP.NET Core APIs and SQL data models for a large-scale e-commerce catalog.",
  },
  {
    kind: "highlight",
    name: "Auth & Access Control",
    role: "Full Stack Developer, MAIDC",
    content:
      "Implemented authentication and Role-Based Access Control across the frontend and backend using JWT and OAuth 2.0.",
  },
  {
    kind: "highlight",
    name: "Autometa Bot",
    role: "Full Stack Developer, Penpay Technologies",
    content:
      "Connected a React UI to Firebase for real-time data operations and live updates, with API contracts validated in Postman for smooth end-to-end data flow.",
  },
  {
    kind: "highlight",
    name: "Multiple Live Web Projects",
    role: "Frontend Developer, iEveEra Int Ltd",
    content:
      "Delivered scalable, high-performance applications across multiple live production sites, with strong cross-browser compatibility and accessibility.",
  },
];

const slides: Slide[] = [...testimonials, ...highlights];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 300 : -300 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -300 : 300 }),
};

export default function Testimonials() {
  const [[index, direction], setPage] = useState<[number, number]>([0, 1]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = slides.length;
  const current = slides[index];

  const paginate = (dir: number) =>
    setPage(([i]) => [(i + dir + total) % total, dir]);

  // Auto-play (pauses on hover or when the user pauses it)
  useEffect(() => {
    if (!isPlaying || isHovered || total < 2) return;
    const id = setInterval(() => paginate(1), 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, isHovered, total]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      paginate(diff > 0 ? 1 : -1);
      setIsPlaying(false);
    }
  };

  const goTo = (i: number) => {
    setPage([i, i > index ? 1 : -1]);
    setIsPlaying(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="testimonials"
        className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-4 sm:top-16 sm:left-8 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-4 sm:bottom-12 sm:right-8 w-56 h-56 sm:w-80 sm:h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span
              className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}
            >
              Testimonials
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Highlights from live projects across MAIDC, Penpay, and iEveEra
          </motion.p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="relative">
            {/* Carousel Card */}
            <div
              className="overflow-hidden rounded-2xl sm:rounded-3xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-gray-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-cyan-500/30 shadow-2xl"
                >
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400" />
                    <span
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border ${
                        current.kind === "testimonial"
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                          : "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                      }`}
                    >
                      {current.kind === "testimonial" ? (
                        <MessageSquareQuote className="w-4 h-4" />
                      ) : (
                        <Briefcase className="w-4 h-4" />
                      )}
                      {current.kind === "testimonial"
                        ? "Client Feedback"
                        : "Project Highlight"}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-6 sm:mb-8 font-light">
                    &ldquo;{current.content}&rdquo;
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full ring-4 ring-emerald-500/30 bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-black font-bold text-lg sm:text-xl md:text-2xl flex-shrink-0">
                      {getInitials(current.name)}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                        {current.name}
                      </h4>
                      <p className="text-emerald-400 text-sm sm:text-base">
                        {current.role}
                      </p>
                    </div>
                  </div>

                  {current.kind === "testimonial" && current.rating && (
                    <div className="flex gap-1 mt-5 sm:mt-6">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows - Hidden on mobile */}
            <button
              onClick={() => {
                paginate(-1);
                setIsPlaying(false);
              }}
              aria-label="Previous slide"
              className="hidden sm:flex absolute left-3 md:left-4 top-1/2 -translate-y-1/2 p-2.5 md:p-3 bg-gray-800/80 backdrop-blur-sm text-white rounded-full hover:bg-cyan-500 hover:text-black transition-all shadow-lg group"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                paginate(1);
                setIsPlaying(false);
              }}
              aria-label="Next slide"
              className="hidden sm:flex absolute right-3 md:right-4 top-1/2 -translate-y-1/2 p-2.5 md:p-3 bg-gray-800/80 backdrop-blur-sm text-white rounded-full hover:bg-emerald-500 hover:text-black transition-all shadow-lg group"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 p-2 bg-gray-800/80 backdrop-blur-sm text-white rounded-full hover:bg-emerald-500 hover:text-black transition-all z-10"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              ) : (
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
              )}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === index
                    ? "w-10 sm:w-12 h-2.5 sm:h-3 bg-emerald-400 shadow-lg shadow-emerald-400/50"
                    : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-xs sm:text-sm text-gray-500">
              Auto-plays every 5s •{" "}
              <span className="text-cyan-400 font-medium">
                {isPlaying ? "Playing" : "Paused"}
              </span>
            </p>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="text-center mt-4 sm:hidden">
            <p className="text-xs text-gray-600">← Swipe to navigate →</p>
          </div>
        </div>
      </section>
    </>
  );
}