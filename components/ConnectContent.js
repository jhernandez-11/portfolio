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
    <main className="relative w-full h-full flex place-items-center justify-center z-10">
      <GlassBackground>
        <h1 className="text-white text-3xl m-9 w-1/2">
          I live and was born in the Bay Area, but you can find me online in these platforms -{" "}
        </h1>
        <div className="m-9 w-1/2 text-white grid grid-cols-3 gap-6">
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
