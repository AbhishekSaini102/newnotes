/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const HomeIcon = ({ color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

HomeIcon.propTypes = {
  color: PropTypes.string,
};

export default HomeIcon;
