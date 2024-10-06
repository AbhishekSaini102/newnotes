/* eslint-disable no-unused-vars */
import React from "react";
import propTypes from "prop-types";

const SearchIcon = ({size="24", color="black"}) => (
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
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

SearchIcon.propTypes = {
  size: propTypes.number,
  color: propTypes.string
}

export default SearchIcon;
