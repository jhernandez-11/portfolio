import React from "react";

const project = (props) => (
  <React.Fragment>
    <iframe
      src={props.project}
      className="iframe-placeholder w-full h-screen pb-16"
    ></iframe>
  </React.Fragment>
);

export default project;
