// app/testimonials/page.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import { Star, Quote, ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

const dancingScript = Dancing_Script({ 
  subsets: ["latin"], 
  weight: "700",
  display: "swap"
});

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "CEO, PayPulse",
    content: "Delivered our payment gateway 2 weeks early. 1000+ tx/day with zero downtime. Absolute legend.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Priya Sharma",
    role: "CTO, ShopNest",
    content: "Turned our idea into a ₹50L+ revenue store in 21 days. The 3D animations? Pure fire.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Arjun Patel",
    role: "Founder, DashForge",
    content: "500+ concurrent users on a dashboard that looks like Apple built it. Worth every rupee.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play
  useEffect(() => {
    if (!isPlaying) return;

    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setIsPlaying(false);
  };

  const next = () => {
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (i: number) => {
    setIndex(i);
    setIsPlaying(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section id="testimonials" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f] overflow-hidden">
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
            <span className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}>
              Loved by Clients
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Real people. Real results.
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
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-gray-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-cyan-500/30 shadow-2xl"
                  onMouseEnter={() => setIsPlaying(false)}
                  onMouseLeave={() => setIsPlaying(true)}
                >
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400 mb-4 sm:mb-6" />

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-6 sm:mb-8 font-light">
                    "{testimonials[index].content}"
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                    <img
                      src={testimonials[index].avatar}
                      alt={testimonials[index].name}
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full ring-4 ring-emerald-500/30 object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                        {testimonials[index].name}
                      </h4>
                      <p className="text-emerald-400 text-sm sm:text-base">
                        {testimonials[index].role}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mt-5 sm:mt-6">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows - Hidden on mobile */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="hidden sm:flex absolute left-3 md:left-4 top-1/2 -translate-y-1/2 p-2.5 md:p-3 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-cyan-500 transition-all shadow-lg group"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="hidden sm:flex absolute right-3 md:right-4 top-1/2 -translate-y-1/2 p-2.5 md:p-3 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-emerald-500 transition-all shadow-lg group"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 p-2 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-purple-500/80 transition-all z-10"
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
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
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