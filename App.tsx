import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    document.querySelector(hash)?.scrollIntoView();
  }, []);

  return (
    <div className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:border-2 focus:border-ink focus:bg-paper focus:px-4 focus:py-2 focus:font-display focus:text-lg"
      >
        Skip to content
      </a>

      <Navigation />

      <main id="content">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <footer className="border-t-2 border-ink bg-paper-3">
        <div className="shell flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg text-ink-soft">
            © {new Date().getFullYear()} Alexander James Soriano
          </p>
          <p className="text-xs text-ink-soft">
            Built with React, Tailwind CSS, and Vite. Hosted on GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
