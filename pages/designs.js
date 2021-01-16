import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import DesignsContent from '../components/DesignsContent'

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
