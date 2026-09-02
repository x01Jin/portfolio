import React from "react";
import { motion } from "framer-motion";
import CardboardBox from "./CardboardBox";
import ScrollSection from "./ScrollSection";
import { SKILLS, SOCIAL_LINKS } from "../constants";

const SkillsContactSection: React.FC = () => {
  return (
    <ScrollSection id="skills-contact">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Skills Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#3e2723] mb-12 text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CardboardBox title={skillGroup.category} variant="primary">
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-[#e6ccb2] border-2 border-[#3e2723] text-[#3e2723] font-semibold cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </CardboardBox>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#3e2723] mb-12 text-center">
            Get in Touch
          </h2>

          <CardboardBox
            className="flex flex-col gap-6 items-center text-center py-10"
            variant="accent"
          >
            <p className="text-xl text-[#3e2723] mb-4 max-w-2xl">
              Feel free to reach out for collaborations, troubleshooting, or
              just to chat about AI and Code.
            </p>

            <div className="w-full space-y-4 max-w-lg">
              {/* Email */}
              <motion.a
                href={`mailto:${SOCIAL_LINKS.email}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full bg-[#e6ccb2] border-2 border-[#5d4037] p-4 shadow-[4px_4px_0_0_#5d4037] hover:bg-[#dcb386] hover:translate-y-1 hover:shadow-[2px_2px_0_0_#5d4037] transition-all text-lg font-bold text-[#3e2723]"
              >
                <span className="mr-2">✉️</span>
                {SOCIAL_LINKS.email}
              </motion.a>

              {/* GitHub */}
              <motion.a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full bg-[#333] text-white border-2 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.5)] transition-all text-lg font-bold"
              >
                <span className="mr-2">🔗</span>
                GitHub Profile
              </motion.a>

              {/* Facebook */}
              <motion.a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full bg-[#4682b4] text-white border-2 border-[#2c3e50] p-4 shadow-[4px_4px_0_0_#2c3e50] hover:bg-[#36648b] hover:translate-y-1 hover:shadow-[2px_2px_0_0_#2c3e50] transition-all text-lg font-bold"
              >
                <span className="mr-2">👥</span>
                Facebook Messenger
              </motion.a>

              {/* Discord */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center w-full bg-[#7289da] text-white border-2 border-[#4a5d91] p-4 shadow-[4px_4px_0_0_#4a5d91] text-lg font-bold"
              >
                <span className="mr-2">💬</span>
                {SOCIAL_LINKS.discord}
              </motion.div>
            </div>
          </CardboardBox>
        </motion.div>
      </div>
    </ScrollSection>
  );
};

export default SkillsContactSection;
