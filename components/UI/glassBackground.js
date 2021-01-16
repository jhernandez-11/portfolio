import React from "react";

const glassBackground = (props) => (
  <React.Fragment>
    <div className="w-5/6 h-5/6 transform-gpu -translate-y-12 bg-gradient-to-tr from-blue-900 to-blue-300 rounded-2xl"></div>
    <div className="glass absolute w-5/6 h-5/6 transform-gpu -translate-y-6 translate-x-6 bg-yellow-300 rounded-2xl">{props.children}</div>
  </React.Fragment>
);

export default glassBackground
