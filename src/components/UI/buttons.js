import React from "react";

const buttonOne = (props) => (
  <button
    className="text-gray-lightest text-lg bg-blue-dark to-blue-light rounded-3xl py-3 px-6
                          hover:bg-blue-light transition focus:outline-none focus:ring-4 focus:ring-gray-lightest ring-opacity-50"
  >
    {props.children}
  </button>
);

export { buttonOne as ButtonOne };
