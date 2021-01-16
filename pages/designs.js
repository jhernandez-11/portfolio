import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

class Designs extends Component {
  state = {
    arrows: {
      left: true,
      right: true,
    },
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Header tab="designs" />
          <p>Hi</p>
          <Footer
            arrowRight={this.state.arrows.right}
            arrowLeft={this.state.arrows.left}
            rightPage="/developments"
            leftPage="/"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Designs;
