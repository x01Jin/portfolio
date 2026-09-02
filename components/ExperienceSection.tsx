import React from "react";
import { motion } from "framer-motion";
import CardboardBox from "./CardboardBox";
import ScrollSection from "./ScrollSection";
import { EXPERIENCE, ACHIEVEMENTS, SEMINARS } from "../constants";

const ExperienceSection: React.FC = () => {
  return (
    <ScrollSection id="experience">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#3e2723] mb-12 text-center"
        >
          Experience & Achievements
        </motion.h2>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#5d4037] mb-8 flex items-center gap-3">
            <span className="w-4 h-4 bg-[#3e2723]" />
            Professional Experience
          </h3>

          <div className="space-y-6">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <CardboardBox className="border-l-4 border-[#8b5a2b]">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-[#3e2723]">
                        {exp.title}
                      </h4>
                      <p className="text-[#8b5a2b] font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm bg-[#e6ccb2] px-3 py-1 border border-[#3e2723] text-[#3e2723] font-semibold whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-[#3e2723]">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </CardboardBox>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements & Seminars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CardboardBox title="Achievements" variant="primary">
              <div className="space-y-6">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div key={idx} className="border-l-4 border-[#8b5a2b] pl-4">
                    <h4 className="text-lg font-bold text-[#5d4037]">
                      {ach.title}
                    </h4>
                    <p className="text-[#8b5a2b] font-semibold text-sm">
                      {ach.issuer}
                    </p>
                    {ach.details && (
                      <ul className="list-disc list-inside mt-2 text-[#3e2723] text-sm">
                        {ach.details.map((detail, dIdx) => (
                          <li key={dIdx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </CardboardBox>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CardboardBox title="Seminars" variant="secondary">
              <div className="space-y-4">
                {SEMINARS.map((seminar, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 text-[#3e2723] font-bold">•</span>
                    <span className="text-[#3e2723]">{seminar}</span>
                  </motion.div>
                ))}
              </div>
            </CardboardBox>
          </motion.div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default ExperienceSection;
