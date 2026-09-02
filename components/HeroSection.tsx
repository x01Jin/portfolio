import React from "react";
import { motion } from "framer-motion";
import { PROFILE, SOCIAL_LINKS } from "../constants";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="text-center max-w-4xl"
      >
        {/* Main Title Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block p-6 md:p-8 border-4 border-[#3e2723] bg-[#e6ccb2] shadow-[8px_8px_0px_0px_#3e2723] mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#3e2723] mb-2">
            {PROFILE.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#5d4037]">
            {PROFILE.role}
          </h2>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#3e2723] mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {PROFILE.summary}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#about"
            className="inline-block bg-[#3e2723] text-[#e6ccb2] px-8 py-3 border-2 border-[#3e2723] shadow-[4px_4px_0_0_#3e2723] hover:translate-y-1 hover:shadow-none transition-all font-bold text-lg"
          >
            Explore My Work ↓
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-[#5d4037]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
