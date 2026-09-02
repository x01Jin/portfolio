import React from "react";
import { motion } from "framer-motion";
import CardboardBox from "./CardboardBox";
import ScrollSection from "./ScrollSection";
import { SOCIAL_LINKS } from "../constants";

type ContactIconName = "email" | "github" | "messenger" | "discord";

const ContactIcon: React.FC<{ name: ContactIconName }> = ({ name }) => {
  const paths = {
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" fill="none" />
        <path d="m3 7 9 6 9-6" fill="none" />
      </>
    ),
    github: (
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17a4.65 4.65 0 0 1 1.23 3.22c0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    ),
    messenger: (
      <path d="M12 3C6.48 3 2 6.9 2 11.7c0 2.74 1.46 5.2 3.75 6.83V22l3.2-1.76c.97.27 1.99.41 3.05.41 5.52 0 10-3.9 10-8.95S17.52 3 12 3Zm-1.03 11.58-2.6-2.77-5.08 2.77 5.59-5.94 2.66 2.77 5.02-2.77-5.59 5.94Z" />
    ),
    discord: (
      <path d="M19.54 4.42A16.7 16.7 0 0 0 15.4 3.1l-.5 1.02a15.6 15.6 0 0 0-5.8 0L8.6 3.1a16.7 16.7 0 0 0-4.14 1.32C1.84 8.37 1.13 12.22 1.49 16.02a16.7 16.7 0 0 0 5.1 2.59l1.24-1.69c-.68-.25-1.33-.56-1.93-.92l.47-.36a11.9 11.9 0 0 0 11.26 0l.47.36c-.6.36-1.25.67-1.93.92l1.24 1.69a16.7 16.7 0 0 0 5.1-2.59c.43-4.41-.73-8.22-2.97-11.6ZM8.64 14.03c-1.1 0-2-.99-2-2.2s.88-2.2 2-2.2c1.13 0 2.02.99 2 2.2 0 1.21-.88 2.2-2 2.2Zm6.72 0c-1.1 0-2-.99-2-2.2s.88-2.2 2-2.2c1.13 0 2.02.99 2 2.2 0 1.21-.88 2.2-2 2.2Z" />
    ),
  };

  return (
    <svg
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={name === "email" ? 1.5 : 0}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

const SkillsContactSection: React.FC = () => {
  return (
    <ScrollSection id="skills-contact">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#3e2723] mb-12 text-center">
            Get in Touch
          </h2>

          <CardboardBox
            className="mx-auto flex max-w-5xl flex-col gap-6 items-center text-center py-10"
            variant="accent"
          >
            <p className="mx-auto mb-4 w-full max-w-2xl break-words px-2 text-center text-base leading-relaxed text-[#3e2723] sm:px-4 sm:text-xl">
              Feel free to reach out for collaborations, troubleshooting, or
              just to chat about AI and Code.
            </p>

            <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <motion.a
                href={`mailto:${SOCIAL_LINKS.email}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full bg-[#e6ccb2] border-2 border-[#5d4037] p-4 shadow-[4px_4px_0_0_#5d4037] hover:bg-[#dcb386] hover:translate-y-1 hover:shadow-[2px_2px_0_0_#5d4037] transition-all text-lg font-bold text-[#3e2723]"
              >
                <ContactIcon name="email" />
                {SOCIAL_LINKS.email}
              </motion.a>

              {/* GitHub */}
              <motion.a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full bg-[#333] text-white border-2 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.5)] transition-all text-lg font-bold"
              >
                <ContactIcon name="github" />
                GitHub Profile
              </motion.a>

              {/* Facebook */}
              <motion.a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full bg-[#4682b4] text-white border-2 border-[#2c3e50] p-4 shadow-[4px_4px_0_0_#2c3e50] hover:bg-[#36648b] hover:translate-y-1 hover:shadow-[2px_2px_0_0_#2c3e50] transition-all text-lg font-bold"
              >
                <ContactIcon name="messenger" />
                Facebook Messenger
              </motion.a>

              {/* Discord */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-2 w-full bg-[#7289da] text-white border-2 border-[#4a5d91] p-4 shadow-[4px_4px_0_0_#4a5d91] text-lg font-bold"
              >
                <ContactIcon name="discord" />
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
