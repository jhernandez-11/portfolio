import React from "react";

const glassBackground = (props) => (
  <React.Fragment>
    <div className="transform-gpu -translate-y-12 w-5/6 h-5/6 bg-gradient-to-tr from-blue-900 to-blue-300 rounded-2xl"></div>
    <div className="glass absolute transform-gpu -translate-y-6 translate-x-6 w-5/6 h-5/6 bg-yellow-300 rounded-2xl">{props.children}</div>
  </React.Fragment>
);

export default glassBackground
