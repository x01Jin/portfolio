import React from "react";
import Section, { revealDelay } from "./Section";
import { ACHIEVEMENTS, EXPERIENCE } from "../constants";

const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience">
      <div data-reveal>
        <p className="eyebrow">01 / Track record</p>
        <h2 className="mt-3 text-[clamp(2rem,4vw,2.9rem)] text-ink">
          Experience
        </h2>
      </div>

      <ol className="mt-10 space-y-10 border-l-2 border-ink/20">
        {EXPERIENCE.map((item, index) => (
          <li
            key={`${item.company}-${item.period}`}
            data-reveal
            style={revealDelay(80 + index * 70)}
            className="node relative pl-7 md:pl-9"
          >
            <div className="md:grid md:grid-cols-[1fr_auto] md:items-start md:gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-2xl text-ink">{item.title}</h3>
                  {item.current && (
                    <span className="border border-ink bg-sage px-2 py-0.5 text-[0.7rem] font-semibold tracking-[0.12em] text-ink uppercase">
                      Current
                    </span>
                  )}
                </div>

                <p className="mt-1 text-[0.95rem] text-ink-soft">
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </p>
              </div>

              <span className="mt-1 block text-sm text-ink-faint md:mt-2 md:text-right">
                {item.period}
              </span>
            </div>

            <ul className="mt-3 space-y-1.5">
              {item.details.map((detail) => (
                <li
                  key={detail}
                  className="flex gap-2.5 text-[0.95rem] leading-relaxed text-ink-soft"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-ink/45"
                  />
                  {detail}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div data-reveal style={revealDelay(360)} className="mt-14">
        <p className="eyebrow">Education &amp; honors</p>
        <div className="mt-4 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.title}
              className="flex items-baseline justify-between gap-4 border-t-2 border-ink/20 pt-4"
            >
              <div>
                <p className="font-display text-xl text-ink">{item.title}</p>
                <p className="text-sm text-ink-faint">{item.issuer}</p>
              </div>
              <span className="shrink-0 text-sm text-ink-faint">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
