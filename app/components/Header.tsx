"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
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
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Services",
  "Testimonials",
  "Contact",
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observer = useRef<IntersectionObserver | null>(null);

  // Scroll state + active section tracking
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

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

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on Escape and when resizing up to desktop
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  // Colors for inactive desktop links
  const inactiveColor = isScrolled ? "text-gray-700" : "text-white";
  const hoverColor = isScrolled
    ? "hover:text-emerald-600"
    : "hover:text-emerald-300";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled || menuOpen
            ? "bg-white/95 backdrop-blur-lg shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <nav
          className={`container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
            isScrolled ? "py-3" : "py-4 sm:py-5"
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={handleNavClick}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-3xl sm:text-4xl font-bold tracking-wide ${alexBrush.className} bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-md`}
          >
            KashyapV
          </motion.a>

          {/* Desktop Navigation (lg and up) */}
          <motion.div
            className="hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-10"
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
                  className={`group relative text-lg xl:text-xl 2xl:text-2xl font-medium ${alexBrush.className} transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded ${
                    isActive ? "text-emerald-600" : inactiveColor
                  } ${hoverColor}`}
                  variants={navItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {/* Tailwind-only animated underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-emerald-600 transition-transform duration-500 ease-out group-hover:scale-x-100 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Mobile / Tablet Menu Toggle (below lg) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 -mr-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <motion.div
              className="relative w-8 h-8"
              animate={menuOpen ? "open" : "closed"}
            >
              <motion.span
                variants={{
                  closed: {
                    rotate: 0,
                    y: 0,
                    backgroundColor: isScrolled ? "#1f2937" : "#ffffff",
                  },
                  open: { rotate: 45, y: 8, backgroundColor: "#059669" },
                }}
                className="absolute top-2 block w-8 h-0.5 origin-center"
              />
              <motion.span
                variants={{
                  closed: {
                    opacity: 1,
                    backgroundColor: isScrolled ? "#1f2937" : "#ffffff",
                  },
                  open: { opacity: 0 },
                }}
                className="absolute top-4 block w-8 h-0.5"
              />
              <motion.span
                variants={{
                  closed: {
                    rotate: 0,
                    y: 0,
                    backgroundColor: isScrolled ? "#1f2937" : "#ffffff",
                  },
                  open: { rotate: -45, y: -8, backgroundColor: "#059669" },
                }}
                className="absolute top-6 block w-8 h-0.5 origin-center"
              />
            </motion.div>
          </button>
        </nav>
      </header>

      {/* Mobile / Tablet Menu — rendered OUTSIDE <header> so backdrop-blur
          doesn't break `fixed` positioning */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 z-40 bg-gradient-to-b from-emerald-50 to-white overflow-y-auto overscroll-contain"
          >
            <div className="flex min-h-full flex-col items-center px-6 pt-24 pb-10 sm:pt-28">
              <div className="my-auto flex flex-col items-center gap-3 sm:gap-5">
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
                      transition={{ delay: index * 0.07, duration: 0.45 }}
                      className={`text-4xl sm:text-5xl md:text-6xl font-bold ${alexBrush.className} transition-colors duration-300 hover:text-emerald-600 ${
                        isActive ? "text-emerald-600" : "text-gray-800"
                      }`}
                    >
                      {item}
                      {isActive && (
                        <motion.div
                          layoutId="mobileActiveUnderline"
                          className="h-1 sm:h-1.5 bg-emerald-600 mt-2 mx-auto rounded-full w-4/5"
                        />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}