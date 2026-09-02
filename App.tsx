import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsContactSection from "./components/SkillsContactSection";

function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-[#fef6e4]">
      <Navigation />
      <main className="w-full">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsContactSection />
      </main>

      <footer className="text-center text-[#5d4037] py-8 border-t-4 border-[#3e2723] bg-[#e6ccb2]">
        <p className="font-semibold">
          © {new Date().getFullYear()} x01Jin. Hosted on GitHub Pages.
        </p>
        <p className="opacity-60 text-sm mt-2">
          Pixel Cardboard v2.0 • Single-Page Portfolio
        </p>
      </footer>
    </div>
  );
}

export default App;
