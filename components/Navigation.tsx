import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavLink {
  name: string;
  id: string;
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links: NavLink[] = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
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

      const visibleSection = sections
        .filter((s) => s && s.offset < window.innerHeight / 2)
        .pop();

      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <button
            onClick={() => smoothScroll("home")}
            className="text-2xl font-bold text-[#3e2723] border-2 border-[#3e2723] p-1 px-3 bg-[#e6ccb2] shadow-[4px_4px_0px_0px_#3e2723] hover:shadow-none transition-all"
          >
            x01Jin
          </button>
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
