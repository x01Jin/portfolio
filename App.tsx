import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen pb-12">
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 py-8 mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="text-center text-[#5d4037] mt-12 text-sm">
          <p>© {new Date().getFullYear()} x01Jin. Hosted on GitHub Pages.</p>
          <p className="opacity-60 text-xs mt-1">Pixel Cardboard v1.0</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
