import React from "react";

const aboutContent = (props) => (
  <React.Fragment>
    <main className="relative w-full h-full flex place-items-center justify-center">
      <div className="w-5/6 h-5/6 transform-gpu -translate-y-12 bg-gradient-to-tr from-blue-900 to-blue-300 rounded-2xl"></div>
      <div className="glass absolute w-5/6 h-5/6 transform-gpu -translate-y-6 translate-x-6 bg-yellow-300 rounded-2xl">
        <h1 className="font-secondary text-white text-2xl m-9">
          Hello, my name is Jose, and I'm an entry-level web designer/developer.
          As an Ohlone College Alumni, I hold an Associate's Degree in
          Multimedia and a Certificate of Achievement in Multimedia: Front End
          Development/User Experience Web Design. My experience additionally
          includes, but not limited to, the following -
        </h1>
        <ul className="font-secondary text-white text-xl uppercase m-12 list-disc grid grid-flow-col grid-cols-3 grid-rows-5 gap-3">
          <li>HTML5: 2 years</li>
          <li>CSS3/SASS: 2 years</li>
          <li>JS ES6: 2 years</li>
          <li>JQUERY: 2 years</li>
          <li>TAILWIND: 2 years</li>
          <li>REACT: 2 years</li>
          <li>NEXT.JS: 1 year</li>
          <li>NODE.JS: 2 years</li>
          <li>EXPRESS: 2 years</li>
          <li>GIT: 2 years</li>
          <li>MONGODB: 1 year</li>
          <li>FIREBASE: 1 year</li>
          <li>SKETCH: 1 year</li>
          <li>FIGMA: 1 year</li>
          <li>ADOBE XD: 1 year</li>
        </ul>
      </div>
    </main>
  </React.Fragment>
);

export default aboutContent;
