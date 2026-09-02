import React from "react";
import { motion } from "framer-motion";
import CardboardBox from "./CardboardBox";
import ScrollSection from "./ScrollSection";
import { PROFILE, CORE_SKILLS } from "../constants";

const AboutSection: React.FC = () => {
  return (
    <ScrollSection id="about">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#3e2723] mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CardboardBox title="Who I Am" variant="primary">
              <p className="mb-4 leading-relaxed">{PROFILE.summary}</p>
              <p className="text-[#5d4037] font-semibold">
                {PROFILE.education}
              </p>
            </CardboardBox>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <CardboardBox title="Core Skills" variant="secondary">
              <div className="space-y-4">
                {CORE_SKILLS.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#3e2723] rounded-full" />
                    <span className="font-semibold text-[#3e2723]">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardboardBox>
          </motion.div>
        </div>

        {/* Objective */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <CardboardBox title="Objective" variant="accent">
            <p className="text-lg md:text-xl font-medium italic text-[#3e2723]">
              "{PROFILE.objective}"
            </p>
          </CardboardBox>
        </motion.div>
      </div>
    </ScrollSection>
  );
};

export default AboutSection;
