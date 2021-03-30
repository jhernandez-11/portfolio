import React from "react";

const resumeContent = (props) => (
  <React.Fragment>
    <div className="w-full h-full grid place-items-center">
      <iframe
        className="w-full h-full"
        src="/final-resume.pdf"
        title="resume"
      ></iframe>
    </div>
  </React.Fragment>
);

export default resumeContent;
