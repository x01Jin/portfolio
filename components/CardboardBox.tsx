import React from "react";

interface CardboardBoxProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  title?: string;
}

const CardboardBox: React.FC<CardboardBoxProps> = ({
  children,
  className = "",
  variant = "primary",
  title,
}) => {
  // Pastel palette mapping
  const colors = {
    primary: "bg-[#e6ccb2]", // Lighter cardboard
    secondary: "bg-[#a3b18a]", // Muted Green (Sage)
    accent: "bg-[#b5838d]", // Muted Red (Dusty Rose)
  };

  const baseStyle = `
    relative 
    border-4 border-[#5d4037] 
    shadow-[6px_6px_0px_0px_#5d4037] 
    rounded-sm 
    p-6 
    transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#5d4037]
  `;

  return (
    <div className={`${baseStyle} ${colors[variant]} ${className}`}>
      {/* Tape effect top center */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-[#ffffff] opacity-40 rotate-1"></div>

      {title && (
        <div className="mb-4 border-b-2 border-[#5d4037] border-dashed pb-2">
          <h3 className="text-2xl font-bold text-[#3e2723] uppercase tracking-widest">
            {title}
          </h3>
        </div>
      )}
      <div className="text-[#3e2723] text-lg leading-relaxed w-full flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default CardboardBox;
