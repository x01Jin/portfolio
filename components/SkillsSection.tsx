import React from "react";
import Section from "./Section";
import { SKILLS } from "../constants";

const SkillsSection: React.FC = () => {
  return (
    <Section id="skills">
      <div>
        <p className="eyebrow">03 / Toolbox</p>
        <h2 className="mt-3 text-[clamp(2rem,4vw,2.9rem)] text-ink">Skills</h2>
      </div>

      <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {SKILLS.map((group) => (
          <div key={group.category} className="border-t-2 border-ink/20 pt-4">
            <h3 className="font-display text-xl tracking-[0.1em] text-ink-soft uppercase">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
