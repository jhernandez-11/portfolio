import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

class Developments extends Component {
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
          <Header tab="developments" />
          <p>Hi</p>
          <Footer
            arrowRight={this.state.arrows.right}
            arrowLeft={this.state.arrows.left}
            rightPage="/about"
            leftPage="/designs"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Developments;
