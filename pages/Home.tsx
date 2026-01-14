import React from "react";
import CardboardBox from "../components/CardboardBox";
import { PROFILE, SOCIAL_LINKS } from "../constants";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="inline-block p-4 border-4 border-[#3e2723] bg-[#e6ccb2] shadow-[8px_8px_0px_0px_#3e2723] mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-[#3e2723] mb-2">
            {PROFILE.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#5d4037]">
            {PROFILE.role}
          </h2>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <CardboardBox title="About Me" variant="primary">
          <p className="mb-4">{PROFILE.summary}</p>
          <p>I enjoy doing random projects and using AI for automation.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="bg-[#333] text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] hover:translate-y-1 hover:shadow-none transition-all"
            >
              GitHub Profile
            </a>
            <Link
              to="/projects"
              className="bg-[#a3b18a] text-[#2c3e2c] px-4 py-2 border-2 border-[#2c3e2c] shadow-[4px_4px_0_0_#2c3e2c] hover:translate-y-1 hover:shadow-none transition-all"
            >
              View Projects
            </Link>
          </div>
        </CardboardBox>

        <CardboardBox title="Quick Specs" variant="secondary">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Degree:</strong> CS Graduate
            </li>
            <li>
              <strong>Focus:</strong> Software Development, IT Operations
            </li>
            <li>
              <strong>Core Tech:</strong> Python, JavaScript, TypeScript, React,
              Node.js
            </li>
            <li>
              <strong>Interests:</strong> AI/LLMs, Automation, PC Hardware
            </li>
          </ul>
        </CardboardBox>
      </div>

      <div className="mt-8">
        <CardboardBox title="Objective" variant="accent">
          <p className="text-lg md:text-xl font-medium italic">
            "{PROFILE.objective}"
          </p>
        </CardboardBox>
      </div>
    </div>
  );
};

export default Home;
