import React from "react";
import {
  Rocket,
  Sun,
  Telescope,
  Star,
  Snow,
  Infinate,
  Hourglass,
  Earth,
  Moon,
} from "./icons";

const iconBackground = (props) => {
  const cluster = (
    <React.Fragment>
      <Sun />
      <Rocket />
      <Telescope />
      <Star />
      <Snow />
      <Infinate />
      <Hourglass />
      <Earth />
      <Moon />
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <div className="w-full h-full place-items-end absolute pb-3 grid grid-flow-col grid-cols-9 grid-rows-6 justify-items-center opacity-50 z-0">
        { cluster }
        { cluster }
        { cluster }
        { cluster }
        { cluster }
        { cluster }
      </div>
    </React.Fragment>
  );
};

export default iconBackground;
