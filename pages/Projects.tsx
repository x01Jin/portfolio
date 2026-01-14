import React from "react";
import CardboardBox from "../components/CardboardBox";
import { PROJECTS } from "../constants";

const Projects: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#3e2723] bg-[#e6ccb2] inline-block px-4 border-b-4 border-[#3e2723]">
          /projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <CardboardBox
            key={index}
            title={project.name}
            className="flex flex-col h-full"
          >
            <p className="flex-grow mb-4 text-[#4e342e]">
              {project.description}
            </p>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-[#fff8dc] px-2 py-1 border border-[#3e2723] text-[#3e2723]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="block text-center w-full bg-[#6d597a] text-[#fff] py-2 border-2 border-[#3e2723] shadow-[4px_4px_0_0_#3e2723] hover:bg-[#584665] hover:shadow-[2px_2px_0_0_#3e2723] hover:translate-y-[2px] transition-all"
              >
                View Repository
              </a>
            </div>
          </CardboardBox>
        ))}
      </div>
    </div>
  );
};

export default Projects;
