import React, { useState } from "react";

const MenuIcon = ({ color, hoverColor }) => {
  const [currentColor, setCurrentColor] = useState(color);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={currentColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={() => setCurrentColor(hoverColor)}
      onMouseLeave={() => setCurrentColor(color)}
    >
      <circle cx="4" cy="12" r="1"></circle>
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="20" cy="12" r="1"></circle>
    </svg>
  );
};

export default MenuIcon;
