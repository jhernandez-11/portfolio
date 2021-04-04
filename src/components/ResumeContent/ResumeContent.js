import React from "react";

const resumeContent = (props) => (
  <React.Fragment>
    <div className="w-full h-full grid place-items-center">
      
      <object
        data="/final-resume.pdf"
        type="application/pdf"
        className=" w-5/12 h-full"
      >
        <a href="/final-resume.pdf">Download resume</a>
      </object>
    </div>
  </React.Fragment>
);

export default resumeContent;
