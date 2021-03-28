import React from "react";
import GlassBackground from "./UI/glassBackground";
import {
  Twitter,
  LinkedIn,
  Instagram,
  Discord,
  Codepen,
  Youtube,
} from "../components/UI/svgs";

const connectContent = (props) => (
  <React.Fragment>
    <main className="flex place-items-center justify-center relative font-comfortaa w-full h-full z-10">
      <GlassBackground>
        <h1 className="text-gray-lightest text-3xl m-9 w-2/3">
          Located in the Bay Area, but you can find me online in these platforms -{" "}
        </h1>
        <div className="grid grid-cols-3 gap-6 m-9 w-2/3">
          <Twitter />
          <LinkedIn />
          <Instagram />
          <Discord />
          <Codepen />
          <Youtube />
        </div>
      </GlassBackground>
    </main>
  </React.Fragment>
);

export default connectContent;
