import React from "react";
import { PROFILE, PROJECTS, SOCIAL_LINKS } from "../constants";
import { revealDelay, useReveal } from "./Section";
import { ArrowDownIcon, ArrowUpRightIcon, GitHubIcon } from "./Icons";

const totalStars = PROJECTS.reduce((sum, project) => sum + project.stars, 0);

const HeroSection: React.FC = () => {
  const { ref, revealed } = useReveal();

  return (
    <section
      id="home"
      ref={ref}
      className="scroll-mt-24 pt-8 pb-6 md:pt-10 md:pb-8"
    >
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
        <div className={revealed ? "revealed" : undefined}>
          <p data-reveal style={revealDelay(0)} className="eyebrow">
            <span
              aria-hidden="true"
              className="mr-3 inline-block h-2 w-2 -translate-y-0.5 bg-ink"
            />
            {PROFILE.role}
          </p>

          <h1
            data-reveal
            style={revealDelay(80)}
            className="mt-7 text-[clamp(2.9rem,7.5vw,5.25rem)] leading-[0.92] text-ink"
          >
            Alexander James{" "}
            <br />
            Soriano
          </h1>

          <div
            data-reveal
            style={revealDelay(180)}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#work"
              className="btn btn-primary justify-center sm:justify-start"
            >
              View projects
              <ArrowDownIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost justify-center sm:justify-start"
            >
              GitHub
              <ArrowUpRightIcon className="h-5 w-5" />
            </a>
          </div>

          <dl
            data-reveal
            style={revealDelay(270)}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t-2 border-ink/15 pt-6"
          >
            <div>
              <dt className="eyebrow text-[0.95rem] tracking-[0.12em]">
                Projects
              </dt>
              <dd className="mt-1 font-display text-3xl leading-none text-ink">
                06
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.95rem] tracking-[0.12em]">
                Stars
              </dt>
              <dd className="mt-1 font-display text-3xl leading-none text-ink">
                {totalStars}
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.95rem] tracking-[0.12em]">
                Graduated
              </dt>
              <dd className="mt-1 font-display text-3xl leading-none text-ink">
                2025
              </dd>
            </div>
          </dl>
        </div>

        <aside
          data-reveal="pop"
          style={revealDelay(200)}
          className={`plate tape self-start lg:self-center ${
            revealed ? "revealed" : ""
          }`}
        >
          <div className="flex items-center justify-between border-b-2 border-ink/15 px-6 py-4">
            <span className="font-display text-xl uppercase tracking-[0.18em] text-ink-soft">
              Profile
            </span>
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 border border-ink bg-sage"
            />
          </div>

          <dl className="divide-y-2 divide-ink/10">
            <div className="px-6 py-4">
              <dt className="eyebrow text-[0.9rem] tracking-[0.14em]">Now</dt>
              <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-ink">
                <a
                  href={PROFILE.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  {PROFILE.company}
                </a>
                , since {PROFILE.startedAt}.
              </dd>
            </div>

            <div className="px-6 py-4">
              <dt className="eyebrow text-[0.9rem] tracking-[0.14em]">
                Education
              </dt>
              <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-ink">
                {PROFILE.education}, {PROFILE.school}.
              </dd>
            </div>
          </dl>

          <div className="border-t-2 border-ink/15 px-6 py-3">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-display text-lg uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-ink"
            >
              <GitHubIcon className="h-4 w-4" />
              /x01Jin
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;
