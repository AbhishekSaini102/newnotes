/* eslint-disable no-unused-vars */
// ErrorComponent.jsx
import React from "react";
import propsType from "prop-types";

const ErrorComponent = ({ message }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-red-500 text-white p-4 text-center">
      {message}
    </div>
  );
};

ErrorComponent.propTypes = {
  message: propsType.string,
};

export default ErrorComponent;
