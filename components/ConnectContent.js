import React from "react";
import { Twitter, LinkedIn, Instagram, Discord, Codepen, Youtube  } from '../components/UI/svgs'

const connectContent = (props) => (
  <React.Fragment>
    <main className="relative w-full h-full flex place-items-center justify-center">
      <div className="w-5/6 h-5/6 transform-gpu -translate-y-12 bg-gradient-to-tr from-blue-900 to-blue-300 rounded-2xl"></div>
      <div className="glass absolute w-5/6 h-5/6 transform-gpu -translate-y-6 translate-x-6 bg-yellow-300 rounded-2xl">
        <h1 className="text-white text-3xl m-9">You can find me online in these platforms - </h1>
        <div className="m-9 w-1/2 text-white grid grid-cols-3 gap-6">
          <Twitter />
          <LinkedIn />
          <Instagram />
          <Discord />
          <Codepen />
          <Youtube />
        </div>
      </div>
    </main>
  </React.Fragment>
);

export default connectContent;
