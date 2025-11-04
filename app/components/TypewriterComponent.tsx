"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const phrases = [
  "I build stunning web apps.",
  "I craft seamless user experiences.",
  "I turn ideas into reality.",
  "I love clean, scalable code.",
];

export default function TypewriterComponent() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timer = setTimeout(() => {
      setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)));

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <div className="h-10 flex items-center">
      <motion.span className="text-green-400 font-medium">
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-1 h-6 bg-green-400 ml-1 align-middle"
        />
      </motion.span>
    </div>
  );
}