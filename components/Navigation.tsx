import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "../constants";

interface NavLink {
  name: string;
  id: string;
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links: NavLink[] = [
    { name: "Home", id: "home" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "skills-contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => {
        const element = document.getElementById(link.id);
        if (!element) return null;

        const rect = element.getBoundingClientRect();
        return {
          id: link.id,
          offset: rect.top,
        };
      });

      // Find the section closest to the top of the viewport
      const closestSection = sections
        .filter((s) => s !== null)
        .reduce((closest, current) => {
          if (!closest) return current;
          return Math.abs(current!.offset) < Math.abs(closest.offset)
            ? current
            : closest;
        });

      if (closestSection) {
        setActiveSection(closestSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const activeStyle = "bg-[#5d4037] text-[#e6ccb2] translate-y-1 shadow-none";
  const inactiveStyle =
    "bg-[#ddb892] text-[#3e2723] hover:bg-[#b08968] shadow-[4px_4px_0px_0px_#3e2723]";
  const baseBtn =
    "block w-full md:w-auto text-center px-6 py-2 text-lg font-bold border-2 border-[#3e2723] transition-all duration-150 uppercase tracking-wider mb-2 md:mb-0";

  return (
    <nav className="sticky top-0 z-50 p-4 bg-[#dcb386]/95 backdrop-blur-sm border-b-4 border-[#5d4037]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-between w-full md:w-auto items-center"
        >
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit GitHub profile"
            className="flex items-center gap-2 text-2xl font-bold text-[#3e2723] border-2 border-[#3e2723] p-1 px-3 bg-[#e6ccb2] shadow-[4px_4px_0px_0px_#3e2723] hover:shadow-none transition-all"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17a4.65 4.65 0 0 1 1.23 3.22c0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
            </svg>
            x01Jin
          </a>
          <button
            className="md:hidden p-2 text-[#3e2723] border-2 border-[#3e2723] bg-[#ddb892] font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-4 mt-4 md:mt-0 w-full md:w-auto`}
        >
          {links.map((link, idx) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => smoothScroll(link.id)}
              className={`${baseBtn} ${
                activeSection === link.id ? activeStyle : inactiveStyle
              }`}
            >
              {link.name}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;
