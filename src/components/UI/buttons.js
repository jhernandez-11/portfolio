import React from "react";

const buttonOne = (props) => (
  <button
    className="text-white text-lg bg-blue-600 to-blue-600 rounded-3xl py-3 px-6
                          hover:bg-blue-700 transition focus:outline-none focus:ring-4 focus:ring-gray-300 ring-opacity-50"
  >
    {props.children}
  </button>
);

export { buttonOne as ButtonOne };
