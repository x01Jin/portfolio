import React from "react";
import { motion } from "framer-motion";
import CardboardBox from "./CardboardBox";
import ScrollSection from "./ScrollSection";
import { PROJECTS } from "../constants";

const ProjectsSection: React.FC = () => {
  return (
    <ScrollSection id="projects">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#3e2723] mb-12 text-center"
        >
          Projects & Portfolio
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <CardboardBox
                title={project.name}
                className="flex flex-col h-full hover:shadow-[12px_12px_0px_0px_#3e2723] transition-shadow"
              >
                <p className="flex-grow mb-4 text-[#4e342e] leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 }}
                        className="text-sm bg-[#fff8dc] px-2 py-1 border border-[#3e2723] text-[#3e2723] font-semibold"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block text-center w-full bg-[#6d597a] text-white py-2 border-2 border-[#3e2723] shadow-[4px_4px_0_0_#3e2723] hover:bg-[#584665] hover:shadow-[2px_2px_0_0_#3e2723] hover:translate-y-[2px] transition-all font-bold"
                  >
                    View Repository →
                  </motion.a>
                </div>
              </CardboardBox>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
};

export default ProjectsSection;
