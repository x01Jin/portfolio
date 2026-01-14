import React from "react";
import CardboardBox from "../components/CardboardBox";
import { ACHIEVEMENTS, SEMINARS, PROFILE } from "../constants";

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#3e2723] mb-4 bg-[#e6ccb2] inline-block px-4 border-b-4 border-[#3e2723]">
          /resume
        </h2>
      </div>

      <CardboardBox title="Education & Achievements" variant="primary">
        <div className="space-y-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div key={idx} className="border-l-4 border-[#8b5a2b] pl-4">
              <h4 className="text-xl font-bold text-[#5d4037]">{ach.title}</h4>
              <p className="text-[#8b5a2b] font-bold">{ach.issuer}</p>
              {ach.details && (
                <ul className="list-disc list-inside mt-2 text-[#3e2723]">
                  {ach.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </CardboardBox>

      <CardboardBox title="Seminars" variant="secondary">
        <ul className="space-y-4">
          {SEMINARS.map((seminar, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 text-[#3e2723] text-2xl">•</span>
              <span className="mt-1">{seminar}</span>
            </li>
          ))}
        </ul>
      </CardboardBox>

      <CardboardBox title="Technical Skills" variant="accent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold underline mb-2">Languages</h4>
            <p>Python, JavaScript, TypeScript, SQL</p>
          </div>
          <div>
            <h4 className="font-bold underline mb-2">Frameworks & Tools</h4>
            <p>React, Node.js, PyQt6, Git/GitHub, Bootstrap, Tailwind</p>
          </div>
          <div>
            <h4 className="font-bold underline mb-2">AI & Data</h4>
            <p>OpenCV, LLMs (Local), Machine Learning Concepts</p>
          </div>
          <div>
            <h4 className="font-bold underline mb-2">Hardware</h4>
            <p>PC Troubleshooting, Maintenance, IoT</p>
          </div>
        </div>
      </CardboardBox>
    </div>
  );
};

export default Resume;
