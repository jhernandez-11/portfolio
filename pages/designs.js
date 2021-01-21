import React, { Component } from "react";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import DesignsContent from '../src/components/DesignsContent/DesignsContent'

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
        <div className="global-container">
          <Header tab="designs" />
          <DesignsContent />
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
