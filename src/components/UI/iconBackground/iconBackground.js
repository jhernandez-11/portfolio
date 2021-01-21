import React, { Component } from "react";
import {
  Rocket,
  Sun,
  Telescope,
  Star,
  Snow,
  Infinite,
  Hourglass,
  Earth,
  Moon,
} from "./icons";

class IconBackground extends Component {
  componentDidMount() {
    const anime = require("../../../utils/anime.min.js");
    anime({
      targets: ".el svg",
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      delay: anime.stagger(200, { grid: [6, 9], from: "center" }),
    });
  }

  animationHandler = () => {
    const anime = require("../../../utils/anime.min.js");
    anime({
      targets: ".el svg",
      scale: [
        { value: 0.1, easing: "easeOutBack", duration: 500 },
        { value: 1, easing: "easeInBack", duration: 1200 },
      ],
      delay: anime.stagger(200, { grid: [6, 9], from: "center" }),
    });
  };

  render() {
    const cluster = (
      <React.Fragment>
        <Sun />
        <Rocket />
        <Telescope />
        <Star />
        <Snow />
        <Infinite />
        <Hourglass />
        <Earth />
        <Moon />
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <div className="el grid grid-flow-col grid-cols-9 grid-rows-6 justify-items-center place-items-end absolute w-full h-full pb-3 opacity-50 z-0">
          {cluster}
          {cluster}
          {cluster}
          {cluster}
          {cluster}
          {cluster}
        </div>
      </React.Fragment>
    );
  }
}

export default IconBackground;