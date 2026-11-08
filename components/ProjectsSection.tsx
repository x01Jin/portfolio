import React from "react";
import Section, { revealDelay } from "./Section";
import { PROJECTS, SOCIAL_LINKS } from "../constants";
import { useStars } from "../useStars";
import { ArrowUpRightIcon, StarIcon } from "./Icons";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  Python: "#3572a5",
  Rust: "#dea584",
};

const ProjectsSection: React.FC = () => {
  const { repos } = useStars();
  const projects = PROJECTS.map((project) => ({
    ...project,
    stars: repos[project.repo] ?? project.stars,
  }));

  return (
    <Section id="projects">
      <div data-reveal>
        <p className="eyebrow">02 / Personal projects</p>
        <h2 className="mt-3 text-[clamp(2rem,4vw,2.9rem)] text-ink">
          Pinned projects
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.repo}
            data-reveal="pop"
            style={revealDelay(80 + index * 70)}
            className="plate plate-lift flex flex-col p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <span className="font-display text-base tracking-[0.2em] text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 break-words text-2xl text-ink">
                  {project.name}
                </h3>
              </div>
              {project.stars > 0 && (
                <span
                  className="flex shrink-0 items-center gap-1.5 border border-ink/25 bg-paper px-2 py-1 text-xs font-medium text-ink-soft"
                  aria-label={`${project.stars} stars`}
                >
                  <StarIcon className="h-3.5 w-3.5" />
                  {project.stars}
                </span>
              )}
            </div>

            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
              <span className="flex items-center gap-2 text-sm text-ink-soft">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor:
                      LANGUAGE_COLORS[project.language] ?? "#8a8a8a",
                  }}
                />
                {project.language}
              </span>

              <span className="flex items-center gap-4 text-sm font-medium">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="link inline-flex items-center gap-1"
                  >
                    Play
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="link inline-flex items-center gap-1"
                >
                  Repository
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </a>
              </span>
            </div>
          </article>
        ))}
      </div>

      <div data-reveal style={revealDelay(520)} className="mt-8 flex justify-end">
        <a
          href={`${SOCIAL_LINKS.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost text-base"
        >
          All repositories
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
};

export default ProjectsSection;
