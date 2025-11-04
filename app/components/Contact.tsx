// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import { Send, MapPin, Mail, Phone, CheckCircle, AlertCircle } from "lucide-react";

const dancingScript = Dancing_Script({ 
  subsets: ["latin"], 
  weight: "700",
  display: "swap"
});

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="contact"  className="relative py-20 md:py-28 bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-16 left-8 sm:left-16 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-12 right-8 sm:right-16 w-64 h-64 sm:w-80 sm:h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}>
              Let's Talk
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Turn your vision into code — today.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Form */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="order-2 md:order-1"
            >
              <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border border-cyan-500/30 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all resize-none text-base"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold rounded-xl shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed transition-all text-base sm:text-lg"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-center flex items-center justify-center gap-2"
                    >
                      <AlertCircle className="w-5 h-5" />
                      Oops! Something went wrong. Try again.
                    </motion.p>
                  )}
                </form>

                <p className="text-xs text-gray-500 mt-6 text-center">
                  Powered by{" "}
                  <a
                    href="https://formspree.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Formspree
                  </a>
                  {" "}– no backend needed
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="order-1 md:order-2 space-y-8"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/20 rounded-xl flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-base sm:text-lg">hello@yourname.com</p>
                      <p className="text-sm text-gray-500 mt-1">I reply to every email</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/20 rounded-xl flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-base sm:text-lg">+91 98765 43210</p>
                      <p className="text-sm text-gray-500 mt-1">Call or WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-xl flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-base sm:text-lg">Mumbai, India</p>
                      <p className="text-sm text-gray-500 mt-1">Available for remote & hybrid</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl p-6 sm:p-8 border border-cyan-500/30">
                <h4 className="text-xl font-bold text-white mb-3">Lightning Response</h4>
                <p className="text-4xl sm:text-5xl font-bold text-emerald-400">≤ 2 hours</p>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  Weekdays 9 AM – 9 PM IST
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-3">
                  Weekend replies within 12 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}