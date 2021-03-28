import React from "react";
import GlassBackground from "./UI/glassBackground";

const aboutContent = (props) => (
  <React.Fragment>
    <main className="flex place-items-center justify-center relative font-comfortaa w-full h-full z-10">
      <GlassBackground>
        <h1 className="text-gray-lightest text-2xl m-9">
          Hello, my name is Jose, and I'm an entry-level front end developer.
          As an Ohlone College Student, I'm pursuing an Associate's Degree in
          Multimedia and a Certificate of Achievement in Multimedia: Front End
          Development/User Experience Web Design. My experience additionally
          includes, but not limited to, the following -
        </h1>
        <ul className="grid grid-flow-col grid-cols-3 grid-rows-5 gap-3 text-gray-lightest text-xl uppercase m-12 list-disc">
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
      </GlassBackground>
    </main>
  </React.Fragment>
);

export default aboutContent;
