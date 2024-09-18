/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import PropTypes from "prop-types";

// const CreateFolderIcon = ({ className, size = 24 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     // stroke="currentColor"
//     stroke="#000000"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z" />
//     <line x1="12" y1="10" x2="12" y2="16" />
//     <line x1="9" y1="13" x2="15" y2="13" />
//   </svg>
// );

// CreateFolderIcon.propTypes = {
//   className: PropTypes.string,
//   size: PropTypes.number,
// };

// CreateFolderIcon.defaultProps = {
//   size: 24,
// };

// export default CreateFolderIcon;


import React from "react";
import PropTypes from "prop-types";

const CreateFolderIcon = ({ className, size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z" />
    <line x1="12" y1="10" x2="12" y2="16" />
    <line x1="9" y1="13" x2="15" y2="13" />
  </svg>
);

CreateFolderIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

export default CreateFolderIcon;
