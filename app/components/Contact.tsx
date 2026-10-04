// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpjapnb";
const EMAIL = "kashyapvishwakarma6526@gmail.com";
const PHONE_DISPLAY = "+91 8169498017";
const PHONE_LINK = "+918169498017";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

type Status = "idle" | "sending" | "success" | "error";
type FieldErrors = Record<string, string>;

const inputClasses =
  "w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all text-base";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    setFieldErrors({});

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
        return;
      }

      // Formspree returns { errors: [{ field, message }] } on validation errors
      const json = await res.json().catch(() => null);
      if (json?.errors && Array.isArray(json.errors)) {
        const mapped: FieldErrors = {};
        let general = "";
        json.errors.forEach((err: { field?: string; message: string }) => {
          if (err.field) mapped[err.field] = err.message;
          else general = err.message;
        });
        setFieldErrors(mapped);
        setErrorMsg(general || "Please check the highlighted fields.");
      } else {
        setErrorMsg("Oops! Something went wrong. Please try again.");
      }
      setStatus("error");
    } catch {
      setErrorMsg("Network error. Check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="contact"
        className="relative py-20 md:py-28 bg-gradient-to-b from-[#0a1a2e] via-[#0f2c3e] to-[#0a3d4f] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-40 pointer-events-none">
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
            <span
              className={`${dancingScript.className} bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`}
            >
              Let&apos;s Talk
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Have a project in mind? Send me a message.
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
              transition={{ delay: 0.2, duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border border-cyan-500/30 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Spam honeypot (Formspree ignores submissions that fill this) */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New message from your portfolio"
                  />

                  <div>
                    <label htmlFor="name" className="sr-only">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      autoComplete="name"
                      className={inputClasses}
                    />
                    {fieldErrors.name && (
                      <p className="text-red-400 text-sm mt-2">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      autoComplete="email"
                      className={`${inputClasses} ${
                        fieldErrors.email ? "border-red-500" : ""
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-red-400 text-sm mt-2">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      required
                      className={`${inputClasses} resize-none ${
                        fieldErrors.message ? "border-red-500" : ""
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="text-red-400 text-sm mt-2">
                        {fieldErrors.message}
                      </p>
                    )}
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

                  <div aria-live="polite">
                    {status === "success" && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-emerald-400 text-center flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Thanks! I&apos;ll get back to you soon.
                      </motion.p>
                    )}
                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-center flex items-center justify-center gap-2"
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        {errorMsg}
                      </motion.p>
                    )}
                  </div>
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
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="order-1 md:order-2 space-y-8"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-5">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-cyan-500/20 rounded-xl flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-300 text-base sm:text-lg break-all group-hover:text-white transition-colors">
                        {EMAIL}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Email</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${PHONE_LINK}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-emerald-500/20 rounded-xl flex-shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-base sm:text-lg group-hover:text-white transition-colors">
                        {PHONE_DISPLAY}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Call or WhatsApp
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-500/20 rounded-xl flex-shrink-0">
                      <MapPin className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-base sm:text-lg">
                        Mumbai, India
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Location</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl p-6 sm:p-8 border border-cyan-500/30">
                <h4 className="text-xl font-bold text-white mb-2">
                  Prefer a quicker chat?
                </h4>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  Reach out directly by WhatsApp, phone, or email.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${PHONE_LINK.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}