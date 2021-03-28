import React, { Component } from "react";

class LoadingAnimation extends Component {
  componentDidMount() {
    const anime = require("../../utils/anime.min.js");

    anime({
      targets: ".loading-anime h3",
      translateX: 30,
      delay: anime.stagger(100),
      direction: 'alternate',
      loop: true
    });
  }

  render() {
    return (
      <div className="loading-anime flex absolute text-white left-1/4 top-1/2 z-0 text-blue-dark">
        <h3>L</h3>
        <h3>O</h3>
        <h3>A</h3>
        <h3>D</h3>
        <h3>I</h3>
        <h3>N</h3>
        <h3>G</h3>
        <h3>.</h3>
        <h3>.</h3>
        <h3>.</h3>
      </div>
    );
  }
}

export default LoadingAnimation;