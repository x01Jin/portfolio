import React, { useEffect, useRef, useState } from "react";
import { SOCIAL_LINKS } from "../constants";
import { CloseIcon, GitHubIcon, MenuIcon } from "./Icons";

const LINKS = [
  { label: "Experience", id: "experience" },
  { label: "Personal projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter((el): el is HTMLElement => el !== null);

    let frame = 0;

    const update = () => {
      frame = 0;
      const marker = window.innerHeight * 0.4;
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= marker && rect.bottom > marker;
      });
      setActive(current?.id ?? "");

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      headerRef.current?.style.setProperty("--progress", progress.toFixed(4));
    };

    const schedule = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b-2 border-ink bg-paper"
    >
      <nav
        aria-label="Sections"
        className="shell flex h-16 items-center justify-between gap-4"
      >
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Alexander James Soriano, back to top"
        >
          <span className="grid h-9 w-9 place-items-center border-2 border-ink bg-ink font-display text-lg leading-none text-paper">
            x0
          </span>
          <span className="font-display text-xl tracking-wide text-ink">
            x01Jin
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "location" : undefined}
              className={`nav-link px-3 py-2 font-display text-lg uppercase tracking-[0.12em] transition-colors ${
                active === link.id
                  ? "text-ink"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="hidden h-10 w-10 place-items-center border-2 border-ink bg-paper-2 text-ink transition-transform hover:-translate-y-0.5 md:grid"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center border-2 border-ink bg-paper-2 text-ink md:hidden"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        data-open={open}
        aria-hidden={!open}
        className="menu-panel md:hidden"
      >
        <div className="shell flex flex-col py-2">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-ink/15 py-3 font-display text-xl uppercase tracking-[0.12em] text-ink last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="nav-progress" aria-hidden="true" />
    </header>
  );
};

export default Navigation;
