import React from "react";
import { ButtonOne } from "../components/UI/buttons";
import IconBackground from '../components/UI/iconBackground/iconBackground'

const main = (props) => (
  <React.Fragment>
    <IconBackground />
    <main className="grid grid-cols-2 place-items-center w-full h-full z-10">
      <div className="relative">
        <div className="w-96 h-96"></div>
        <div className="glass absolute z-10 w-96 h-96 top-0"></div>
        <div
          className="absolute z-0 w-96 h-96 self-center top-0 
                        flex place-items-center justify-center"
        >
          <h3 className="font-secondary text-white text-6xl w-min leading-normal font-bold">
            Ideas are Infinite.
          </h3>
        </div>
        <div className="glass absolute -bottom-12 -right-12 z-20 w-24 h-24 rounded-full"></div>
      </div>

      <div>
        <h1 className="left-2/4 top-28 mr-12 text-5xl text-white border-b-4 border-blue-600 pb-3 mb-6">
          Using your imagination and my dedication, we can launch a website that
          will illuminate in people's eyes. Initiate your journey below.
        </h1>
        <div className="flex row justify-between">
          <a
            href="mailto:astrosites.io@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonOne>Send Email</ButtonOne>
          </a>
        </div>
      </div>
    </main>
  </React.Fragment>
);

export default main;
