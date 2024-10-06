/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const ArchivedIcon = ({ color = "currentColor" }) => (
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
    <polyline points="21 8 21 21 3 21 3 8"></polyline>
    <rect x="2" y="3" width="20" height="5"></rect>
    <line x1="10" y1="12" x2="14" y2="12"></line>
  </svg>
);

ArchivedIcon.propTypes = {
  color: PropTypes.string,
};

export default ArchivedIcon;
