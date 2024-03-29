import React from "react";
import { ButtonOne } from "../components/UI/buttons";
import IconBackground from "../components/UI/iconBackground/iconBackground";

const main = (props) => (
  <React.Fragment>
    <IconBackground />
    <main className="grid grid-cols-2 place-items-center font-comfortaa w-full h-full z-10">
      <div className="relative">
        <img src="/logo-color.png" alt="logo" width="450" height="450" />
      </div>

      <div>
        <h1 className="font-nunito left-2/4 top-28 mr-12 text-5xl text-gray-lightest pb-3">
          Jose Hernandez
        </h1>
        <h1 className="font-nunito left-2/4 top-28 mr-12 text-3xl text-gray-lightest pb-3">
          Front End Developer
        </h1>
        <h1 className="font-nunito left-2/4 top-28 mr-12 text-3xl text-blue-light border-b-4 border-blue-default pb-3 mb-6">
          Using your imagination and my dedication, we will launch a website
          that will transcend others. <br /> <b>Initiate your journey below.</b>
        </h1>

        <div className="flex row justify-between font-nunito">
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
