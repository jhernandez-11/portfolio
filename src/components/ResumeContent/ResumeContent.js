import React from "react";

const resumeContent = (props) => (
  <React.Fragment>
    <div className="w-full h-full grid place-items-center overflow-hidden">
      <div className="night">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <object
        data="/final-resume.pdf"
        type="application/pdf"
        className=" w-5/12 h-full pb-6 z-10"
      >
        <a href="/final-resume.pdf">Download resume</a>
      </object>
    </div>
  </React.Fragment>
);

export default resumeContent;
