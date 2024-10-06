/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const EditIcon = ({ color = "currentColor" , size="14"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    height={size}
    width={size}
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);
EditIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default EditIcon;
