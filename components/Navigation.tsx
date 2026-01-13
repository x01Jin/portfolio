import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  const activeStyle = "bg-[#5d4037] text-[#e6ccb2] translate-y-1 shadow-none";
  const inactiveStyle = "bg-[#ddb892] text-[#3e2723] hover:bg-[#b08968] shadow-[4px_4px_0px_0px_#3e2723]";
  const baseBtn = "block w-full md:w-auto text-center px-6 py-2 text-xl font-bold border-2 border-[#3e2723] transition-all duration-150 uppercase tracking-widest mb-2 md:mb-0";

  return (
    <nav className="sticky top-0 z-50 p-4 bg-[#dcb386]/90 backdrop-blur-sm border-b-4 border-[#5d4037]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between w-full md:w-auto items-center">
           <NavLink to="/" className="text-3xl font-bold text-[#3e2723] border-2 border-[#3e2723] p-1 px-3 bg-[#e6ccb2] shadow-[4px_4px_0px_0px_#3e2723]">
            x01Jin
          </NavLink>
          <button 
            className="md:hidden p-2 text-[#3e2723] border-2 border-[#3e2723] bg-[#ddb892]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 mt-4 md:mt-0 w-full md:w-auto`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `${baseBtn} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
