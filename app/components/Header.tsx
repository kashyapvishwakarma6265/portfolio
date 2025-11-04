"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Alex_Brush } from "next/font/google";

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Animation variants
const navItemVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

const navItems = [
  "Home", "About", "Skills", "Experience",
  "Projects", "Services", "Testimonials", "Contact"
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) observer.current?.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.current?.disconnect();
    };
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  // Consistent colors
  const textColor = isScrolled
    ? activeSection === activeSection ? "text-emerald-600" : "text-gray-700"
    : "text-white";

  const hoverColor = isScrolled ? "hover:text-emerald-600" : "hover:text-emerald-300";
  const activeUnderlineColor = "bg-emerald-600";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-4xl font-bold tracking-wide ${alexBrush.className} bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-md`}
        >
          KashyapV
        </motion.h1>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center space-x-10"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;

            return (
              <motion.a
                key={item}
                href={`#${id}`}
                onClick={handleNavClick}
                className={`relative text-xl font-medium ${alexBrush.className} transition-all duration-300 ${
                  isActive ? "text-emerald-600" : textColor
                } ${hoverColor}`}
                variants={navItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                {/* Animated Underline */}
                <motion.div
                  className={`absolute -bottom-1 left-0 h-1 ${activeUnderlineColor} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50 p-2"
          aria-label="Toggle menu"
        >
          <motion.div
            className="relative w-8 h-8"
            animate={menuOpen ? "open" : "closed"}
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0, backgroundColor: isScrolled ? "#1f2937" : "#ffffff" },
                open: { rotate: 45, y: 8, backgroundColor: "#059669" },
              }}
              className="absolute top-2 block w-8 h-0.5 origin-center transition-colors"
            />
            <motion.span
              variants={{
                closed: { opacity: 1, backgroundColor: isScrolled ? "#1f2937" : "#ffffff" },
                open: { opacity: 0 },
              }}
              className="absolute top-4 block w-8 h-0.5 transition-colors"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0, backgroundColor: isScrolled ? "#1f2937" : "#ffffff" },
                open: { rotate: -45, y: -8, backgroundColor: "#059669" },
              }}
              className="absolute top-6 block w-8 h-0.5 origin-center transition-colors"
            />
          </motion.div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open: { height: "75vh", opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
          closed: { height: 0, opacity: 0, transition: { duration: 0.4 } },
        }}
        className="md:hidden fixed h-10 inset-0 bg-gradient-to-b from-emerald-50 to-white backdrop-blur-2xl pt-28 overflow-hidden"
      >
        <div className="flex flex-col items-center h-full space-y-5 px-6">
          {navItems.map((item, index) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;

            return (
              <motion.a
                key={item}
                href={`#${id}`}
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`text-5xl font-bold ${alexBrush.className} transition-all duration-300 ${
                  isActive ? "text-emerald-600" : "text-gray-800"
                } hover:text-emerald-600`}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveUnderline"
                    className="h-1.5 bg-emerald-600 mt-3 mx-auto rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </header>
  );
}