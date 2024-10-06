// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const SidebarRectangleIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="9" y2="21"></line>
    <line x1="14" y1="8" x2="18" y2="8"></line>
    <line x1="14" y1="12" x2="18" y2="12"></line>
    <line x1="14" y1="16" x2="18" y2="16"></line>
  </svg>
);

SidebarRectangleIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default SidebarRectangleIcon;
